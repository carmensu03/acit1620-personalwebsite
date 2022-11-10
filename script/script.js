let input = "";
do{
    input = prompt("4 digit course code");
    // console.log(Number(input));
}
while(input.length != 4 || isNaN(Number(input)));

let courseList = 
[{
    code: "1420",
    teacher: "Akila Ramani",
    name: "Intro to System Admin",},
{
    code: "1620",
    teacher: "Neda Changizi",
    name: "Web Fundamental Technologies",},
{
    code: "1630",
    teacher: "Benjamin Yu",
    name: "Database Systems",
}]

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