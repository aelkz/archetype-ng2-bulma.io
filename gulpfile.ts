// Inicialização do gulp e plugins necessários
let gulp = require('gulp');

// Definição do diretório dos arquivos a serem manipulados pelas tasks Gulp
// Definição dos diretórios que irão sofrer ações das tasks do Gulp
let paths = {
  scripts_ts: ['src/**/*.ts'],
  scripts_js: ['src/**/*.js'],
  styles: ['src/**/*.scss',
    'src/**/*.less',
    'src/**/*.css'],
  images: 'src/assets/images/*',
  icons: ['src/assets/img/*', 'src/assets/favicon/*']
};
