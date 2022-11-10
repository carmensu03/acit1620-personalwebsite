let input = "";
do{
    input = prompt("4 digit course code");
    // console.log(Number(input));
}
while(input == "1620");
// console.log(input);
alert(`Welcome ${input}`)

let courseList1 = {
    classID: "ACIT-1420",
    teacher: "Akila Ramani",
    program: "CIT",
};

let courseList2 = {
    classID: "ACIT-1620",
    teacher: "Neda Changizi",
    program: "CIT",
};

let courseList3 = {
    classID: "ACIT-1630",
    teacher: "Benjamin Yu",
    program: "CIT",
};

let courses = [course1, course2, course3];
let counter = 0
for (let stud of students)
{
    if(stud.program === "CIT" && stud.GPA > 3)
    {
        counter++;
    }
        
    // console.log(stud)
}
console.log(counter)