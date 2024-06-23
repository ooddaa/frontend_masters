// TODO: define polyfill for `Object.is(..)`

// Object.is = function(val1, val2) {
//
//   if (typeof val1 !== typeof val2) return false
//   if (Number.isNaN(val1) && Number.isNaN(val2)) return true 
//
//   if (typeof val1 === typeof val2) {
//     if (val1 === 0 && val2 ===0) {
//       var val1negativeZero = isNegativeZero(val1)
//       var val2negativeZero = isNegativeZero(val2)
//       if (val1negativeZero || val2negativeZero) {
//         return val1negativeZero && val2negativeZero
//       }
//     }
//     return val1 === val2
//   }
// }

Object.is = function(x, y) {
  const xNegZero = isItNegZero(x) 
  const yNegZero = isItNegZero(y)

  if (xNegZero || yNegZero) {
    return xNegZero && yNegZero
  }

  if (Number.isNaN(x) && Number.isNaN(y)) return true

  return x === y
}

function isItNegZero(val) {
  return val === 0 && isNegativeZero(val)
}

function isNegativeZero(zero) {
  return 1/zero === -Infinity
}

// tests:
console.log("=== truthes ===")
console.log(Object.is(42,42) === true);
console.log(Object.is("foo","foo") === true);
console.log(Object.is(false,false) === true);
console.log(Object.is(null,null) === true);
console.log(Object.is(undefined,undefined) === true);
console.log("NaN NaN", Object.is(NaN,NaN) === true);
console.log(Object.is(-0,-0) === true);
console.log(Object.is(0,0) === true);
console.log("=== falses ===")
console.log("-0, 0", Object.is(-0,0) === false);
console.log("0, -0", Object.is(0,-0) === false);
console.log(Object.is(0,NaN) === false);
console.log(Object.is(NaN,0) === false);
console.log(Object.is(42,"42") === false);
console.log(Object.is("42",42) === false);
console.log(Object.is("foo","bar") === false);
console.log(Object.is(false,true) === false);
console.log(Object.is(null,undefined) === false);
console.log(Object.is(undefined,null) === false);
