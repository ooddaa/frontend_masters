// TODO: write the validation functions
// isValid(name)
// - must be a string
// - must be non-empty
// - must contain non-whitespace of at least 3 characters

function isValidName(name) {
  // if (typeof name != "string") return false 
  // if (name.length < 3) return false 
  // if (Number(name) === 0) return false
  // return true
  return typeof name === "string" && name.trim().length >= 3
}

// should match both parameters
// - either parameter may only be a string or number
// - both parameters should be treated as numbers
// - both numbers must be 0 or higher
// - both numbers must be whole numbers
// - `attended` must be less than or equal to `length`
// function hoursAttended(attended, length) {
//    if (!(mayBeANumber(attended) && mayBeANumber(length))) return false
//   const attendedNum = Number(attended)
//   const lengthNum = Number(length)
//   if (Number.isNaN(attendedNum) || Number.isNaN(lengthNum)) return false
//   if (!(Number.isInteger(attendedNum) && Number.isInteger(lengthNum))) return false
//   if (attendedNum < 0 || lengthNum < 0) return false 
//   if (attendedNum > lengthNum) return false 
//   // console.log({mayBeANumberAtt: mayBeANumber(attendedNum), mayBeANumberLen: mayBeANumber(lengthNum), attendedNum, lengthNum})
//   return true
// }

function hoursAttended(attended, length) {
  if (!mayBeANumber(attended) || !mayBeANumber(length)) return false 
  attended = Number(attended)
  length = Number(length)

  return  attended >= 0 
    && length >= 0 
    && Number.isInteger(attended) 
    && Number.isInteger(length)
    && attended <= length 
}

function mayBeANumber(val) {
  // return (typeof val === "string" && val.length > 0) || (typeof val === "number" && !Number.isNaN(val))
  return (typeof val == "string" && val.trim() != "") || typeof val == 'number' && !Number.isNaN(val)
}


// tests:
console.log("=== true ===")
console.log(isValidName("Frank") === true);
console.log(hoursAttended(6,10) === true);
console.log(hoursAttended(6,"10") === true);
console.log(hoursAttended("6",10) === true);
console.log(hoursAttended("6","10") === true);

console.log("=== falses ===")
console.log(isValidName(false) === false);
console.log(isValidName(null) === false);
console.log(isValidName(undefined) === false);
console.log(isValidName("") === false);
console.log(isValidName("  \t\n") === false);
console.log(isValidName("X") === false);
console.log(hoursAttended("",6) === false);
console.log(hoursAttended(6,"") === false);
console.log(hoursAttended("","") === false);
console.log(hoursAttended("foo",6) === false);
console.log(hoursAttended(6,"foo") === false);
console.log(hoursAttended("foo","bar") === false);
console.log(hoursAttended(null,null) === false);
console.log(hoursAttended(null,undefined) === false);
console.log(hoursAttended(undefined,null) === false);
console.log(hoursAttended(undefined,undefined) === false);
console.log(hoursAttended(false,false) === false);
console.log(hoursAttended(false,true) === false);
console.log(hoursAttended(true,false) === false);
console.log(hoursAttended(true,true) === false);
console.log(hoursAttended(10,6) === false);
console.log(hoursAttended(10,"6") === false);
console.log(hoursAttended("10",6) === false);
console.log(hoursAttended("10","6") === false);
console.log(hoursAttended(6,10.1) === false);
console.log(hoursAttended(6.1,10) === false);
console.log(hoursAttended(6,"10.1") === false);
console.log(hoursAttended("6.1",10) === false);
console.log(hoursAttended("6.1","10.1") === false);
