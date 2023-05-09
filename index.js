const kebab = require("lodash.kebabcase");

exports.helloKebab = function helloKebab(name = "world") {
  return kebab(`hello ${name}`);
};
