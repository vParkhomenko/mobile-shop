var gulp = require('gulp');
var del = require('del');

var buildDir = 'public/dist';

gulp.task('clean', function() {
    return del(buildDir);
});

gulp.task('mainJS', function() {
    return gulp.src([
        '../bower_components/jquery/dist/jquery.min.js',
        '../bower_components/bootstrap/dist/js/bootstrap.min.js',
        '../bower_components/angular/angular.min.js',
        '../bower_components/angular-route/angular-route.min.js'
    ])
        .pipe(gulp.dest('../' + buildDir + '/js'));
});

gulp.task('mainCSS', function() {
    return gulp.src('../bower_components/bootstrap/dist/css/bootstrap.min.css')
        .pipe(gulp.dest('../' + buildDir + '/css'));
});

gulp.task('mainFont', function() {
    return gulp.src('../bower_components/bootstrap/dist/fonts/**.**')
        .pipe(gulp.dest('../' + buildDir + '/fonts'));
});

gulp.task('copyIndex', function() {
    return gulp.src('frontend/**.**')
        .pipe(gulp.dest('../' + buildDir));
});

gulp.task('copyImg', function() {
    return gulp.src('frontend/img/**.**')
        .pipe(gulp.dest('../' + buildDir + '/img'));
});

gulp.task('copyCss', function() {
    return gulp.src('frontend/css/**.**')
        .pipe(gulp.dest('../' + buildDir + '/css'));
});

gulp.task('copyJs', function() {
    return gulp.src('frontend/js/**.**')
        .pipe(gulp.dest('../' + buildDir + '/js'));
});

gulp.task('home', function() {
    return gulp.src('frontend/home/**.**')
        .pipe(gulp.dest('../' + buildDir + '/home'));
});

gulp.task('discounts', function() {
    return gulp.src('frontend/discounts/**.**')
        .pipe(gulp.dest('../' + buildDir + '/discounts'));
});

gulp.task('shippingAndPayment', function() {
    return gulp.src('frontend/shipping-and-payment/**.**')
        .pipe(gulp.dest('../' + buildDir + '/shipping-and-payment'));
});

gulp.task('contacts', function() {
    return gulp.src('frontend/contacts/**.**')
        .pipe(gulp.dest('../' + buildDir + '/contacts'));
});

gulp.task('shops', function() {
    return gulp.src('frontend/shops/**.**')
        .pipe(gulp.dest('../' + buildDir + '/shops'));
});

gulp.task('catalog', function() {
    return gulp.src('frontend/catalog/**/**.**')
        .pipe(gulp.dest('../' + buildDir + '/catalog'));
});

gulp.task('main', gulp.parallel('mainJS', 'mainCSS', 'mainFont', 'copyIndex', 'copyImg', 'copyCss', 'copyJs', 'discounts', 'shippingAndPayment', 'contacts', 'shops', 'catalog'));

gulp.task('watch', function() {
    gulp.watch('frontend/**.**', gulp.series('copyIndex'));
    gulp.watch('frontend/css/**.**', gulp.series('copyCss'));
    gulp.watch('frontend/js/**.**', gulp.series('copyJs'));
    gulp.watch('frontend/home/**.**', gulp.series('home'));
    gulp.watch('frontend/discounts/**.**', gulp.series('discounts'));
    gulp.watch('frontend/shipping-and-payment/**.**', gulp.series('shippingAndPayment'));
    gulp.watch('frontend/contacts/**.**', gulp.series('contacts'));
    gulp.watch('frontend/shops/**.**', gulp.series('shops'));
    gulp.watch('frontend/catalog/**/**.**', gulp.series('catalog'));
});

gulp.task('default', gulp.series('main', 'watch'));