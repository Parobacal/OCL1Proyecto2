
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
"System"                                return 'Tk_System';
"out"                                   return 'Tk_out';
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
"("                                     return 'Tk_(';
")"                                     return 'Tk_)';
"{"                                     return 'Tk_{';
"}"                                     return 'Tk_}';
/*Simbolos de operaciones relacionales y logicas*/
">"                                     return 'Tk_>';
"<"                                     return 'Tk_<';
"="                                     return 'Tk_=';
"<="                                    return 'Tk_<=';
">="                                    return 'Tk_>=';
"=="                                    return 'Tk_==';
"!="                                    return 'Tk_!=';
"&&"                                    return 'Tk_&&';
"||"                                    return 'Tk_||';
"!"                                     return 'Tk_!';
/*Simbolos generales*/
","                                     return 'Tk_,';
";"                                     return 'Tk_;';
":"                                     return 'Tk_:';
"."                                     return 'Tk_:';


//TIPOS DE DATOS E IDENTIFICADORES
\s+                   /* skip whitespace */
([A-Za-z]|"_")+([0-9]|[A-Za-z]|"-")*    return 'id';
[0-9]+                                  return 'int';
[0-9]+"."[0-9]+                         return 'double';
[\'][^\'\n][\']                         return 'char';
[\"]([^\'\n]|(\\\"))*[\"]               return 'string';
<<EOF>>                                 return 'EOF';
.                                       { console.error('Este es un error léxico: ' + yytext + ', en la linea: ' + yylloc.first_line + ', en la columna: ' + yylloc.first_column); }

/lex

%{
	const arbolAST	= require('./src/AST/arbol/arbolAST');
    const arrayAST	= require('./src/AST/arbol/arrayAST');
    const nodoAST	= require('./src/AST/arbol/nodoAST');
    const importar	= require('./src/AST/instrucciones/importar');
    const identificador = require('./src/AST/expresiones/identificador');
%}
/* operator associations and precedence */

%left 'Tk_||'
%left 'Tk_&&'
%left 'Tk_!=' 'Tk_=='
%left 'Tk_<' 'Tk_>' 'Tk_<=' 'Tk_>='
%left 'Tk_+' 'Tk_-'
%left 'Tk_*' 'Tk_/'
%left 'Tk_^'
%right 'Tk_!'
%right 'Tk_%'
%left UMINUS

%start INICIO

%% /* language grammar */
INICIO
    : DEFINICION EOF
        {return new arbolAST.arbolAST($1.getNodos());}    
    ;
DEFINICION
    : IMPORT 
        {$$ = new arrayAST.arrayAST(); $$.insertar($1);}
    ;
IMPORT 
    : 'Tk_import' 'id' 'Tk_;' 
        {$2 =  new identificador.identificador($2); $$ = new importar.importar($2);}
    ;
