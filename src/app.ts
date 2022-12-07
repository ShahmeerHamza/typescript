// const input1 = document.getElementById("num1")! as HTMLInputElement;
// const input2 = document.getElementById("num2")! as HTMLInputElement;
// const button = document.querySelector("button")!;

// function add(num1: number, num2: number) {
//     return num1 + num2;
// }

// button.addEventListener("click", function () {
//     console.log(add(+input1.value, +input2.value));
// });

// // Define a single type of variable

// // let person = "Ishaq";
// let person: string;
// person = "Nadir";
// person = "Ishaq";

// // Define a multiple types of variable

// let person: string | number | boolean;
// person = "Nadir";
// person = "Ishaq";
// person = 12;
// person = 13;
// person = true;

// // Define a single type of array

// let names: string[] = [];
// names.push("true");
// names.push("Hamza");

// // Define multiple types of array
// // Tuples

// let names: [
//     string,
//     string,
//     boolean
// ] = ["hamza", "awan0", true];
// // names.push("true");
// // names.push("Hamza");
// // names.push(false);


// // Define a custom type function

// function myFunc (num1: number, num2: number, cond: "add" | "subtract") {
//     if (cond === "add") {
//         return num1 + num2;
//     } else if (cond === "subtract") {
//         return num1 - num2;
//     }
// };

// console.log(myFunc(5,7, "add"));


// // Define a function in variable

// let myFunc: (x: number, y: number, z: "add" | "subtract") => number;

// myFunc = function add (num1: number, num2: number, cond: "add" | "subtract"): number{
//     if (cond === "add") {
//         return num1 + num2;
//     } else if (cond === "subtract") {
//         return num1 - num2;
//     }
// };

// console.log(myFunc(5, 7, "add"));


// type University = [
//     {
//     name: string;
//     courses: {
//         name: string;
//         semesters: number;
//         hourPerSemester: number;
//         feePerSemester: number;
//     }[];
//     email: string;
//     contact: number;
//     address: string;
//     students: {
//         name: string;
//         fatherName: string;
//         contact: number;
//         email: string;
//         address: string;
//     }[],
//     professors: {
//         name: string;
//         fatherName: string;
//         contact: number;
//         email: string;
//         address: string;
//     }[]
// }
// ]

// let universities : University = [
//     {
//         name: "Karchi Univesity",
//         email: "ku@edu.com",
//         contact: 92,
//         address: "Gulshan",
//         students: [
//             {
//                 name: "Ishaq",
//                 fatherName: "XYZ",
//                 contact: 03001234567,
//                 email: "Ishaq@gmail.com",
//                 address: "400/1 Karachi",
//             },
//             {
//                 name: "Nadir",
//                 fatherName: "XYZ",
//                 contact: 03011234567,
//                 email: "Nadir@gmail.com",
//                 address: "400/1 Karachi",
//             },
//             {
//                 name: "Abdullah",
//                 fatherName: "XYZ",
//                 contact: 03021234567,
//                 email: "qabdullah@gmail.com",
//                 address: "400/1 Karachi",
//             }
//         ],
//         courses: [
//             {
//                 name: "Bachelors of Computer Science",
//                 semesters: 8,
//                 hourPerSemester: 18,
//                 feePerSemester: 100000,
//             }
//         ],
//         professors: [
//             {
//                 name: "Ishaq",
//                 fatherName: "XYZ",
//                 contact: 03001234567,
//                 email: "Ishaq@gmail.com",
//                 address: "400/1 Karachi",
//             },
//             {
//                 name: "Nadir",
//                 fatherName: "XYZ",
//                 contact: 03001234567,
//                 email: "Nadir@gmail.com",
//                 address: "400/1 Karachi",
//             },
//             {
//                 name: "Abdullah",
//                 fatherName: "XYZ",
//                 contact: 03001234567,
//                 email: "qabdullah@gmail.com",
//                 address: "400/1 Karachi",
//             }
//         ]
//     }
// ]




const button = document.querySelector("button")!;

function log(data: string) {
    console.log("clicked" + data);
}

button.addEventListener("click", log.bind(null, "Button"))
