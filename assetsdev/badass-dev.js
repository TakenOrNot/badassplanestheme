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

    // ------------------------------------------------------------------------

    // Theme Function
    // This theme inherits from VanillaTheme, so we call VanillaTheme's constructor
    // when this theme is instantiated.
    class Badass2018ThemeDev extends VanillaTheme
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
                "items_dev.png",
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
    
    // embed fork of Moz's Flag Borders 
    // https://github.com/fabiospampinato/airmash-swam-extensions/blob/master/extensions/flag_borders.js
    /* INIT */

    function init () {

        initHTML ();
        initStyle ();
        initEvents ();

    }
    
    function initHTML () {

        const html = `
          <div id="flag-border-blue-left"></div>
          <div id="flag-border-blue-right"></div>
          <div id="flag-border-red-left"></div>
          <div id="flag-border-red-right"></div>
        `;

        $('body').append ( html );

        toggleRed ( false );
        toggleBlue ( false );

    }
    
    function initStyle () {

        const style = `
          <style>
            #flag-border-blue-left, #flag-border-red-left, #flag-border-blue-right, #flag-border-red-right {
              pointer-events: none;
              position: fixed;
              top: 0;
              bottom: 0;
              width: 50vw;
              box-sizing: border-box;
              opacity: .75;
            }
            #flag-border-blue-left, #flag-border-red-left {
              left: 0;
              
            }
            #flag-border-blue-right, #flag-border-red-right {
              right: 0;
              
            }
            #flag-border-blue-left, #flag-border-blue-right {
              
            }
            #flag-border-blue-left {
              z-index: 1;
            }
            #flag-border-red-left, #flag-border-red-right {
              
            }
            #flag-border-red-right {
              z-index: 1;
            }
          </style>
        `;

        $('head').append ( style );

    }
    
    function initEvents () {
        
        SWAM.on ( 'CTF_FlagEvent', onFlagEvent );

        SWAM.on ( 'CTF_MatchStarted', onMatchStarted );

    }
    
    SWAM.on ( 'gameLoaded', init );
    
    /* EVENTS */
    
    function onFlagEvent ( event, team, verb ) {

        const taken = ( verb === 'taken' );

        if ( team === 1 ) {
            toggleBlue ( taken );
        } else if ( team === 2 ) {
            toggleRed ( taken );
        }

    }
    
    function onMatchStarted () {
        toggleRed ( false );
        toggleBlue ( false );
    };
    
     /* API */

    function _toggleElement ( selector, force ) {
        if ( force === undefined ) {
            force = !$(selector).is ( ':visible' );
        }
        if ( force ) {
            UI.show ( selector );
            $( selector ).addClass("active");
        } else {
            UI.hide ( selector );
             $( selector ).removeClass("active");
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
    $.extend(Badass2018ThemeDev, {
        themeName: "Badass Planes Theme Dev",
        description: "As the name says!!",
        author: "xplay"
    });

    // ------------------------------------------------------------------------

    // Register our extension and theme
    SWAM.registerExtension({
        name: "Badass Planes Theme Extension DEV",
        id: "Badass2018dev",
        description: "Badass Planes Theme DEV",
        author: "xplay",
        version: "1.0",
        themes: [ Badass2018ThemeDev ]
    });
}();