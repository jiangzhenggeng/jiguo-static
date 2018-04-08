var gulp = require('gulp');
var less = require('gulp-less');
var autoprefixer = require('gulp-autoprefixer');

gulp.task('less', function () {
	return gulp.src(['../develope/style/less/!(_)*.less',])
		.pipe(less())
		.pipe(autoprefixer({
			browsers: ['last 2 versions'],
			cascade: false
		}))
		.pipe(gulp.dest('../develope/style/css'));
});

gulp.task('watch',function(){
	gulp.watch('../develope/style/less/*.less',['less']);
})









