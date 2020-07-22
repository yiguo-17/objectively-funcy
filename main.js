// Your code here.
const getFirstName = function(person){
  return person.firstName;
}

const getLastName = function(person){
  return person.lastName;
}

const getFullName = function(person){
  return `${person.firstName} ${person.lastName}`;
}

const setFirstName = function(person,newName){
  person.firstName = newName;
}

const setAge = function(person,num){
  person.age = num;
}

const giveBirthday = function(person){
if(typeof(person.age)==='number'){person.age = person.age + 1;}
else{person.age = 1;}
}

const marry = function(person1, person2){
  person1.married = true;
  person2.married = true;
  person1.spouseName = `${person2.firstName} ${person2.lastName}`;
  person2.spouseName = `${person1.firstName} ${person1.lastName}`;
}

const divorce = function(person1,person2){
  person1.married = false;
  person2.married = false;
  delete person1.spouseName;
  delete person2.spouseName;
}

// Our code here. Don't touch!
if (typeof getFirstName === 'undefined') {
  getFirstName = undefined
}

if (typeof getLastName === 'undefined') {
  getLastName = undefined
}

if (typeof getFullName === 'undefined') {
  getFullName = undefined
}

if (typeof setFirstName === 'undefined') {
  setFirstName = undefined
}

if (typeof setAge === 'undefined') {
  setAge = undefined
}

if (typeof giveBirthday === 'undefined') {
  giveBirthday = undefined
}

if (typeof marry === 'undefined') {
  marry = undefined
}

if (typeof divorce === 'undefined') {
  divorce = undefined
}


module.exports = {
  getFirstName,
  getLastName,
  getFullName,
  setFirstName,
  setAge,
  giveBirthday,
  marry,
  divorce,
}
