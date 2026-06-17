students = [ {name:'Ahmed', age:20, grade:14}, {name:'Sara', age:22, grade:18}, {name:'Ali', age:19,
grade:9}, {name:'Yasmine', age:21, grade:16} ]
//Task 1:
for(let i=0; i<students.length; i++){
    console.log(students[i]);
}

//Task 2:
for(let i=0; i<students.length; i++){
    if(students[i].grade >=10)
        console.log(students[i].name+" "+"passed");
    else
        console.log(students[i].name+" "+"failed");
}

//Task 3:
let counter = 0;
for(let i=0; i<students.length; i++){
    if(students[i].grade >=10){
        counter++;
    }
}
console.log("Number of students who passed: " + counter);

//Task 4:
let max=students[0].grade;
for(let i=0; i<students.length; i++){
    if(students[i].grade > max){
        max=students[i].grade;
    }
    else
        max=students[0].grade;
}
console.log("Maximum grade: " + max);

//Task 5:
function isAdult(age){
    if(age >= 18)
        return true;
    else
        return false;
}
console.log(isAdult(20));

//Task 6:
let sara =students.find(student => student.name === "Sara");
let passed = students.filter(student => student.grade >= 10);

//Bonus:
students.push({name:'Omar', age:23, grade:12});
console.log(students);
console.log(students.length);
students.sort((a, b) => b.grade - a.grade);
console.log(students);
