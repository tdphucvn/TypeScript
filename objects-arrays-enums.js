"use strict";
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
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 5] = "ADMIN";
    Role[Role["READ_ONLY"] = 100] = "READ_ONLY";
    Role[Role["AUTHOR"] = 200] = "AUTHOR";
})(Role || (Role = {}));
;
const person = {
    name: 'Maximilian',
    age: 30,
    hobbies: ['Sports', 'Cooking'],
    role: Role.ADMIN
};
let favoriteActivities;
favoriteActivities = person.hobbies;
console.log(person.name, favoriteActivities);
// person.hobbies.forEach(hobby => {
//     console.log(hobby);
// });
for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase());
}
;
if (person.role === Role.ADMIN) {
    console.log('This is an Admin');
}
;
