
statFire documentation & cs2830 final project criteria description
-------------------------------------------------------------------------------

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
                - blurb.css
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
                - index.php
                - the landing page has a fancy design
                  and contains the login portal
        - private
            - dashboard content
                - access.php
                - statFire's tools are private, and you
                  must log in to use them

    5. Login Feature
        - index.php
            - login form : line 51
                - executes  
        - /login/
            - handleLogin.php
            - logout.php

    6. PHP
        - access.php
            - prevent url hacking : line 6
                - checks if $_SESSION superglobals
                  are set, and redirects to index.php
                  if not.

    7. GET & POST
        - GET
            - /js/data.js
                - request() : line 34
                    - ajax utility function that all
                      data filters are passed through
                - getAllTeams() : line 148
                    - ajax request to different json
                      file 

        - POST
            - index.php
                - form method POST : line 51
                    - posts the login credentials
                      to /login/handleLogin.php
            - /login/handleLogin.php : line 6
                - check if submit button POST is set
                

    8. Form Elements
        - search bar
            - access.php : line 54

    9. Input Feedback
        - login error messages
            - index.php : line 52
                - displays error message passed as
                  $_SESSION variable from /login/handleLogin.php
            
    10. Photos
        - home page content
            - index.php
                - parallax background

    11. Video
        - none :(

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
        - /js/actions.js
            - $.slideToggle() : line 55
                - shows / hides the search bar

    15. AJAX
        - /js/data.js
            - request() : line 34
                - ajax utility function that all
                    data filters are passed through
            - getAllTeams() : line 148
                - ajax request to different json
                    file 

III. Using statFire ===========================================================

statFire's dashboard was designed to be sleek, simple, intuitive and 
surprisingly explorable.  Its functionality liberally utilizes AJAX, 
jquery, lodash to remain lightweight; seamlessly delivering and handling
data behind the scenes to showcase the power of plotyjs 
(https://plot.ly/javascript/).

    1. navbar - The navbar handles the home, logout and filter mode buttons,
       as well as the search bar.  The filter modes 'teams' and 'positions'
       dynamically load datasets via AJAX to the side panels of the dashboard.
       The search bar allows you to search for specific players.  Clicking
       on an active filter mode button will reset the side panels.
           
           * you must correctly spell and capitalize the name in the search
             bar

    2. side panels - These trigger plotly graphs to populate the main content
       area when you click a team, player or position.  Content is loaded
       dynamically, with the left panel filtering the right.

    3. module tabs - The respective tabs show/hide corresponding graphs.
       The tab categories are position average, team average, and player
       totals.  You can activate them as you like, but are ultimately
       controlled by side panel click events.

    4. toolbar - Tools in the toolbar consist of a clear graph button, which
       clears the currently active tab, and the active graph entity stack,
       which allows you to open up the tab it correlates with.