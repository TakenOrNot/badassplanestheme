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
    
    
            
    
    class Badass2018ThemeDev extends VanillaTheme
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
                "map_sea_mask.jpg",
                "map_sand_mask.jpg",
                "map_rock_mask.jpg"];

            for(let i in files)
            {
                let fileName = getFileName(files[i]);

                if ($.inArray(fileName, toChange) > -1)
                {
                    files[i] = "//raw.githubusercontent.com/TakenOrNot/badassplanestheme/master/assetsdev/" + settings.values1 + "/" + getFileName(files[i]);
                    //console.log("paf " + paf);
                }
            }
        }
        
    }
    
    tn = function() {
                    $.getJSON("assetsdev/map.json", function(an) {
                        Ht.polygons = new PIXI.Graphics, Ht.polygons.beginFill();
                        var cn = 0,
                            hn = 0,
                            fn = 0,
                            rn, on, sn, dn, ln, un, pn;
                        for (un = 0; un < an.length; un++)
                            for (sn = 0, pn = 0; pn < an[un].length; pn++) {
                                for (dn = [], ln = 0; ln < an[un][pn].length; ln += 2) rn = an[un][pn][ln] + hn, on = an[un][pn][ln + 1] + fn, dn.push(parseFloat(rn), -parseFloat(on)), hn = rn, fn = on, cn++;
                                Ht.polygons.drawPolygon(dn), 0 != sn && Ht.polygons.addHole(), sn++
                            }
                        Ht.polygons.endFill(), en(), jt.map.addChild(Ht.polygons), jt.map.mask = Ht.polygons
                    })
                };
    
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
        // SWAM.ZoomTo(bdosf);
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
    $.extend(Badass2018ThemeDev, {
        themeName: "Badass Planes Theme Dev",
        description: "Experimental",
        author: "xplay"
    });

    // ------------------------------------------------------------------------

    // Register our extension and theme
    SWAM.registerExtension({
        name: "Badass Planes Theme Extension DEV",
        id: "Badass2018dev",
        description: "Experimental",
        author: "xplay",
        version: "1.0.1",
        settingsProvider: createSettingsProvider(),
        themes: [ Badass2018ThemeDev ]
    });
}();