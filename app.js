let humans = [
    {
        name: "soroush",
        age: 20,
        jobs: ["Dveloper" , "iTman" , "helpDesk"],
        gender: "male",
        hascar: true,
    }
    ,
    {
        name: "hani",
        age: 19,
        jobs: ["teacher"],
        gender: "female",
        hascar: false,

    },
];
let pass = "";

let totalAge = humans[0].age + humans[1].age;

let avgAge = totalAge / humans.length;

let standardAge = 18;

if (avgAge >= standardAge) {
    pass = "Yes";
} else {
    pass = "No";
    console.log("Can Marriage?" , pass);
    return;
};

let haveCar = humans[0].hascar || humans[1].hascar;

if (haveCar) {
    pass = "Yes";
} else {
    pass = "No";
    console.log("Can Marriage? " , pass);
    return;
};


if (humans[0].gender !== humans[1].gender) {
    pass = "Yes";
} else {
    pass = "No";
    console.log("Can Marriage? " , pass);
    return;
};


let human0HasJob = humans[0].jobs.length > 0;
let human1HasJob = humans[1].jobs.length > 0;

if (human0HasJob || human1HasJob ) {
    pass = "Yes";
} else {
    pass = "No";
    console.log("Can Marriage? " , pass);
    return;
}
console.log("Can Marriage? ", pass);
/*  */
