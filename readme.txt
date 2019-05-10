
statFire documentation & cs2830 final project criteria description

url: http://ec2-52-14-240-140.us-east-2.compute.amazonaws.com/index.php
github repo: https://github.com/averywald/statFire

Table of Contents =============================================================
I. Purpose
II. Requirements
III. Using statFire

I. Purpose ====================================================================

statFire is a data visualization and analyzation tool currently armed with
nba stats.  I chose to build statFire in such a way as to make it easy to
see data in simple, yet powerful format - after all, everyone's heard of
'visual learners'.  

II. Requirements ==============================================================

    1. HTML5 & CSS3
        - 5 required tags
            - access.php
            - index.php
        - CSS3
            - stylesheets folder

        * i used sass when writing, but sass has to be compiled into
        css, since it's not a web standard.
            - 'Live Sass Compiler' VS Code extension is insanely helpful
                - https://github.com/ritwickdey/vscode-live-sass-compiler

    2. Consistent Interface
        - abstracted sass/css
            - i found that creating separate, modular stylesheets for certain
              UI elements allowed me to build content faster and easier
            - /stylesheets/
                - index.css
                - links.css
                - login.css
                - styles.css 
                - tabs.css
        
    3. Common Interface Elements
        - navbar
            - index.php : line 27
            - access.php : line 38
        - footer
            - index.php : line 50
            - access.php : line 81
    4. Public & Private Functionality
        - public
            - home page content
                -
        - private
            - dashboard content
    5. Login Feature
        - index.php
        - handleLogin.php
        - logout.php
    6. PHP
        - access.php
    7. GET & POST
        - GET
        - POST
    8. Form Elements
        - search bar
    9. Input Feedback
        - login error messages
            - index.php
    10. Photos
        - home page content
    11. Video
        - home page content
    12. JS
        - /js/
            - actions.js
            - data.js
            - graph.js
    13. jQuery
        - /js/
            - actions.js
            - data.js
            - graph.js
    14. jQuery UI API
        - $.toggle()

    15. AJAX
        -

III. Using statFire ===========================================================

statFire's dashboard was designed to be sleek, simple, intuitive and 
surprisingly explorable.  Its functionality liberally utilizes AJAX, 
jquery, lodash to remain lightweight; seamlessly delivering and handling
data behind the scenes to showcase the power of plotyjs 
(https://plot.ly/javascript/).

    1. navbar - The navbar handles the 
        - home button
        - logout button
       and 