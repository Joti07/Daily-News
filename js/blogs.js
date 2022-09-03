

let employees = [
    {
        firstName: 'John',
        lastName: 'Doe',
        age: '',
        joinedDate: 'December 15, 2017'
    },

    {
        firstName: 'Ana',
        lastName: 'Rosy',
        age: 25,
        joinedDate: 'January 15, 2019'
    },

    {
        firstName: 'Zion',
        lastName: 'Albert',
        age: 30,
        joinedDate: 'February 15, 2011'
    }
];

//employees.push(value);
employees.sort((a, b) => {

    return b.age - a.age;
});
console.log(employees)