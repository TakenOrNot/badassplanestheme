// ------------------------------------------------------------------------
//   Badass Planes Theme for StarMash
// ------------------------------------------------------------------------
"use strict";

!function()
{
    var paf = '';
    // Settings
    
    function createSettingsProvider()
    {
        // This is the handler that will be executed when new settings are applied
        function onApply(values)
        {
            console.log ("New settings applied: ", values);
            settings = values;
            // window.flavor = settings.values1;
            console.log(settings.values1);
            paf = settings.values1;
            // if (flavor == 'default') {

            //    console.log("SETTTTTTINGS")

            // }
        }

        // Default values for the settings
        let settings = {
            values1: "default",
            
        };

        let sp = new SettingsProvider(settings, onApply);
    
        let section = sp.addSection("First Section");
        
        section.addValuesField("values1", "Flavor",
        {
            "default": "Default",
            "nuklear": "Nuklear"
        });
        
        
        
        // we return our SettingsProvider instance
        return sp;
    }
    
    
    //function getFlavor()
    //{
    //    flavor = settings.values1;
    //    return flavor;
    //}
    
    // ------------------------------------------------------------------------
    
    // Returns the filename part of an AirMash's image URL
    function getFileName(str)
    {
        str = str.substring(str.lastIndexOf('/')+1);
        if (str.indexOf("?")>-1)
            str = str.substr(0, str.indexOf("?"));
        return str;
    }

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
    
    
            
    
    class Badass2018ThemeBeach extends VanillaTheme
    {
        constructor() {
            super();
            SWAM.replaceCSS("https://takenornot.github.io/badassplanestheme/assetsdev/style.css");
            //my initialization code goes here, after calling super()
        }
        
        // This method called by StarMash when the game is loading
        injectTextures(files, textureInfo, flagTextureInfo, spriteInfo, textures,paf)
        {
            const toChange = [
                "gui.png",
                "items.png",
                "aircraft.png",
                "map_sea.jpg",
                "map_sand.jpg",
                "map_sea_mask.jpg",
                "map_sand_mask.jpg",
                "map_rock_mask.jpg"];
            
            for(let i in files)
            {
                let fileName = getFileName(files[i]);

                if ($.inArray(fileName, toChange) > -1)
                {
                    files[i] = "//raw.githubusercontent.com/TakenOrNot/badassplanestheme/master/assetsdev/beach/" + getFileName(files[i]);
                    //console.log("paf " + paf);
                }
            }
        }
        
    }

    //let map = game.graphics.layers.map; // land layers container
    //map.mask = "//raw.githubusercontent.com/TakenOrNot/badassplanestheme/master/assetsdev/map.json";
    // ------------------------------------------------------------------------
    
    // embed fork of Moz's Flag Borders 
    // https://github.com/fabiospampinato/airmash-swam-extensions/blob/master/extensions/flag_borders.js
    /* INIT */

    function init () {

        // initHTML ();
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
        // SWAM.ZoomTo(2500);
        // config.scalingFactor = 2500;
        const style = `
          <style>
            body{background: black url('https://raw.githubusercontent.com/TakenOrNot/badassplanestheme/master/assetsdev/loading.png') 50% 15% no-repeat;}
            #logon .logo {background:url('https://raw.githubusercontent.com/TakenOrNot/badassplanestheme/master/assetsdev/logosmall.png') 0 -5px no-repeat; background-size: 100% 100%;}
            #flag-border-red-right:not([style*="display: none"]){-webkit-animation: neonredright .5s ease-in-out alternate; animation-iteration-count: 11; background : radial-gradient(ellipse closest-side, rgba(255,17,119, .5) 32%, rgba(255,17,119,0) 67%, rgba(255,17,119,0) 100%); height : 4%; top: -2%; }
            #flag-border-blue-left:not([style*="display: none"]){-webkit-animation: neonblueleft .5s ease-in-out alternate; animation-iteration-count: 11; background : radial-gradient(ellipse closest-side, rgba(0,212,255,0.5) 32%, rgba(9,9,121,0) 67%, rgba(9,9,121,0) 100%); height : 4%; top: -2%; }
            #flag-border-blue-right {}
            #flag-border-red-left {}
            #flag-border-blue-left, #flag-border-blue-right, #flag-border-red-left, #flag-border-red-right {
                border-width: 0 0 0 0px;
            }
            #msg-destroyed, #msg-default, .message .playerbig, .message .player {
                font-size: 25px;
                padding: 0px 10px 0px 50px;
                vertical-align: middle;
            }
            .message .playerbig, .message .player {color:#dc4f46;}
            .message .playerbig .level, .message .player .level {color:white;}

            .team2 > .message .playerbig, .team2 > .message .player {color:#4d7fd5;}
          </style>
        `;
        //$('#redditPanel').css('opacity', '1');
        // $('body').addClass('smoothload');
        // $('head').append ( style );
        $('body').append ( style );

    }
    
    function initEvents () {
        
        // SWAM.on ( 'CTF_FlagEvent', onFlagEvent );

        SWAM.on ( 'CTF_MatchStarted', onMatchStarted );
        SWAM.on ( 'CTF_MatchEnded', onMatchEnded );
        // SWAM.on ( 'gamePrep', onGamePrep );
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
    SWAM.on ( 'gamePrep', function (){
        // toggleRed ( false );
        // toggleBlue ( false );
        // SWAM.ZoomTo(bdosf);
        var blueflagcheck = $( "#blueflag-name" ).justtext(); 
        var redflagcheck = $( "#redflag-name" ).justtext();
        if ( blueflagcheck.lenght > 0){
            console.log("flag already out " + blueflagcheck);
        };
        if ( redflagcheck.lenght > 0){
            console.log("flag already out " + redflagcheck);
        }
        
        
        $('body').removeClass();
        // probably useless :
        // if ($('body').hasClass('team1') && (game.myTeam !== 'team1' )) {
        //    $('body').removeClass('team1')
        // } else if ($('body').hasClass('team2') && (game.myTeam !== 'team2' )) {
        //    $('body').removeClass('team2')
        // }
        
        // TODO : check gametype before
        $('body').addClass('team' + game.myTeam);
        
        
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
    $.extend(Badass2018ThemeBeach, {
        themeName: "Badass Planes Theme Beach",
        description: "Experimental",
        author: "xplay"
    });

    // ------------------------------------------------------------------------

    // Register our extension and theme
    SWAM.registerExtension({
        name: "Badass Planes Theme Extension BEACH Edition",
        id: "Badass2018beach",
        description: "Experimental",
        author: "xplay",
        version: "1.0.1",
        settingsProvider: createSettingsProvider(),
        themes: [ Badass2018ThemeBeach ]
    });
}();