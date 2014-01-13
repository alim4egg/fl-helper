gulp = require("gulp")
gutil = require("gulp-util")
coffee = require("gulp-coffee")

gulp.task "coffee", ->
  gulp
    .src(["src/js/*.coffee", "src/bg/*.coffee", "src/options/*.coffee"])
    .pipe(coffee(bare: true).on("error", gutil.log))
    .pipe gulp.dest("assets/js/")

gulp.task "default", ->
  gulp.run "coffee"
  gulp.watch "src/js/*.coffee", ->
    gulp.run "coffee"