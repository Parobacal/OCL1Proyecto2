
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
"-"                                     return 'Tk_-';
"+"                                     return 'Tk_+';
"("                                     return 'Tk_PA';
"--"                                    return 'Tk_--';
"++"                                    return 'Tk_++';
")"                                     return 'Tk_PC';
"{"                                     return 'Tk_LA';
"}"                                     return 'Tk_LC';
/*Simbolos de operaciones relacionales y logicas*/
">"                                     return 'Tk_>';
"^"                                     return 'Tk_^';
"<"                                     return 'Tk_<';
"="                                     return 'Tk_=';
"<="                                    return 'Tk_<=';
">="                                    return 'Tk_>=';
"=="                                    return 'Tk_==';
"!="                                    return 'Tk_!=';
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
([A-Za-z]|"_")+([0-9]|[A-Za-z]|"-")*    return 'id';
[0-9]+"."([0-9]+)?\b                    return 'double';
[0-9]+\b                                return 'int';
[\'][^\'\n][\']                         return 'char';
[\"]([^\'\n]|(\\\"))*[\"]               return 'string';
<<EOF>>                                 return 'EOF';
.                                       { console.error('Este es un error léxico: ' + yytext + ', en la linea: ' + yylloc.first_line + ', en la columna: ' + yylloc.first_column); }

/lex

%{
	const arbolAST	= require('./src/AST/arbol/arbolAST');
    const arrayAST	= require('./src/AST/arbol/arrayAST');
    const importar	= require('./src/AST/instrucciones/importar');
    const imprimir	= require('./src/AST/instrucciones/imprimir');
    const clase	= require('./src/AST/instrucciones/clase');
    const identificador = require('./src/AST/expresiones/identificador');
    const primitivo = require('./src/AST/expresiones/primitivo');
    const aritmetico = require('./src/AST/expresiones/aritmetico');
    const relacional = require('./src/AST/expresiones/relacional');
    const logica = require('./src/AST/expresiones/logica');
    const aritmeticoUnario = require('./src/AST/expresiones/aritmeticoUnario');
%}
/* operator associations and precedence */


%left 'Tk_||'
%left 'Tk_&&'
%left 'Tk_!=' 'Tk_=='
%left 'Tk_<' 'Tk_>' 'Tk_<=' 'Tk_>='
%left 'Tk_+' 'Tk_-'
%left 'Tk_*' 'Tk_/'
%left 'Tk_^' 'Tk_%'
%left UMINUS
%left 'Tk_++' 'Tk_--'

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
    : 'Tk_import' 'id' 'Tk_;' 
        {$2 =  new identificador.identificador($2); $$ = new importar.importar($2);}
    ;
CLASE
    : 'Tk_class' 'id' 'Tk_LA' INSTRUCCIONES 'Tk_LC'
        {$2 =  new identificador.identificador($2); $$ = new clase.clase($2,$4.getNodos());}
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
    ;
IMPRIMIR
    :   'Tk_System.' 'Tk_out.' 'Tk_println' 'Tk_PA' E 'Tk_PC' 'Tk_;'
            {$$ = new imprimir.imprimir($5);}
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
    //|   'Tk_!' E
            //{}
    |   E 'Tk_++'
            {$$ = new aritmeticoUnario.aritmeticoUnario($1, "++");}
    |   E 'Tk_--' 
            {$$ = new aritmeticoUnario.aritmeticoUnario($1, "--");}
    |   'double'
            {$$ = new primitivo.primitivo($1, "DECIMAL");}
    |   'int'
            {$$ = new primitivo.primitivo($1,"ENTERO");}
    |   'string'
            {$$ = new primitivo.primitivo($1,"CADENA");}
    |   'char'
            {$$ = new primitivo.primitivo($1,"CARACTER");}
    |   'id'
            {$$ = new identificador.identificador($1);}
    ;
