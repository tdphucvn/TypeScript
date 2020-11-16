// const person: {
//     name: string;
//     age: number;
// }

// const person: {
//     name: string;
//     age: number;
//     hobbies: string[];
//     role: [number, string];
// } = {
//     name: 'Maximilian',
//     age: 30,
//     hobbies: ['Sports', 'Cooking'],
//     role: [2, 'author']
// };

//const ADMIN = 0;
//const READ_ONLY = 1;
//const AUTHOR = 2;

enum Role {ADMIN = 5, READ_ONLY = 100, AUTHOR = 200};

const person = {
    name: 'Maximilian',
    age: 30,
    hobbies: ['Sports', 'Cooking'],
    role: Role.ADMIN
};

let favoriteActivities: string[];
favoriteActivities = person.hobbies;

console.log(person.name, favoriteActivities);

// person.hobbies.forEach(hobby => {
//     console.log(hobby);
// });

for (const hobby of person.hobbies){
    console.log(hobby.toUpperCase());
};

if(person.role === Role.ADMIN){
    console.log('This is an Admin');
};