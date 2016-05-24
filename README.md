#### This project is my P.ortf_olio 

It uses the react HACK stack similar to the yeoman express generator.

The benefits of this stack is that it allows instantaneous redux integration. 

The main issue with react is the lack of information or improvement

With this design patter there is a greate opportunity to experriment with the react and its benefits while also staying within my growing comfort zone 


# React Fol_io


o
- Blog
- Past Work
- Hire Me
- About Me
- Mail Me or leave me a messge 

##Frameworks
- React
- Node
- Redux
- SCSS
- Express 4.x
- Mongoose

**Deployment**

Heroku
```bash
heroku create

# Deploy to Heroku server
git push heroku master

# Database on Heroku
=# or
heroku addons:add mongolab

# Open Link in browser
heroku open

```

## Demo site:


## Instructions

### Build & Dev

**Installation**
```bash
# Install node modules - this includes those for production and development
# You only need to do this once :)
npm install
```

**Development**

```bash
# Starts the server with Hot Reloading
# Run webpack through webpack.config.dev.js
npm run dev

```
Note: If you get an error saying file not found, run `npm run build && npm run dev` (because the server relies on the compiled file to exist in order to serve those files).

**Production**

Run the commands below for a production build, i.e. what is deployed to Heroku. If you are deploying to Heroku or similar, we assume that you serving the pages over HTTPS.

```bash
# Clean public folder
# Run webpack through webpack.config.prod.js
npm run build

# Start server
## Note: You need MongoDB running
npm start
```

## Unit Tests

Testing with:
- `karma` as test runner
	- `karma.conf.js` for the main karma configuration (it has webpack configurations)
	- `tests.webpack.js` which is the single entry file. It uses `webpack`'s require API to find all the files we need that have a `-test.js` suffix.
- `mocha` as the test framework
- `jsdom` as my test environment

```bash
# Run test once
npm test

# Run in watch mode
npm test:watch
```

###Contact me at jeffmendez19@gmail.com



MIT
