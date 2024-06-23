// https://frontendmasters.com/courses/deep-javascript-v3/resolving-this-in-arrow-functions/

// this will provide a teacher's name hehe
// this.teacher = "global teacher"

// workshop's {} don't create scope
var workshop = {
  teacher: "oda",
  ask: () => {
    // var self = this
    // "this" will be lexically scoped to global object == undefined 
    console.log(this.teacher, "wasap?")
    console.log(this, "this")
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
