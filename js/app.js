const yargs = require("yargs");
const students = require('../tools/commands');


yargs.command({
    command:'add',
    describe:'Add student Data',
    builder:{
        id:{
            describe:"Student ID",
                type:'number',
                demandOption:true
        },
        name:{
            describe:"Student Name",
                type:'string',
                demandOption:true
        },
        degree:{
            describe:"Three Degrees",
                type:'array',
                demandOption:true
        },
        comment:{
            describe:"Write A Comment",
            type:"string"
        },
    },
    handler:()=>{
        students.addStudentData(yargs.argv.id,yargs.argv.name,yargs.argv.degree)
    }
})

yargs.command({
    command:'delete',
    describe:'Delete Student Data',
    builder:{
        id:{
            describe:"ID Of User Wanted To Delete",
                type:'number',
                demandOption:true
        }
    },
    handler:()=>{
        students.deleteStudentData(yargs.argv.id)
    }
})


yargs.command({
    command:'read',
    describe:'Read Student Data',
    builder:{
        id:{
            describe:"Student ID",
                type:'number',
                demandOption:true
        }
    },
    handler:()=>{
        students.readStudentData(yargs.argv.id)
    }
})

yargs.command({
    command:'list',
    describe:'Students List',
    handler:()=>{
        students.listStudentData()
    }
})


yargs.command({
    command:'update',
    describe:'Update Student Data',
    builder:{
        id:{
            describe:"Student ID",
                type:'number',
                demandOption:true
        },
        name:{
            describe:"New Student Name",
                type:'string',
                demandOption:true
        }
    },
    handler:()=>{
        students.updateStudentName(yargs.argv.id,yargs.argv.name)
    }
})
yargs.parse()