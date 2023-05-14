let command = prompt("Please choose a command (new, list, delete, quit): ");
let toDoList = ["laundry", "cry"];
while (command != "quit") {
    switch (command) {
        case "new":
            let newToDo = prompt("Please enter to-do item: ");
            toDoList.push(newToDo);
            console.log(`Added ${newToDo} to the list.`);
            command = prompt("Please choose a command (new, list, delete, quit): ");
            break;
        case "list":
            console.log("**************");
            for (let i = 0; i < toDoList.length; i++) {
                console.log(`${i}: ${toDoList[i]}`);
            }
            console.log("**************");
            command = prompt("Please choose a command (new, list, delete, quit): ");
            break;
        case "delete":
            let deleteIndex = prompt("Please indicate the indice of the item to delete: ");
            console.log(`Deleted ${toDoList[deleteIndex]} at index ${deleteIndex} from list.`);
            toDoList.splice(deleteIndex, 1);
            command = prompt("Please choose a command (new, list, delete, quit): ");
            break;
        default:
            command = prompt("I do not know this command. Please choose new, list, delete or quit: ");
            break;
    }
}
console.log("You have quit the app. Have a nice day!");