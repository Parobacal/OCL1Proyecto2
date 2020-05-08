/* parser generated by jison 0.4.18 */
/*
  Returns a Parser object of the following structure:

  Parser: {
    yy: {}
  }

  Parser.prototype: {
    yy: {},
    trace: function(),
    symbols_: {associative list: name ==> number},
    terminals_: {associative list: number ==> name},
    productions_: [...],
    performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate, $$, _$),
    table: [...],
    defaultActions: {...},
    parseError: function(str, hash),
    parse: function(input),

    lexer: {
        EOF: 1,
        parseError: function(str, hash),
        setInput: function(input),
        input: function(),
        unput: function(str),
        more: function(),
        less: function(n),
        pastInput: function(),
        upcomingInput: function(),
        showPosition: function(),
        test_match: function(regex_match_array, rule_index),
        next: function(),
        lex: function(),
        begin: function(condition),
        popState: function(),
        _currentRules: function(),
        topState: function(),
        pushState: function(condition),

        options: {
            ranges: boolean           (optional: true ==> token location info will include a .range[] member)
            flex: boolean             (optional: true ==> flex-like lexing behaviour where the rules are tested exhaustively to find the longest match)
            backtrack_lexer: boolean  (optional: true ==> lexer regexes are tested in order and for each matching regex the action code is invoked; the lexer terminates the scan when a token is returned by the action code)
        },

        performAction: function(yy, yy_, $avoiding_name_collisions, YY_START),
        rules: [...],
        conditions: {associative list: name ==> set},
    }
  }


  token location info (@$, _$, etc.): {
    first_line: n,
    last_line: n,
    first_column: n,
    last_column: n,
    range: [start_number, end_number]       (where the numbers are indexes into the input string, regular zero-based)
  }


  the parseError function receives a 'hash' object with these members for lexer and parser errors: {
    text:        (matched text)
    token:       (the produced terminal token, if any)
    line:        (yylineno)
  }
  while parser (grammar) errors will also provide these members, i.e. parser errors deliver a superset of attributes: {
    loc:         (yylloc)
    expected:    (string describing the set of expected tokens)
    recoverable: (boolean: TRUE when the parser has a error recovery rule available for this particular error)
  }
*/
var analisis = (function(){
var o=function(k,v,o,l){for(o=o||{},l=k.length;l--;o[k[l]]=v);return o},$V0=[1,7],$V1=[1,8],$V2=[10,13],$V3=[5,13],$V4=[1,20],$V5=[16,19],$V6=[1,32],$V7=[1,27],$V8=[1,28],$V9=[1,29],$Va=[1,30],$Vb=[1,31],$Vc=[1,34],$Vd=[1,35],$Ve=[1,36],$Vf=[1,37],$Vg=[1,38],$Vh=[1,39],$Vi=[1,40],$Vj=[1,42],$Vk=[1,43],$Vl=[1,44],$Vm=[1,45],$Vn=[1,46],$Vo=[1,47],$Vp=[1,48],$Vq=[1,49],$Vr=[24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40],$Vs=[24,25,26,27,28,29,30,31,32,33,34,35,36,37,38],$Vt=[24,25,26,27,28,29,30,31,32],$Vu=[24,29,30,31,32],$Vv=[24,25,26,27,28,29,30,31,32,33,34],$Vw=[24,25,26,27,28,29,30,31,32,33,34,35,36];
var parser = {trace: function trace () { },
yy: {},
symbols_: {"error":2,"INICIO":3,"DEFINICIONES":4,"EOF":5,"DEF_IMPORTAR":6,"DEF_CLASE":7,"IMPORTAR":8,"CLASE":9,"Tk_import":10,"id":11,"Tk_;":12,"Tk_class":13,"Tk_LA":14,"INSTRUCCIONES":15,"Tk_LC":16,"INSTRUCCION":17,"IMPRIMIR":18,"Tk_System.":19,"Tk_out.":20,"Tk_println":21,"Tk_PA":22,"E":23,"Tk_PC":24,"Tk_>":25,"Tk_<":26,"Tk_>=":27,"Tk_<=":28,"Tk_==":29,"Tk_!=":30,"Tk_&&":31,"Tk_||":32,"Tk_+":33,"Tk_-":34,"Tk_*":35,"Tk_/":36,"Tk_^":37,"Tk_%":38,"Tk_++":39,"Tk_--":40,"double":41,"int":42,"string":43,"char":44,"$accept":0,"$end":1},
terminals_: {2:"error",5:"EOF",10:"Tk_import",11:"id",12:"Tk_;",13:"Tk_class",14:"Tk_LA",16:"Tk_LC",19:"Tk_System.",20:"Tk_out.",21:"Tk_println",22:"Tk_PA",24:"Tk_PC",25:"Tk_>",26:"Tk_<",27:"Tk_>=",28:"Tk_<=",29:"Tk_==",30:"Tk_!=",31:"Tk_&&",32:"Tk_||",33:"Tk_+",34:"Tk_-",35:"Tk_*",36:"Tk_/",37:"Tk_^",38:"Tk_%",39:"Tk_++",40:"Tk_--",41:"double",42:"int",43:"string",44:"char"},
productions_: [0,[3,2],[4,2],[4,1],[6,2],[6,1],[7,2],[7,1],[8,3],[9,5],[15,2],[15,1],[17,1],[18,7],[23,3],[23,3],[23,3],[23,3],[23,3],[23,3],[23,3],[23,3],[23,3],[23,3],[23,3],[23,3],[23,3],[23,3],[23,2],[23,2],[23,2],[23,1],[23,1],[23,1],[23,1],[23,1]],
performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate /* action[1] */, $$ /* vstack */, _$ /* lstack */) {
/* this == yyval */

var $0 = $$.length - 1;
switch (yystate) {
case 1:
return new arbolAST.arbolAST($$[$0-1].getNodos());
break;
case 2:
this.$ = $$[$0-1]; this.$.insertarArray($$[$0].getNodos());
break;
case 3:
this.$ = $$[$0];
break;
case 4: case 6: case 10:
this.$ = $$[$0-1]; this.$.insertar($$[$0]);
break;
case 5: case 7: case 11:
this.$ = new arrayAST.arrayAST(); this.$.insertar($$[$0]);
break;
case 8:
$$[$0-1] =  new identificador.identificador($$[$0-1]); this.$ = new importar.importar($$[$0-1]);
break;
case 9:
$$[$0-3] =  new identificador.identificador($$[$0-3]); this.$ = new clase.clase($$[$0-3],$$[$0-1].getNodos());
break;
case 12:
this.$ = $$[$0]
break;
case 13:
this.$ = new imprimir.imprimir($$[$0-2]);
break;
case 14:
this.$ = new relacional.relacional($$[$0-2],$$[$0],">");
break;
case 15:
this.$ = new relacional.relacional($$[$0-2],$$[$0],"<");
break;
case 16:
this.$ = new relacional.relacional($$[$0-2],$$[$0],">=");
break;
case 17:
this.$ = new relacional.relacional($$[$0-2],$$[$0],"<=");
break;
case 18:
this.$ = new relacional.relacional($$[$0-2],$$[$0],"==");
break;
case 19:
this.$ = new relacional.relacional($$[$0-2],$$[$0],"!=");
break;
case 20:
this.$ = new logica.logica($$[$0-2],$$[$0],"&&");
break;
case 21:
this.$ = new logica.logica($$[$0-2],$$[$0],"||");
break;
case 22:
this.$ = new aritmetico.aritmetico($$[$0-2],$$[$0],"+");
break;
case 23:
this.$ = new aritmetico.aritmetico($$[$0-2],$$[$0],"-");
break;
case 24:
this.$ = new aritmetico.aritmetico($$[$0-2],$$[$0],"*");
break;
case 25:
this.$ = new aritmetico.aritmetico($$[$0-2],$$[$0],"/");
break;
case 26:
this.$ = new aritmetico.aritmetico($$[$0-2],$$[$0],"^");
break;
case 27:
this.$ = new aritmetico.aritmetico($$[$0-2],$$[$0],"%");
break;
case 28:
this.$ = new aritmeticoUnario.aritmeticoUnario($$[$0], "-");
break;
case 29:
this.$ = new aritmeticoUnario.aritmeticoUnario($$[$0-1], "++");
break;
case 30:
this.$ = new aritmeticoUnario.aritmeticoUnario($$[$0-1], "--");
break;
case 31:
this.$ = new primitivo.primitivo($$[$0], "DECIMAL");
break;
case 32:
this.$ = new primitivo.primitivo($$[$0],"ENTERO");
break;
case 33:
this.$ = new primitivo.primitivo($$[$0],"CADENA");
break;
case 34:
this.$ = new primitivo.primitivo($$[$0],"CARACTER");
break;
case 35:
this.$ = new identificador.identificador($$[$0]);
break;
}
},
table: [{3:1,4:2,6:3,7:4,8:5,9:6,10:$V0,13:$V1},{1:[3]},{5:[1,9]},{7:10,8:11,9:6,10:$V0,13:$V1},{5:[2,3],9:12,13:$V1},o($V2,[2,5]),o($V3,[2,7]),{11:[1,13]},{11:[1,14]},{1:[2,1]},{5:[2,2],9:12,13:$V1},o($V2,[2,4]),o($V3,[2,6]),{12:[1,15]},{14:[1,16]},o($V2,[2,8]),{15:17,17:18,18:19,19:$V4},{16:[1,21],17:22,18:19,19:$V4},o($V5,[2,11]),o($V5,[2,12]),{20:[1,23]},o($V3,[2,9]),o($V5,[2,10]),{21:[1,24]},{22:[1,25]},{11:$V6,23:26,34:$V7,41:$V8,42:$V9,43:$Va,44:$Vb},{24:[1,33],25:$Vc,26:$Vd,27:$Ve,28:$Vf,29:$Vg,30:$Vh,31:$Vi,32:[1,41],33:$Vj,34:$Vk,35:$Vl,36:$Vm,37:$Vn,38:$Vo,39:$Vp,40:$Vq},{11:$V6,23:50,34:$V7,41:$V8,42:$V9,43:$Va,44:$Vb},o($Vr,[2,31]),o($Vr,[2,32]),o($Vr,[2,33]),o($Vr,[2,34]),o($Vr,[2,35]),{12:[1,51]},{11:$V6,23:52,34:$V7,41:$V8,42:$V9,43:$Va,44:$Vb},{11:$V6,23:53,34:$V7,41:$V8,42:$V9,43:$Va,44:$Vb},{11:$V6,23:54,34:$V7,41:$V8,42:$V9,43:$Va,44:$Vb},{11:$V6,23:55,34:$V7,41:$V8,42:$V9,43:$Va,44:$Vb},{11:$V6,23:56,34:$V7,41:$V8,42:$V9,43:$Va,44:$Vb},{11:$V6,23:57,34:$V7,41:$V8,42:$V9,43:$Va,44:$Vb},{11:$V6,23:58,34:$V7,41:$V8,42:$V9,43:$Va,44:$Vb},{11:$V6,23:59,34:$V7,41:$V8,42:$V9,43:$Va,44:$Vb},{11:$V6,23:60,34:$V7,41:$V8,42:$V9,43:$Va,44:$Vb},{11:$V6,23:61,34:$V7,41:$V8,42:$V9,43:$Va,44:$Vb},{11:$V6,23:62,34:$V7,41:$V8,42:$V9,43:$Va,44:$Vb},{11:$V6,23:63,34:$V7,41:$V8,42:$V9,43:$Va,44:$Vb},{11:$V6,23:64,34:$V7,41:$V8,42:$V9,43:$Va,44:$Vb},{11:$V6,23:65,34:$V7,41:$V8,42:$V9,43:$Va,44:$Vb},o($Vr,[2,29]),o($Vr,[2,30]),o($Vs,[2,28],{39:$Vp,40:$Vq}),o($V5,[2,13]),o($Vt,[2,14],{33:$Vj,34:$Vk,35:$Vl,36:$Vm,37:$Vn,38:$Vo,39:$Vp,40:$Vq}),o($Vt,[2,15],{33:$Vj,34:$Vk,35:$Vl,36:$Vm,37:$Vn,38:$Vo,39:$Vp,40:$Vq}),o($Vt,[2,16],{33:$Vj,34:$Vk,35:$Vl,36:$Vm,37:$Vn,38:$Vo,39:$Vp,40:$Vq}),o($Vt,[2,17],{33:$Vj,34:$Vk,35:$Vl,36:$Vm,37:$Vn,38:$Vo,39:$Vp,40:$Vq}),o($Vu,[2,18],{25:$Vc,26:$Vd,27:$Ve,28:$Vf,33:$Vj,34:$Vk,35:$Vl,36:$Vm,37:$Vn,38:$Vo,39:$Vp,40:$Vq}),o($Vu,[2,19],{25:$Vc,26:$Vd,27:$Ve,28:$Vf,33:$Vj,34:$Vk,35:$Vl,36:$Vm,37:$Vn,38:$Vo,39:$Vp,40:$Vq}),o([24,31,32],[2,20],{25:$Vc,26:$Vd,27:$Ve,28:$Vf,29:$Vg,30:$Vh,33:$Vj,34:$Vk,35:$Vl,36:$Vm,37:$Vn,38:$Vo,39:$Vp,40:$Vq}),o([24,32],[2,21],{25:$Vc,26:$Vd,27:$Ve,28:$Vf,29:$Vg,30:$Vh,31:$Vi,33:$Vj,34:$Vk,35:$Vl,36:$Vm,37:$Vn,38:$Vo,39:$Vp,40:$Vq}),o($Vv,[2,22],{35:$Vl,36:$Vm,37:$Vn,38:$Vo,39:$Vp,40:$Vq}),o($Vv,[2,23],{35:$Vl,36:$Vm,37:$Vn,38:$Vo,39:$Vp,40:$Vq}),o($Vw,[2,24],{37:$Vn,38:$Vo,39:$Vp,40:$Vq}),o($Vw,[2,25],{37:$Vn,38:$Vo,39:$Vp,40:$Vq}),o($Vs,[2,26],{39:$Vp,40:$Vq}),o($Vs,[2,27],{39:$Vp,40:$Vq})],
defaultActions: {9:[2,1]},
parseError: function parseError (str, hash) {
    if (hash.recoverable) {
        this.trace(str);
    } else {
        var error = new Error(str);
        error.hash = hash;
        throw error;
    }
},
parse: function parse(input) {
    var self = this, stack = [0], tstack = [], vstack = [null], lstack = [], table = this.table, yytext = '', yylineno = 0, yyleng = 0, recovering = 0, TERROR = 2, EOF = 1;
    var args = lstack.slice.call(arguments, 1);
    var lexer = Object.create(this.lexer);
    var sharedState = { yy: {} };
    for (var k in this.yy) {
        if (Object.prototype.hasOwnProperty.call(this.yy, k)) {
            sharedState.yy[k] = this.yy[k];
        }
    }
    lexer.setInput(input, sharedState.yy);
    sharedState.yy.lexer = lexer;
    sharedState.yy.parser = this;
    if (typeof lexer.yylloc == 'undefined') {
        lexer.yylloc = {};
    }
    var yyloc = lexer.yylloc;
    lstack.push(yyloc);
    var ranges = lexer.options && lexer.options.ranges;
    if (typeof sharedState.yy.parseError === 'function') {
        this.parseError = sharedState.yy.parseError;
    } else {
        this.parseError = Object.getPrototypeOf(this).parseError;
    }
    function popStack(n) {
        stack.length = stack.length - 2 * n;
        vstack.length = vstack.length - n;
        lstack.length = lstack.length - n;
    }
    _token_stack:
        var lex = function () {
            var token;
            token = lexer.lex() || EOF;
            if (typeof token !== 'number') {
                token = self.symbols_[token] || token;
            }
            return token;
        };
    var symbol, preErrorSymbol, state, action, a, r, yyval = {}, p, len, newState, expected;
    while (true) {
        state = stack[stack.length - 1];
        if (this.defaultActions[state]) {
            action = this.defaultActions[state];
        } else {
            if (symbol === null || typeof symbol == 'undefined') {
                symbol = lex();
            }
            action = table[state] && table[state][symbol];
        }
                    if (typeof action === 'undefined' || !action.length || !action[0]) {
                var errStr = '';
                expected = [];
                for (p in table[state]) {
                    if (this.terminals_[p] && p > TERROR) {
                        expected.push('\'' + this.terminals_[p] + '\'');
                    }
                }
                if (lexer.showPosition) {
                    errStr = 'Parse error on line ' + (yylineno + 1) + ':\n' + lexer.showPosition() + '\nExpecting ' + expected.join(', ') + ', got \'' + (this.terminals_[symbol] || symbol) + '\'';
                } else {
                    errStr = 'Parse error on line ' + (yylineno + 1) + ': Unexpected ' + (symbol == EOF ? 'end of input' : '\'' + (this.terminals_[symbol] || symbol) + '\'');
                }
                this.parseError(errStr, {
                    text: lexer.match,
                    token: this.terminals_[symbol] || symbol,
                    line: lexer.yylineno,
                    loc: yyloc,
                    expected: expected
                });
            }
        if (action[0] instanceof Array && action.length > 1) {
            throw new Error('Parse Error: multiple actions possible at state: ' + state + ', token: ' + symbol);
        }
        switch (action[0]) {
        case 1:
            stack.push(symbol);
            vstack.push(lexer.yytext);
            lstack.push(lexer.yylloc);
            stack.push(action[1]);
            symbol = null;
            if (!preErrorSymbol) {
                yyleng = lexer.yyleng;
                yytext = lexer.yytext;
                yylineno = lexer.yylineno;
                yyloc = lexer.yylloc;
                if (recovering > 0) {
                    recovering--;
                }
            } else {
                symbol = preErrorSymbol;
                preErrorSymbol = null;
            }
            break;
        case 2:
            len = this.productions_[action[1]][1];
            yyval.$ = vstack[vstack.length - len];
            yyval._$ = {
                first_line: lstack[lstack.length - (len || 1)].first_line,
                last_line: lstack[lstack.length - 1].last_line,
                first_column: lstack[lstack.length - (len || 1)].first_column,
                last_column: lstack[lstack.length - 1].last_column
            };
            if (ranges) {
                yyval._$.range = [
                    lstack[lstack.length - (len || 1)].range[0],
                    lstack[lstack.length - 1].range[1]
                ];
            }
            r = this.performAction.apply(yyval, [
                yytext,
                yyleng,
                yylineno,
                sharedState.yy,
                action[1],
                vstack,
                lstack
            ].concat(args));
            if (typeof r !== 'undefined') {
                return r;
            }
            if (len) {
                stack = stack.slice(0, -1 * len * 2);
                vstack = vstack.slice(0, -1 * len);
                lstack = lstack.slice(0, -1 * len);
            }
            stack.push(this.productions_[action[1]][0]);
            vstack.push(yyval.$);
            lstack.push(yyval._$);
            newState = table[stack[stack.length - 2]][stack[stack.length - 1]];
            stack.push(newState);
            break;
        case 3:
            return true;
        }
    }
    return true;
}};

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
/* generated by jison-lex 0.3.4 */
var lexer = (function(){
var lexer = ({

EOF:1,

parseError:function parseError(str, hash) {
        if (this.yy.parser) {
            this.yy.parser.parseError(str, hash);
        } else {
            throw new Error(str);
        }
    },

// resets the lexer, sets new input
setInput:function (input, yy) {
        this.yy = yy || this.yy || {};
        this._input = input;
        this._more = this._backtrack = this.done = false;
        this.yylineno = this.yyleng = 0;
        this.yytext = this.matched = this.match = '';
        this.conditionStack = ['INITIAL'];
        this.yylloc = {
            first_line: 1,
            first_column: 0,
            last_line: 1,
            last_column: 0
        };
        if (this.options.ranges) {
            this.yylloc.range = [0,0];
        }
        this.offset = 0;
        return this;
    },

// consumes and returns one char from the input
input:function () {
        var ch = this._input[0];
        this.yytext += ch;
        this.yyleng++;
        this.offset++;
        this.match += ch;
        this.matched += ch;
        var lines = ch.match(/(?:\r\n?|\n).*/g);
        if (lines) {
            this.yylineno++;
            this.yylloc.last_line++;
        } else {
            this.yylloc.last_column++;
        }
        if (this.options.ranges) {
            this.yylloc.range[1]++;
        }

        this._input = this._input.slice(1);
        return ch;
    },

// unshifts one char (or a string) into the input
unput:function (ch) {
        var len = ch.length;
        var lines = ch.split(/(?:\r\n?|\n)/g);

        this._input = ch + this._input;
        this.yytext = this.yytext.substr(0, this.yytext.length - len);
        //this.yyleng -= len;
        this.offset -= len;
        var oldLines = this.match.split(/(?:\r\n?|\n)/g);
        this.match = this.match.substr(0, this.match.length - 1);
        this.matched = this.matched.substr(0, this.matched.length - 1);

        if (lines.length - 1) {
            this.yylineno -= lines.length - 1;
        }
        var r = this.yylloc.range;

        this.yylloc = {
            first_line: this.yylloc.first_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.first_column,
            last_column: lines ?
                (lines.length === oldLines.length ? this.yylloc.first_column : 0)
                 + oldLines[oldLines.length - lines.length].length - lines[0].length :
              this.yylloc.first_column - len
        };

        if (this.options.ranges) {
            this.yylloc.range = [r[0], r[0] + this.yyleng - len];
        }
        this.yyleng = this.yytext.length;
        return this;
    },

// When called from action, caches matched text and appends it on next action
more:function () {
        this._more = true;
        return this;
    },

// When called from action, signals the lexer that this rule fails to match the input, so the next matching rule (regex) should be tested instead.
reject:function () {
        if (this.options.backtrack_lexer) {
            this._backtrack = true;
        } else {
            return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).\n' + this.showPosition(), {
                text: "",
                token: null,
                line: this.yylineno
            });

        }
        return this;
    },

// retain first n characters of the match
less:function (n) {
        this.unput(this.match.slice(n));
    },

// displays already matched input, i.e. for error messages
pastInput:function () {
        var past = this.matched.substr(0, this.matched.length - this.match.length);
        return (past.length > 20 ? '...':'') + past.substr(-20).replace(/\n/g, "");
    },

// displays upcoming input, i.e. for error messages
upcomingInput:function () {
        var next = this.match;
        if (next.length < 20) {
            next += this._input.substr(0, 20-next.length);
        }
        return (next.substr(0,20) + (next.length > 20 ? '...' : '')).replace(/\n/g, "");
    },

// displays the character position where the lexing error occurred, i.e. for error messages
showPosition:function () {
        var pre = this.pastInput();
        var c = new Array(pre.length + 1).join("-");
        return pre + this.upcomingInput() + "\n" + c + "^";
    },

// test the lexed token: return FALSE when not a match, otherwise return token
test_match:function(match, indexed_rule) {
        var token,
            lines,
            backup;

        if (this.options.backtrack_lexer) {
            // save context
            backup = {
                yylineno: this.yylineno,
                yylloc: {
                    first_line: this.yylloc.first_line,
                    last_line: this.last_line,
                    first_column: this.yylloc.first_column,
                    last_column: this.yylloc.last_column
                },
                yytext: this.yytext,
                match: this.match,
                matches: this.matches,
                matched: this.matched,
                yyleng: this.yyleng,
                offset: this.offset,
                _more: this._more,
                _input: this._input,
                yy: this.yy,
                conditionStack: this.conditionStack.slice(0),
                done: this.done
            };
            if (this.options.ranges) {
                backup.yylloc.range = this.yylloc.range.slice(0);
            }
        }

        lines = match[0].match(/(?:\r\n?|\n).*/g);
        if (lines) {
            this.yylineno += lines.length;
        }
        this.yylloc = {
            first_line: this.yylloc.last_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.last_column,
            last_column: lines ?
                         lines[lines.length - 1].length - lines[lines.length - 1].match(/\r?\n?/)[0].length :
                         this.yylloc.last_column + match[0].length
        };
        this.yytext += match[0];
        this.match += match[0];
        this.matches = match;
        this.yyleng = this.yytext.length;
        if (this.options.ranges) {
            this.yylloc.range = [this.offset, this.offset += this.yyleng];
        }
        this._more = false;
        this._backtrack = false;
        this._input = this._input.slice(match[0].length);
        this.matched += match[0];
        token = this.performAction.call(this, this.yy, this, indexed_rule, this.conditionStack[this.conditionStack.length - 1]);
        if (this.done && this._input) {
            this.done = false;
        }
        if (token) {
            return token;
        } else if (this._backtrack) {
            // recover context
            for (var k in backup) {
                this[k] = backup[k];
            }
            return false; // rule action called reject() implying the next rule should be tested instead.
        }
        return false;
    },

// return next match in input
next:function () {
        if (this.done) {
            return this.EOF;
        }
        if (!this._input) {
            this.done = true;
        }

        var token,
            match,
            tempMatch,
            index;
        if (!this._more) {
            this.yytext = '';
            this.match = '';
        }
        var rules = this._currentRules();
        for (var i = 0; i < rules.length; i++) {
            tempMatch = this._input.match(this.rules[rules[i]]);
            if (tempMatch && (!match || tempMatch[0].length > match[0].length)) {
                match = tempMatch;
                index = i;
                if (this.options.backtrack_lexer) {
                    token = this.test_match(tempMatch, rules[i]);
                    if (token !== false) {
                        return token;
                    } else if (this._backtrack) {
                        match = false;
                        continue; // rule action called reject() implying a rule MISmatch.
                    } else {
                        // else: this is a lexer rule which consumes input without producing a token (e.g. whitespace)
                        return false;
                    }
                } else if (!this.options.flex) {
                    break;
                }
            }
        }
        if (match) {
            token = this.test_match(match, rules[index]);
            if (token !== false) {
                return token;
            }
            // else: this is a lexer rule which consumes input without producing a token (e.g. whitespace)
            return false;
        }
        if (this._input === "") {
            return this.EOF;
        } else {
            return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. Unrecognized text.\n' + this.showPosition(), {
                text: "",
                token: null,
                line: this.yylineno
            });
        }
    },

// return next match that has a token
lex:function lex () {
        var r = this.next();
        if (r) {
            return r;
        } else {
            return this.lex();
        }
    },

// activates a new lexer condition state (pushes the new lexer condition state onto the condition stack)
begin:function begin (condition) {
        this.conditionStack.push(condition);
    },

// pop the previously active lexer condition state off the condition stack
popState:function popState () {
        var n = this.conditionStack.length - 1;
        if (n > 0) {
            return this.conditionStack.pop();
        } else {
            return this.conditionStack[0];
        }
    },

// produce the lexer rule set which is active for the currently active lexer condition state
_currentRules:function _currentRules () {
        if (this.conditionStack.length && this.conditionStack[this.conditionStack.length - 1]) {
            return this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules;
        } else {
            return this.conditions["INITIAL"].rules;
        }
    },

// return the currently active lexer condition state; when an index argument is provided it produces the N-th previous condition state, if available
topState:function topState (n) {
        n = this.conditionStack.length - 1 - Math.abs(n || 0);
        if (n >= 0) {
            return this.conditionStack[n];
        } else {
            return "INITIAL";
        }
    },

// alias for begin(condition)
pushState:function pushState (condition) {
        this.begin(condition);
    },

// return the number of states currently on the stack
stateStackSize:function stateStackSize() {
        return this.conditionStack.length;
    },
options: {},
performAction: function anonymous(yy,yy_,$avoiding_name_collisions,YY_START) {
var YYSTATE=YY_START;
switch($avoiding_name_collisions) {
case 0:/*Comentario unilinea*/
break;
case 1:/*Comentario multilinea*/
break;
case 2:return 'Tk_if';
break;
case 3:return 'Tk_else';
break;
case 4:return 'Tk_while';
break;
case 5:return 'Tk_do';
break;
case 6:return 'Tk_switch';
break;
case 7:return 'Tk_for';
break;
case 8:return 19;
break;
case 9:return 20;
break;
case 10:return 21;
break;
case 11:return 'Tk_void';
break;
case 12:return 13;
break;
case 13:return 10;
break;
case 14:return 'Tk_case';
break;
case 15:return 'Tk_case';
break;
case 16:return 'Tk_return';
break;
case 17:return 'Tk_int';
break;
case 18:return 'Tk_double';
break;
case 19:return 'Tk_String';
break;
case 20:return 'Tk_char';
break;
case 21:return 'Tk_boolean';
break;
case 22:return 'Tk_int';
break;
case 23:return 'Tk_true';
break;
case 24:return 'Tk_false';
break;
case 25:return 35;
break;
case 26:return 36;
break;
case 27:return 34;
break;
case 28:return 33;
break;
case 29:return 22;
break;
case 30:return 40;
break;
case 31:return 39;
break;
case 32:return 24;
break;
case 33:return 14;
break;
case 34:return 16;
break;
case 35:return 25;
break;
case 36:return 37;
break;
case 37:return 26;
break;
case 38:return 'Tk_=';
break;
case 39:return 28;
break;
case 40:return 27;
break;
case 41:return 29;
break;
case 42:return 30;
break;
case 43:return 31;
break;
case 44:return 32;
break;
case 45:return 'Tk_!';
break;
case 46:return 38;
break;
case 47:return 'Tk_,';
break;
case 48:return 12;
break;
case 49:return 'Tk_:';
break;
case 50:/* skip whitespace */
break;
case 51:return 11;
break;
case 52:return 41;
break;
case 53:return 42;
break;
case 54:return 44;
break;
case 55:return 43;
break;
case 56:return 5;
break;
case 57: console.error('Este es un error léxico: ' + yy_.yytext + ', en la linea: ' + yy_.yylloc.first_line + ', en la columna: ' + yy_.yylloc.first_column); 
break;
}
},
rules: [/^(?:(\/\/.*\r\n)|(\/\/.*\n)|(\/\/.*\r))/,/^(?:\/\*\/*([^*/]|[^*]\/|\*[^/])*\*\*\*\/)/,/^(?:if\b)/,/^(?:else\b)/,/^(?:while\b)/,/^(?:do\b)/,/^(?:switch\b)/,/^(?:for\b)/,/^(?:System\.)/,/^(?:out\.)/,/^(?:println\b)/,/^(?:void\b)/,/^(?:class\b)/,/^(?:import\b)/,/^(?:case\b)/,/^(?:default\b)/,/^(?:return\b)/,/^(?:int\b)/,/^(?:double\b)/,/^(?:String\b)/,/^(?:char\b)/,/^(?:boolean\b)/,/^(?:int\b)/,/^(?:true\b)/,/^(?:false\b)/,/^(?:\*)/,/^(?:\/)/,/^(?:-)/,/^(?:\+)/,/^(?:\()/,/^(?:--)/,/^(?:\+\+)/,/^(?:\))/,/^(?:\{)/,/^(?:\})/,/^(?:>)/,/^(?:\^)/,/^(?:<)/,/^(?:=)/,/^(?:<=)/,/^(?:>=)/,/^(?:==)/,/^(?:!=)/,/^(?:&&)/,/^(?:\|\|)/,/^(?:!)/,/^(?:%)/,/^(?:,)/,/^(?:;)/,/^(?::)/,/^(?:\s+)/,/^(?:([A-Za-z]|_)+([0-9]|[A-Za-z]|-)*)/,/^(?:[0-9]+\.([0-9]+)?\b)/,/^(?:[0-9]+\b)/,/^(?:[\'][^\'\n][\'])/,/^(?:[\"]([^\'\n]|(\\"))*[\"])/,/^(?:$)/,/^(?:.)/],
conditions: {"INITIAL":{"rules":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57],"inclusive":true}}
});
return lexer;
})();
parser.lexer = lexer;
function Parser () {
  this.yy = {};
}
Parser.prototype = parser;parser.Parser = Parser;
return new Parser;
})();


if (typeof require !== 'undefined' && typeof exports !== 'undefined') {
exports.parser = analisis;
exports.Parser = analisis.Parser;
exports.parse = function () { return analisis.parse.apply(analisis, arguments); };
exports.main = function commonjsMain (args) {
    if (!args[1]) {
        console.log('Usage: '+args[0]+' FILE');
        process.exit(1);
    }
    var source = require('fs').readFileSync(require('path').normalize(args[1]), "utf8");
    return exports.parser.parse(source);
};
if (typeof module !== 'undefined' && require.main === module) {
  exports.main(process.argv.slice(1));
}
}