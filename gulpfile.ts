// Inicialização do gulp e plugins necessários
let gulp    = require('gulp');
let gulp_less    = require('gulp-less');
let gulp_sass    = require('gulp-sass');
let gulp_inject  = require('gulp-inject');

// Definição do diretório dos arquivos a serem manipulados pelas tasks GULP
// - Diretórios que irão sofrer ações das tasks do GULP
let paths = {
  scripts_ts: ['src/**/*.ts'],
  scripts_js: ['src/**/*.js'],
  styles: ['src/**/*.scss', 'src/**/*.less', 'src/**/*.css'],
  images: 'src/assets/images/*',
  icons: ['src/assets/img/*', 'src/assets/favicon/*']
};

/*
 * task: less
 * description: processa todos os .less da app para auto-inject no arquivo main.less
 * reference: http://www.michaelbromley.co.uk/blog/425/automatic-import-of-lesssass-files-with-gulp
 */
gulp.task('less', function() {
  return gulp.src('src/app/assets/less/main.less')
  /**
   * Dynamically injects @import statements into the main app.less file, allowing
   * .less files to be placed around the app structure with the component
   * or page they apply to.
   */
    .pipe(gulp_inject(gulp.src(['../**/*.less'], {read: false, cwd: 'src/app/assets/less/'}), {
      starttag: '/* inject:imports */',
      endtag: '/* endinject */',
      transform: function (filepath) {
        return '@import ".' + filepath + '";';
      }
    }))
    .pipe(gulp_less())
    .pipe(gulp.dest('build/assets'));
});

/*
 * task: sass
 * description: processa todos os .scss da app para auto-inject no arquivo main.scss
 * reference: http://www.michaelbromley.co.uk/blog/425/automatic-import-of-lesssass-files-with-gulp
 */
gulp.task('sass', function() {
  return gulp.src('src/app/assets/sass/main.sass')
  /**
   * Dynamically injects @import statements into the main app.less file, allowing
   * .less files to be placed around the app structure with the component
   * or page they apply to.
   */
    .pipe(gulp_inject(gulp.src(['../**/*.scss'], {read: false, cwd: 'src/app/assets/sass/'}), {
      starttag: '/* inject:imports */',
      endtag: '/* endinject */',
      transform: function (filepath) {
        return '@import ".' + filepath + '";';
      }
    }))
    .pipe(gulp_sass())
    .pipe(gulp.dest('build/assets'));
});
