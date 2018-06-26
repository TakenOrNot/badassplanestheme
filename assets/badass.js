// ------------------------------------------------------------------------
//   Badass Planes Theme for StarMash
// ------------------------------------------------------------------------
"use strict";

!function()
{
    function appendBadassStyles()
{
    const template = 
    '<style id="Badass2018_Styles" type="text/css">
        .badge.gold {
            background-image:  url('data:image/png;base64,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TUw6Y29tLmFkb2JlLnhtcAAAAAAAPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iWE1QIENvcmUgNS40LjAiPgogICA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPgogICAgICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIgogICAgICAgICAgICB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iCiAgICAgICAgICAgIHhtbG5zOnRpZmY9Imh0dHA6Ly9ucy5hZG9iZS5jb20vdGlmZi8xLjAvIgogICAgICAgICAgICB4bWxuczpleGlmPSJodHRwOi8vbnMuYWRvYmUuY29tL2V4aWYvMS4wLyI+CiAgICAgICAgIDx4bXA6TW9kaWZ5RGF0ZT4yMDE4LTA2LTI2VDE2OjA2Ojk4PC94bXA6TW9kaWZ5RGF0ZT4KICAgICAgICAgPHhtcDpDcmVhdG9yVG9vbD5QaXhlbG1hdG9yIDMuMDwveG1wOkNyZWF0b3JUb29sPgogICAgICAgICA8dGlmZjpPcmllbnRhdGlvbj4xPC90aWZmOk9yaWVudGF0aW9uPgogICAgICAgICA8dGlmZjpDb21wcmVzc2lvbj41PC90aWZmOkNvbXByZXNzaW9uPgogICAgICAgICA8dGlmZjpSZXNvbHV0aW9uVW5pdD4xPC90aWZmOlJlc29sdXRpb25Vbml0PgogICAgICAgICA8dGlmZjpZUmVzb2x1dGlvbj43MjwvdGlmZjpZUmVzb2x1dGlvbj4KICAgICAgICAgPHRpZmY6WFJlc29sdXRpb24+NzI8L3RpZmY6WFJlc29sdXRpb24+CiAgICAgICAgIDxleGlmOlBpeGVsWERpbWVuc2lvbj40MDwvZXhpZjpQaXhlbFhEaW1lbnNpb24+CiAgICAgICAgIDxleGlmOkNvbG9yU3BhY2U+MTwvZXhpZjpDb2xvclNwYWNlPgogICAgICAgICA8ZXhpZjpQaXhlbFlEaW1lbnNpb24+NDA8L2V4aWY6UGl4ZWxZRGltZW5zaW9uPgogICAgICA8L3JkZjpEZXNjcmlw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')
        }
    .badge.silver {
            background-image:   url('data:image/png;base64,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TUw6Y29tLmFkb2JlLnhtcAAAAAAAPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iWE1QIENvcmUgNS40LjAiPgogICA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPgogICAgICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIgogICAgICAgICAgICB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iCiAgICAgICAgICAgIHhtbG5zOnRpZmY9Imh0dHA6Ly9ucy5hZG9iZS5jb20vdGlmZi8xLjAvIgogICAgICAgICAgICB4bWxuczpleGlmPSJodHRwOi8vbnMuYWRvYmUuY29tL2V4aWYvMS4wLyI+CiAgICAgICAgIDx4bXA6TW9kaWZ5RGF0ZT4yMDE4LTA2LTI2VDE2OjA2OjQxPC94bXA6TW9kaWZ5RGF0ZT4KICAgICAgICAgPHhtcDpDcmVhdG9yVG9vbD5QaXhlbG1hdG9yIDMuMDwveG1wOkNyZWF0b3JUb29sPgogICAgICAgICA8dGlmZjpPcmllbnRhdGlvbj4xPC90aWZmOk9yaWVudGF0aW9uPgogICAgICAgICA8dGlmZjpDb21wcmVzc2lvbj41PC90aWZmOkNvbXByZXNzaW9uPgogICAgICAgICA8dGlmZjpSZXNvbHV0aW9uVW5pdD4xPC90aWZmOlJlc29sdXRpb25Vbml0PgogICAgICAgICA8dGlmZjpZUmVzb2x1dGlvbj43MjwvdGlmZjpZUmVzb2x1dGlvbj4KICAgICAgICAgPHRpZmY6WFJlc29sdXRpb24+NzI8L3RpZmY6WFJlc29sdXRpb24+CiAgICAgICAgIDxleGlmOlBpeGVsWERpbWVuc2lvbj40MDwvZXhpZjpQaXhlbFhEaW1lbnNpb24+CiAgICAgICAgIDxleGlmOkNvbG9yU3BhY2U+MTwvZXhpZjpDb2xvclNwYWNlPgogICAgICAgICA8ZXhpZjpQaXhlbFlEaW1lbnNpb24+NDA8L2V4aWY6UGl4ZWxZRGltZW5zaW9uPgogICAgICA8L3JkZjpEZXNjcmlw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')
        }
    .badge.bronze {
            background-image:    url('data:image/png;base64,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TUw6Y29tLmFkb2JlLnhtcAAAAAAAPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iWE1QIENvcmUgNS40LjAiPgogICA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPgogICAgICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIgogICAgICAgICAgICB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iCiAgICAgICAgICAgIHhtbG5zOnRpZmY9Imh0dHA6Ly9ucy5hZG9iZS5jb20vdGlmZi8xLjAvIgogICAgICAgICAgICB4bWxuczpleGlmPSJodHRwOi8vbnMuYWRvYmUuY29tL2V4aWYvMS4wLyI+CiAgICAgICAgIDx4bXA6TW9kaWZ5RGF0ZT4yMDE4LTA2LTI2VDE2OjA2Ojk1PC94bXA6TW9kaWZ5RGF0ZT4KICAgICAgICAgPHhtcDpDcmVhdG9yVG9vbD5QaXhlbG1hdG9yIDMuMDwveG1wOkNyZWF0b3JUb29sPgogICAgICAgICA8dGlmZjpPcmllbnRhdGlvbj4xPC90aWZmOk9yaWVudGF0aW9uPgogICAgICAgICA8dGlmZjpDb21wcmVzc2lvbj41PC90aWZmOkNvbXByZXNzaW9uPgogICAgICAgICA8dGlmZjpSZXNvbHV0aW9uVW5pdD4xPC90aWZmOlJlc29sdXRpb25Vbml0PgogICAgICAgICA8dGlmZjpZUmVzb2x1dGlvbj43MjwvdGlmZjpZUmVzb2x1dGlvbj4KICAgICAgICAgPHRpZmY6WFJlc29sdXRpb24+NzI8L3RpZmY6WFJlc29sdXRpb24+CiAgICAgICAgIDxleGlmOlBpeGVsWERpbWVuc2lvbj40MDwvZXhpZjpQaXhlbFhEaW1lbnNpb24+CiAgICAgICAgIDxleGlmOkNvbG9yU3BhY2U+MTwvZXhpZjpDb2xvclNwYWNlPgogICAgICAgICA8ZXhpZjpQaXhlbFlEaW1lbnNpb24+NDA8L2V4aWY6UGl4ZWxZRGltZW5zaW9uPgogICAgICA8L3JkZjpEZXNjcmlw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')
        }
    </style>';
    
    $("body").append(template);
}
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
                    files[i] = "//raw.githubusercontent.com/TakenOrNot/badassplanestheme/master/assets/" + getFileName(files[i]);
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