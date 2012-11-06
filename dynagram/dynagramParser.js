// $ANTLR 3.1.2 ./src/dynagram.g 2012-11-06 17:31:33

var dynagramParser = function(input, state) {
    if (!state) {
        state = new org.antlr.runtime.RecognizerSharedState();
    }

    (function(){
    }).call(this);

    dynagramParser.superclass.constructor.call(this, input, state);


         

    /* @todo only create adaptor if output=AST */
    this.adaptor = new org.antlr.runtime.tree.CommonTreeAdaptor();

};

org.antlr.lang.augmentObject(dynagramParser, {
    INSERT_POS_PREP: 28,
    STATE: 7,
    REMOVE_PREP: 31,
    STATE_KW: 22,
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
    FOR_LOOP: 4,
    FOR_LOOP_KW: 18,
    WS: 38,
    LIST_KW: 23,
    INSERT: 10,
    REVERSE_KW: 32,
    REMOVE_KW: 30,
    EOS: 17,
    ESC_CHAR: 37,
    INSERT_PREP: 27,
    LIST_PREP: 24,
    REVERSE: 12,
    LIST_SEP: 25,
    DEFINE_PREP: 34,
    OPTIONS: 14,
    STRING: 36,
    DEFINE_KW: 33
});

(function(){
// public class variables
var INSERT_POS_PREP= 28,
    STATE= 7,
    REMOVE_PREP= 31,
    STATE_KW= 22,
    OPTION= 15,
    FOR_LOOP_PREP= 19,
    EOSS= 21,
    REMOVE= 11,
    ITEMS= 9,
    ID= 16,
    EOF= -1,
    LIST= 8,
    DEFINE= 13,
    EOC= 20,
    ACTION= 6,
    OPTION_PREP= 35,
    NUM= 29,
    INSERT_KW= 26,
    ACTIONS= 5,
    FOR_LOOP= 4,
    FOR_LOOP_KW= 18,
    WS= 38,
    LIST_KW= 23,
    INSERT= 10,
    REVERSE_KW= 32,
    REMOVE_KW= 30,
    EOS= 17,
    ESC_CHAR= 37,
    INSERT_PREP= 27,
    LIST_PREP= 24,
    REVERSE= 12,
    LIST_SEP= 25,
    DEFINE_PREP= 34,
    OPTIONS= 14,
    STRING= 36,
    DEFINE_KW= 33;

// public instance methods/vars
org.antlr.lang.extend(dynagramParser, org.antlr.runtime.Parser, {
        
    setTreeAdaptor: function(adaptor) {
        this.adaptor = adaptor;
    },
    getTreeAdaptor: function() {
        return this.adaptor;
    },

    getTokenNames: function() { return dynagramParser.tokenNames; },
    getGrammarFileName: function() { return "./src/dynagram.g"; }
});
org.antlr.lang.augmentObject(dynagramParser.prototype, {

    // inline static return class
    diagram_return: (function() {
        dynagramParser.diagram_return = function(){};
        org.antlr.lang.extend(dynagramParser.diagram_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // ./src/dynagram.g:26:1: diagram : ( sentence EOS )* -> ( sentence )* ;
    // $ANTLR start "diagram"
    diagram: function() {
        var retval = new dynagramParser.diagram_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var EOS2 = null;
         var sentence1 = null;

        var EOS2_tree=null;
        var stream_EOS=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token EOS");
        var stream_sentence=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"rule sentence");
        try {
            // ./src/dynagram.g:26:8: ( ( sentence EOS )* -> ( sentence )* )
            // ./src/dynagram.g:27:3: ( sentence EOS )*
            // ./src/dynagram.g:27:3: ( sentence EOS )*
            loop1:
            do {
                var alt1=2;
                var LA1_0 = this.input.LA(1);

                if ( (LA1_0==FOR_LOOP_KW||(LA1_0>=STATE_KW && LA1_0<=LIST_KW)||LA1_0==INSERT_KW||LA1_0==REMOVE_KW||(LA1_0>=REVERSE_KW && LA1_0<=DEFINE_KW)) ) {
                    alt1=1;
                }


                switch (alt1) {
                case 1 :
                    // ./src/dynagram.g:27:4: sentence EOS
                    this.pushFollow(dynagramParser.FOLLOW_sentence_in_diagram103);
                    sentence1=this.sentence();

                    this.state._fsp--;

                    stream_sentence.add(sentence1.getTree());
                    EOS2=this.match(this.input,EOS,dynagramParser.FOLLOW_EOS_in_diagram105);  
                    stream_EOS.add(EOS2);



                    break;

                default :
                    break loop1;
                }
            } while (true);



            // AST REWRITE
            // elements: sentence
            // token labels: 
            // rule labels: retval
            // token list labels: 
            // rule list labels: 
            retval.tree = root_0;
            var stream_retval=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"token retval",retval!=null?retval.tree:null);

            root_0 = this.adaptor.nil();
            // 27:19: -> ( sentence )*
            {
                // ./src/dynagram.g:27:22: ( sentence )*
                while ( stream_sentence.hasNext() ) {
                    this.adaptor.addChild(root_0, stream_sentence.nextTree());

                }
                stream_sentence.reset();

            }

            retval.tree = root_0;


            retval.stop = this.input.LT(-1);

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);

        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },

    // inline static return class
    sentence_return: (function() {
        dynagramParser.sentence_return = function(){};
        org.antlr.lang.extend(dynagramParser.sentence_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // ./src/dynagram.g:30:1: sentence : ( control_flow | action ) ;
    // $ANTLR start "sentence"
    sentence: function() {
        var retval = new dynagramParser.sentence_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

         var control_flow3 = null;
         var action4 = null;


        try {
            // ./src/dynagram.g:30:9: ( ( control_flow | action ) )
            // ./src/dynagram.g:31:3: ( control_flow | action )
            root_0 = this.adaptor.nil();

            // ./src/dynagram.g:31:3: ( control_flow | action )
            var alt2=2;
            var LA2_0 = this.input.LA(1);

            if ( (LA2_0==FOR_LOOP_KW) ) {
                alt2=1;
            }
            else if ( ((LA2_0>=STATE_KW && LA2_0<=LIST_KW)||LA2_0==INSERT_KW||LA2_0==REMOVE_KW||(LA2_0>=REVERSE_KW && LA2_0<=DEFINE_KW)) ) {
                alt2=2;
            }
            else {
                var nvae =
                    new org.antlr.runtime.NoViableAltException("", 2, 0, this.input);

                throw nvae;
            }
            switch (alt2) {
                case 1 :
                    // ./src/dynagram.g:31:4: control_flow
                    this.pushFollow(dynagramParser.FOLLOW_control_flow_in_sentence123);
                    control_flow3=this.control_flow();

                    this.state._fsp--;

                    this.adaptor.addChild(root_0, control_flow3.getTree());


                    break;
                case 2 :
                    // ./src/dynagram.g:31:19: action
                    this.pushFollow(dynagramParser.FOLLOW_action_in_sentence127);
                    action4=this.action();

                    this.state._fsp--;

                    this.adaptor.addChild(root_0, action4.getTree());


                    break;

            }




            retval.stop = this.input.LT(-1);

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);

        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },

    // inline static return class
    control_flow_return: (function() {
        dynagramParser.control_flow_return = function(){};
        org.antlr.lang.extend(dynagramParser.control_flow_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // ./src/dynagram.g:34:1: control_flow : for_loop ;
    // $ANTLR start "control_flow"
    control_flow: function() {
        var retval = new dynagramParser.control_flow_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

         var for_loop5 = null;


        try {
            // ./src/dynagram.g:38:13: ( for_loop )
            // ./src/dynagram.g:39:5: for_loop
            root_0 = this.adaptor.nil();

            this.pushFollow(dynagramParser.FOLLOW_for_loop_in_control_flow143);
            for_loop5=this.for_loop();

            this.state._fsp--;

            this.adaptor.addChild(root_0, for_loop5.getTree());



            retval.stop = this.input.LT(-1);

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);

        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },

    // inline static return class
    for_loop_return: (function() {
        dynagramParser.for_loop_return = function(){};
        org.antlr.lang.extend(dynagramParser.for_loop_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // ./src/dynagram.g:42:1: for_loop : FOR_LOOP_KW item FOR_LOOP_PREP list EOC action ( EOSS action )* -> ^( FOR_LOOP item list ^( ACTIONS ( action )+ ) ) ;
    // $ANTLR start "for_loop"
    for_loop: function() {
        var retval = new dynagramParser.for_loop_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var FOR_LOOP_KW6 = null;
        var FOR_LOOP_PREP8 = null;
        var EOC10 = null;
        var EOSS12 = null;
         var item7 = null;
         var list9 = null;
         var action11 = null;
         var action13 = null;

        var FOR_LOOP_KW6_tree=null;
        var FOR_LOOP_PREP8_tree=null;
        var EOC10_tree=null;
        var EOSS12_tree=null;
        var stream_FOR_LOOP_KW=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token FOR_LOOP_KW");
        var stream_FOR_LOOP_PREP=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token FOR_LOOP_PREP");
        var stream_EOC=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token EOC");
        var stream_EOSS=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token EOSS");
        var stream_item=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"rule item");
        var stream_action=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"rule action");
        var stream_list=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"rule list");
        try {
            // ./src/dynagram.g:42:9: ( FOR_LOOP_KW item FOR_LOOP_PREP list EOC action ( EOSS action )* -> ^( FOR_LOOP item list ^( ACTIONS ( action )+ ) ) )
            // ./src/dynagram.g:43:3: FOR_LOOP_KW item FOR_LOOP_PREP list EOC action ( EOSS action )*
            FOR_LOOP_KW6=this.match(this.input,FOR_LOOP_KW,dynagramParser.FOLLOW_FOR_LOOP_KW_in_for_loop154);  
            stream_FOR_LOOP_KW.add(FOR_LOOP_KW6);

            this.pushFollow(dynagramParser.FOLLOW_item_in_for_loop156);
            item7=this.item();

            this.state._fsp--;

            stream_item.add(item7.getTree());
            FOR_LOOP_PREP8=this.match(this.input,FOR_LOOP_PREP,dynagramParser.FOLLOW_FOR_LOOP_PREP_in_for_loop158);  
            stream_FOR_LOOP_PREP.add(FOR_LOOP_PREP8);

            this.pushFollow(dynagramParser.FOLLOW_list_in_for_loop160);
            list9=this.list();

            this.state._fsp--;

            stream_list.add(list9.getTree());
            EOC10=this.match(this.input,EOC,dynagramParser.FOLLOW_EOC_in_for_loop162);  
            stream_EOC.add(EOC10);

            this.pushFollow(dynagramParser.FOLLOW_action_in_for_loop164);
            action11=this.action();

            this.state._fsp--;

            stream_action.add(action11.getTree());
            // ./src/dynagram.g:43:50: ( EOSS action )*
            loop3:
            do {
                var alt3=2;
                var LA3_0 = this.input.LA(1);

                if ( (LA3_0==EOSS) ) {
                    alt3=1;
                }


                switch (alt3) {
                case 1 :
                    // ./src/dynagram.g:43:51: EOSS action
                    EOSS12=this.match(this.input,EOSS,dynagramParser.FOLLOW_EOSS_in_for_loop167);  
                    stream_EOSS.add(EOSS12);

                    this.pushFollow(dynagramParser.FOLLOW_action_in_for_loop169);
                    action13=this.action();

                    this.state._fsp--;

                    stream_action.add(action13.getTree());


                    break;

                default :
                    break loop3;
                }
            } while (true);



            // AST REWRITE
            // elements: action, list, item
            // token labels: 
            // rule labels: retval
            // token list labels: 
            // rule list labels: 
            retval.tree = root_0;
            var stream_retval=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"token retval",retval!=null?retval.tree:null);

            root_0 = this.adaptor.nil();
            // 43:66: -> ^( FOR_LOOP item list ^( ACTIONS ( action )+ ) )
            {
                // ./src/dynagram.g:43:69: ^( FOR_LOOP item list ^( ACTIONS ( action )+ ) )
                {
                var root_1 = this.adaptor.nil();
                root_1 = this.adaptor.becomeRoot(this.adaptor.create(FOR_LOOP, "FOR_LOOP"), root_1);

                this.adaptor.addChild(root_1, stream_item.nextTree());
                this.adaptor.addChild(root_1, stream_list.nextTree());
                // ./src/dynagram.g:43:90: ^( ACTIONS ( action )+ )
                {
                var root_2 = this.adaptor.nil();
                root_2 = this.adaptor.becomeRoot(this.adaptor.create(ACTIONS, "ACTIONS"), root_2);

                if ( !(stream_action.hasNext()) ) {
                    throw new org.antlr.runtime.tree.RewriteEarlyExitException();
                }
                while ( stream_action.hasNext() ) {
                    this.adaptor.addChild(root_2, stream_action.nextTree());

                }
                stream_action.reset();

                this.adaptor.addChild(root_1, root_2);
                }

                this.adaptor.addChild(root_0, root_1);
                }

            }

            retval.tree = root_0;


            retval.stop = this.input.LT(-1);

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);

        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },

    // inline static return class
    action_return: (function() {
        dynagramParser.action_return = function(){};
        org.antlr.lang.extend(dynagramParser.action_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // ./src/dynagram.g:47:1: action : action_type -> ^( ACTION action_type ) ;
    // $ANTLR start "action"
    action: function() {
        var retval = new dynagramParser.action_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

         var action_type14 = null;

        var stream_action_type=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"rule action_type");
        try {
            // ./src/dynagram.g:50:7: ( action_type -> ^( ACTION action_type ) )
            // ./src/dynagram.g:51:4: action_type
            this.pushFollow(dynagramParser.FOLLOW_action_type_in_action203);
            action_type14=this.action_type();

            this.state._fsp--;

            stream_action_type.add(action_type14.getTree());


            // AST REWRITE
            // elements: action_type
            // token labels: 
            // rule labels: retval
            // token list labels: 
            // rule list labels: 
            retval.tree = root_0;
            var stream_retval=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"token retval",retval!=null?retval.tree:null);

            root_0 = this.adaptor.nil();
            // 51:66: -> ^( ACTION action_type )
            {
                // ./src/dynagram.g:51:69: ^( ACTION action_type )
                {
                var root_1 = this.adaptor.nil();
                root_1 = this.adaptor.becomeRoot(this.adaptor.create(ACTION, "ACTION"), root_1);

                this.adaptor.addChild(root_1, stream_action_type.nextTree());

                this.adaptor.addChild(root_0, root_1);
                }

            }

            retval.tree = root_0;


            retval.stop = this.input.LT(-1);

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);

        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },

    // inline static return class
    action_type_return: (function() {
        dynagramParser.action_type_return = function(){};
        org.antlr.lang.extend(dynagramParser.action_type_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // ./src/dynagram.g:54:1: action_type : ( state_action | list_action | item_action );
    // $ANTLR start "action_type"
    action_type: function() {
        var retval = new dynagramParser.action_type_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

         var state_action15 = null;
         var list_action16 = null;
         var item_action17 = null;


        try {
            // ./src/dynagram.g:54:12: ( state_action | list_action | item_action )
            var alt4=3;
            switch ( this.input.LA(1) ) {
            case STATE_KW:
                alt4=1;
                break;
            case LIST_KW:
            case INSERT_KW:
            case REMOVE_KW:
            case REVERSE_KW:
                alt4=2;
                break;
            case DEFINE_KW:
                alt4=3;
                break;
            default:
                var nvae =
                    new org.antlr.runtime.NoViableAltException("", 4, 0, this.input);

                throw nvae;
            }

            switch (alt4) {
                case 1 :
                    // ./src/dynagram.g:55:5: state_action
                    root_0 = this.adaptor.nil();

                    this.pushFollow(dynagramParser.FOLLOW_state_action_in_action_type273);
                    state_action15=this.state_action();

                    this.state._fsp--;

                    this.adaptor.addChild(root_0, state_action15.getTree());


                    break;
                case 2 :
                    // ./src/dynagram.g:56:5: list_action
                    root_0 = this.adaptor.nil();

                    this.pushFollow(dynagramParser.FOLLOW_list_action_in_action_type279);
                    list_action16=this.list_action();

                    this.state._fsp--;

                    this.adaptor.addChild(root_0, list_action16.getTree());


                    break;
                case 3 :
                    // ./src/dynagram.g:57:5: item_action
                    root_0 = this.adaptor.nil();

                    this.pushFollow(dynagramParser.FOLLOW_item_action_in_action_type285);
                    item_action17=this.item_action();

                    this.state._fsp--;

                    this.adaptor.addChild(root_0, item_action17.getTree());


                    break;

            }
            retval.stop = this.input.LT(-1);

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);

        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },

    // inline static return class
    state_action_return: (function() {
        dynagramParser.state_action_return = function(){};
        org.antlr.lang.extend(dynagramParser.state_action_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // ./src/dynagram.g:60:1: state_action : STATE_KW ( s )? -> ^( STATE ( s )? ) ;
    // $ANTLR start "state_action"
    state_action: function() {
        var retval = new dynagramParser.state_action_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var STATE_KW18 = null;
         var s19 = null;

        var STATE_KW18_tree=null;
        var stream_STATE_KW=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token STATE_KW");
        var stream_s=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"rule s");
        try {
            // ./src/dynagram.g:60:13: ( STATE_KW ( s )? -> ^( STATE ( s )? ) )
            // ./src/dynagram.g:61:5: STATE_KW ( s )?
            STATE_KW18=this.match(this.input,STATE_KW,dynagramParser.FOLLOW_STATE_KW_in_state_action297);  
            stream_STATE_KW.add(STATE_KW18);

            // ./src/dynagram.g:61:14: ( s )?
            var alt5=2;
            var LA5_0 = this.input.LA(1);

            if ( (LA5_0==ID) ) {
                alt5=1;
            }
            switch (alt5) {
                case 1 :
                    // ./src/dynagram.g:61:14: s
                    this.pushFollow(dynagramParser.FOLLOW_s_in_state_action299);
                    s19=this.s();

                    this.state._fsp--;

                    stream_s.add(s19.getTree());


                    break;

            }



            // AST REWRITE
            // elements: s
            // token labels: 
            // rule labels: retval
            // token list labels: 
            // rule list labels: 
            retval.tree = root_0;
            var stream_retval=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"token retval",retval!=null?retval.tree:null);

            root_0 = this.adaptor.nil();
            // 61:66: -> ^( STATE ( s )? )
            {
                // ./src/dynagram.g:61:69: ^( STATE ( s )? )
                {
                var root_1 = this.adaptor.nil();
                root_1 = this.adaptor.becomeRoot(this.adaptor.create(STATE, "STATE"), root_1);

                // ./src/dynagram.g:61:77: ( s )?
                if ( stream_s.hasNext() ) {
                    this.adaptor.addChild(root_1, stream_s.nextTree());

                }
                stream_s.reset();

                this.adaptor.addChild(root_0, root_1);
                }

            }

            retval.tree = root_0;


            retval.stop = this.input.LT(-1);

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);

        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },

    // inline static return class
    list_action_return: (function() {
        dynagramParser.list_action_return = function(){};
        org.antlr.lang.extend(dynagramParser.list_action_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // ./src/dynagram.g:64:1: list_action : ( LIST_KW list LIST_PREP item ( LIST_SEP item )* -> ^( LIST list ^( ITEMS ( item )* ) ) | INSERT_KW item INSERT_PREP list ( INSERT_POS_PREP NUM )? -> ^( INSERT list item ( NUM )? ) | REMOVE_KW item REMOVE_PREP list -> ^( REMOVE list item ) | REVERSE_KW list -> ^( REVERSE list ) );
    // $ANTLR start "list_action"
    list_action: function() {
        var retval = new dynagramParser.list_action_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var LIST_KW20 = null;
        var LIST_PREP22 = null;
        var LIST_SEP24 = null;
        var INSERT_KW26 = null;
        var INSERT_PREP28 = null;
        var INSERT_POS_PREP30 = null;
        var NUM31 = null;
        var REMOVE_KW32 = null;
        var REMOVE_PREP34 = null;
        var REVERSE_KW36 = null;
         var list21 = null;
         var item23 = null;
         var item25 = null;
         var item27 = null;
         var list29 = null;
         var item33 = null;
         var list35 = null;
         var list37 = null;

        var LIST_KW20_tree=null;
        var LIST_PREP22_tree=null;
        var LIST_SEP24_tree=null;
        var INSERT_KW26_tree=null;
        var INSERT_PREP28_tree=null;
        var INSERT_POS_PREP30_tree=null;
        var NUM31_tree=null;
        var REMOVE_KW32_tree=null;
        var REMOVE_PREP34_tree=null;
        var REVERSE_KW36_tree=null;
        var stream_INSERT_POS_PREP=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token INSERT_POS_PREP");
        var stream_REMOVE_PREP=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token REMOVE_PREP");
        var stream_INSERT_PREP=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token INSERT_PREP");
        var stream_LIST_KW=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token LIST_KW");
        var stream_LIST_PREP=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token LIST_PREP");
        var stream_LIST_SEP=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token LIST_SEP");
        var stream_REVERSE_KW=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token REVERSE_KW");
        var stream_REMOVE_KW=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token REMOVE_KW");
        var stream_NUM=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token NUM");
        var stream_INSERT_KW=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token INSERT_KW");
        var stream_item=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"rule item");
        var stream_list=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"rule list");
        try {
            // ./src/dynagram.g:64:12: ( LIST_KW list LIST_PREP item ( LIST_SEP item )* -> ^( LIST list ^( ITEMS ( item )* ) ) | INSERT_KW item INSERT_PREP list ( INSERT_POS_PREP NUM )? -> ^( INSERT list item ( NUM )? ) | REMOVE_KW item REMOVE_PREP list -> ^( REMOVE list item ) | REVERSE_KW list -> ^( REVERSE list ) )
            var alt8=4;
            switch ( this.input.LA(1) ) {
            case LIST_KW:
                alt8=1;
                break;
            case INSERT_KW:
                alt8=2;
                break;
            case REMOVE_KW:
                alt8=3;
                break;
            case REVERSE_KW:
                alt8=4;
                break;
            default:
                var nvae =
                    new org.antlr.runtime.NoViableAltException("", 8, 0, this.input);

                throw nvae;
            }

            switch (alt8) {
                case 1 :
                    // ./src/dynagram.g:65:5: LIST_KW list LIST_PREP item ( LIST_SEP item )*
                    LIST_KW20=this.match(this.input,LIST_KW,dynagramParser.FOLLOW_LIST_KW_in_list_action370);  
                    stream_LIST_KW.add(LIST_KW20);

                    this.pushFollow(dynagramParser.FOLLOW_list_in_list_action372);
                    list21=this.list();

                    this.state._fsp--;

                    stream_list.add(list21.getTree());
                    LIST_PREP22=this.match(this.input,LIST_PREP,dynagramParser.FOLLOW_LIST_PREP_in_list_action374);  
                    stream_LIST_PREP.add(LIST_PREP22);

                    this.pushFollow(dynagramParser.FOLLOW_item_in_list_action376);
                    item23=this.item();

                    this.state._fsp--;

                    stream_item.add(item23.getTree());
                    // ./src/dynagram.g:65:33: ( LIST_SEP item )*
                    loop6:
                    do {
                        var alt6=2;
                        var LA6_0 = this.input.LA(1);

                        if ( (LA6_0==LIST_SEP) ) {
                            alt6=1;
                        }


                        switch (alt6) {
                        case 1 :
                            // ./src/dynagram.g:65:34: LIST_SEP item
                            LIST_SEP24=this.match(this.input,LIST_SEP,dynagramParser.FOLLOW_LIST_SEP_in_list_action379);  
                            stream_LIST_SEP.add(LIST_SEP24);

                            this.pushFollow(dynagramParser.FOLLOW_item_in_list_action381);
                            item25=this.item();

                            this.state._fsp--;

                            stream_item.add(item25.getTree());


                            break;

                        default :
                            break loop6;
                        }
                    } while (true);



                    // AST REWRITE
                    // elements: list, item
                    // token labels: 
                    // rule labels: retval
                    // token list labels: 
                    // rule list labels: 
                    retval.tree = root_0;
                    var stream_retval=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"token retval",retval!=null?retval.tree:null);

                    root_0 = this.adaptor.nil();
                    // 65:66: -> ^( LIST list ^( ITEMS ( item )* ) )
                    {
                        // ./src/dynagram.g:65:69: ^( LIST list ^( ITEMS ( item )* ) )
                        {
                        var root_1 = this.adaptor.nil();
                        root_1 = this.adaptor.becomeRoot(this.adaptor.create(LIST, "LIST"), root_1);

                        this.adaptor.addChild(root_1, stream_list.nextTree());
                        // ./src/dynagram.g:65:81: ^( ITEMS ( item )* )
                        {
                        var root_2 = this.adaptor.nil();
                        root_2 = this.adaptor.becomeRoot(this.adaptor.create(ITEMS, "ITEMS"), root_2);

                        // ./src/dynagram.g:65:89: ( item )*
                        while ( stream_item.hasNext() ) {
                            this.adaptor.addChild(root_2, stream_item.nextTree());

                        }
                        stream_item.reset();

                        this.adaptor.addChild(root_1, root_2);
                        }

                        this.adaptor.addChild(root_0, root_1);
                        }

                    }

                    retval.tree = root_0;

                    break;
                case 2 :
                    // ./src/dynagram.g:66:5: INSERT_KW item INSERT_PREP list ( INSERT_POS_PREP NUM )?
                    INSERT_KW26=this.match(this.input,INSERT_KW,dynagramParser.FOLLOW_INSERT_KW_in_list_action420);  
                    stream_INSERT_KW.add(INSERT_KW26);

                    this.pushFollow(dynagramParser.FOLLOW_item_in_list_action422);
                    item27=this.item();

                    this.state._fsp--;

                    stream_item.add(item27.getTree());
                    INSERT_PREP28=this.match(this.input,INSERT_PREP,dynagramParser.FOLLOW_INSERT_PREP_in_list_action424);  
                    stream_INSERT_PREP.add(INSERT_PREP28);

                    this.pushFollow(dynagramParser.FOLLOW_list_in_list_action426);
                    list29=this.list();

                    this.state._fsp--;

                    stream_list.add(list29.getTree());
                    // ./src/dynagram.g:66:37: ( INSERT_POS_PREP NUM )?
                    var alt7=2;
                    var LA7_0 = this.input.LA(1);

                    if ( (LA7_0==INSERT_POS_PREP) ) {
                        alt7=1;
                    }
                    switch (alt7) {
                        case 1 :
                            // ./src/dynagram.g:66:38: INSERT_POS_PREP NUM
                            INSERT_POS_PREP30=this.match(this.input,INSERT_POS_PREP,dynagramParser.FOLLOW_INSERT_POS_PREP_in_list_action429);  
                            stream_INSERT_POS_PREP.add(INSERT_POS_PREP30);

                            NUM31=this.match(this.input,NUM,dynagramParser.FOLLOW_NUM_in_list_action431);  
                            stream_NUM.add(NUM31);



                            break;

                    }



                    // AST REWRITE
                    // elements: NUM, list, item
                    // token labels: 
                    // rule labels: retval
                    // token list labels: 
                    // rule list labels: 
                    retval.tree = root_0;
                    var stream_retval=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"token retval",retval!=null?retval.tree:null);

                    root_0 = this.adaptor.nil();
                    // 66:66: -> ^( INSERT list item ( NUM )? )
                    {
                        // ./src/dynagram.g:66:69: ^( INSERT list item ( NUM )? )
                        {
                        var root_1 = this.adaptor.nil();
                        root_1 = this.adaptor.becomeRoot(this.adaptor.create(INSERT, "INSERT"), root_1);

                        this.adaptor.addChild(root_1, stream_list.nextTree());
                        this.adaptor.addChild(root_1, stream_item.nextTree());
                        // ./src/dynagram.g:66:88: ( NUM )?
                        if ( stream_NUM.hasNext() ) {
                            this.adaptor.addChild(root_1, stream_NUM.nextNode());

                        }
                        stream_NUM.reset();

                        this.adaptor.addChild(root_0, root_1);
                        }

                    }

                    retval.tree = root_0;

                    break;
                case 3 :
                    // ./src/dynagram.g:67:5: REMOVE_KW item REMOVE_PREP list
                    REMOVE_KW32=this.match(this.input,REMOVE_KW,dynagramParser.FOLLOW_REMOVE_KW_in_list_action458);  
                    stream_REMOVE_KW.add(REMOVE_KW32);

                    this.pushFollow(dynagramParser.FOLLOW_item_in_list_action460);
                    item33=this.item();

                    this.state._fsp--;

                    stream_item.add(item33.getTree());
                    REMOVE_PREP34=this.match(this.input,REMOVE_PREP,dynagramParser.FOLLOW_REMOVE_PREP_in_list_action462);  
                    stream_REMOVE_PREP.add(REMOVE_PREP34);

                    this.pushFollow(dynagramParser.FOLLOW_list_in_list_action464);
                    list35=this.list();

                    this.state._fsp--;

                    stream_list.add(list35.getTree());


                    // AST REWRITE
                    // elements: list, item
                    // token labels: 
                    // rule labels: retval
                    // token list labels: 
                    // rule list labels: 
                    retval.tree = root_0;
                    var stream_retval=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"token retval",retval!=null?retval.tree:null);

                    root_0 = this.adaptor.nil();
                    // 67:66: -> ^( REMOVE list item )
                    {
                        // ./src/dynagram.g:67:69: ^( REMOVE list item )
                        {
                        var root_1 = this.adaptor.nil();
                        root_1 = this.adaptor.becomeRoot(this.adaptor.create(REMOVE, "REMOVE"), root_1);

                        this.adaptor.addChild(root_1, stream_list.nextTree());
                        this.adaptor.addChild(root_1, stream_item.nextTree());

                        this.adaptor.addChild(root_0, root_1);
                        }

                    }

                    retval.tree = root_0;

                    break;
                case 4 :
                    // ./src/dynagram.g:68:5: REVERSE_KW list
                    REVERSE_KW36=this.match(this.input,REVERSE_KW,dynagramParser.FOLLOW_REVERSE_KW_in_list_action509);  
                    stream_REVERSE_KW.add(REVERSE_KW36);

                    this.pushFollow(dynagramParser.FOLLOW_list_in_list_action511);
                    list37=this.list();

                    this.state._fsp--;

                    stream_list.add(list37.getTree());


                    // AST REWRITE
                    // elements: list
                    // token labels: 
                    // rule labels: retval
                    // token list labels: 
                    // rule list labels: 
                    retval.tree = root_0;
                    var stream_retval=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"token retval",retval!=null?retval.tree:null);

                    root_0 = this.adaptor.nil();
                    // 68:66: -> ^( REVERSE list )
                    {
                        // ./src/dynagram.g:68:69: ^( REVERSE list )
                        {
                        var root_1 = this.adaptor.nil();
                        root_1 = this.adaptor.becomeRoot(this.adaptor.create(REVERSE, "REVERSE"), root_1);

                        this.adaptor.addChild(root_1, stream_list.nextTree());

                        this.adaptor.addChild(root_0, root_1);
                        }

                    }

                    retval.tree = root_0;

                    break;

            }
            retval.stop = this.input.LT(-1);

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);

        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },

    // inline static return class
    item_action_return: (function() {
        dynagramParser.item_action_return = function(){};
        org.antlr.lang.extend(dynagramParser.item_action_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // ./src/dynagram.g:71:1: item_action : DEFINE_KW item ( DEFINE_PREP option ( LIST_SEP option )* )? -> ^( DEFINE item ^( OPTIONS ( option )* ) ) ;
    // $ANTLR start "item_action"
    item_action: function() {
        var retval = new dynagramParser.item_action_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var DEFINE_KW38 = null;
        var DEFINE_PREP40 = null;
        var LIST_SEP42 = null;
         var item39 = null;
         var option41 = null;
         var option43 = null;

        var DEFINE_KW38_tree=null;
        var DEFINE_PREP40_tree=null;
        var LIST_SEP42_tree=null;
        var stream_LIST_SEP=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token LIST_SEP");
        var stream_DEFINE_PREP=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token DEFINE_PREP");
        var stream_DEFINE_KW=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token DEFINE_KW");
        var stream_item=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"rule item");
        var stream_option=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"rule option");
        try {
            // ./src/dynagram.g:71:12: ( DEFINE_KW item ( DEFINE_PREP option ( LIST_SEP option )* )? -> ^( DEFINE item ^( OPTIONS ( option )* ) ) )
            // ./src/dynagram.g:72:5: DEFINE_KW item ( DEFINE_PREP option ( LIST_SEP option )* )?
            DEFINE_KW38=this.match(this.input,DEFINE_KW,dynagramParser.FOLLOW_DEFINE_KW_in_item_action576);  
            stream_DEFINE_KW.add(DEFINE_KW38);

            this.pushFollow(dynagramParser.FOLLOW_item_in_item_action578);
            item39=this.item();

            this.state._fsp--;

            stream_item.add(item39.getTree());
            // ./src/dynagram.g:72:20: ( DEFINE_PREP option ( LIST_SEP option )* )?
            var alt10=2;
            var LA10_0 = this.input.LA(1);

            if ( (LA10_0==DEFINE_PREP) ) {
                alt10=1;
            }
            switch (alt10) {
                case 1 :
                    // ./src/dynagram.g:72:21: DEFINE_PREP option ( LIST_SEP option )*
                    DEFINE_PREP40=this.match(this.input,DEFINE_PREP,dynagramParser.FOLLOW_DEFINE_PREP_in_item_action581);  
                    stream_DEFINE_PREP.add(DEFINE_PREP40);

                    this.pushFollow(dynagramParser.FOLLOW_option_in_item_action583);
                    option41=this.option();

                    this.state._fsp--;

                    stream_option.add(option41.getTree());
                    // ./src/dynagram.g:72:40: ( LIST_SEP option )*
                    loop9:
                    do {
                        var alt9=2;
                        var LA9_0 = this.input.LA(1);

                        if ( (LA9_0==LIST_SEP) ) {
                            alt9=1;
                        }


                        switch (alt9) {
                        case 1 :
                            // ./src/dynagram.g:72:41: LIST_SEP option
                            LIST_SEP42=this.match(this.input,LIST_SEP,dynagramParser.FOLLOW_LIST_SEP_in_item_action586);  
                            stream_LIST_SEP.add(LIST_SEP42);

                            this.pushFollow(dynagramParser.FOLLOW_option_in_item_action588);
                            option43=this.option();

                            this.state._fsp--;

                            stream_option.add(option43.getTree());


                            break;

                        default :
                            break loop9;
                        }
                    } while (true);



                    break;

            }



            // AST REWRITE
            // elements: item, option
            // token labels: 
            // rule labels: retval
            // token list labels: 
            // rule list labels: 
            retval.tree = root_0;
            var stream_retval=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"token retval",retval!=null?retval.tree:null);

            root_0 = this.adaptor.nil();
            // 72:66: -> ^( DEFINE item ^( OPTIONS ( option )* ) )
            {
                // ./src/dynagram.g:72:69: ^( DEFINE item ^( OPTIONS ( option )* ) )
                {
                var root_1 = this.adaptor.nil();
                root_1 = this.adaptor.becomeRoot(this.adaptor.create(DEFINE, "DEFINE"), root_1);

                this.adaptor.addChild(root_1, stream_item.nextTree());
                // ./src/dynagram.g:72:83: ^( OPTIONS ( option )* )
                {
                var root_2 = this.adaptor.nil();
                root_2 = this.adaptor.becomeRoot(this.adaptor.create(OPTIONS, "OPTIONS"), root_2);

                // ./src/dynagram.g:72:93: ( option )*
                while ( stream_option.hasNext() ) {
                    this.adaptor.addChild(root_2, stream_option.nextTree());

                }
                stream_option.reset();

                this.adaptor.addChild(root_1, root_2);
                }

                this.adaptor.addChild(root_0, root_1);
                }

            }

            retval.tree = root_0;


            retval.stop = this.input.LT(-1);

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);

        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },

    // inline static return class
    option_return: (function() {
        dynagramParser.option_return = function(){};
        org.antlr.lang.extend(dynagramParser.option_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // ./src/dynagram.g:75:1: option : opt OPTION_PREP val -> ^( OPTION opt val ) ;
    // $ANTLR start "option"
    option: function() {
        var retval = new dynagramParser.option_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var OPTION_PREP45 = null;
         var opt44 = null;
         var val46 = null;

        var OPTION_PREP45_tree=null;
        var stream_OPTION_PREP=new org.antlr.runtime.tree.RewriteRuleTokenStream(this.adaptor,"token OPTION_PREP");
        var stream_val=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"rule val");
        var stream_opt=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"rule opt");
        try {
            // ./src/dynagram.g:75:7: ( opt OPTION_PREP val -> ^( OPTION opt val ) )
            // ./src/dynagram.g:76:5: opt OPTION_PREP val
            this.pushFollow(dynagramParser.FOLLOW_opt_in_option624);
            opt44=this.opt();

            this.state._fsp--;

            stream_opt.add(opt44.getTree());
            OPTION_PREP45=this.match(this.input,OPTION_PREP,dynagramParser.FOLLOW_OPTION_PREP_in_option626);  
            stream_OPTION_PREP.add(OPTION_PREP45);

            this.pushFollow(dynagramParser.FOLLOW_val_in_option628);
            val46=this.val();

            this.state._fsp--;

            stream_val.add(val46.getTree());


            // AST REWRITE
            // elements: val, opt
            // token labels: 
            // rule labels: retval
            // token list labels: 
            // rule list labels: 
            retval.tree = root_0;
            var stream_retval=new org.antlr.runtime.tree.RewriteRuleSubtreeStream(this.adaptor,"token retval",retval!=null?retval.tree:null);

            root_0 = this.adaptor.nil();
            // 76:25: -> ^( OPTION opt val )
            {
                // ./src/dynagram.g:76:28: ^( OPTION opt val )
                {
                var root_1 = this.adaptor.nil();
                root_1 = this.adaptor.becomeRoot(this.adaptor.create(OPTION, "OPTION"), root_1);

                this.adaptor.addChild(root_1, stream_opt.nextTree());
                this.adaptor.addChild(root_1, stream_val.nextTree());

                this.adaptor.addChild(root_0, root_1);
                }

            }

            retval.tree = root_0;


            retval.stop = this.input.LT(-1);

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);

        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },

    // inline static return class
    s_return: (function() {
        dynagramParser.s_return = function(){};
        org.antlr.lang.extend(dynagramParser.s_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // ./src/dynagram.g:79:1: s : ID ;
    // $ANTLR start "s"
    s: function() {
        var retval = new dynagramParser.s_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var ID47 = null;

        var ID47_tree=null;

        try {
            // ./src/dynagram.g:82:2: ( ID )
            // ./src/dynagram.g:82:4: ID
            root_0 = this.adaptor.nil();

            ID47=this.match(this.input,ID,dynagramParser.FOLLOW_ID_in_s648); 
            ID47_tree = this.adaptor.create(ID47);
            this.adaptor.addChild(root_0, ID47_tree);




            retval.stop = this.input.LT(-1);

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);

        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },

    // inline static return class
    list_return: (function() {
        dynagramParser.list_return = function(){};
        org.antlr.lang.extend(dynagramParser.list_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // ./src/dynagram.g:83:1: list : ID ;
    // $ANTLR start "list"
    list: function() {
        var retval = new dynagramParser.list_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var ID48 = null;

        var ID48_tree=null;

        try {
            // ./src/dynagram.g:83:5: ( ID )
            // ./src/dynagram.g:83:7: ID
            root_0 = this.adaptor.nil();

            ID48=this.match(this.input,ID,dynagramParser.FOLLOW_ID_in_list654); 
            ID48_tree = this.adaptor.create(ID48);
            this.adaptor.addChild(root_0, ID48_tree);




            retval.stop = this.input.LT(-1);

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);

        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },

    // inline static return class
    item_return: (function() {
        dynagramParser.item_return = function(){};
        org.antlr.lang.extend(dynagramParser.item_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // ./src/dynagram.g:84:1: item : ID ;
    // $ANTLR start "item"
    item: function() {
        var retval = new dynagramParser.item_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var ID49 = null;

        var ID49_tree=null;

        try {
            // ./src/dynagram.g:84:5: ( ID )
            // ./src/dynagram.g:84:7: ID
            root_0 = this.adaptor.nil();

            ID49=this.match(this.input,ID,dynagramParser.FOLLOW_ID_in_item660); 
            ID49_tree = this.adaptor.create(ID49);
            this.adaptor.addChild(root_0, ID49_tree);




            retval.stop = this.input.LT(-1);

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);

        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },

    // inline static return class
    opt_return: (function() {
        dynagramParser.opt_return = function(){};
        org.antlr.lang.extend(dynagramParser.opt_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // ./src/dynagram.g:85:1: opt : ( ID | STRING );
    // $ANTLR start "opt"
    opt: function() {
        var retval = new dynagramParser.opt_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var set50 = null;

        var set50_tree=null;

        try {
            // ./src/dynagram.g:85:4: ( ID | STRING )
            // ./src/dynagram.g:
            root_0 = this.adaptor.nil();

            set50=this.input.LT(1);
            if ( this.input.LA(1)==ID||this.input.LA(1)==STRING ) {
                this.input.consume();
                this.adaptor.addChild(root_0, this.adaptor.create(set50));
                this.state.errorRecovery=false;
            }
            else {
                var mse = new org.antlr.runtime.MismatchedSetException(null,this.input);
                throw mse;
            }




            retval.stop = this.input.LT(-1);

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);

        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    },

    // inline static return class
    val_return: (function() {
        dynagramParser.val_return = function(){};
        org.antlr.lang.extend(dynagramParser.val_return,
                          org.antlr.runtime.ParserRuleReturnScope,
        {
            getTree: function() { return this.tree; }
        });
        return;
    })(),

    // ./src/dynagram.g:86:1: val : ( NUM | STRING );
    // $ANTLR start "val"
    val: function() {
        var retval = new dynagramParser.val_return();
        retval.start = this.input.LT(1);

        var root_0 = null;

        var set51 = null;

        var set51_tree=null;

        try {
            // ./src/dynagram.g:86:4: ( NUM | STRING )
            // ./src/dynagram.g:
            root_0 = this.adaptor.nil();

            set51=this.input.LT(1);
            if ( this.input.LA(1)==NUM||this.input.LA(1)==STRING ) {
                this.input.consume();
                this.adaptor.addChild(root_0, this.adaptor.create(set51));
                this.state.errorRecovery=false;
            }
            else {
                var mse = new org.antlr.runtime.MismatchedSetException(null,this.input);
                throw mse;
            }




            retval.stop = this.input.LT(-1);

            retval.tree = this.adaptor.rulePostProcessing(root_0);
            this.adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);

        }
        catch (re) {
            if (re instanceof org.antlr.runtime.RecognitionException) {
                this.reportError(re);
                this.recover(this.input,re);
                retval.tree = this.adaptor.errorNode(this.input, retval.start, this.input.LT(-1), re);
            } else {
                throw re;
            }
        }
        finally {
        }
        return retval;
    }

    // Delegated rules




}, true); // important to pass true to overwrite default implementations

 

// public class variables
org.antlr.lang.augmentObject(dynagramParser, {
    tokenNames: ["<invalid>", "<EOR>", "<DOWN>", "<UP>", "FOR_LOOP", "ACTIONS", "ACTION", "STATE", "LIST", "ITEMS", "INSERT", "REMOVE", "REVERSE", "DEFINE", "OPTIONS", "OPTION", "ID", "EOS", "FOR_LOOP_KW", "FOR_LOOP_PREP", "EOC", "EOSS", "STATE_KW", "LIST_KW", "LIST_PREP", "LIST_SEP", "INSERT_KW", "INSERT_PREP", "INSERT_POS_PREP", "NUM", "REMOVE_KW", "REMOVE_PREP", "REVERSE_KW", "DEFINE_KW", "DEFINE_PREP", "OPTION_PREP", "STRING", "ESC_CHAR", "WS"],
    FOLLOW_sentence_in_diagram103: new org.antlr.runtime.BitSet([0x00020000, 0x00000000]),
    FOLLOW_EOS_in_diagram105: new org.antlr.runtime.BitSet([0x44C40002, 0x00000003]),
    FOLLOW_control_flow_in_sentence123: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_action_in_sentence127: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_for_loop_in_control_flow143: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_FOR_LOOP_KW_in_for_loop154: new org.antlr.runtime.BitSet([0x00010000, 0x00000000]),
    FOLLOW_item_in_for_loop156: new org.antlr.runtime.BitSet([0x00080000, 0x00000000]),
    FOLLOW_FOR_LOOP_PREP_in_for_loop158: new org.antlr.runtime.BitSet([0x00010000, 0x00000000]),
    FOLLOW_list_in_for_loop160: new org.antlr.runtime.BitSet([0x00100000, 0x00000000]),
    FOLLOW_EOC_in_for_loop162: new org.antlr.runtime.BitSet([0x44E40000, 0x00000003]),
    FOLLOW_action_in_for_loop164: new org.antlr.runtime.BitSet([0x00200002, 0x00000000]),
    FOLLOW_EOSS_in_for_loop167: new org.antlr.runtime.BitSet([0x44E40000, 0x00000003]),
    FOLLOW_action_in_for_loop169: new org.antlr.runtime.BitSet([0x00200002, 0x00000000]),
    FOLLOW_action_type_in_action203: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_state_action_in_action_type273: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_list_action_in_action_type279: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_item_action_in_action_type285: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_STATE_KW_in_state_action297: new org.antlr.runtime.BitSet([0x00010002, 0x00000000]),
    FOLLOW_s_in_state_action299: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_LIST_KW_in_list_action370: new org.antlr.runtime.BitSet([0x00010000, 0x00000000]),
    FOLLOW_list_in_list_action372: new org.antlr.runtime.BitSet([0x01000000, 0x00000000]),
    FOLLOW_LIST_PREP_in_list_action374: new org.antlr.runtime.BitSet([0x00010000, 0x00000000]),
    FOLLOW_item_in_list_action376: new org.antlr.runtime.BitSet([0x02000002, 0x00000000]),
    FOLLOW_LIST_SEP_in_list_action379: new org.antlr.runtime.BitSet([0x00010000, 0x00000000]),
    FOLLOW_item_in_list_action381: new org.antlr.runtime.BitSet([0x02000002, 0x00000000]),
    FOLLOW_INSERT_KW_in_list_action420: new org.antlr.runtime.BitSet([0x00010000, 0x00000000]),
    FOLLOW_item_in_list_action422: new org.antlr.runtime.BitSet([0x08000000, 0x00000000]),
    FOLLOW_INSERT_PREP_in_list_action424: new org.antlr.runtime.BitSet([0x00010000, 0x00000000]),
    FOLLOW_list_in_list_action426: new org.antlr.runtime.BitSet([0x10000002, 0x00000000]),
    FOLLOW_INSERT_POS_PREP_in_list_action429: new org.antlr.runtime.BitSet([0x20000000, 0x00000000]),
    FOLLOW_NUM_in_list_action431: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_REMOVE_KW_in_list_action458: new org.antlr.runtime.BitSet([0x00010000, 0x00000000]),
    FOLLOW_item_in_list_action460: new org.antlr.runtime.BitSet([0x80000000, 0x00000000]),
    FOLLOW_REMOVE_PREP_in_list_action462: new org.antlr.runtime.BitSet([0x00010000, 0x00000000]),
    FOLLOW_list_in_list_action464: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_REVERSE_KW_in_list_action509: new org.antlr.runtime.BitSet([0x00010000, 0x00000000]),
    FOLLOW_list_in_list_action511: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_DEFINE_KW_in_item_action576: new org.antlr.runtime.BitSet([0x00010000, 0x00000000]),
    FOLLOW_item_in_item_action578: new org.antlr.runtime.BitSet([0x00000002, 0x00000004]),
    FOLLOW_DEFINE_PREP_in_item_action581: new org.antlr.runtime.BitSet([0x00010000, 0x00000010]),
    FOLLOW_option_in_item_action583: new org.antlr.runtime.BitSet([0x02000002, 0x00000000]),
    FOLLOW_LIST_SEP_in_item_action586: new org.antlr.runtime.BitSet([0x00010000, 0x00000010]),
    FOLLOW_option_in_item_action588: new org.antlr.runtime.BitSet([0x02000002, 0x00000000]),
    FOLLOW_opt_in_option624: new org.antlr.runtime.BitSet([0x00000000, 0x00000008]),
    FOLLOW_OPTION_PREP_in_option626: new org.antlr.runtime.BitSet([0x20000000, 0x00000010]),
    FOLLOW_val_in_option628: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_ID_in_s648: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_ID_in_list654: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_ID_in_item660: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_set_in_opt0: new org.antlr.runtime.BitSet([0x00000002, 0x00000000]),
    FOLLOW_set_in_val0: new org.antlr.runtime.BitSet([0x00000002, 0x00000000])
});

})();