// Events Module 
// Node.Js has a built-in module called "Events",
// where you can create-, fire-, and listen for- your own events.

// Example 1 - Registering for the event to be fired only one time using once.

// Example 2 - Create an event emmiter instance and register a couple of callbacks

// Example 3 - Registering for the event with callback parameters

// events is a Class so thats why we are using capital EventEmmiter
const EventEmmiter = require("events")

const event = new EventEmmiter();

// Example 1 - Registering for the event to be fired only one time using once.
event.on('sayMyName',()=>{
    console.log("My name is Nayan")
})

// emmeting a event
event.emit('sayMyName');


// emitter objects emit named events that cause previously registered listeners to be called. So, an emitter  object basically has two main features :
// Emitting named events.
// Registering and unregistering listener functions

// The EventEmitter Object
// You can assign event handlers to your own events with the EventEmitter object.

// In the example below we have created a function that will be executed when a "scream" event is fired.

// To fire an event, use the emit() method.


// Example 2 - Create an event emmiter instance and register a couple of callbacks
event.on('sayMyName',()=>{
    console.log("1st Print My name is Nayan")
})

event.on('sayMyName',()=>{
    console.log("2nd Print My name is Nayan")
})

event.on('sayMyName',()=>{
    console.log("3rd Print My name is Nayan")
})

// emmeting a event
event.emit('sayMyName');



// Example 3 - Registering for the event with callback parameters
event.emit("sayMyName",200,"ok");