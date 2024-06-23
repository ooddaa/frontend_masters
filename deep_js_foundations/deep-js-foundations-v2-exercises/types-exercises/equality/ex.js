// TODO: write `findAll(..)`

// - exact matches (`Object.is(..)`)
// - strings (except "" or whitespace-only) can match numbers
// - numbers (except `NaN` and `+/- Infinity`) can match strings (hint: watch out for `-0`!)
// - `null` can match `undefined`, and vice versa
// - booleans can only match booleans
// - objects only match the exact same object

function my_solution(value) {
  return (el) => {
    if (Object.is(value, el)) return true
    if (value == null && el == null) return true
    if (value === "" && el !== "") return false
    if (typeof value == "number") {
      if (typeof el == "string" && (Number.isNaN(el) || el.trim() === "")) return false
      if (typeof el == 'boolean') return false 
      if (value == 0 && el == 0) {
        return sameSignedZeros(value, el)
      }
      return value == el
    }

    if (typeof value == "string" && typeof el == "number" && value == el) {
      if (value == 0 && el === 0) return sameSignedZeros(value, el)
      return true
    }
  }
}
function kyle_solution(value) {
  return (el) => {
    if (Object.is(value, el)) return true
    if (value == null && el == null) return true
    if (typeof value == "boolean" && typeof el == "boolean") return value == el
    if (typeof value == "string" && value.trim() != "" && typeof el === "number" && !Object.is(-0, el)) {
return value == el
    }
    if (typeof value == "number" && typeof el == "string" && el.trim() != "" && !Object.is(-0, value)) return value == el
}
}
 
function findAll(value, array) {
   const rv = array.filter(
my_solution(value)
    // kyle_solution(value)
  )
  return rv
}

function sameSignedZeros(x, y) {
  return 1/x === 1/y
}

// tests:
var myObj = { a: 2 };

var values = [
	null, undefined, -0, 0, 13, 42, NaN, -Infinity, Infinity,
	"", "0", "42", "42hello", "true", "NaN", true, false, myObj
];

console.log(setsMatch(findAll(null,values),[null,undefined]) === true);
console.log(setsMatch(findAll(undefined,values),[null,undefined]) === true);
console.log(setsMatch(findAll(0,values),[0,"0"]) === true);
console.log(setsMatch(findAll(-0,values),[-0]) === true);
console.log(setsMatch(findAll(13,values),[13]) === true);
console.log(setsMatch(findAll(42,values),[42,"42"]) === true);
console.log(setsMatch(findAll(NaN,values),[NaN]) === true);
console.log(setsMatch(findAll(-Infinity,values),[-Infinity]) === true);
console.log(setsMatch(findAll(Infinity,values),[Infinity]) === true);
console.log(setsMatch(findAll("",values),[""]) === true);
console.log(setsMatch(findAll("0",values),[0,"0"]) === true);
console.log(setsMatch(findAll("42",values),[42,"42"]) === true);
console.log(setsMatch(findAll("42hello",values),["42hello"]) === true);
console.log(setsMatch(findAll("true",values),["true"]) === true);
console.log(setsMatch(findAll(true,values),[true]) === true);
console.log(setsMatch(findAll(false,values),[false]) === true);
console.log(setsMatch(findAll(myObj,values),[myObj]) === true);
console.log(setsMatch(findAll(null,values),[null,0]) === false);
console.log(setsMatch(findAll(undefined,values),[NaN,0]) === false);
console.log(setsMatch(findAll(0,values),[0,-0]) === false);
console.log(setsMatch(findAll(42,values),[42,"42hello"]) === false);
console.log(setsMatch(findAll(25,values),[25]) === false);
console.log(setsMatch(findAll(Infinity,values),[Infinity,-Infinity]) === false);
console.log(setsMatch(findAll("",values),["",0]) === false);
console.log(setsMatch(findAll("false",values),[false]) === false);
console.log(setsMatch(findAll(true,values),[true,"true"]) === false);
console.log(setsMatch(findAll(true,values),[true,1]) === false);
console.log(setsMatch(findAll(false,values),[false,0]) === false);

// ***************************

function setsMatch(arr1,arr2) {
	if (Array.isArray(arr1) && Array.isArray(arr2) && arr1.length == arr2.length) {
		for (let v of arr1) {
			if (!arr2.includes(v)) return false;
		}
		return true;
	}
	return false;
}
