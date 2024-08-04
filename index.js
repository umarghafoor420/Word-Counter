import inquirer from "inquirer";
let ToDos = [];
let condition = true;
while (condition) {
    let addtask = await inquirer.prompt([
        {
            name: "ToDos",
            type: "input",
            message: "What you want to add in your todos?"
        },
        {
            name: "AddMore",
            type: "confirm",
            message: "Do you want to add more?",
            default: "true"
        }
    ]);
    ToDos.push(addtask.ToDos);
    condition = addtask.AddMore;
    console.log(ToDos);
}
