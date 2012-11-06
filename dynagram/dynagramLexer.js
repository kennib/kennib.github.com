// $ANTLR 3.1.2 ./src/dynagram.g 2012-11-06 17:31:33

var dynagramLexer = function(input, state) {
// alternate constructor @todo
// public dynagramLexer(CharStream input)
// public dynagramLexer(CharStream input, RecognizerSharedState state) {
    if (!state) {
        state = new org.antlr.runtime.RecognizerSharedState();
    }

    (function(){
    }).call(this);

    this.dfa8 = new dynagramLexer.DFA8(this);
    dynagramLexer.superclass.constructor.call(this, input, state);


};

org.antlr.lang.augmentObject(dynagramLexer, {
    INSERT_POS_PREP: 28,
    STATE: 7,
    STATE_KW: 22,
    REMOVE_PREP: 31,
    OPTION: 15,
    FOR_LOOP_PREP: 19,
    EOSS: 21,
    REMOVE: 11,
    ITEMS: 9,
    ID: 16,
    EOF: -1,
    LIST: 8,
    DEFINE: 13,
    EOC: 20,
    ACTION: 6,
    OPTION_PREP: 35,
    NUM: 29,
    INSERT_KW: 26,
    ACTIONS: 5,
    FOR_LOOP_KW: 18,
    FOR_LOOP: 4,
    WS: 38,
    INSERT: 10,
    LIST_KW: 23,
    REMOVE_KW: 30,
    REVERSE_KW: 32,
    EOS: 17,
    INSERT_PREP: 27,
    ESC_CHAR: 37,
    LIST_PREP: 24,
    REVERSE: 12,
    LIST_SEP: 25,
    DEFINE_PREP: 34,
    OPTIONS: 14,
    DEFINE_KW: 33,
    STRING: 36
});

(function(){
var HIDDEN = org.antlr.runtime.Token.HIDDEN_CHANNEL,
    EOF = org.antlr.runtime.Token.EOF;
org.antlr.lang.extend(dynagramLexer, org.antlr.runtime.Lexer, {
    INSERT_POS_PREP : 28,
    STATE : 7,
    STATE_KW : 22,
    REMOVE_PREP : 31,
    OPTION : 15,
    FOR_LOOP_PREP : 19,
    EOSS : 21,
    REMOVE : 11,
    ITEMS : 9,
    ID : 16,
    EOF : -1,
    LIST : 8,
    DEFINE : 13,
    EOC : 20,
    ACTION : 6,
    OPTION_PREP : 35,
    NUM : 29,
    INSERT_KW : 26,
    ACTIONS : 5,
    FOR_LOOP_KW : 18,
    FOR_LOOP : 4,
    WS : 38,
    INSERT : 10,
    LIST_KW : 23,
    REMOVE_KW : 30,
    REVERSE_KW : 32,
    EOS : 17,
    INSERT_PREP : 27,
    ESC_CHAR : 37,
    LIST_PREP : 24,
    REVERSE : 12,
    LIST_SEP : 25,
    DEFINE_PREP : 34,
    OPTIONS : 14,
    DEFINE_KW : 33,
    STRING : 36,
    getGrammarFileName: function() { return "./src/dynagram.g"; }
});
org.antlr.lang.augmentObject(dynagramLexer.prototype, {
    // $ANTLR start EOS
    mEOS: function()  {
        try {
            var _type = this.EOS;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // ./src/dynagram.g:88:21: ( '.' )
            // ./src/dynagram.g:88:23: '.'
            this.match('.'); 



            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "EOS",

    // $ANTLR start EOSS
    mEOSS: function()  {
        try {
            var _type = this.EOSS;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // ./src/dynagram.g:89:21: ( ';' )
            // ./src/dynagram.g:89:23: ';'
            this.match(';'); 



            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "EOSS",

    // $ANTLR start EOC
    mEOC: function()  {
        try {
            var _type = this.EOC;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // ./src/dynagram.g:90:21: ( ':' )
            // ./src/dynagram.g:90:23: ':'
            this.match(':'); 



            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "EOC",

    // $ANTLR start LIST_SEP
    mLIST_SEP: function()  {
        try {
            var _type = this.LIST_SEP;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // ./src/dynagram.g:91:21: ( ',' )
            // ./src/dynagram.g:91:23: ','
            this.match(','); 



            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "LIST_SEP",

    // $ANTLR start FOR_LOOP_KW
    mFOR_LOOP_KW: function()  {
        try {
            var _type = this.FOR_LOOP_KW;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // ./src/dynagram.g:93:21: ( 'for' )
            // ./src/dynagram.g:93:23: 'for'
            this.match("for"); 




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "FOR_LOOP_KW",

    // $ANTLR start FOR_LOOP_PREP
    mFOR_LOOP_PREP: function()  {
        try {
            var _type = this.FOR_LOOP_PREP;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // ./src/dynagram.g:94:21: ( 'in' )
            // ./src/dynagram.g:94:23: 'in'
            this.match("in"); 




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "FOR_LOOP_PREP",

    // $ANTLR start STATE_KW
    mSTATE_KW: function()  {
        try {
            var _type = this.STATE_KW;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // ./src/dynagram.g:96:21: ( 'state' )
            // ./src/dynagram.g:96:23: 'state'
            this.match("state"); 




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "STATE_KW",

    // $ANTLR start DEFINE_KW
    mDEFINE_KW: function()  {
        try {
            var _type = this.DEFINE_KW;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // ./src/dynagram.g:98:21: ( 'define' )
            // ./src/dynagram.g:98:23: 'define'
            this.match("define"); 




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "DEFINE_KW",

    // $ANTLR start DEFINE_PREP
    mDEFINE_PREP: function()  {
        try {
            var _type = this.DEFINE_PREP;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // ./src/dynagram.g:99:21: ( 'with' )
            // ./src/dynagram.g:99:23: 'with'
            this.match("with"); 




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "DEFINE_PREP",

    // $ANTLR start LIST_KW
    mLIST_KW: function()  {
        try {
            var _type = this.LIST_KW;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // ./src/dynagram.g:101:21: ( 'list' )
            // ./src/dynagram.g:101:23: 'list'
            this.match("list"); 




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "LIST_KW",

    // $ANTLR start LIST_PREP
    mLIST_PREP: function()  {
        try {
            var _type = this.LIST_PREP;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // ./src/dynagram.g:102:21: ( 'contains' )
            // ./src/dynagram.g:102:23: 'contains'
            this.match("contains"); 




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "LIST_PREP",

    // $ANTLR start INSERT_KW
    mINSERT_KW: function()  {
        try {
            var _type = this.INSERT_KW;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // ./src/dynagram.g:104:21: ( 'insert' )
            // ./src/dynagram.g:104:23: 'insert'
            this.match("insert"); 




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "INSERT_KW",

    // $ANTLR start INSERT_PREP
    mINSERT_PREP: function()  {
        try {
            var _type = this.INSERT_PREP;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // ./src/dynagram.g:105:21: ( 'into' )
            // ./src/dynagram.g:105:23: 'into'
            this.match("into"); 




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "INSERT_PREP",

    // $ANTLR start INSERT_POS_PREP
    mINSERT_POS_PREP: function()  {
        try {
            var _type = this.INSERT_POS_PREP;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // ./src/dynagram.g:106:21: ( 'at' )
            // ./src/dynagram.g:106:23: 'at'
            this.match("at"); 




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "INSERT_POS_PREP",

    // $ANTLR start REMOVE_KW
    mREMOVE_KW: function()  {
        try {
            var _type = this.REMOVE_KW;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // ./src/dynagram.g:107:21: ( 'remove' )
            // ./src/dynagram.g:107:23: 'remove'
            this.match("remove"); 




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "REMOVE_KW",

    // $ANTLR start REMOVE_PREP
    mREMOVE_PREP: function()  {
        try {
            var _type = this.REMOVE_PREP;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // ./src/dynagram.g:108:21: ( 'from' )
            // ./src/dynagram.g:108:23: 'from'
            this.match("from"); 




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "REMOVE_PREP",

    // $ANTLR start REVERSE_KW
    mREVERSE_KW: function()  {
        try {
            var _type = this.REVERSE_KW;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // ./src/dynagram.g:109:21: ( 'reverse' )
            // ./src/dynagram.g:109:23: 'reverse'
            this.match("reverse"); 




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "REVERSE_KW",

    // $ANTLR start OPTION_PREP
    mOPTION_PREP: function()  {
        try {
            var _type = this.OPTION_PREP;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // ./src/dynagram.g:111:21: ( 'as' | )
            var alt1=2;
            var LA1_0 = this.input.LA(1);

            if ( (LA1_0=='a') ) {
                alt1=1;
            }
            else {
                alt1=2;}
            switch (alt1) {
                case 1 :
                    // ./src/dynagram.g:111:23: 'as'
                    this.match("as"); 



                    break;
                case 2 :
                    // ./src/dynagram.g:111:28: 

                    break;

            }
            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "OPTION_PREP",

    // $ANTLR start ID
    mID: function()  {
        try {
            var _type = this.ID;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // ./src/dynagram.g:113:21: ( ( 'a' .. 'z' | 'A' .. 'Z' ) ( 'a' .. 'z' | 'A' .. 'Z' | '0' .. '9' | '_' )* )
            // ./src/dynagram.g:113:23: ( 'a' .. 'z' | 'A' .. 'Z' ) ( 'a' .. 'z' | 'A' .. 'Z' | '0' .. '9' | '_' )*
            if ( (this.input.LA(1)>='A' && this.input.LA(1)<='Z')||(this.input.LA(1)>='a' && this.input.LA(1)<='z') ) {
                this.input.consume();

            }
            else {
                var mse = new org.antlr.runtime.MismatchedSetException(null,this.input);
                this.recover(mse);
                throw mse;}

            // ./src/dynagram.g:113:43: ( 'a' .. 'z' | 'A' .. 'Z' | '0' .. '9' | '_' )*
            loop2:
            do {
                var alt2=2;
                var LA2_0 = this.input.LA(1);

                if ( ((LA2_0>='0' && LA2_0<='9')||(LA2_0>='A' && LA2_0<='Z')||LA2_0=='_'||(LA2_0>='a' && LA2_0<='z')) ) {
                    alt2=1;
                }


                switch (alt2) {
                case 1 :
                    // ./src/dynagram.g:
                    if ( (this.input.LA(1)>='0' && this.input.LA(1)<='9')||(this.input.LA(1)>='A' && this.input.LA(1)<='Z')||this.input.LA(1)=='_'||(this.input.LA(1)>='a' && this.input.LA(1)<='z') ) {
                        this.input.consume();

                    }
                    else {
                        var mse = new org.antlr.runtime.MismatchedSetException(null,this.input);
                        this.recover(mse);
                        throw mse;}



                    break;

                default :
                    break loop2;
                }
            } while (true);




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "ID",

    // $ANTLR start NUM
    mNUM: function()  {
        try {
            var _type = this.NUM;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // ./src/dynagram.g:114:21: ( ( '0' .. '9' )+ )
            // ./src/dynagram.g:114:23: ( '0' .. '9' )+
            // ./src/dynagram.g:114:23: ( '0' .. '9' )+
            var cnt3=0;
            loop3:
            do {
                var alt3=2;
                var LA3_0 = this.input.LA(1);

                if ( ((LA3_0>='0' && LA3_0<='9')) ) {
                    alt3=1;
                }


                switch (alt3) {
                case 1 :
                    // ./src/dynagram.g:114:23: '0' .. '9'
                    this.matchRange('0','9'); 


                    break;

                default :
                    if ( cnt3 >= 1 ) {
                        break loop3;
                    }
                        var eee = new org.antlr.runtime.EarlyExitException(3, this.input);
                        throw eee;
                }
                cnt3++;
            } while (true);




            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "NUM",

    // $ANTLR start ESC_CHAR
    mESC_CHAR: function()  {
        try {
            var _type = this.ESC_CHAR;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // ./src/dynagram.g:116:21: ( '\\\\' . )
            // ./src/dynagram.g:116:23: '\\\\' .
            this.match('\\'); 
            this.matchAny(); 



            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "ESC_CHAR",

    // $ANTLR start STRING
    mSTRING: function()  {
        try {
            var _type = this.STRING;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // ./src/dynagram.g:117:7: ( ( '\"' ( ESC_CHAR | ~ ( '\"' | '\\\\' | '\\n' ) )* '\"' | '\\'' ( ESC_CHAR | ~ ( '\\'' | '\\\\' | '\\n' ) )* '\\'' ) )
            // ./src/dynagram.g:118:4: ( '\"' ( ESC_CHAR | ~ ( '\"' | '\\\\' | '\\n' ) )* '\"' | '\\'' ( ESC_CHAR | ~ ( '\\'' | '\\\\' | '\\n' ) )* '\\'' )
            // ./src/dynagram.g:118:4: ( '\"' ( ESC_CHAR | ~ ( '\"' | '\\\\' | '\\n' ) )* '\"' | '\\'' ( ESC_CHAR | ~ ( '\\'' | '\\\\' | '\\n' ) )* '\\'' )
            var alt6=2;
            var LA6_0 = this.input.LA(1);

            if ( (LA6_0=='\"') ) {
                alt6=1;
            }
            else if ( (LA6_0=='\'') ) {
                alt6=2;
            }
            else {
                var nvae =
                    new org.antlr.runtime.NoViableAltException("", 6, 0, this.input);

                throw nvae;
            }
            switch (alt6) {
                case 1 :
                    // ./src/dynagram.g:118:5: '\"' ( ESC_CHAR | ~ ( '\"' | '\\\\' | '\\n' ) )* '\"'
                    this.match('\"'); 
                    // ./src/dynagram.g:118:10: ( ESC_CHAR | ~ ( '\"' | '\\\\' | '\\n' ) )*
                    loop4:
                    do {
                        var alt4=3;
                        var LA4_0 = this.input.LA(1);

                        if ( (LA4_0=='\\') ) {
                            alt4=1;
                        }
                        else if ( ((LA4_0>='\u0000' && LA4_0<='\t')||(LA4_0>='\u000B' && LA4_0<='!')||(LA4_0>='#' && LA4_0<='[')||(LA4_0>=']' && LA4_0<='\uFFFF')) ) {
                            alt4=2;
                        }


                        switch (alt4) {
                        case 1 :
                            // ./src/dynagram.g:118:11: ESC_CHAR
                            this.mESC_CHAR(); 


                            break;
                        case 2 :
                            // ./src/dynagram.g:118:22: ~ ( '\"' | '\\\\' | '\\n' )
                            if ( (this.input.LA(1)>='\u0000' && this.input.LA(1)<='\t')||(this.input.LA(1)>='\u000B' && this.input.LA(1)<='!')||(this.input.LA(1)>='#' && this.input.LA(1)<='[')||(this.input.LA(1)>=']' && this.input.LA(1)<='\uFFFF') ) {
                                this.input.consume();

                            }
                            else {
                                var mse = new org.antlr.runtime.MismatchedSetException(null,this.input);
                                this.recover(mse);
                                throw mse;}



                            break;

                        default :
                            break loop4;
                        }
                    } while (true);

                    this.match('\"'); 


                    break;
                case 2 :
                    // ./src/dynagram.g:119:5: '\\'' ( ESC_CHAR | ~ ( '\\'' | '\\\\' | '\\n' ) )* '\\''
                    this.match('\''); 
                    // ./src/dynagram.g:119:10: ( ESC_CHAR | ~ ( '\\'' | '\\\\' | '\\n' ) )*
                    loop5:
                    do {
                        var alt5=3;
                        var LA5_0 = this.input.LA(1);

                        if ( (LA5_0=='\\') ) {
                            alt5=1;
                        }
                        else if ( ((LA5_0>='\u0000' && LA5_0<='\t')||(LA5_0>='\u000B' && LA5_0<='&')||(LA5_0>='(' && LA5_0<='[')||(LA5_0>=']' && LA5_0<='\uFFFF')) ) {
                            alt5=2;
                        }


                        switch (alt5) {
                        case 1 :
                            // ./src/dynagram.g:119:11: ESC_CHAR
                            this.mESC_CHAR(); 


                            break;
                        case 2 :
                            // ./src/dynagram.g:119:22: ~ ( '\\'' | '\\\\' | '\\n' )
                            if ( (this.input.LA(1)>='\u0000' && this.input.LA(1)<='\t')||(this.input.LA(1)>='\u000B' && this.input.LA(1)<='&')||(this.input.LA(1)>='(' && this.input.LA(1)<='[')||(this.input.LA(1)>=']' && this.input.LA(1)<='\uFFFF') ) {
                                this.input.consume();

                            }
                            else {
                                var mse = new org.antlr.runtime.MismatchedSetException(null,this.input);
                                this.recover(mse);
                                throw mse;}



                            break;

                        default :
                            break loop5;
                        }
                    } while (true);

                    this.match('\''); 


                    break;

            }

            this.setText(this.getText().substring(1, this.getText().length-1));



            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "STRING",

    // $ANTLR start WS
    mWS: function()  {
        try {
            var _type = this.WS;
            var _channel = org.antlr.runtime.BaseRecognizer.DEFAULT_TOKEN_CHANNEL;
            // ./src/dynagram.g:125:4: ( ( ' ' | '\\t' | '\\r' | '\\n' )+ )
            // ./src/dynagram.g:125:6: ( ' ' | '\\t' | '\\r' | '\\n' )+
            // ./src/dynagram.g:125:6: ( ' ' | '\\t' | '\\r' | '\\n' )+
            var cnt7=0;
            loop7:
            do {
                var alt7=2;
                var LA7_0 = this.input.LA(1);

                if ( ((LA7_0>='\t' && LA7_0<='\n')||LA7_0=='\r'||LA7_0==' ') ) {
                    alt7=1;
                }


                switch (alt7) {
                case 1 :
                    // ./src/dynagram.g:
                    if ( (this.input.LA(1)>='\t' && this.input.LA(1)<='\n')||this.input.LA(1)=='\r'||this.input.LA(1)==' ' ) {
                        this.input.consume();

                    }
                    else {
                        var mse = new org.antlr.runtime.MismatchedSetException(null,this.input);
                        this.recover(mse);
                        throw mse;}



                    break;

                default :
                    if ( cnt7 >= 1 ) {
                        break loop7;
                    }
                        var eee = new org.antlr.runtime.EarlyExitException(7, this.input);
                        throw eee;
                }
                cnt7++;
            } while (true);

            _channel=HIDDEN;



            this.state.type = _type;
            this.state.channel = _channel;
        }
        finally {
        }
    },
    // $ANTLR end "WS",

    mTokens: function() {
        // ./src/dynagram.g:1:8: ( EOS | EOSS | EOC | LIST_SEP | FOR_LOOP_KW | FOR_LOOP_PREP | STATE_KW | DEFINE_KW | DEFINE_PREP | LIST_KW | LIST_PREP | INSERT_KW | INSERT_PREP | INSERT_POS_PREP | REMOVE_KW | REMOVE_PREP | REVERSE_KW | OPTION_PREP | ID | NUM | ESC_CHAR | STRING | WS )
        var alt8=23;
        alt8 = this.dfa8.predict(this.input);
        switch (alt8) {
            case 1 :
                // ./src/dynagram.g:1:10: EOS
                this.mEOS(); 


                break;
            case 2 :
                // ./src/dynagram.g:1:14: EOSS
                this.mEOSS(); 


                break;
            case 3 :
                // ./src/dynagram.g:1:19: EOC
                this.mEOC(); 


                break;
            case 4 :
                // ./src/dynagram.g:1:23: LIST_SEP
                this.mLIST_SEP(); 


                break;
            case 5 :
                // ./src/dynagram.g:1:32: FOR_LOOP_KW
                this.mFOR_LOOP_KW(); 


                break;
            case 6 :
                // ./src/dynagram.g:1:44: FOR_LOOP_PREP
                this.mFOR_LOOP_PREP(); 


                break;
            case 7 :
                // ./src/dynagram.g:1:58: STATE_KW
                this.mSTATE_KW(); 


                break;
            case 8 :
                // ./src/dynagram.g:1:67: DEFINE_KW
                this.mDEFINE_KW(); 


                break;
            case 9 :
                // ./src/dynagram.g:1:77: DEFINE_PREP
                this.mDEFINE_PREP(); 


                break;
            case 10 :
                // ./src/dynagram.g:1:89: LIST_KW
                this.mLIST_KW(); 


                break;
            case 11 :
                // ./src/dynagram.g:1:97: LIST_PREP
                this.mLIST_PREP(); 


                break;
            case 12 :
                // ./src/dynagram.g:1:107: INSERT_KW
                this.mINSERT_KW(); 


                break;
            case 13 :
                // ./src/dynagram.g:1:117: INSERT_PREP
                this.mINSERT_PREP(); 


                break;
            case 14 :
                // ./src/dynagram.g:1:129: INSERT_POS_PREP
                this.mINSERT_POS_PREP(); 


                break;
            case 15 :
                // ./src/dynagram.g:1:145: REMOVE_KW
                this.mREMOVE_KW(); 


                break;
            case 16 :
                // ./src/dynagram.g:1:155: REMOVE_PREP
                this.mREMOVE_PREP(); 


                break;
            case 17 :
                // ./src/dynagram.g:1:167: REVERSE_KW
                this.mREVERSE_KW(); 


                break;
            case 18 :
                // ./src/dynagram.g:1:178: OPTION_PREP
                this.mOPTION_PREP(); 


                break;
            case 19 :
                // ./src/dynagram.g:1:190: ID
                this.mID(); 


                break;
            case 20 :
                // ./src/dynagram.g:1:193: NUM
                this.mNUM(); 


                break;
            case 21 :
                // ./src/dynagram.g:1:197: ESC_CHAR
                this.mESC_CHAR(); 


                break;
            case 22 :
                // ./src/dynagram.g:1:206: STRING
                this.mSTRING(); 


                break;
            case 23 :
                // ./src/dynagram.g:1:213: WS
                this.mWS(); 


                break;

        }

    }

}, true); // important to pass true to overwrite default implementations

org.antlr.lang.augmentObject(dynagramLexer, {
    DFA8_eotS:
        "\u0001\u000e\u0004\uffff\u0009\u000f\u0006\uffff\u0002\u000f\u0001"+
    "\u0023\u0005\u000f\u0001\u0029\u0001\u000e\u0001\u000f\u0001\u002c\u0003"+
    "\u000f\u0001\uffff\u0005\u000f\u0001\uffff\u0002\u000f\u0001\uffff\u0001"+
    "\u0037\u0001\u000f\u0001\u0039\u0002\u000f\u0001\u003c\u0001\u003d\u0003"+
    "\u000f\u0001\uffff\u0001\u000f\u0001\uffff\u0001\u0042\u0001\u000f\u0002"+
    "\uffff\u0003\u000f\u0001\u0047\u0001\uffff\u0001\u0048\u0001\u000f\u0001"+
    "\u004a\u0001\u000f\u0002\uffff\u0001\u000f\u0001\uffff\u0001\u004d\u0001"+
    "\u004e\u0002\uffff",
    DFA8_eofS:
        "\u004f\uffff",
    DFA8_minS:
        "\u0001\u0009\u0004\uffff\u0001\u006f\u0001\u006e\u0001\u0074\u0001"+
    "\u0065\u0002\u0069\u0001\u006f\u0001\u0073\u0001\u0065\u0006\uffff\u0001"+
    "\u0072\u0001\u006f\u0001\u0030\u0001\u0061\u0001\u0066\u0001\u0074\u0001"+
    "\u0073\u0001\u006e\u0002\u0030\u0001\u006d\u0001\u0030\u0001\u006d\u0001"+
    "\u0065\u0001\u006f\u0001\uffff\u0001\u0074\u0001\u0069\u0001\u0068\u0002"+
    "\u0074\u0001\uffff\u0001\u006f\u0001\u0065\u0001\uffff\u0001\u0030\u0001"+
    "\u0072\u0001\u0030\u0001\u0065\u0001\u006e\u0002\u0030\u0001\u0061\u0001"+
    "\u0076\u0001\u0072\u0001\uffff\u0001\u0074\u0001\uffff\u0001\u0030\u0001"+
    "\u0065\u0002\uffff\u0001\u0069\u0001\u0065\u0001\u0073\u0001\u0030\u0001"+
    "\uffff\u0001\u0030\u0001\u006e\u0001\u0030\u0001\u0065\u0002\uffff\u0001"+
    "\u0073\u0001\uffff\u0002\u0030\u0002\uffff",
    DFA8_maxS:
        "\u0001\u007a\u0004\uffff\u0001\u0072\u0001\u006e\u0001\u0074\u0001"+
    "\u0065\u0002\u0069\u0001\u006f\u0001\u0074\u0001\u0065\u0006\uffff\u0001"+
    "\u0072\u0001\u006f\u0001\u007a\u0001\u0061\u0001\u0066\u0001\u0074\u0001"+
    "\u0073\u0001\u006e\u0002\u007a\u0001\u0076\u0001\u007a\u0001\u006d\u0001"+
    "\u0065\u0001\u006f\u0001\uffff\u0001\u0074\u0001\u0069\u0001\u0068\u0002"+
    "\u0074\u0001\uffff\u0001\u006f\u0001\u0065\u0001\uffff\u0001\u007a\u0001"+
    "\u0072\u0001\u007a\u0001\u0065\u0001\u006e\u0002\u007a\u0001\u0061\u0001"+
    "\u0076\u0001\u0072\u0001\uffff\u0001\u0074\u0001\uffff\u0001\u007a\u0001"+
    "\u0065\u0002\uffff\u0001\u0069\u0001\u0065\u0001\u0073\u0001\u007a\u0001"+
    "\uffff\u0001\u007a\u0001\u006e\u0001\u007a\u0001\u0065\u0002\uffff\u0001"+
    "\u0073\u0001\uffff\u0002\u007a\u0002\uffff",
    DFA8_acceptS:
        "\u0001\uffff\u0001\u0001\u0001\u0002\u0001\u0003\u0001\u0004\u0009"+
    "\uffff\u0001\u0012\u0001\u0013\u0001\u0014\u0001\u0015\u0001\u0016\u0001"+
    "\u0017\u000f\uffff\u0001\u0006\u0005\uffff\u0001\u000e\u0002\uffff\u0001"+
    "\u0005\u000a\uffff\u0001\u0010\u0001\uffff\u0001\u000d\u0002\uffff\u0001"+
    "\u0009\u0001\u000a\u0004\uffff\u0001\u0007\u0004\uffff\u0001\u000c\u0001"+
    "\u0008\u0001\uffff\u0001\u000f\u0002\uffff\u0001\u0011\u0001\u000b",
    DFA8_specialS:
        "\u004f\uffff}>",
    DFA8_transitionS: [
            "\u0002\u0013\u0002\uffff\u0001\u0013\u0012\uffff\u0001\u0013"+
            "\u0001\uffff\u0001\u0012\u0004\uffff\u0001\u0012\u0004\uffff"+
            "\u0001\u0004\u0001\uffff\u0001\u0001\u0001\uffff\u000a\u0010"+
            "\u0001\u0003\u0001\u0002\u0005\uffff\u001a\u000f\u0001\uffff"+
            "\u0001\u0011\u0004\uffff\u0001\u000c\u0001\u000f\u0001\u000b"+
            "\u0001\u0008\u0001\u000f\u0001\u0005\u0002\u000f\u0001\u0006"+
            "\u0002\u000f\u0001\u000a\u0005\u000f\u0001\u000d\u0001\u0007"+
            "\u0003\u000f\u0001\u0009\u0003\u000f",
            "",
            "",
            "",
            "",
            "\u0001\u0014\u0002\uffff\u0001\u0015",
            "\u0001\u0016",
            "\u0001\u0017",
            "\u0001\u0018",
            "\u0001\u0019",
            "\u0001\u001a",
            "\u0001\u001b",
            "\u0001\u001d\u0001\u001c",
            "\u0001\u001e",
            "",
            "",
            "",
            "",
            "",
            "",
            "\u0001\u001f",
            "\u0001\u0020",
            "\u000a\u000f\u0007\uffff\u001a\u000f\u0004\uffff\u0001\u000f"+
            "\u0001\uffff\u0012\u000f\u0001\u0021\u0001\u0022\u0006\u000f",
            "\u0001\u0024",
            "\u0001\u0025",
            "\u0001\u0026",
            "\u0001\u0027",
            "\u0001\u0028",
            "\u000a\u000f\u0007\uffff\u001a\u000f\u0004\uffff\u0001\u000f"+
            "\u0001\uffff\u001a\u000f",
            "\u000a\u000f\u0007\uffff\u001a\u000f\u0004\uffff\u0001\u000f"+
            "\u0001\uffff\u001a\u000f",
            "\u0001\u002a\u0008\uffff\u0001\u002b",
            "\u000a\u000f\u0007\uffff\u001a\u000f\u0004\uffff\u0001\u000f"+
            "\u0001\uffff\u001a\u000f",
            "\u0001\u002d",
            "\u0001\u002e",
            "\u0001\u002f",
            "",
            "\u0001\u0030",
            "\u0001\u0031",
            "\u0001\u0032",
            "\u0001\u0033",
            "\u0001\u0034",
            "",
            "\u0001\u0035",
            "\u0001\u0036",
            "",
            "\u000a\u000f\u0007\uffff\u001a\u000f\u0004\uffff\u0001\u000f"+
            "\u0001\uffff\u001a\u000f",
            "\u0001\u0038",
            "\u000a\u000f\u0007\uffff\u001a\u000f\u0004\uffff\u0001\u000f"+
            "\u0001\uffff\u001a\u000f",
            "\u0001\u003a",
            "\u0001\u003b",
            "\u000a\u000f\u0007\uffff\u001a\u000f\u0004\uffff\u0001\u000f"+
            "\u0001\uffff\u001a\u000f",
            "\u000a\u000f\u0007\uffff\u001a\u000f\u0004\uffff\u0001\u000f"+
            "\u0001\uffff\u001a\u000f",
            "\u0001\u003e",
            "\u0001\u003f",
            "\u0001\u0040",
            "",
            "\u0001\u0041",
            "",
            "\u000a\u000f\u0007\uffff\u001a\u000f\u0004\uffff\u0001\u000f"+
            "\u0001\uffff\u001a\u000f",
            "\u0001\u0043",
            "",
            "",
            "\u0001\u0044",
            "\u0001\u0045",
            "\u0001\u0046",
            "\u000a\u000f\u0007\uffff\u001a\u000f\u0004\uffff\u0001\u000f"+
            "\u0001\uffff\u001a\u000f",
            "",
            "\u000a\u000f\u0007\uffff\u001a\u000f\u0004\uffff\u0001\u000f"+
            "\u0001\uffff\u001a\u000f",
            "\u0001\u0049",
            "\u000a\u000f\u0007\uffff\u001a\u000f\u0004\uffff\u0001\u000f"+
            "\u0001\uffff\u001a\u000f",
            "\u0001\u004b",
            "",
            "",
            "\u0001\u004c",
            "",
            "\u000a\u000f\u0007\uffff\u001a\u000f\u0004\uffff\u0001\u000f"+
            "\u0001\uffff\u001a\u000f",
            "\u000a\u000f\u0007\uffff\u001a\u000f\u0004\uffff\u0001\u000f"+
            "\u0001\uffff\u001a\u000f",
            "",
            ""
    ]
});

org.antlr.lang.augmentObject(dynagramLexer, {
    DFA8_eot:
        org.antlr.runtime.DFA.unpackEncodedString(dynagramLexer.DFA8_eotS),
    DFA8_eof:
        org.antlr.runtime.DFA.unpackEncodedString(dynagramLexer.DFA8_eofS),
    DFA8_min:
        org.antlr.runtime.DFA.unpackEncodedStringToUnsignedChars(dynagramLexer.DFA8_minS),
    DFA8_max:
        org.antlr.runtime.DFA.unpackEncodedStringToUnsignedChars(dynagramLexer.DFA8_maxS),
    DFA8_accept:
        org.antlr.runtime.DFA.unpackEncodedString(dynagramLexer.DFA8_acceptS),
    DFA8_special:
        org.antlr.runtime.DFA.unpackEncodedString(dynagramLexer.DFA8_specialS),
    DFA8_transition: (function() {
        var a = [],
            i,
            numStates = dynagramLexer.DFA8_transitionS.length;
        for (i=0; i<numStates; i++) {
            a.push(org.antlr.runtime.DFA.unpackEncodedString(dynagramLexer.DFA8_transitionS[i]));
        }
        return a;
    })()
});

dynagramLexer.DFA8 = function(recognizer) {
    this.recognizer = recognizer;
    this.decisionNumber = 8;
    this.eot = dynagramLexer.DFA8_eot;
    this.eof = dynagramLexer.DFA8_eof;
    this.min = dynagramLexer.DFA8_min;
    this.max = dynagramLexer.DFA8_max;
    this.accept = dynagramLexer.DFA8_accept;
    this.special = dynagramLexer.DFA8_special;
    this.transition = dynagramLexer.DFA8_transition;
};

org.antlr.lang.extend(dynagramLexer.DFA8, org.antlr.runtime.DFA, {
    getDescription: function() {
        return "1:1: Tokens : ( EOS | EOSS | EOC | LIST_SEP | FOR_LOOP_KW | FOR_LOOP_PREP | STATE_KW | DEFINE_KW | DEFINE_PREP | LIST_KW | LIST_PREP | INSERT_KW | INSERT_PREP | INSERT_POS_PREP | REMOVE_KW | REMOVE_PREP | REVERSE_KW | OPTION_PREP | ID | NUM | ESC_CHAR | STRING | WS );";
    },
    dummy: null
});
 
})();