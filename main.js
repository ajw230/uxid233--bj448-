console.log("Hello, World, welcome to a new day!");
const firstName = "Abrian";
const lastName = "Jackson";
const age = 19;
const greetingMessage = "Hello, People!";

console.log(firstName);
console.log(lastName);
console.log(age);
console.log(greetingMessage);
console.log(`first_name: = ${firstName}`);
// console.log(firstName);
// console.log(`first_name: + {firstName}`);
const greeting = `Hello, ${firstName} ${lastName} You are ${age} years old.`;
console.log(greeting);
const is_adult = age >= 18;

const hobbies = ["reading", "swimming", "coding"];
console.log(hobbies);

const profile = {
    firstName: firstName,
    lastName: lastName,
    age: age
};
console.log(profile);
console.log(`${firstName} an adult ${is_adult}`);

const my_flowers = [
    {
       start_month: "january",
        start_day: 1,
        name: ""

    },
    {
        firstName: "Jane",
        lastName: "Smith",
        age: 30
    },
    {
        firstName: "Bob",
        lastName: "Johnson",
        age: 35
    }
];
console.log(my_flowers);