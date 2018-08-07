# Boilerplate for React with rollup and typescript

## Attention
I haven't really kept this up to date.
I did update the packages on 2018-08-07 but at least the watch script doesn't run properly.
A PR for that is very welcome if someone wants to fix it.

## Install dependencies
Just run `npm install`.

## Building
Run `npm run watch` will build the sources, start watching for changes and serve the project.
It also will live reload the page when new changes are bundled.
The served page can be accessed via http://localhost:3000/.

### Production build
Running `npm run build` will create a production build, which doesn't include the server and livereload.
The production build will also be minified.

## Linting
The project includes tslint as a linter, which can be run with `npm run linter`.
