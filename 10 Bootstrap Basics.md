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