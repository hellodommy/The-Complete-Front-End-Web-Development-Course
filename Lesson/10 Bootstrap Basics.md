# Bootstrap Basics

## Bootstrap Setup

- A collection of classes, default styling, Javascript methods.

1. Head to [Bootstrap website](https://getbootstrap.com/).
2. Download Bootstrap.
3. Copy the CSS and JS folders and paste them in your directory.
4. Folloow instructions on their [Getting Started](https://getbootstrap.com/docs/4.5/getting-started/introduction/).
   - Remember to fit this in: 
- 
    `<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">`

5. Link the CSS file to `bootstrap.min.css`.
   
    `<link rel="stylesheet" href="css/bootstrap.min.css">`

   - Minified CSS helps to make the file size smaller [read more](https://www.quora.com/What-is-the-differnce-between-min-css-and-css-in-bootstrap-files#:~:text=min.,make%20the%20file%20size%20smaller.&text=css%20file%20is%20minimized%20version,the%20page%20load%20time%20too.).
  
6. Create your own CSS file and link it *after* the Bootstrap CSS.

    `<link rel="stylesheet" href="css/style.css">`

## Navbar

- Top part of the website with logo and main navigation.
- Click [here](https://getbootstrap.com/docs/4.5/components/navbar/) for Bootstrap Nav documentation.

Current Navbar situation:

    <section class="navbar navbar-expand-lg navbar-light bg-light">
        <a href="#" class="navbar-brand">My site</a>

        <ul class="navbar-nav mr-auto">
            <li class="nav-item"><a class="nav-link" href="#">About me</a></li>
            <li class="nav-item"><a class="nav-link" href="#">Contact</a></li>
            <li class="nav-item"><a class="nav-link" href="#">FAQ</a></li>
        </ul>
    </section>

- When screen gets small enough, toggler will appear for you to dropdown the menu - this saves space.

Current Navbar situation (with toggler):

    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#">Navbar</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
    </nav>

Current Navbar (with menu items):

    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <a href="#" class="navbar-brand">My Bootstrap Site</a>
        <div class="collapse navbar-collapse" id="MyNav">
            <ul class="navbar-nav">
                <li class="nav-item">
                    <a href="#" class="nav-link">Home</a>
                </li>
                <li class="nav-item">
                    <a href="#" class="nav-link">Contact</a>
                </li>
                <li class="nav-item">
                    <a href="#" class="nav-link">FAQ</a>
                </li>
            </ul>
        </div>
    </nav>

- When you resize the window, the toggle menu will appear (and the horizontal menu items will disappear) but there won't be anything inside at the moment!
  - jQuery needs to be included.

1. Head to [jQuery website](https://code.jquery.com/) and copy the link address of the slim minified version. Include it just before the body tag ends.
2. Include this as well: `<script src="js/bootstrap.min.js"></script>`.
3. Download .zip on [tether.io](http://tether.io/) and merge the CSS and JS folders into our existing ones.
4. Link the CSS and JS tether files in our `index.html`.

Current Navbar (toggle menu shows items now):

    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#MyNav"
            aria-controls="MyNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <a href="#" class="navbar-brand">My Bootstrap Site</a>
        <div class="collapse navbar-collapse" id="MyNav">
            <ul class="navbar-nav">
                <li class="nav-item">
                    <a href="#" class="nav-link">Home</a>
                </li>
                <li class="nav-item">
                    <a href="#" class="nav-link">Contact</a>
                </li>
                <li class="nav-item">
                    <a href="#" class="nav-link">FAQ</a>
                </li>
            </ul>
        </div>
    </nav>

- This is done by replacing the target to our navbar name (in this case it is `MyNav`).
- This gives you the responsive utility of the navbar without writing your own CSS media queries.

## Forms

- Bootstrap allows you to section up your page responsively using containers. Read more [here](https://getbootstrap.com/docs/4.5/layout/grid/).
  - Within a container, we can add grid elements.
- Variable width content allows columns to resize based on the size of the window.
  - One column can have the properties: `col-md-4 col-lg-2 col-sm-6` etc and it will respond to different window sizes.

- View the Bootstrap documentation for forms [here](https://getbootstrap.com/docs/4.5/components/forms/).

Current form situation:

    <form>
        <div class="form-group">
            <label for="emailInput">Email address</label>
                <input class="form-control" type="email" id="emailInput" aria-describedby="emailHelp" placeholder="Email">
                <small id="emailHelp" class="form-text text-muted">
                This is the address of your email
                </small>
        </div>
        
    </form>

A select form:

    <label for="selectInput">
        Type
    </label>
    <select class="form-control">
        <option>Website downtime</option>
        <option>Custom coding</option>
        <option>This form doesn't</option>
    </select>

A checkbox:

    <div class="form-check">
        <label class="form-check-label">
            <input class="form-check-input" type="checkbox"> Check this out
        </label>
    </div>

## Buttons

- Read more about Bootstrap buttons [here](https://getbootstrap.com/docs/4.5/components/buttons/).
  - Predefined styles come with their respective colours (eg. green for success).
- You can turn links (`a` element) to buttons by adding the button tag.
- `btn-outline-primary` can be used for a less attention-grabbing button.
- We can adjust the size of buttons as well.