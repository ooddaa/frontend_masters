/* CHALLENGE 1 */

function sayHowdy() {
  consolew.log('Howdy');
}

function testMe() {
   setTimeout(sayHowdy, 0);
  console.log('Partnah');
}
// After thinking it through, uncomment the following line to check your guess!
// testMe(); // what order should these log out? Howdy or Partnah first?


/* CHALLENGE 2 */

function delayedGreet() {
  // ADD CODE HERE
  setTimeout(() => console.log('welcome'), 3000);
}
// Uncomment the following line to check your work!
// delayedGreet(); // should log (after 3 seconds): welcome


/* CHALLENGE 3 */

function helloGoodbye() {
  // ADD CODE HERE
  console.log("Hello")
  setTimeout(() => console.log("Goodbye"), 2000)
}
// Uncomment the following line to check your work!
// helloGoodbye(); // should log: hello // shou ld also log (after 3 seconds): good bye


/* CHALLENGE 4 */

function brokenRecord() {
  // ADD CODE HERE
  setInterval(() => console.log("hi again"), 1000)
}
// Uncomment the following line to check your work!
// brokenRecord(); // should log (every second):  hi again


/* CHALLENGE 5 */

function limitedRepeat() {
  // ADD CODE HERE
  let counter = 0 
  const id = setInterval(() => { 
    console.log("hi for now"); 
    counter++ 
    if (counter > 4) clearInterval(id)
  }, 1000)
  
}
// Uncomment the following line to check your work!
// limitedRepeat(); // should log (every second, for 5 seconds): hi for now


/* CHALLENGE 6 */

function everyXsecsForYsecs(func, interval, duration) {
  // ADD CODE HERE
  const end = new Date().valueOf() + duration
  const id = setInterval(() => {
    const now = new Date().valueOf()
    if (now > end) return clearInterval(id)
    func()
    
  }, interval)
}
// Uncomment the following lines to check your work!
// function theEnd() {
//   console.log('This is the end!');
// }
// everyXsecsForYsecs(theEnd, 1000, 5000); // should invoke theEnd function every 2 seconds, for 20 seconds): This is the end!


/* CHALLENGE 7 */

function delayCounter(target, wait) {
  return () => {
      let counter = 0
      const id = setInterval(() => { 
        if (counter < target) { 
          console.log(++counter) 
        } else {
          console.log("finished")
          clearInterval(id)
        }
      }, wait)
  }
}

// UNCOMMENT THESE TO TEST YOUR WORK!
const countLogger = delayCounter(3, 1000)
// countLogger();
// After 1 second, log 1
// After 2 seconds, log 2
// After 3 seconds, log 3

/* CHALLENGE 8 */

function promised (val) {
  // ADD CODE HERE
  function inner() {}
  inner.then = (fn) => setTimeout(() => fn(val), 2000) 
  return inner
}

// UNCOMMENT THESE TO TEST YOUR WORK!
// const createPromise = promised('wait for it...');
// createPromise.then((val) => console.log(val)); 
// will log "wait for it..." to the console after 2 seconds

/* CHALLENGE 9 */

class SecondClock {
  constructor(cb) {
    // ADD CODE HERE
    this.seconds = 1
    this.id = undefined
    this.cb = cb
  }
  // ADD METHODS HERE
  start() {
    this.id = setInterval(() => {
      this.cb(this.seconds)
      this.seconds = ++this.seconds % 60  
      
    }, 1000)
  }
  reset() {
    this.seconds = 1
    clearInterval(this.id)
  }
}

// UNCOMMENT THESE TO TEST YOUR WORK!
// const clock = new SecondClock((val) => { console.log(val) });
// console.log("Started Clock.");
// clock.start();
// setTimeout(() => {
//     clock.reset();
//     console.log("Stopped Clock after 6 seconds.");
// }, 6000);

/* CHALLENGE 10 */

function debounce(callback, interval) {
  // ADD CODE HERE
  let lastCall; 
  
  
  return () => {
    const thisCall = new Date().valueOf()
    const cond = !lastCall || thisCall > (lastCall + interval)
    
    // console.log({ lastCall, thisCall, diff: thisCall - lastCall, cond})
    lastCall = thisCall
    
    if (cond) return callback()
  }
}

// UNCOMMENT THESE TO TEST YOUR WORK!
function giveHi() { return 'hi'; }
const giveHiSometimes = debounce(giveHi, 3000);
console.log(giveHiSometimes()); // -> 'hi'
setTimeout(function() { console.log(giveHiSometimes()); }, 2000); // -> undefined
setTimeout(function() { console.log(giveHiSometimes()); }, 4000); // -> undefined
setTimeout(function() { console.log(giveHiSometimes()); }, 8000); // -> 'hi'
setTimeout(function() { console.log(giveHiSometimes()); }, 11000); // -> 'hi'
// this will be moved up between 2000 and 4000 ms as we are counting in global execution context
// setTimeout(function() { console.log(giveHiSometimes()); }, 3000); // -> undefined


// Their solution is weird as it seems to fire quicker (100ms quicker)
// classic n+1 problem
// function debounce(callback, interval) {
//   let duration = 0
//   let id
//   return function(){
//     if(duration <= 0) {
//       duration = interval
//       clearInterval(id)
//     	id = setInterval(() => {duration -= 100}, 100)
//       return callback()
//     }
//   }
// }
//
// // UNCOMMENT THESE TO TEST YOUR WORK!
// function giveHi() { return 'hi'; }
// const giveHiSometimes = debounce(giveHi, 3000);
// console.log(giveHiSometimes()); // -> 'hi'
// setTimeout(function() { console.log(giveHiSometimes()); }, 2000); // -> undefined
// setTimeout(function() { console.log(giveHiSometimes()); }, 2900); // -> undefined
// setTimeout(function() { console.log(giveHiSometimes()); }, 8000); // -> 'hi'
