
const notes = require('./notes.js');
const yargs= require('yargs');
//yargs.parse();
yargs.command({
    command:'add',
    description: 'Add Notes',
    builder:{
        title:{
            description:"Note title",
            demandOption:true,
            type:'string' 
        },
        body:{
            description:"Body of the note",
            demandOption:true,
            type: 'string'
        }
    },
    handler: function(argv){
        notes.addNote(argv.title,argv.body);
    }
}).argv

yargs.command({
    command:'delete',
    description: 'Delete Notes',
    builder:{
        title:{
            description:"Title of the note to delete",
            demandOption:true,
            type:'string'
        }
    },
    handler: function(argv){
        notes.deleteNote(argv.title);
    }
}).argv
yargs.command({
    command:'read',
    description: 'Read Notes',
    builder:{
        title:{
            description:"Pass the title of the note you want to read",
            demandOption:true,
            type:'string'
        }
    },
    handler: function(argv){
        notes.readNote(argv.title)
    }
}).argv

yargs.command({
    command:'list',
    description: 'List Notes',
    builder:{
    },
    handler: function(){
        notes.listNote()       
    }
}).argv

