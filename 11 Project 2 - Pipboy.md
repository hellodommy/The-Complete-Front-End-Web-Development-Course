# Project #2 - Pipboy from Fallout 4

## Setup

1. Create a new project.
2. Download the Bootstrap files and add to directory.
3. Download *compressed, production jQuery 3.5.1* and add to directory.
4. Download tether.io and add to directory.
   
*Instructions the same as in previous Bootstrap lesson [here](../Front%20End%20Course/../Front%20End%20Course/Lesson/10%20Bootstrap%20Basics.md).*

5. Create our own js `pipboy.app.js` for our own Javascript files later.

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
    