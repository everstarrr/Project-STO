import { readFileSync, writeFileSync } from 'fs';
import postcss from 'postcss';
import autoprefixer from 'autoprefixer';

const css = readFileSync('style.css', 'utf8'); // Ваш исходный CSS файл

postcss([autoprefixer])
  .process(css, { from: 'style.css', to: 'newstyles.css' })
  .then(result => {
    writeFileSync('newstyles.css', result.css);
    if ( result.map ) writeFileSync('newstyles.css.map', result.map.toString());
  });