/*function greetTheStudent(studentName){//name function
   // const message = 'Hello There';
    //const greeting  = message + ' ' + studentName
    return `Hello there ${studentName}`;
    //return greeting;
}*/
//fat arrow function

// const greetTheStudent = function (studentName){ //anonymous function
   
//      return `Hello there ${studentName}`;
    
// }




// const greetTheStudent = studentName => `Hello there ${studentName}`;

// const student = 'John Smith 1';
// const greet = greetTheStudent(student);
// console.log(greet);









//fat arrow function
/*
const greetTheStudent = (studentName)=>{ //anonymous function
   
    return `Hello there ${studentName}`;
   
}*/


// const fullName = function(firstName,middleName,lastName){
//    return `${lastName}, ${middleName}. ${firstName}`;
// }


// const fullName = (firstName,middleName,lastName)=>{
//     return `${lastName}, ${middleName}. ${firstName}`;
// }

const fullName = (firstName,middleName,lastName)=> `${lastName}, ${middleName}. ${firstName}`;

const titleName=fullName('Mary','R','Jane');

console.log(titleName);












//const student = 'John Smith 1';
//const greet = greetTheStudent(student);//argument
//console.log(greet);

//const titleName=fullName('Mary','R','Jane');
//console.log(titleName);

//console.log(message+' '+ studentName);
//console.log(message +''+ studentName2);