const gulp = require("gulp")
const sass = require("gulp-sass")
const cssmin = require("gulp-cssmin")
const functions = require("./scripts/sassFunctions")

gulp.task("compile", function() {
  return gulp
    .src("./src/index.scss")
    .pipe(sass({ functions }))
    .pipe(cssmin())
    .pipe(gulp.dest("./lib"))
})

gulp.task("build", ["compile"])
