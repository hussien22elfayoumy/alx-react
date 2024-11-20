const Immutable = require('./node_modules/immutable/dist/immutable');

const obj = {
  fear: true,
  smell: -1033575916.9145899,
  wall: false,
  thing: -914767132,
};

function getImmutableObject(obj) {
  return Immutable.fromJS(obj);
}

console.log(getImmutableObject(obj));
