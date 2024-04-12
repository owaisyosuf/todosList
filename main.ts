#! /usr/bin/env node
import inquirer from "inquirer";



let todos=[]; // todos empty list
let condition=true

while (condition){
// this is the item to add in todos
let answer = await inquirer.prompt(
[
  {
    name:"question1",
    message:"what do you want to add in your todos list",
    type:"input"
  },
  {
    name:"question2",
    message:"do you want to add more item in your todos list",
    type:"confirm",
    default:"true"
  }
]
)

todos.push(answer.question1)
console.log(todos)
condition=answer.question2
}