# ayashii-website
This is the basic template used for [ayashii.info](https://ayashii.info).
The site uses the following javascript and css libraries:
* jQuery
* videojs
* libjass
* videojs-ass
* slick
* Font Awesome

The files for the libraries are locally included, but feel free to replace with a CDN instead.

## Usage
There are two main scripts found in /scripts/, namely **series** and **build_menu**.

**series** is used to create a new series given a folder of video files. The end result is:
* an html page
* a javascript file,
* a media folder containing
    * extracted fonts
    * extracted subtitle files
    * preview images/gifs
    * symbolic links to the video file

Examples of such usage can be found in **build_series** or by running
series with the help flag:
```
./series -h
```

**build_menu** is used to link an existing series to the main menu.

New entries to an existing menu are added in a stack-like method. New entries appear in the top row on the left, and previous
entries are shifted right, with overflow spilling down.

There is no help option for **build_menu**, thus it is strongly recommended to look at **build_entries** for guidance.
The general format of **build_menu** is as follows:
```
./build_menu [QUERY] [SERIES] [TITLE1] [TITLE2]
```

* [QUERY] is the search term query for the series. It is necessary to find information on the series. (MUST BE IN DOUBLE QUOTES)
* [SERIES] is the name of the series previously built (aka. the name of the html file).
* [TITLE1] is what will be displayed in pink.
* [TITLE2] is what will be displayed in white.

**build_menu** does not have a removal feature, unlike **series**. There are currently no plans to implement one.

## Notes/TODO

* Implement remaining options in series (-f, -m, -n, -r)
* Update **series** with building .m3u8 files with ffmpeg instead of using symbolic links
    * Has a drawback of now requiring extra space
* Redesign **build_menu** and the menu template
    * Currently has extra complexity, as divs are grouped and nested. Thus, **build_menu** became complex to compensate.
