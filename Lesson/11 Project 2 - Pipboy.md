# Project #2 - Pipboy from Fallout 4

## Setup

1. Create a new project.
2. Download the Bootstrap files and add to directory.
3. Download *compressed, production jQuery 3.5.1* and add to directory.
4. Download tether.io and add to directory.
   
*Instructions the same as in previous Bootstrap lesson [here](10%20Bootstrap%20Basics.md).*

1. Create our own js `pipboy.app.js` for our own Javascript files later.

## Navbar

Current Navbar situation:

    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
                <li class="navbar-item active">
                    <a class="nav-link" href="#">STAT</a>
                </li>
                <li class="navbar-item">
                    <a class="nav-link" href="#">INV</a>
                </li>
                <li class="navbar-item">
                    <a class="nav-link" href="#">DATA</a>
                </li>
                <li class="navbar-item">
                    <a class="nav-link" href="#">MAP</a>
                </li>
                <li class="navbar-item">
                    <a class="nav-link" href="#">RADIO</a>
                </li>
            </ul>
        </div>
    </nav>

## Main Page

Tab situation (note the tag IDs):
Read more [here](https://getbootstrap.com/docs/4.5/components/navs/).

    <ul class="nav nav-tabs">
        <li class="nav-item">
            <a class="nav-link" href="#status" data-toggle="tab" role="tab">STATUS</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="#special" data-toggle="tab">SPECIAL</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="#perks" data-toggle="tab">PERKS</a>
        </li>
    </ul>

Add the tab content:

    <div class="tab-content">
        <div class="tab-pane active" id="status" role="tabpanel">STATUS</div>
        <div class="tab-pane" id="special" role="tabpanel">SPECIAL</div>
        <div class="tab-pane" id="perks" role="tabpanel">PERKS</div>
    </div>
    
## Image and Footer

1. Get the vault boy image and make the background transparent (use Gimp/Photoshop).
2. Add the image to the STATUS tab:
   
        <div class="center-image">
            <img src="pipboy.png">
        </div>

3. Configure the CSS:
   
       .center-image img {
           margin: auto;
           display: block;
           position: relative;
           max-height: 300px;
           margin-top: 100px;
           filter: grayscale(1) sepia(100%) hue-rotate(55deg) saturate(11) brightness(1) contrast(1.2);
       }

4. Add the footer:

          <nav class="navbar navbar-expand-lg navbar-light bg-light pip-footer">
              <div class="row">
                  <div class="col-3">
                      HP 90/90
                  </div>
                  <div class="col-6">
                      LEVEL 1
                      <div class="level-progress"></div>
                  </div>
                  <div class="col-3">
                      AP 50/50
                  </div>
              </div>
          </nav>

5. Configure CSS for the footer:

            .pip-footer {
                position: fixed;
                bottom: 0;
                width: calc(100% - 20px);
                margin: 10px;
            }

## Colours

- Look for images you want to replicate and use the colour picker to get the exact colour hex.
- If colours of components are not changing accordingly, look at their elements and make sure they are targetted correctly.

Current colour situation for the fluorescent green on black look:

    body {
        color: #14fe17;
        background: #272b23;
    }

    ul.navbar-nav > li.navbar-item > a.nav-link,  ul.navbar-nav > li.navbar-item.active > a.nav-link {
        color: #14fe17;
    }

    ul.nav > li.nav-item > a.nav-link {
        color: #14fe17;
    }

## Font and Styling

1. Download `.ttf` file and drag it to project root directory.
2. Create the font in CSS.

    @font-face {
        font-family: Pipboy;
        src: url('../monofonto.ttf');
    }

After that, you can use the font as usual.

Current styling situation:

    .navbar {
        border-bottom: 2px solid;
        margin: 0px 10px;
    }

    .navbar::before, .navbar::after {
        height: 6px;
        width: 2px;
        content: "";
        position: absolute;
        display: block;
        z-index: 5000;
        background: #14fe17;
        bottom: -8px;
    }

    .navbar::before {
        left: 0px;
    }

    .navbar::after {
        right: 0px;
    }

    .navbar-nav {
        width: 100%;
    }

    .navbar-light ul.navbar-nav > li {
        display: block;
        position: relative;
        width: 100%;
    }

    .navbar-light .navbar-nav > li.navbar-item > .nav-link {
        text-align: center;
        width: 50%;
        margin: auto;
    }

These are used to justify the menu text and add borders.

## Scanline

- Effect to make the screen look like a game console.

    body::after {
        height: 100%;
        width: 100%;
        content: "";
        position: absolute;
        top: 0px;
        left: 0px;
        background: repeating-linear-gradient(0deg, rgba(0, 0, 0, .5), rgba(0, 0, 0, .4) 1px, transparent 1px, transparent 2px);
        opacity: .5;
        z-index: 1000000;
        pointer-events: none;
    }

Without the `pointer-events: none`, the buttons on the page cannot be clicked through.

## Navigation Styling

The following adds the "box effect" to active menu items:

    .navbar-light .navbar-nav > li.navbar-item > .nav-link {
        text-align: center;
        width: 50%;
        margin: auto;
        font-size: 32px;
        line-height: 20px;
        padding-bottom: 0px;
        z-index: 50;
        position: relative;
        background: #272b23;
        color: #14fe17;
    }

    .navbar-item.active::before {
        content: "";
        position: absolute;
        background: #f00;
        width: 100%;
        height: 14px;
        top: 24px;
        background: #272b23;
        border-left: 2px solid;
        border-right: 2px solid;
        border-top: 2px solid;
    }

## Tabs

- CSS nth child allows you to target the nth instance of a certain parent. Read more [here](https://www.w3schools.com/cssref/sel_nth-child.asp).

The following adds a gradient effect to nav tab items:

    .nav-tabs > li:nth-child(2) > a {
        opacity: .6;
    }

    .nav-tabs > li:nth-child(3) > a {
        opacity: .3;
    }

## Progress Bars

The following creates a progress bar with `level-progress-indicator` being wrapped by `level-progress`.

.level-progress {
    width: 70%;
    height: 10px;
    border: 2px solid;
    display: inline-block;
}

.level-progress-indicator {
    width: 30%;
    height: 8px;
    background-color: #14fe17;
    position: relative;
}