# Drupal styleguide theme

## Requirements

* Drupal 8 only.
* Drupal module 'Component Libraries' (https://www.drupal.org/project/components) should be installed. Without it, you won't be able to use the twig-templates in Drupal.

## Installation

Run `npm install` from the theme directory.

## Running

Run `npm start` or `npm run start` from the theme directory to start Browser-Sync and have it watch the style and components for changes. Whenever a (partial) SASS-file is changed, Gulp will recompile the styles and create or replace the `style.css` file. When a .twig file is changed, a new version of the styleguide is generated. When one of these two event occur, BrowserSync will then in turn work its magic and update the browser-window.

## Drupal-setup

To ensure that BrowserSync works properly, please disable the CSS Aggregation feature and also disable caching.
