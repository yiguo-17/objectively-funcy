# Objectively Funcy

### Introduction

Functions and objects together? Is this the endtimes?

What we're doing today is writing function that can manipulate the object passed in. We'll be using mutation, which is, again, bad practice. But we'll learn good practice soon enough, and it's pretty important that we understand JS's abilities so that we understand which to use, when, and why. When we have a bug because we mutated an object passed in, we won't be able to find it without understanding mutation!

For now: mutate away!


### Setup

* Fork.
* Clone.
* `jest --watch-all`


### Tasks

* `getFirstName` - returns the value of the firstName property of the given person object
  * `getFirstName({firstName: 'Colin', lastName: 'Jaffe'}) // -> 'Colin'`
  * `getFirstName({firstName: 'Petra', lastName: 'Solano'}) // -> 'Petra'`
* `getLastName` - returns the value of the lastName property of the given person object
  * `getLastName({firstName: 'Colin', lastName: 'Jaffe'}) // -> 'Jaffe'`
  * `getLastName({firstName: 'Petra', lastName: 'Solano'}) // -> 'Petra'`
* `getFullName` - returns the value of the firstName property plus the lastName property with a space in the middle for the given person object
  * `getFullName({firstName: 'Colin', lastName: 'Jaffe'}) // -> 'Jaffe'`
  * `getFullName({firstName: 'Petra', lastName: 'Solano'}) // -> 'Petra'`
* `setFirstName` - changes the value of the firstName property of the given person object to the given value
  * `setFirstName({firstName: 'Colin', lastName: 'Jaffe'}, 'Redacted') // -> {firstName: 'Redacted', lastName: 'Jaffe'}
  * `setFirstName({firstName: 'Petra', lastName: 'Solano'}, 'Anthony') // -> {firstName: 'Anthony', lastName: 'Solano'}
* `setAge` - changes the value of the age property of the given person object to the given value
  * `setAge({firstName: 'Colin', lastName: 'Jaffe', age: 39}, 45) // -> {firstName: 'Colin', lastName: 'Jaffe', age: 45}
  * `setAge({firstName: 'Petra', lastName: 'Solano', age: 29}, 35) // -> {firstName: 'Petra', lastName: 'Solano', age: 35}
* `giveBirthday` - increments by 1 the age property of the given person object, or gives them an age of 1 if they don't have that property
  * `giveBirthday({firstName: 'Colin', lastName: 'Jaffe', age: 39}) // -> {firstName: 'Colin', lastName: 'Jaffe', age: 40}
  * `giveBirthday({firstName: 'Petra', lastName: 'Solano', age: 29}) // -> {firstName: 'Solano', lastName: 'Solano', age: 30}
  * `giveBirthday({firstName: 'Baby', lastName: 'Jaffe'}) // -> {firstName: 'Baby', lastName: 'Jaffe', age: 1}
  * `marry` - description and examples coming soon, see tests
  * `divorce` - description and examples coming soon, see tests


### Tips

* For `getFullName`, don't set a `fullName` property on the given object. Just give the caller of the function back a new value based on the first name and last name. (You were probably going to do it that way anyway!)
* For `giveBirthday`, you'll need to have some way to tell if the key `age` is already in the given person. Do a little research!
* Same as above for `divorce`; you'll need to research a way to REMOVE the key `spouseName` from the given people. Simply setting the properties to `undefined` or `null` won't be sufficient; they need to be as if they were never there. (Creepy!)
