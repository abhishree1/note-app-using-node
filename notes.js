const fs = require('fs');
const chalk = require('chalk');
const { green } = require('chalk');

const success = chalk.bgGreen;
const failure = chalk.bgRed;

const readNote =(title)=>{
    notes = loadNotes();
    const readNote = notes.find(n => n.title === title);
    if(readNote){
        console.log(chalk.inverse(readNote.title));
        console.log(readNote.body);
    }
    else{
        console.log(failure("No note found!"));
        
    }
    
}

const addNote=(title, body)=>{
    const notes= loadNotes();
    const dublicateNote = notes.find((n)=>{ return n.title===title});
    
    if(!dublicateNote){
        notes.push({
            title:title,
            body:body
        })
        saveNotes(notes);
        console.log(success("Note added"));
    }
    else{
        console.log("Dublicate title");
        
    }
}

const saveNotes=(notes)=>{
    const noteJson = JSON.stringify(notes)
    fs.writeFileSync('notes.json', noteJson)
}

const loadNotes=()=>{
    try{
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJson = dataBuffer.toString();
        return JSON.parse(dataJson);
    }
    catch{
        return [];
    }
}

const deleteNote=(title)=>{
    const notes = loadNotes();
    const hasTitle = notes.filter(n=> n.title===title)

    if(hasTitle.length!==0){
        const newNotes = notes.filter(n=>{
            return n.title!==title
        })
        saveNotes(newNotes)
        console.log(success("Note deleted Successfully!"));    
    }
    else{
        console.log(failure("Title not found!"));
    }
}

const listNote=()=>{
    const notes =loadNotes()
    notes.forEach((note)=> console.log(note.title));
}

module.exports= {
    addNote : addNote,
    deleteNote:deleteNote,
    listNote:listNote,
    readNote:readNote
}