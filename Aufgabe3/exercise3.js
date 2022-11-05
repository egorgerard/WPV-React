//let fs = require("fs")
let fs = require("fs").promises
const { isBuffer } = require("util")

/*
//Aufgabe 1 + 2
var textDaten = " "

fs.readFile('Aufgabe3/text.txt', 'utf8', (err, data) => {

    if(err){
        console.log("fehler beim lesen");
        console.log(err)
        return
    }

    textDaten = data
    console.log(textDaten)

    fs.writeFile('Aufgabe3/newFile.txt', textDaten, err => {
        console.log("write: " + textDaten)
        if(err){
            console.log("fehler bei schreiben");
            console.error(err)
        }
        console.log("File writen successfully")
    })
})
*/


//Aufgabe 2

//Aufgabe 3
///*

var daten2 = " "
async function leseUndSchreibeFile() {
    try{
        daten2 = await fs.readFile('Aufgabe3/text.txt', {encoding: 'utf8' })
    } catch(err){
        console.log("Fehler beim lesen");
        console.log(err)
    }

    console.log("promises read:" + daten2)

    try {
        await fs.writeFile('Aufgabe3/newFile2.txt', daten2);
      } catch (err) {
          console.log("Fehler beim Schreiben")
        console.log(err);
      }
}

leseUndSchreibeFile()

//*/