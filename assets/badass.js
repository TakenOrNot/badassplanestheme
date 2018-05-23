// ------------------------------------------------------------------------
//   Badass Planes Theme for StarMash
// ------------------------------------------------------------------------
"use strict";

!function()
{
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
    class Badass2018Theme extends VanillaTheme
    {
        //constructor() {
            //super();
            //my initialization code goes here, after calling super()
        //}

        // This method called by StarMash when the game is loading
        injectTextures(files, textureInfo, flagTextureInfo, spriteInfo, textures)
        {
            const toChange = [
                "aircraft.png"];

            for(let i in files)
            {
                let fileName = getFileName(files[i]);

                if ($.inArray(fileName, toChange) > -1)
                {
                    files[i] = "//raw.githubusercontent.com/TakenOrNot/badassplanestheme/master/assets/" + getFileName(files[i]);
                }
            }
        }

        function customSkin(Bt) {
            if ("Badass" == Bt.name) {
                Xt = {
                    raptor: ["aircraft", [788, 264, 256, 256]]
                }
            }
        }
        
    }

    // We add some metadata to our theme class
    $.extend(Badass2018Theme, {
        themeName: "Badass Planes Theme",
        description: "As the name says!!",
        author: "xplay"
    });

    // ------------------------------------------------------------------------

    // Register our extension and theme
    SWAM.registerExtension({
        name: "Badass Planes Theme Extension",
        id: "Badass2018",
        description: "Badass Planes Theme",
        author: "xplay",
        version: "1.0",
        themes: [ Badass2018Theme ]
    });
}();