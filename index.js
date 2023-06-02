const {readJSONFile, writeJSONFile} = require("./src/helpers")

const { index, show } = require("./src/animalsController")


const inform = console.log
// inform("tada! 🎉") //

//console.log("Our process object: ", process)
//console.log("List of Arguments for this process.argv: ", process.argv)

function run(){

    inform("Welcome to Our Animals App! 🐢✨\n\n")

    let animals = readJSONFile("data", "animals.json")
        console.log("Here is the data read: ", animals)
    
    const action = process.argv[2]; //What "action" did the user type in?
    const animal = process.argv[3];

    switch (action){

        case "index": //Animals
            const animalsView = index(animals)
            inform(animalsView);
            break;

        case "show":
            const animalViewShow = show(animal, animal);
            inform(animalViewShow);
            break;

        case "create":
            updatedAnimals = create(animals, animal);
            writeToFile = true;
            break;
    
        case "update":
            updatedAnimals = edit(animals, animal, process.argv[4]);
            writeToFile = true;
            break;
            
        case "destroy":
            updatedAnimals = destroy(animals, animal);
            writeToFile = true;
            break;
            
        case "score":
            const score = animals.reduce((acc, curr) => acc + curr.points, 0);
            inform("Current score", score);
            break;
    

        default:
            inform("Hey, we can't do that Fam :(")
    }



}

run()