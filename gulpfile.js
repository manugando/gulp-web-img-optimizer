var gulp = require('gulp');
var del = require('del');
var imagemin = require('gulp-imagemin');
var imageminPngquant = require('imagemin-pngquant');
var imageminJpegoptim = require('imagemin-jpegoptim');

gulp.task('clean:img', function() {
	return del.sync(['dist']);
});

gulp.task('build:img', ['clean:img'], function() {
    return gulp.src('src/*.*')
        .pipe(imagemin(
                [
                    imageminPngquant({speed: 1}), 
                    imageminJpegoptim({max : 90})
                ],
                {verbose : true}
            ))
        .pipe(gulp.dest('dist'));
});

gulp.task('default', ['build:img']);