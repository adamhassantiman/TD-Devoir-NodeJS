
const schoolData = require("./schoolData");

console.log("List of students:", schoolData.students);
console.log("List of courses:", schoolData.courses);

const { courses } = require("./schoolData");
console.log("Courses (selectively imported):", courses);

console.log("__filename :", __filename);
console.log("__dirname :", __dirname);
