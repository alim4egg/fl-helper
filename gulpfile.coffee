gulp = require('gulp')
gutil = require('gulp-util')
coffee = require('gulp-coffee')
stylus = require('gulp-stylus')

gulp.task 'coffee', ->
  gulp
    .src(['src/js/*.coffee', 'src/bg/*.coffee', 'src/options/*.coffee'])
    .pipe(coffee(bare: true).on('error', gutil.log))
    .pipe gulp.dest('assets/js/')

gulp.task 'stylus', ->
  gulp
    .src(['src/options/*.styl', 'src/css/*.styl'])
    .pipe(stylus())
    .pipe gulp.dest('assets/css/')

gulp.task 'default', ->
  gulp.run 'coffee'
  gulp.run 'stylus'
  gulp.watch ['src/js/*.coffee', 'src/bg/*.coffee', 'src/options/*.coffee'], ->
    gulp.run 'coffee'
  gulp.watch ['src/options/*.styl', 'src/css/*.styl'], ->
    gulp.run 'stylus'