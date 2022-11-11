let input = "";
do{
    input = prompt("4 digit course code");
    // console.log(Number(input));
}
while(input.length != 4 || isNaN(Number(input)));

let courseList = 
[{
    code: "ACIT 1420",
    teacher: "Akila Ramani",
    name: "Intro to System Admin",},
{
    code: "ACIT 1620",
    teacher: "Neda Changizi",
    name: "Web Fundamental Technologies",},
{
    code: "ACIT 1630",
    teacher: "Benjamin Yu",
    name: "Database Systems",
}];

let repeat = false
for(let course of courseList) 
{
    if (course['code'].includes(input))
        {console.log(`Yes I am taking the course: ${course.code} - ${course.name}`);
        repeat = true
    }  
} 

if (repeat === false)
    courseList.push({"code": input, "name": null})
    {console.log(`Success`)};

