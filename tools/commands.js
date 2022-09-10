const fs = require('fs');

const addStudentData = (id, name, degree,comment) => {
const students = loadStudentData();
    const alreadyStudent = students.find((element)=>{
        return element.id === id
    })
    if (alreadyStudent) {
        console.log('ID Used')
    } 
    else {
        students.push({
            id,
            name,
            degree,
        })
        saveStudentData(students)
        console.log('Data Saved Successfully')  
    }
}
const deleteStudentData =(id)=>{
    const students = loadStudentData()
    const student = students.find((el)=>{
        return el.id === id
    })
    if(student){
        const index = students.indexOf(student)
        students.splice(index,1)
        saveStudentData(students)
        console.log('Deleted Successfully')
    }else{
        console.log('No User Found')
    }
}

const readStudentData=(id)=>{
    const students=loadStudentData()
    const studentRequired=students.find((el)=>{
        return el.id === id
    })
    if(studentRequired){
        console.log(studentRequired)
    }
    else{
        console.log('No User Found')
    }
}

const listStudentData = ()=>{
    const students = loadStudentData()
    students.forEach((element)=>{
        console.log(` 
        Student Name Is ${element.name}
        With Id ${element.id}
        And His/Her Degrees Are ${element.degree}
        `) 
    });
}


const loadStudentData = () => {
    try {
        const data = fs.readFileSync('student.json').toString()
        return JSON.parse(data)
    }
    catch(e) {
        return []
    }
}
const updateStudentName =(id,name)=>{
    const students = loadStudentData()
    const student = students.find((el)=>{
        return el.id === id
    })
    if(student){
        const index = students.indexOf(student)
        student.name = name
        students.splice(index,1,student)
        saveStudentData(students)
        console.log('updated')
    }else{
        console.log('Not found')
    }
}

const saveStudentData = (data) => {
    const saveJson = JSON.stringify(data)
    fs.writeFileSync('student.json', saveJson)
}


module.exports = {
    addStudentData,
    deleteStudentData,
    readStudentData,
    listStudentData,
    updateStudentName,
}