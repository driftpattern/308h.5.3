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

