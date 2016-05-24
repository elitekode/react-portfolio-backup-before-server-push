/*
 * Based on the template in Web Starter Kit : https://github.com/google/web-starter-kit/blob/master/app/index.html
 * To add to the config, add an object:
 * {
 *  type: 'link' | 'meta',
 *  sizes: 'widthxheight',
 *  rel: 'rel value'
 *  filename: <Name of your file'
 * }
 */

// Import all your needed files first (webpack will grab the url)

import favicon from 'images/favicon.png';

const config = {
  link: [
    { 'rel': 'icon', 'href': favicon },
    { 'rel': 'stylesheet', 'href': 'https://fonts.googleapis.com/css?family=Roboto+Condensed', 'type': 'text/css' },
    { 'rel': 'stylesheet', 'href': '/assets/styles/main.css' },
  ],
  meta: [
    { 'charset': 'utf-8' },
    // Setting IE=edge tells Internet Explorer to use the latest engine to render the page and execute Javascript
    { 'http-equiv': 'X-UA-Compatible', 'content': 'IE=edge' },
    //  Meta descriptions are commonly used on search engine result pages to display preview snippets for a given page.
    { 'name': 'description', 'content': 'Kochan Desai' },
    // Mobile Safari introduced this tag to let web developers control the viewport's size and scale
    // the zoom level when the page is first loaded
    { 'name': 'viewport', 'content': 'width=device-width, initial-scale=1,minimum-scale=1.0,maximum-scale=1.0,width=device-width,user-scalable=yes' },
    // Add to homescreen for Chrome on Android
    { 'name': 'mobile-web-app-capable', 'content': 'yes' },
    // Add to homescreen for Safari on IOS
    { 'name': 'apple-mobile-web-app-capable', 'content': 'yes' },
    { 'name': 'apple-mobile-web-app-status-bar-style', 'content': 'black' },
    { 'name': 'apple-mobile-web-app-title', 'content': 'Kochan Desai' },
    // Tile icon for Win8 (144x144 + tile color)
    { 'name': 'msapplication-TileColor', 'content': '#3372DF' }
  ]
};

export default config;
