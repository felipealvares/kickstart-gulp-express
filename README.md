# Kickstart Gulp Express
Project using node-express with gulp.js tasks

## What is Included
- Server via [express](http://expressjs.com/)
- Templating [pug](https://pugjs.org/)
- CSS pre-pocessing via [sass](http://sass-lang.com/)
- Build automation via [gulp](http://gulpjs.com/)

## Getting Started

### First Step
Rename folder and "name" from packege.json

### Install
```
npm install
```

### Task Server
```
set DEBUG=kickstart-gulp-express:* & npm start
```

### Task Client
```
gulp
gulp watch
```

### Structure
```
├── bin
│   └── www
├── development
│   ├── images
│   │   └── sprites
│   │       └── test.png
│   │   └── file.png
│   ├── scripts
│   │   └── plugins
│   │       └── jquery-3.2.0.min.js
│   │   └── application.js
│   ├── styles
│   │   └── layout
│   │       ├── default.scss
│   │       ├── header.scss
│   │       └── footer.scss
│   │   └── views
│   │       └── index.scss
│   │   └── site.scss
│   ├── gulp (configuration: options, recipes, utils)
├── public
│   ├── images
│   ├── images
│   │   └── sprites
│   │       └── test.png
│   │   └── file.png
│   ├── javascripts
│   │   ├── all.min.js.map
│   │   └── all.min.js
│   └── stylesheets
│   │   ├── site.css.map
│   │   └── site.css
├── routes
│   └── index.js
├── views
│   └── layout
│   │   ├── default.pug
│   │   ├── header.pug
│   │   └── footer.pug
│   ├── index.pug
│   └── error.pug
├── app.js
├── config.json
├── gulpfile.js
└── package.json
```
