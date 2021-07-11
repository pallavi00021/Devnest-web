/* 1. Write a JavaScript program to list the properties of a JavaScript object. 
Sample object: var student = { name : "David Rayy", sclass : "VI", rollno : 12 };
 Sample Output: name,sclass,rollno*/

 const student = {
   name: "Sample name",
   semester: 3,
   course: "btech",
   registerNo: 2200
 };

 console.log(`Name: ${student.name}\nSemester:${student.semester}\nCourse:${student.course}\nRegister number:${student.registerNo}`);

Output
Name: Sample name
Semester:3
Course:btech
Register number:2200


/* 2. Write a JavaScript program to delete the rollno property from the following object. 
Also print the object before or after deleting the property. 
Sample object: var student = { name : "David Rayy", sclass : "VI", rollno : 12 }; 
*/
var student1 = { 
  name : "David Rayy", 
  sclass : "VI", 
  rollno : 12 
}; 
console.log(student1);
delete student1.rollno;
console.log(student1);

Output
{name: "David Rayy", sclass: "VI", rollno: 12}
{name: "David Rayy", sclass: "VI"}

/*3. Write a JavaScript program to get the length of a JavaScript object.  
Sample object : var student = { name : "David Rayy", sclass : "VI", rollno : 12 }; */

var student1 = { 
  name : "David Rayy", 
  sclass : "VI", 
  rollno : 12 
};

console.log(`Length of the object:${Object.keys(student1).length}`);

Output
length of student1 is 3


/*4. Write a JavaScript program to display the reading status (i.e. display book name, author name and reading status) 
of the following books. var library = [ { author: 'Bill Gates', title: 'The Road Ahead', readingStatus: true }, 
{ author: 'Steve Jobs', title: 'Walter Isaacson', readingStatus: true }, { author: 'Suzanne Collins',
 title: 'Mockingjay: The Final Book of The Hunger Games', readingStatus: false }]; */
 var library = [ 
   { author: 'Bill Gates', 
   title: 'The Road Ahead', 
   readingStatus: true }, 
  { author: 'Steve Jobs', 
    title: 'Walter Isaacson', 
    readingStatus: true }, 
  { author: 'Suzanne Collins',
    title: 'Mockingjay: The Final Book of The Hunger Games', 
    readingStatus: false }];

for(let i=0;i<library.length;i++){
  console.log(`Book Name: ${library[i].title},\nAuthor Name: ${library[i].author} ,\nand Reading Status:${library[i].readingStatus}`);
}

Output
name of book: The Road Ahead, 
 name of the author: Bill Gates, 
 reading status: true
name of book: Walter Isaacson, 
 name of the author: Steve Jobs, 
 reading status: true
name of book: Mockingjay: The Final Book of The Hunger Games, 
 name of the author: Suzanne Collins, 
 reading status: false


/*5. Write a JavaScript program to get the volume of a Cylinder with four decimal places using object classes. 
Volume of a cylinder : V = πr2h where r is the radius and h is the height of the cylinder. Try To Attempt : Difficult Level Increased 
 */
const cylinder = [{
        radius: 6,
        height: 10
    },

    {
        radius: 7,
        height: 14
    },

    {
        radius: 6,
        height: 13
    }
];

for (let i = 0; i < cylinder.length; i++) {
    var v = 2 * Math.PI * cylinder[i].height * cylinder[i].radius;
    console.log(`area of cylinder with height ${cylinder[i].height} and radius ${cylinder[i].radius} is ${v.toFixed(4)}`);
}

Output
area of cylinder with height 10 and radius 6 is 376.9911
area of cylinder with height 14 and radius 7 is 615.7522
area of cylinder with height 13 and radius 6 is 490.0885


/*6. Write a JavaScript program to sort an array of JavaScript objects.  
Sample Object : var library = [ { title: 'The Road Ahead', author: 'Bill Gates', libraryID: 1254 }, 
{ title: 'Walter Isaacson', author: 'Steve Jobs', libraryID: 4264 }, 
{ title: 'Mockingjay: The Final Book of The Hunger Games', author: 'Suzanne Collins', libraryID: 3245 }]; 


Expected Output: [[object Object] { author: "Walter Isaacson", libraryID: 4264, title: "Steve Jobs" }, 
[object Object] { author: "Suzanne Collins", libraryID: 3245, title: "Mockingjay: The Final Book of The Hunger Games" }, 
[object Object] { author: "The Road Ahead", libraryID: 1254, title: "Bill Gates" }]*/

we have done sorting by libraryID

var library = [ { title: 'The Road Ahead', author: 'Bill Gates', libraryID: 1254 }, 
                { title: 'Walter Isaacson', author: 'Steve Jobs', libraryID: 4264 }, 
                { title: 'Mockingjay: The Final Book of The Hunger Games', author: 'Suzanne Collins', libraryID: 3245 }]; 

let n=Object.keys(library).length;

for(let i=0;i<n;i++)
{
  for(let j=0;j<n-1;j++)
  {
    if(library[j].libraryID<library[j+1].libraryID)
    {
      var temp=library[j];
      library[j]=library[j+1];
      library[j+1]= temp;
    }
  }
}
console.log(library);

Output
(3) [{…}, {…}, {…}]
0: {title: "Walter Isaacson", author: "Steve Jobs", libraryID: 4264}
1: {title: "Walter Isaacson", author: "Steve Jobs", libraryID: 4264}
2: {title: "Mockingjay: The Final Book of The Hunger Games", author: "Suzanne Collins", libraryID: 3245}
length: 3




