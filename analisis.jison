

/* descripcion: Parsea archivos de entrada java. */

/* Análisis Léxico: Expresiones regulares del lenguaje */
%lex
%%

//COMENTARIOS
("//".*\r\n)|("//".*\n)|("//".*\r)  /*Comentario unilinea*/
"/*""/"*([^*/]|[^*]"/"|"*"[^/])*"*""*""*/"  /*Comentario multilinea*/

//PALABRAS RESERVADAS
/*Sentencias de control*/
"if"                                    return 'Tk_if';
"else"                                  return 'Tk_else';
"while"                                 return 'Tk_while';
"do"                                    return 'Tk_do';
"switch"                                return 'Tk_switch';
"for"                                   return 'Tk_for';
"System."                                return 'Tk_System.';
"out."                                   return 'Tk_out.';
"println"                               return 'Tk_println';
/*Metodos y clases*/
"void"                                  return 'Tk_void';
"class"                                 return 'Tk_class';
"import"                                return 'Tk_import';
"case"                                  return 'Tk_case';
"default"                               return 'Tk_case';
"return"                                return 'Tk_return';
/*Tipos de datos y funciones*/
"int"                                   return 'Tk_int';
"double"                                return 'Tk_double';
"String"                                return 'Tk_String';
"char"                                  return 'Tk_char';
"boolean"                               return 'Tk_boolean';
"int"                                   return 'Tk_int';
"true"                                  return 'Tk_true';
"false"                                 return 'Tk_false';
/*Simbolos de operaciones aritmeticas*/
"*"                                     return 'Tk_*';
"/"                                     return 'Tk_/';
"--"                                    return 'Tk_--';
"++"                                    return 'Tk_++';
"-"                                     return 'Tk_-';
"+"                                     return 'Tk_+';
"("                                     return 'Tk_PA';
")"                                     return 'Tk_PC';
"{"                                     return 'Tk_LA';
"}"                                     return 'Tk_LC';
/*Simbolos de operaciones relacionales y logicas*/
"<="                                    return 'Tk_<=';
">="                                    return 'Tk_>=';
">"                                     return 'Tk_>';
"<"                                     return 'Tk_<';
"=="                                    return 'Tk_==';
"!="                                    return 'Tk_!=';
"^"                                     return 'Tk_^';
"="                                     return 'Tk_=';
"&&"                                    return 'Tk_&&';
"||"                                    return 'Tk_||';
"!"                                     return 'Tk_!';
"%"                                     return 'Tk_%';
/*Simbolos generales*/
","                                     return 'Tk_,';
";"                                     return 'Tk_;';
":"                                     return 'Tk_:';


//TIPOS DE DATOS E IDENTIFICADORES
\s+                   /* skip whitespace */

[\"]([^\"\n]|(\\\"))*[\"]               return 'string';
[\'][^\'\n][\']                         return 'char';
["_"A-Za-z]+["_"0-9A-Za-z]*             return 'id';
[0-9]+"."([0-9]+)?\b                    return 'double';
[0-9]+\b                                return 'int';



<<EOF>>                                 return 'EOF';
.                                       { console.error('Este es un error léxico: ' + yytext + ', en la linea: ' + yylloc.first_line + ', en la columna: ' + yylloc.first_column); }

/lex

%{
    const arbolAST	= require('./src/AST/arbol/arbolAST');
    const arrayAST	= require('./src/AST/arbol/arrayAST');
    const importar	= require('./src/AST/instrucciones/importar');
    const imprimir	= require('./src/AST/instrucciones/imprimir');
    const clase	= require('./src/AST/instrucciones/clase');
    const declaracion	= require('./src/AST/instrucciones/declaracion');
    const llamada	= require('./src/AST/instrucciones/llamada');
    const funcion	= require('./src/AST/instrucciones/funcion');
    const asignacion	= require('./src/AST/instrucciones/asignacion');
    const instruccionWHILE	= require('./src/AST/instrucciones/instruccionWHILE');
    const instruccionDOWHILE	= require('./src/AST/instrucciones/instruccionDOWHILE');
    const instruccionIF	= require('./src/AST/instrucciones/instruccionIF');
    const instruccionELSEIF	= require('./src/AST/instrucciones/instruccionELSEIF');
    const instruccionELSE	= require('./src/AST/instrucciones/instruccionELSE');
    const identificador = require('./src/AST/expresiones/identificador');
    const primitivo = require('./src/AST/expresiones/primitivo');
    const aritmetico = require('./src/AST/expresiones/aritmetico');
    const relacional = require('./src/AST/expresiones/relacional');
    const logica = require('./src/AST/expresiones/logica');
    const aritmeticoUnario = require('./src/AST/expresiones/aritmeticoUnario');
    const logicaUnario = require('./src/AST/expresiones/logicaUnario');
%}
/* operator associations and precedence */


%left 'Tk_||'
%left 'Tk_&&'
%left 'Tk_!=' 'Tk_=='
%left 'Tk_<' 'Tk_>' 'Tk_<=' 'Tk_>='
%left 'Tk_+' 'Tk_-'
%left 'Tk_*' 'Tk_/'
%left 'Tk_^' 'Tk_%'
%left 'Tk_!'
%right UMINUS
%left 'Tk_++' 'Tk_--'
%left 'Tk_PA' 'Tk_PC'

%start INICIO

%% /* language grammar */
INICIO
        : DEFINICIONES EOF
                {return new arbolAST.arbolAST($1.getNodos());}   
        ;
DEFINICIONES
        : DEF_IMPORTAR DEF_CLASE
                {$$ = $1; $$.insertarArray($2.getNodos());}
        | DEF_CLASE
                {$$ = $1;}
        
        ;
DEF_IMPORTAR
        : DEF_IMPORTAR IMPORTAR
                {$$ = $1; $$.insertar($2);}
        | IMPORTAR
                {$$ = new arrayAST.arrayAST(); $$.insertar($1);}
        ;
DEF_CLASE
        : DEF_CLASE CLASE
                {$$ = $1; $$.insertar($2);}
        | CLASE
                {$$ = new arrayAST.arrayAST(); $$.insertar($1);}
        ;
IMPORTAR 
        : 'Tk_import' IDE 'Tk_;' 
                {$$ = new importar.importar($2);} 
        ;
CLASE
        : 'Tk_class' IDE 'Tk_LA' INSTRUCCIONES 'Tk_LC'
                { $$ = new clase.clase($2,$4.getNodos());}
        | 'Tk_class' IDE 'Tk_LA' 'Tk_LC'
                { $$ = new clase.clase($2,null);}
        ;
IDE
        : 'id'
                {$$ = new identificador.identificador($1);}
        ;
INSTRUCCIONES
        : INSTRUCCIONES INSTRUCCION 
                {$$ = $1; $$.insertar($2);}
        | INSTRUCCION
                {$$ = new arrayAST.arrayAST(); $$.insertar($1);}
        ;
INSTRUCCION
        : IMPRIMIR
                {$$ = $1}
        | DECLARACION
                {$$ = $1}
        | LLAMADA
                {$$ = $1}
        | ASIGNACION
                {$$ = $1}
        | IF
                {$$ = $1}
        | WHILE
                {$$ = $1}
        | DOWHILE
                {$$ = $1}
        | FUNCION
                {$$ = $1}
        | error 
                { console.error('Este es un error sintáctico: ' + yytext + ', en la linea: ' + this._$.first_line + ', en la columna: ' + this._$.first_column); }
        ;
IMPRIMIR
        :   'Tk_System.' 'Tk_out.' 'Tk_println' 'Tk_PA' E 'Tk_PC' 'Tk_;'
                {$$ = new imprimir.imprimir($5);}
        ;
DECLARACION
        : TIPO_DATO LISTA_ID 'Tk_=' E 'Tk_;'
                {$$ = new declaracion.declaracion($1,$2.getNodos(),$4);}
        | TIPO_DATO LISTA_ID 'Tk_;'
                {$$ = new declaracion.declaracion($1,$2.getNodos(),null);}
        ;
TIPO_DATO
        : 'Tk_int'
                {$$ = $1}
        | 'Tk_double'
                {$$ = $1}
        | 'Tk_char'
                {$$ = $1}
        | 'Tk_String'
                {$$ = $1}
        | 'Tk_boolean'
                {$$ = $1}
        ;

LISTA_ID 
        : LISTA_ID 'Tk_,' IDE
                {$$ = $1; $$.insertar($3);}
        | IDE
                {$$ = new arrayAST.arrayAST(); $$.insertar($1);}
        ;
LLAMADA
        : IDE 'Tk_PA' PARAMETROS_LLAMADA 'Tk_PC' 'Tk_;'
                {$$ = new llamada.llamada($1,$3.getNodos());}
        | IDE 'Tk_PA' 'Tk_PC' 'Tk_;'
                {$$ = new llamada.llamada($1,null);}
        ;
PARAMETROS_LLAMADA
        :       PARAMETROS_LLAMADA 'Tk_,' E
                {$$ = $1; $$.insertar($3);}
        |       E 
                {$$ = new arrayAST.arrayAST(); $$.insertar($1);}
        ;
ASIGNACION
        :       IDE 'Tk_=' E 'Tk_;'
                {$$ = new asignacion.asignacion($1,$3);}
        ;
IF
        :      'Tk_if' 'Tk_PA' E 'Tk_PC' 'Tk_LA' INSTRUCCIONES 'Tk_LC' METODOS_ELSEIF 'Tk_else' 'Tk_LA' INSTRUCCIONES 'Tk_LC'
                        {$$ = new instruccionIF.instruccionIF($3,$6.getNodos(),null,$9);}
        |       'Tk_if' 'Tk_PA' E 'Tk_PC' 'Tk_LA' 'Tk_LC' METODOS_ELSEIF 'Tk_else' 'Tk_LA' INSTRUCCIONES 'Tk_LC'
                        {$$ = new instruccionIF.instruccionIF($3,$6.getNodos(),null,$9);}
        |       'Tk_if' 'Tk_PA' E 'Tk_PC' 'Tk_LA' INSTRUCCIONES 'Tk_LC' METODOS_ELSEIF 'Tk_else' 'Tk_LA' 'Tk_LC'
                        {$$ = new instruccionIF.instruccionIF($3,$6.getNodos(),null,$9);}
        |       'Tk_if' 'Tk_PA' E 'Tk_PC' 'Tk_LA' 'Tk_LC' METODOS_ELSEIF 'Tk_else' 'Tk_LA' 'Tk_LC'
                        {$$ = new instruccionIF.instruccionIF($3,$6.getNodos(),null,$9);}
        |       'Tk_if' 'Tk_PA' E 'Tk_PC' 'Tk_LA' INSTRUCCIONES 'Tk_LC' 'Tk_else' 'Tk_LA' INSTRUCCIONES 'Tk_LC'
                        {$$ = new instruccionIF.instruccionIF($3,$6.getNodos(),null,$9);}
        |       'Tk_if' 'Tk_PA' E 'Tk_PC' 'Tk_LA' 'Tk_LC' 'Tk_else' 'Tk_LA' INSTRUCCIONES 'Tk_LC'
                        {$$ = new instruccionIF.instruccionIF($3,$6.getNodos(),null,$9);}
        |       'Tk_if' 'Tk_PA' E 'Tk_PC' 'Tk_LA' INSTRUCCIONES 'Tk_LC' 'Tk_else' 'Tk_LA' 'Tk_LC'
                        {$$ = new instruccionIF.instruccionIF($3,$6.getNodos(),null,$9);}
        |       'Tk_if' 'Tk_PA' E 'Tk_PC' 'Tk_LA' 'Tk_LC' 'Tk_else' 'Tk_LA' 'Tk_LC'
                        {$$ = new instruccionIF.instruccionIF($3,$6.getNodos(),null,$9);}
        |       'Tk_if' 'Tk_PA' E 'Tk_PC' 'Tk_LA' INSTRUCCIONES 'Tk_LC'
                        {$$ = new instruccionIF.instruccionIF($3,$6.getNodos(),null,null);}
        |       'Tk_if' 'Tk_PA' E 'Tk_PC' 'Tk_LA' 'Tk_LC'
                        {$$ = new instruccionIF.instruccionIF($3,null,null,null);}
        ;
METODOS_ELSEIF
        :       METODOS_ELSEIF ELSEIF
                        {$$ = $1; $$.insertar($2);}
        |       ELSEIF
                        {$$ = new arrayAST.arrayAST(); $$.insertar($1);}
        ;
ELSEIF
        :       'Tk_else' 'Tk_if' 'Tk_PA' E 'Tk_PC' 'Tk_LA' INSTRUCCIONES 'Tk_LC'
                        {$$ = new instruccionELSEIF.instruccionELSEIF($4,$7.getNodos());}
        |       'Tk_else' 'Tk_if' 'Tk_PA' E 'Tk_PC' 'Tk_LA' 'Tk_LC'
                        {$$ = new instruccionELSEIF.instruccionELSEIF($4,null);}
        ;
WHILE
        :       'Tk_while' 'Tk_PA' E 'Tk_PC' 'Tk_LA' INSTRUCCIONES 'Tk_LC'
                        {$$ = new instruccionWHILE.instruccionWHILE($3,$6.getNodos());}
        |       'Tk_while' 'Tk_PA' E 'Tk_PC' 'Tk_LA' 'Tk_LC'
                        {$$ = new instruccionWHILE.instruccionWHILE($3,null);}
        ;
DOWHILE 
        :       'Tk_do' 'Tk_LA' INSTRUCCIONES 'Tk_LC' 'Tk_while' 'Tk_PA' E 'Tk_PC' 'Tk_;'
                        {$$ = new instruccionDOWHILE.instruccionDOWHILE($3.getNodos(),$7);}
        |       'Tk_do' 'Tk_LA' 'Tk_LC' 'Tk_while' 'Tk_PA' E 'Tk_PC' 'Tk_;'
                        {$$ = new instruccionDOWHILE.instruccionDOWHILE(null,$6);}
        ;
FUNCION    
        :       TIPO_DATO IDE 'Tk_PA' PARAMETROS_FM 'Tk_PC' 'Tk_LA' INSTRUCCIONES 'Tk_LC'
                        {$$ = new funcion.funcion($1,$2,$4.getNodos(),$7.getNodos());}
        |       TIPO_DATO IDE 'Tk_PA' 'Tk_PC' 'Tk_LA' INSTRUCCIONES 'Tk_LC'
                        {$$ = new funcion.funcion($1,$2,null,$6.getNodos());}
        |       TIPO_DATO IDE 'Tk_PA' PARAMETROS_FM 'Tk_PC' 'Tk_LA' 'Tk_LC'
                        {$$ = new funcion.funcion($1,$2,$4.getNodos(),null);}
        |       TIPO_DATO IDE 'Tk_PA' 'Tk_PC' 'Tk_LA' 'Tk_LC'
                        {$$ = new funcion.funcion($1,$2,null,null);}
        ;
PARAMETROS_FM
        :       PARAMETROS_FM 'Tk_,' PARAMETRO
                        {$$ = $1; $$.insertar($3);}
        |       PARAMETRO 
                        {$$ = new arrayAST.arrayAST(); $$.insertar($1);}
        ;
PARAMETRO
        :       TIPO_DATO 'id'
                        {$$ = new primitivo.primitivo($2,$1);}
        ;
E
    :   E 'Tk_>' E
            {$$ = new relacional.relacional($1,$3,">");}
    |   E 'Tk_<' E
            {$$ = new relacional.relacional($1,$3,"<");}
    |   E 'Tk_>=' E
            {$$ = new relacional.relacional($1,$3,">=");}
    |   E 'Tk_<=' E
            {$$ = new relacional.relacional($1,$3,"<=");}
    |   E 'Tk_==' E
            {$$ = new relacional.relacional($1,$3,"==");}
    |   E 'Tk_!=' E
            {$$ = new relacional.relacional($1,$3,"!=");}
    |   E 'Tk_&&' E
            {$$ = new logica.logica($1,$3,"&&");}
    |   E 'Tk_||' E
            {$$ = new logica.logica($1,$3,"||");}
    |   E 'Tk_+' E
            {$$ = new aritmetico.aritmetico($1,$3,"+");}
    |   E 'Tk_-' E
            {$$ = new aritmetico.aritmetico($1,$3,"-");}
    |   E 'Tk_*' E
            {$$ = new aritmetico.aritmetico($1,$3,"*");}
    |   E 'Tk_/' E
            {$$ = new aritmetico.aritmetico($1,$3,"/");}
    |   E 'Tk_^' E
            {$$ = new aritmetico.aritmetico($1,$3,"^");}
    |   E 'Tk_%' E
            {$$ = new aritmetico.aritmetico($1,$3,"%");}
    |   'Tk_-' E %prec UMINUS
            {$$ = new aritmeticoUnario.aritmeticoUnario($2, "-");}
    |   'Tk_!' E
            {$$ = new logicaUnario.logicaUnario($2,"!");}
    |   E 'Tk_++'
            {$$ = new aritmeticoUnario.aritmeticoUnario($1, "++");}
    |   E 'Tk_--' 
            {$$ = new aritmeticoUnario.aritmeticoUnario($1, "--");}
    |   'Tk_PA' E 'Tk_PC'
            {$$ = $2;}
    |   'id' 'Tk_PA' PARAMETROS_LLAMADA 'Tk_PC'
            {$1 = new identificador.identificador($1); $$ = new llamada.llamada($1,$3.getNodos());}
    |   'id' 'Tk_PA' 'Tk_PC'
            {$1 = new identificador.identificador($1); $$ = new llamada.llamada($1,null);}
    |   'double'
            {$$ = new primitivo.primitivo($1, "double");}
    |   'int'
            {$$ = new primitivo.primitivo($1,"int");}
    |   'string'
            {$$ = new primitivo.primitivo($1,"string");}
    |   'char'
            {$$ = new primitivo.primitivo($1,"char");}
    |   'Tk_true'
           {$$ = new primitivo.primitivo($1,"boolean");}
    |   'Tk_false'
            {$$ = new primitivo.primitivo($1,"boolean");}
    |   'id'
            {$$ = new identificador.identificador($1);}
    ;
