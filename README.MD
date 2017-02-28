
# About
This is a simple cordova, VueJS2, Webpack2, PostCSS sample application. Its a marriage of all that is new and great but on a platform that is familiar at Mutual of Omaha. We use cordova for multi-platform applications, MDP as an example.

## Technologies
- Cordova
- VueJS 2
	- Axios
- Webpack 2
- PostCSS

# Structure
All our code lives in src.
- index.html is our main entry point. This is needed by cordova, it loads our starting vue
- app.vue is our starting vue point. It could be likened to an index page for this application. We place our router in app.vue
- routes.js list our routes used in app.vue

- import.js is where we import our js and what not for webpack
- index.css is another import location, import.js loads index.css for wepback parsing.

# How To:
`--lr` for live reload.

`cordova run browser -- --lr` for live reload in browser

`cordova run ios` or `cordova run android` for apps. `-- --lr` might not work on those very well, ios kills after it's done building. 


## Author(s)
- Spencer Stark 