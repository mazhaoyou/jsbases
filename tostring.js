var a = Object.prototype.toString;

console.log(a.call(2));
console.log(a.call(true));
console.log(a.call('str'));
console.log(a.call([]));
console.log(a.call(function () { }));
console.log(a.call({}));
console.log(a.call(undefined));
console.log(a.call(null));

// [object Number]
// [object Boolean]
// [object String]
// [object Array]
// [object Function]
// [object Object]
// [object Undefined]
// [object Null]