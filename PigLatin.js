function pigLatin(array) {
  return _.map(array, function (a) { return `${a}-ay`; });
}
console.log(pigLatin(['apple', 'pear']));
console.log(pigLatin(['you', 'can', 'win']));

