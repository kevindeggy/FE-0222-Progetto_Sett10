import { Component, OnInit } from '@angular/core';
import { addTask, getTask, arrayTodo } from '../services/todos.service';

@Component({
  template: `
  <div class="container text-center">
     <h1 class="text-center">
      To Do List:
    </h1>
    <p class="text-center">To do:</p>
    <input class="form-control w-25 mx-auto" type="text" [(ngModel)]="daFare" />
   <button class="btn btn-primary mt-2" (click)="add(daFare)">Aggiungi Task</button>
   <p class="mt-4" *ngIf="arTodo.length === 0">{{ricerca}}</p>
    <ul id="list" *ngFor="let item of arTodo">
    <li *ngIf="item.completed === false" class="d-flex justify-content-between fs-5 w-25" > <span *ngIf="item.modifica === false">- {{item.title}}</span> <input *ngIf="item.modifica === true" class="form-control w-75" type="text" [(ngModel)]="item.title"> <span><svg *ngIf="item.modifica === false" (click)="modifica(item.id)" xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
  <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
  <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
</svg><span *ngIf="item.modifica === false" (click)="fattoTask(item.id)" class="btn btn-success mx-2">V</span><span><svg *ngIf="item.modifica === true" (click)="fattoModifica(item.id)" xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-check2-square mx-1" viewBox="0 0 16 16">
  <path d="M3 14.5A1.5 1.5 0 0 1 1.5 13V3A1.5 1.5 0 0 1 3 1.5h8a.5.5 0 0 1 0 1H3a.5.5 0 0 0-.5.5v10a.5.5 0 0 0 .5.5h10a.5.5 0 0 0 .5-.5V8a.5.5 0 0 1 1 0v5a1.5 1.5 0 0 1-1.5 1.5H3z"/>
  <path d="m8.354 10.354 7-7a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0z"/>
</svg></span></span></li>
    </ul>
   </div>
  `,
  styles: [`
  #list {
    margin: 0;
    padding: 0;
  }
    #list li {
      border-bottom: 1px solid black;
      padding: 5px 0;
      box-shadow: 0px 0px 0px 0px grey;
      margin: 15px auto 0;
    }
    #list li:hover {
      box-shadow: 0px 2px 4px 4px grey;
    }
    .bi {
      cursor: pointer;
    }
    `
  ]
})

export class TodoComponent implements OnInit {
  daFare: string = '';
  arTodo = arrayTodo;
  ricerca = 'Sto cercando i tasks...'

  constructor() {
    getTask().then((resp) => {
      this.arTodo = resp;
    })
  }

  fattoTask(num: number) {
    this.arTodo[num - 1].completed = true;
  }

  add(todo: string) {
    addTask(todo);
    setTimeout(() => {
      this.daFare = '';
    }, 1800)
  }

  modifica(item: number) {
    this.arTodo[item - 1].modifica = true;
  }

  fattoModifica(item: number) {
    this.arTodo[item - 1].modifica = false;
  }

  aggiorna() {
    setTimeout(() => {
      if (this.arTodo.length === 0) {
        return this.ricerca = 'Nessun Tasks'
      } else {
        return this.ricerca = '';
      }
    }, 2000)
  }
  ngOnInit(): void {
    this.aggiorna();
  }

}
