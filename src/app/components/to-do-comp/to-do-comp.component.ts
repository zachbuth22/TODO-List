import { Component } from '@angular/core';
import { ToDo } from 'src/app/models/todo';

@Component({
  selector: 'app-to-do-comp',
  templateUrl: './to-do-comp.component.html',
  styleUrls: ['./to-do-comp.component.css']
})
export class ToDoCompComponent {

  allToDo: ToDo [] = [
    {
      task: "Make a To-Do list",
      completed: false,
    },  
    {
      task: "Mow the lawn",
      completed: false,
    },  
    {
      task: "Walk the dog",
      completed: false,
    },  
    {
      task: "Fend off the existential void",
      completed: false,
    },  
    {
      task: "Wash the dishes",
      completed: false,
    },  
    {
      task: "Eat an apple",
      completed: false,
    },  
    {
      task: "Chill out",
      completed: false,
    }
  ];

  completeTask(targetTodo:ToDo):void{
    let index = this.allToDo.findIndex((t:ToDo) => t == targetTodo);
    this.allToDo[index].completed = true; 
  }


  newToDo:ToDo = {} as ToDo;

  addTask():void{
    let result: ToDo = {
      task: this.newToDo.task,
      completed: false
    };

    this.allToDo.push(result)
    
    this.newToDo = {} as ToDo;
  }

    gratsMessage():boolean{
      let result:boolean = false;
      this.allToDo.forEach((t:ToDo) =>{
      if(t.completed == false){
        result = true;
      }        
    })
  return result;  
  }
}
