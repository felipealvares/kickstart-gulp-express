# Kickstart Gulp Express
Project using node-express with gulp.js tasks

## wtat's included
- server via [express](http://expressjs.com/)
- templating [pug](https://pugjs.org/)
- css pre-pocessing via [sass](http://sass-lang.com/)
- build automation via [gulp](http://gulpjs.com/)

## getting started

### first step
rename folder and "name" from packege.json

### install
```
npm install
```

### task server
```
set DEBUG=kickstart-gulp-express:* & npm start
```

### task client
```
gulp
gulp watch
```

### structure
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
