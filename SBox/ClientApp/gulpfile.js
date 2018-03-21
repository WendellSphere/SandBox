"use strict";

var gulp = require("gulp"),
    rimraf = require("rimraf"),
    concat = require("gulp-concat");

var paths = {
    webroot: "./wwwroot/dist/ArcadiaTheme"
};

paths.css = paths.webroot + "css/**/*.css";
paths.concatCssDest = paths.webroot + "css/animate.css";
paths.concatCssDest = paths.webroot + "css/bootstrap.css";
paths.concatCssDest = paths.webroot + "css/jasny-bootstrap.min.css";
paths.concatCssDest = paths.webroot + "css/owl.carousel.css";
paths.concatCssDest = paths.webroot + "css/owl.theme.css";
paths.concatCssDest = paths.webroot + "css/responsive.css";
paths.concatCssDest = paths.webroot + "css/style.css";

paths.js = paths.js = paths.webroot + "js/**/*.js";
paths.concatJsDest = paths.webroot + "js/bootstrap.js";
paths.concatJsDest = paths.webroot + "js/jasny-bootstrap.min.js";
paths.concatJsDest = paths.webroot + "js/jquery.1.11.1.js";
paths.concatJsDest = paths.webroot + "js/main.js";
paths.concatJsDest = paths.webroot + "js/modernizr.custom.js";
paths.concatJsDest = paths.webroot + "js/owl.carousel.js";
paths.concatJsDest = paths.webroot + "js/SmoothScroll.js";
paths.concatJsDest = paths.webroot + "js/typed.js";






//gulp.task('default', function () {
//    return gulp.src('assets/**/*.css')
//        .pipe(concatCss("styles/bundle.css"))
//        .pipe(gulp.dest('out/'));
//});

gulp.task("clean:css", function (cb) {
    rimraf(paths.concatCssDest, cb);
});

gulp.task("clean:js", function (cb) {
    rimraf(paths.concatJsDest, cb);
});

gulp.task("clean", ["clean:js", "clean:css"]);

gulp.task("min:js", function () {
    return gulp.src([paths.js, "!" + paths.minJs], { base: "." })
        .pipe(concat(paths.concatJsDest))
        .pipe(uglify())
        .pipe(gulp.dest("."));
});


gulp.task("min:css", function () {
    return gulp.src([paths.css, "!" + paths.minCss])
        .pipe(concat(paths.concatCssDest))
        //.pipe(cssmin())
        .pipe(gulp.dest("."));
});


gulp.task("min", ["min:js", "min:css"]);
