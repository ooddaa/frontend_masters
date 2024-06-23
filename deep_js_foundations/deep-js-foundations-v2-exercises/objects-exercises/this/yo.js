// https://frontendmasters.com/courses/deep-javascript-v3/resolving-this-in-arrow-functions/

// workshop's {} don't create scope
var workshop = {
  teacher: "oda",
  ask: () => {
    // "this" will be lexically scoped to global object == undefined 
    console.log(this.teacher, "wasap?")
  }
}

workshop.ask() // undefined wasap?
workshop.ask.call(workshop) // undefined wasap?  

var workshop3 = {
  teacher: "oda",
  ask() {
    console.log(this.teacher, "wasap?")
  }
}

workshop3.ask() // oda wassap
