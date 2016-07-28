var gulp = require('gulp');
var del = require('del');
var browserSync = require('browser-sync').create();

var buildDir = 'public/dist';

gulp.task('clean', function() {
    return del('./public/dist');
});

gulp.task('mainJS', function() {
    return gulp.src([
        '../bower_components/jquery/dist/jquery.min.js',
        '../bower_components/bootstrap/dist/js/bootstrap.min.js',
        '../bower_components/angular/angular.min.js',
        '../bower_components/angular-route/angular-route.min.js',
        '../bower_components/angular-resource/angular-resource.min.js',
        '../bower_components/angular-animate/angular-animate.min.js',
        '../bower_components/angular-bootstrap/ui-bootstrap-tpls.min.js'
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
    return gulp.src('frontend/img/**/**.**')
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
    return gulp.src('frontend/home/**/**.**')
        .pipe(gulp.dest('../' + buildDir + '/home'));
});

gulp.task('discounts', function() {
    return gulp.src('frontend/discounts/**/**.**')
        .pipe(gulp.dest('../' + buildDir + '/discounts'));
});

gulp.task('discountDetail', function() {
    return gulp.src('frontend/discount-detail/**/**.**')
        .pipe(gulp.dest('../' + buildDir + '/discount-detail'));
});

gulp.task('shippingAndPayment', function() {
    return gulp.src('frontend/shipping-and-payment/**/**.**')
        .pipe(gulp.dest('../' + buildDir + '/shipping-and-payment'));
});

gulp.task('contacts', function() {
    return gulp.src('frontend/contacts/**/**.**')
        .pipe(gulp.dest('../' + buildDir + '/contacts'));
});

gulp.task('shops', function() {
    return gulp.src('frontend/shops/**/**.**')
        .pipe(gulp.dest('../' + buildDir + '/shops'));
});

gulp.task('catalog', function() {
    return gulp.src('frontend/catalog/**/**.**')
        .pipe(gulp.dest('../' + buildDir + '/catalog'));
});

gulp.task('about', function() {
    return gulp.src('frontend/about/**/**.**')
        .pipe(gulp.dest('../' + buildDir + '/about'));
});

gulp.task('bonuses', function() {
    return gulp.src('frontend/bonuses/**/**.**')
        .pipe(gulp.dest('../' + buildDir + '/bonuses'));
});

gulp.task('credits', function() {
    return gulp.src('frontend/credits/**/**.**')
        .pipe(gulp.dest('../' + buildDir + '/credits'));
});

gulp.task('master', function() {
    return gulp.src('frontend/master/**/**.**')
        .pipe(gulp.dest('../' + buildDir + '/master'));
});

gulp.task('guarantee', function() {
    return gulp.src('frontend/guarantee/**/**.**')
        .pipe(gulp.dest('../' + buildDir + '/guarantee'));
});

gulp.task('exchange', function() {
    return gulp.src('frontend/exchange/**/**.**')
        .pipe(gulp.dest('../' + buildDir + '/exchange'));
});

gulp.task('buyingOnline', function() {
    return gulp.src('frontend/buying-online/**/**.**')
        .pipe(gulp.dest('../' + buildDir + '/buying-online'));
});

gulp.task('main', gulp.series('clean',
                  gulp.parallel('mainJS', 'mainCSS', 'mainFont', 'copyIndex', 'copyImg', 'home', 'copyCss', 'copyJs', 'discounts', 'discountDetail', 'shippingAndPayment', 'contacts', 'shops', 'catalog', 'about', 'bonuses', 'credits', 'master', 'guarantee', 'exchange', 'buyingOnline'))
);

gulp.task('watch', function() {
    gulp.watch('frontend/**.**', gulp.series('copyIndex'));
    gulp.watch('frontend/css/**.**', gulp.series('copyCss'));
    gulp.watch('frontend/js/**.**', gulp.series('copyJs'));
    gulp.watch('frontend/img/**/**.**', gulp.series('copyImg'));
    gulp.watch('frontend/home/**/**.**', gulp.series('home'));
    gulp.watch('frontend/discounts/**/**.**', gulp.series('discounts'));
    gulp.watch('frontend/discount-detail/**/**.**', gulp.series('discountDetail'));
    gulp.watch('frontend/shipping-and-payment/**/**.**', gulp.series('shippingAndPayment'));
    gulp.watch('frontend/contacts/**/**.**', gulp.series('contacts'));
    gulp.watch('frontend/shops/**/**.**', gulp.series('shops'));
    gulp.watch('frontend/catalog/**/**.**', gulp.series('catalog'));
    gulp.watch('frontend/about/**/**.**', gulp.series('about'));
    gulp.watch('frontend/bonuses/**.**', gulp.series('bonuses'));
    gulp.watch('frontend/credits/**/**.**', gulp.series('credits'));
    gulp.watch('frontend/master/**/**.**', gulp.series('master'));
    gulp.watch('frontend/guarantee/**/**.**', gulp.series('guarantee'));
    gulp.watch('frontend/exchange/**/**.**', gulp.series('exchange'));
    gulp.watch('frontend/buying-online/**/**.**', gulp.series('buyingOnline'));
});

gulp.task('serve', function() {
    browserSync.init({
        server: '../public/dist'
    });

    browserSync.watch('../public/dist/**/*.*').on('change', browserSync.reload);
});

gulp.task('default',
    gulp.series('main', gulp.parallel('watch'))
);