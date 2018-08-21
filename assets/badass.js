// ------------------------------------------------------------------------
//   Badass Planes Theme for StarMash
// ------------------------------------------------------------------------
"use strict";

!function()
{
    
    
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
    class Badass2018Theme extends VanillaTheme
    {
        constructor() {
            super();
            SWAM.replaceCSS("https://takenornot.github.io/badassplanestheme/assets/style.css");
            //my initialization code goes here, after calling super()
        }

        // This method called by StarMash when the game is loading
        injectTextures(files, textureInfo, flagTextureInfo, spriteInfo, textures)
        {
            const toChange = [
                "gui.png",
                "items.png",
                "aircraft.png",
                "arrow_indicator.png",
                "map_sea_mask.jpg",
                "map_sand_mask.jpg",
                "map_rock_mask.jpg"];

            for(let i in files)
            {
                let fileName = getFileName(files[i]);

                if ($.inArray(fileName, toChange) > -1)
                {
                    files[i] = "//raw.githubusercontent.com/TakenOrNot/badassplanestheme/master/assets/" + getFileName(files[i]);
                }
            }
        }
        
    }
    
    // ------------------------------------------------------------------------
    
    // Custom look for Moz's Flag Borders 
    // https://github.com/fabiospampinato/airmash-swam-extensions/blob/master/extensions/flag_borders.js
    /* INIT */

    function init () {

        // initHTML ();
        initStyle ();
        initEvents ();

    }
    
    
    
    function initStyle () {
        // SWAM.ZoomTo(2500);
        // config.scalingFactor = 2500;
        const headstyle = `<link href="https://fonts.googleapis.com/css?family=Teko" rel="stylesheet">`
        const style = `
          <style>
            body{background: black url('https://raw.githubusercontent.com/TakenOrNot/badassplanestheme/master/assets/loading.png') 50% 15% no-repeat;}
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
          </style>
        `;
        //$('#redditPanel').css('opacity', '1');
        // $('body').addClass('smoothload');
        $('head').append ( headstyle );
        $('body').append ( style );

    }
    
    function initEvents () {
        
        // SWAM.on ( 'CTF_FlagEvent', onFlagEvent );

        SWAM.on ( 'CTF_MatchStarted', onMatchStarted );
        SWAM.on ( 'CTF_MatchEnded', onMatchEnded );
        SWAM.on ( 'gamePrep', onGamePrep );
        // SWAM.on ( 'gameWipe', onGameWipe );

    }
    
    SWAM.on ( 'gameLoaded', init );
    
    /* EVENTS */
    
    
    
    function onMatchStarted () {
        toggleRed ( false );
        toggleBlue ( false );
    };
    function onMatchEnded () {
        toggleRed ( false );
        toggleBlue ( false );
    };
    function onGamePrep () {
        // toggleRed ( false );
        // toggleBlue ( false );
        var blueflagcheck = $( "#blueflag-name" ).justtext(); 
        var redflagcheck = $( "#redflag-name" ).justtext();
        if ( blueflagcheck.lenght > 0){
            console.log("flag already out " + blueflagcheck);
        };
        if ( redflagcheck.lenght > 0){
            console.log("flag already out " + redflagcheck);
        }
        
    };
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
    $.extend(Badass2018Theme, {
        themeName: "Badass Planes Theme",
        description: "As the name says !",
        author: "xplay"
    });

    // ------------------------------------------------------------------------

    // Register our extension and theme
    SWAM.registerExtension({
        name: "Badass Planes Theme Extension",
        id: "Badass2018",
        description: "As the name says !",
        author: "xplay",
        version: "1.0",
        themes: [ Badass2018Theme ]
    });
}();