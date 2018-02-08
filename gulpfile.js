"use strict";

var gulp = require("gulp");
var sass = require("gulp-sass");
var sassGlob = require("gulp-sass-glob");
var kss = require("kss"),
  options = require("./config/styleguide.json");

gulp.task("sass", function() {
  return gulp
    .src("./style.scss")
    .pipe(sassGlob())
    .pipe(sass({ outputStyle: "compressed" }).on("error", sass.logError))
    .pipe(gulp.dest("./"));
});

gulp.task("watch", function() {
  gulp.start("sass:watch", "twig:watch");
});

gulp.task("sass:watch", function() {
  gulp.watch("./**/*.scss", ["sass"]);
});

gulp.task("twig:watch", function() {
  gulp.watch("./**/*.twig", ["styleguide"]);
});

gulp.task("styleguide", function() {
  return kss(options);
});

gulp.task("default", ["sass", "styleguide"]);
