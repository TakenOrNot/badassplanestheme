// ------------------------------------------------------------------------
//   Badass Planes Themes Bundle for StarMash
//   https://takenornot.github.io/badassplanestheme/bundle/badass-pack.js
// ------------------------------------------------------------------------
"use strict";

!function()
{

    // Settings
    
    function createSettingsProvider()
    {
        // This is the handler that will be executed when new settings are applied
        function onApply(values)
        {
            console.log ("New settings applied: ", values);
            settings = values;

            if (settings.customizeFb === true){
                //console.log("customizeFb !!");
                const optionnalFbStyle = `
                    <style id='optionnalFbStyle'>
                        #flag-border-red-right:not([style*="display: none"]){-webkit-animation: neonredright .5s ease-in-out alternate; animation-iteration-count: 11; background : radial-gradient(ellipse closest-side, rgba(255,17,119, .5) 32%, rgba(255,17,119,0) 67%, rgba(255,17,119,0) 100%); height : 4%; top: -2%; }
                        #flag-border-blue-left:not([style*="display: none"]){-webkit-animation: neonblueleft .5s ease-in-out alternate; animation-iteration-count: 11; background : radial-gradient(ellipse closest-side, rgba(0,212,255,0.5) 32%, rgba(9,9,121,0) 67%, rgba(9,9,121,0) 100%); height : 4%; top: -2%; }
                        #flag-border-blue-right {}
                        #flag-border-red-left {}
                        #flag-border-blue-left, #flag-border-blue-right, #flag-border-red-left, #flag-border-red-right {
                            border-width: 0 0 0 0px;
                        }
                    </style>
                `
                if ( $( "#optionnalFbStyle" ).length ) {
                    // if element already exist, dont add it again
                }
                else {
                    $('body').append ( optionnalFbStyle );
                }
            } 
            else {
                $('#optionnalFbStyle').remove(); 
                
            }
            
            if (settings.UImsgShow === false){
                UI.showMessage = () => {};
            }
            
            if (settings.UImsgAnim === false){
                const optionnalUImsgStyle = `
                    <style id='optionnalUImsgStyle'>
                       .message.popmsg, .message.hidemsg {animation : none;}

                    </style>
                `
                if ( $( "#optionnalUImsgStyle" ).length ) {
                    // if element already exist, dont add it again
                }
                else {
                    $('body').append ( optionnalUImsgStyle );
                }
            }
            
            
        }

        // Default values for the settings
        let settings = {
            customizeFb: false,
            UImsgShow: true,
            UImsgAnim: true,
            
        };

        let sp = new SettingsProvider(settings, onApply);
    
        let section = sp.addSection("Look & feel");
        section.addBoolean("customizeFb", "Customize Moz's Flag Borders apearance");
        section.addBoolean("UImsgShow", "Show UI messages");
        section.addBoolean("UImsgAnim", "Animate UI messages");
        // section.addValuesField("values1", "Flavor",
        // {
        //    "default": "Default",
        //    "nuklear": "Nuklear"
        // });
               
        // we return our SettingsProvider instance
        return sp;
    }
    
    // ------------------------------------------------------------------------
    
    // Returns the filename part of an AirMash's image URL
    /*
    function getFileName(str)
    {
        str = str.substring(str.lastIndexOf('/')+1);
        if (str.indexOf("?")>-1)
            str = str.substr(0, str.indexOf("?"));
        return str;
    }
    */
    jQuery.fn.justtext = function() {
  
        return $(this)	.clone()
                .children()
                .remove()
                .end()
                .text();

    };
    
    // ------------------------------------------------------------------------

    // Theme Function
    // This theme inherits from VanillaTheme, so we call VanillaTheme's constructor
    // when this theme is instantiated.
       
    class Badass2018Theme extends VanillaTheme
    {
        constructor() {
            super();
            SWAM.replaceCSS("https://takenornot.github.io/badassplanestheme/bundle/style.css");
            //my initialization code goes here, after calling super()
        }
   
    
    /*    
        
        
        // This method called by StarMash when the game is loading
        
        injectTextures(files, textureInfo, flagTextureInfo, spriteInfo, textures,paf)
        {
            const toChange = [
                "gui.png",
                "items.png",
                "aircraft.png",
                "mountains.png",
                "map_sea.jpg",
                "map_sand.jpg",
                "map_forest.jpg",
                "map_sea_mask.jpg",
                "map_sand_mask.jpg",
                "map_rock_mask.jpg",
                "shadows.png"];
            
            for(let i in files)
            {
                var paf = 'dev';
                let fileName = getFileName(files[i]);

                if ($.inArray(fileName, toChange) > -1)
                {
                    files[i] = "//takenornot.github.io/badassplanestheme/assetsdev/" + paf + "/" + getFileName(files[i]);
                    //console.log("paf " + paf);
                }
            }
        }
        
        
        
    }
    */
    //let map = game.graphics.layers.map; // land layers container
    //map.mask = "//takenornot.github.io/badassplanestheme/assetsdev/map.json";
    // ------------------------------------------------------------------------
    
    
    
    _getFileName ( str ) {

      str = str.substring ( str.lastIndexOf ( '/' ) + 1 );

      if ( str.indexOf ( '?' ) > - 1 ) {
        str = str.substr ( 0, str.indexOf ( '?' ) );
      }

      return str;

    }

    _getCustomFiles () {

      return {
        'aircraft.png': 'aircraft.png',
        'gui.png': 'gui.png',
        'items.png': 'items.png',
        'map_forest.jpg': 'map_forest.jpg',
        //'map_rock.jpg': 'map_rock.jpg',
        'map_rock_mask.jpg': 'map_rock_mask.jpg',  
        'map_sand.jpg': 'map_sand.jpg',
        'map_sand_mask.jpg': 'map_sand_mask.jpg',  
        'map_sea.jpg': 'map_sea.jpg',
        'map_sea_mask.jpg': 'map_sea_mask.jpg',
        'mountains.png': 'mountains.png',
        //'particles.png': 'particles.png',
        'shadows.png': 'shadows.png'
      };

    }

    injectTextures ( files, textureInfo, flagTextureInfo, spriteInfo, textures ) {

      const customFiles = this._getCustomFiles ();

      for ( let key in files ) {

        const fileName = this._getFileName ( files[key] );

        if ( fileName in customFiles ) {

          files[key] = `https://takenornot.github.io/badassplanestheme/bundle/assets/${customFiles[fileName]}`; // Production

        }

      }

    }
    
    }
    
    
    
    // embed fork of Moz's Flag Borders 
    // https://github.com/fabiospampinato/airmash-swam-extensions/blob/master/extensions/flag_borders.js
    /* INIT */

    function init () {

        initHTML ();
        initStyle ();
        initEvents ();
        // window.bdosf = config.scalingFactor;
        // console.log("bdosf = " + bdosf)
        // window.flavor = settings.values1;
        // console.log(flavor);
    
        //if (flavor == 'default') {

        //    console.log("SETTTTTTINGS")

        //}
        
    }
    
    
    //if (game.gameType == SWAM.GAME_TYPE.CTF) {
    function initStyle () {

        const headstyle = `<link href="https://fonts.googleapis.com/css?family=Teko" rel="stylesheet"><link href="https://fonts.googleapis.com/css?family=B612:400,700" rel="stylesheet"> `
        const style = `
          <style>
            body{background: black url('https://takenornot.github.io/badassplanestheme/assetsdev/loading.png') 50% 15% no-repeat;}
            #logon .logo {background:url('https://takenornot.github.io/badassplanestheme/assetsdev/logosmall.png') 0 -5px no-repeat; background-size: 100% 100%;}
            
            #badassnews {
                position: absolute;
                top: 10px;
                background: black;
                margin-left: 50px;
                width: 300px;
                font-size : 11px;
                color: lime;
                border-radius: 10px;
            }
            #msg-destroyed, #msg-default, .message .playerbig, .message .player {
                font-size: 25px;
                padding: 0px 10px 0px 50px;
                vertical-align: middle;
            }
            .message .playerbig, .message .player {color:#fff500;}
            .message .playerbig .level, .message .player .level {color:white;}
            .team1 > .message .playerbig, .team1 > .message .player {color:#dc4f46;}
            .team2 > .message .playerbig, .team2 > .message .player {color:#4d7fd5;}
            #chatbox {font-family: 'B612', verdana,arial,helvetica,sans-serif;}
          </style>
        `;
        
        
        
        
        //$('#redditPanel').css('opacity', '1');
        // $('body').addClass('smoothload');
        $('head').append ( headstyle );
        $('body').append ( style );

    }
    function initHTML () {
        if ( $( "#badassnews" ).length ) {
                    // if element already exist, dont add it again
        }
        else {
            $('body').append( "<div id='badassnews'><ul><li>Sep 2 2018 - BRIGHT version available !</li><li>Ago 25 2018 - BEACH version available !</li><li>Jul 15 2018 - NUKLEAR version available !</li><li>May 23 2018 - CLASSIC version available ! </li></ul></div>");
        }
    }
    function initEvents () {
        
        // SWAM.on ( 'CTF_FlagEvent', onFlagEvent );

        SWAM.on ( 'CTF_MatchStarted', onMatchStarted );
        SWAM.on ( 'CTF_MatchEnded', onMatchEnded );
        //SWAM.on ( 'gamePrep', onGamePrep );
        // SWAM.on ( 'gameWipe', onGameWipe );

    }
    
    SWAM.on ( 'gameLoaded', init );
    
    /* EVENTS */
    
    function onMatchStarted () {
        toggleRed ( false );
        toggleBlue ( false );
        $('body').removeClass();
        $('body').addClass('team' + game.myTeam);
    };
    function onMatchEnded () {
        toggleRed ( false );
        toggleBlue ( false );
    };
    // function onGamePrep () {
    SWAM.on ( 'gamePrep', function (){
        // toggleRed ( false );
        // toggleBlue ( false );
        // SWAM.ZoomTo(bdosf);
        
        
        $("#badassnews").css({display: "none"});
        $('body').removeClass();
        
        // probably useless :
        // if ($('body').hasClass('team1') && (game.myTeam !== 'team1' )) {
        //    $('body').removeClass('team1')
        // } else if ($('body').hasClass('team2') && (game.myTeam !== 'team2' )) {
        //    $('body').removeClass('team2')
        // }
        
        // check gametype before
        if (game.gameType == SWAM.GAME_TYPE.CTF) {
            $('body').addClass('team' + game.myTeam);
            
            // var blueflagcheck = $( "#blueflag-name" ).justtext(); 
            // var redflagcheck = $( "#redflag-name" ).justtext();
            //if ( blueflagcheck.lenght > 0){
            // doesnt work for some reason (?) :
            /*
            if ( $( "#blueflag-name" ).justtext() !== null && $( "#blueflag-name" ).justtext() !== '' ){
                console.log("blue flag already out ");
            };
            // if ( redflagcheck.lenght > 0){
            if ( $( "#redflag-name" ).justtext() !== null && $( "#redflag-name" ).justtext() !== ''){
                console.log("red flag already out ");
            }
            */
        }
        
        
        
        
    });
    // function onGameWipe () {
    //    toggleRed ( false );
    //    toggleBlue ( false );
    // };
     
    /* API */

  function _toggleElement ( selector, force ) {
    if ( force === undefined ) {
      force = !$(selector).is ( ':visible' );
    }
    if ( force ) {
      UI.show ( selector );
    } else {
      UI.hide ( selector );
    }
  }

  function toggleBlue ( force ) {
    _toggleElement ( '#flag-border-blue-left', force );
    _toggleElement ( '#flag-border-blue-right', force );
  }

  function toggleRed ( force ) {
    _toggleElement ( '#flag-border-red-left', force );
    _toggleElement ( '#flag-border-red-right', force );
  }
    
    
    // ------------------------------------------------------------------------
    
    // We add some metadata to our theme class
    $.extend ( Badass2018Theme, {
        themeName: " 💀 Badass Planes Theme 💀 ",
        description: 'Badass Planes Theme',
        author: 'xplay'
    });
    
    /* THEME AB */

    class Badass2018ThemeAB extends Badass2018Theme {

        _getCustomFiles () {

              return $.extend ( super._getCustomFiles (), {
                'items.png': 'items_ab.png', 
                'aircraft.png': 'aircraftab.png',  
                'map_forest.jpg': 'map_forest_ab.jpg',
                'map_rock.jpg': 'map_rock_ab.jpg',
                //'map_rock_mask.jpg': 'map_rock_mask_brightbg.jpg',
                //'map_sand_mask.jpg': 'map_sand_mask_brightbg.jpg',
                'map_sea.jpg': 'map_sea_ab.jpg',
                'map_sand.jpg': 'map_sand_ab.jpg'
              });

        }

    }
    
    $.extend ( Badass2018ThemeAB, {
        themeName: '☀️AB theme test☀️',
        description: ' AB theme test ',
        author: 'xplay'
    });  
    
    /* THEME BRIGHT BACKGROUND */

    class Badass2018ThemeBright extends Badass2018Theme {

        _getCustomFiles () {

              return $.extend ( super._getCustomFiles (), {
                
                'map_forest.jpg': 'map_forest_brightbg.jpg',
                //'map_rock_mask.jpg': 'map_rock_mask_brightbg.jpg',
                //'map_sand_mask.jpg': 'map_sand_mask_brightbg.jpg',
                'map_sea.jpg': 'map_sea_brightbg.jpg',
                'map_sand.jpg': 'map_sand_brightbg.jpg'
              });

        }

    }
    
    $.extend ( Badass2018ThemeBright, {
        themeName: '☀️💀 Badass Planes Theme Bright bg 💀☀️',
        description: 'Badass Planes Theme Bright Background',
        author: 'xplay'
    });  
    
    /* THEME NUKEM */

    class Badass2018ThemeNukem extends Badass2018Theme {

        _getCustomFiles () {

              return $.extend ( super._getCustomFiles (), {
                //'map_forest.jpg': 'map_forest_grid.jpg',
                'map_rock_mask.jpg': 'map_rock_mask_nukem.jpg',
                'map_sand_mask.jpg': 'map_sand_mask_nukem.jpg',
                'map_sea.jpg': 'map_sea_nukem.jpg',
                'map_sand.jpg': 'map_sand_nukem.jpg'
              });

        }

    }

    $.extend ( Badass2018ThemeNukem, {
        themeName: ' ☢️💀 Badass Planes Theme Nuklear 💀☢️ ',
        description: 'Badass Planes Theme Nuklear',
        author: 'xplay'
    });  
    
    /* THEME BEACH */

    class Badass2018ThemeBeach extends Badass2018Theme {

        _getCustomFiles () {

              return $.extend ( super._getCustomFiles (), {
                'items.png': 'items_beach.png',   
                //'map_forest.jpg': 'map_forest_grid.jpg',
                'map_rock_mask.jpg': 'map_rock_mask_beach.jpg',
                'map_sand_mask.jpg': 'map_sand_mask_beach.jpg',
                'map_sea.jpg': 'map_sea_beach.jpg',
                'map_sand.jpg': 'map_sand_beach.jpg'
              });

        }

    }

    $.extend ( Badass2018ThemeBeach, {
        themeName: ' 🌴💀 Badass Planes Theme Beach 💀🌴 ',
        description: 'Badass Planes Theme Beach',
        author: 'xplay'
    }); 

    // ------------------------------------------------------------------------

    // Register our extension and theme
    SWAM.registerExtension({
        name: "Badass Planes Themes Bundle",
        id: "Badass2018bundle",
        description: "All-in-one Badassness",
        author: "xplay",
        version: "1.0.0",
        settingsProvider: createSettingsProvider(),
        themes: [ Badass2018Theme, Badass2018ThemeAB, Badass2018ThemeBright, Badass2018ThemeNukem, Badass2018ThemeBeach]
    });
}();