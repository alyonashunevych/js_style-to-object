'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const result = {};
  const separateStyles = sourceString
    .split(';')
    .map((style) => style.replaceAll('\t', ''))
    .filter((style) => style.replaceAll('\n', ' ') !== ' '.repeat(style.length))
    .map((style) => style.split(':'));

  separateStyles.forEach(
    (style) => (result[style[0].trim()] = style[1].trim()),
  );

  return result;
}

module.exports = convertToObject;
