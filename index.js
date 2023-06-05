// https://ps-react-curriculum.herokuapp.com/308H/5/lab-4

const personOne = {
    name: {
        first: 'Timmy',
        last: 'Timtim'
    },
    age: 30,
    location: {
        city: 'New York',
        state: 'New York',
        zip: 10001
    }
}

const personTwo = {
    name: {
        first: 'Julie',
        last: 'July'
    },
    age: 28,
    location: {
        city: 'Albany',
        state: 'New York',
        zip: 12201
    }
}

// 1.
// People move location frequently. Create a new function moveLocation().
// moveLocation() should take one of our person objects as its first parameter and a location object as the second parameter.
// The location object will have the properties city, state, and zip.
// The function should change the city, state, and zip properties of the person to match those of the new location.
// Test your function by using the following code. Does personTwo now live in Rochester? (They should.)
/*
const nLoc = {
    city: 'Rochester',
    state: 'New York',
    zip: 14604
}



nLoc.city = 'Buffalo';
nLoc.zip = 14201;

console.log("\nbefore: ");
for (let key in personTwo) {
    console.log(key + ':', personTwo[key]);
}



function moveLocation(param1, param2) {
    param1.location = param2;    
}


moveLocation(personTwo, nLoc);

console.log("\nafter: ");
for (let key in personTwo) {
    console.log(key + ':', personTwo[key]);
}




// 2.
// Julie and Timmy have gotten married! Since they'll be living together, we should give them the same location. However, since they'll be living together forever, let's save ourselves the hassle of updating both of their locations every time they move.
// Set Julie's location to Timmy's location by reference.
// Test this new link by using the following code, which utilizes our already-completed moveLocation() function with no changes necessary. Do both people now live in California? (They both should.)

const nLoc = {
    city: 'Mountain View',
    state: 'California',
    zip: 94035
};

console.log("before:");
console.log("personTwo:", personTwo);

personTwo.location = { ...personOne.location };


function setJulieLocationToTimmy(personOne, personTwo) {
    personTwo.location = personOne.location;
}


function moveLocation(person, newLoc) {
    person.location = newLoc;
}

moveLocation(personTwo, nLoc);

console.log("\nafter:");
console.log("personTwo:", personTwo);

const nLoc = {
  city: 'Mountain View',
  state: 'California',
  zip: 94035
};

moveLocation(personOne, nLoc);

console.log(personOne.location.city);
console.log(personTwo.location.city);


// 3.
const personThree = {
    name: {
      first: 'Chucky',
      last: personOne.name.last + '-' + personTwo.name.last
    },
    age: 0,
    location: personOne.location
  };
  
  console.log(personThree);
  
  moveLocation(personThree, personOne.location);
  
  console.log(personThree.location.city);


// 4.
personOne.age += 20;
personTwo.age += 20;
personThree.age += 20;

const personThreeLocationCopy = Object.assign({}, personThree.location);
personThree.location = personThreeLocationCopy;

moveLocation(personThree, { city: 'Los Angeles', state: 'California', zip: 90001 });

console.log(personOne.age);
console.log(personTwo.age);
console.log(personThree.age);
console.log(personOne.location.city);
console.log(personTwo.location.city);
console.log(personThree.location.city);



// 5.
personOne.age += 300;
personTwo.age += 300;
personThree.age += 300;

function clonePerson(person) {
  return JSON.parse(JSON.stringify(person));
}

const clonedPersonOne = clonePerson(personOne);
const clonedPersonTwo = clonePerson(personTwo);
const clonedPersonThree = clonePerson(personThree);

moveLocation(clonedPersonOne, { city: 'London', state: 'England', zip: 'SW1A 1AA' });
moveLocation(clonedPersonTwo, { city: 'Paris', state: 'France', zip: '75000' });
moveLocation(clonedPersonThree, { city: 'Tokyo', state: 'Japan', zip: '100-0000' });

console.log(personOne.age);
console.log(personTwo.age);
console.log(personThree.age);
console.log(clonedPersonOne.location.city);
console.log(clonedPersonTwo.location.city);
console.log(clonedPersonThree.location.city);



// 6.
const thoughts = {
    property1: 'Value 1',
    property2: 'Value 2',
    property3: 'Value 3'
  };
  
  personOne.thoughts = thoughts;
  personTwo.thoughts = thoughts;
  personThree.thoughts = thoughts;
  clonedPersonOne.thoughts = thoughts;
  clonedPersonTwo.thoughts = thoughts;
  clonedPersonThree.thoughts = thoughts;
  
  console.log(personOne.thoughts);
  console.log(personTwo.thoughts);
  console.log(personThree.thoughts);
  console.log(clonedPersonOne.thoughts);
  console.log(clonedPersonTwo.thoughts);
  console.log(clonedPersonThree.thoughts);
  */
 