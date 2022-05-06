import { Component, OnInit } from '@angular/core';
import { arrayTodo } from '../services/todos.service';

@Component({
  template: `
    <div class="container text-center">
     <h1 class="text-center">
      The Done List:
    </h1>
    <p class="text-center">Done:</p>
    <p *ngIf="arTodo.length === 0">{{ricerca}}</p>
    <div *ngIf="arTodo.length !== 0">
    <p id="stampa" [innerText]="ricerca2"></p>
    </div>
    <ul id="list2" *ngFor="let item of arTodo">
    <li *ngIf="item.completed === true && item.modifica === false" class="d-flex justify-content-between fs-5 w-25" >- {{item.title}} <span (click)="cancella(item.id)" class="btn btn-danger mx-2">X</span></li>
    </ul>
    </div>
  `,
  styles: [`#list {
    margin: 0;
    padding: 0;
  }
    #list2 li {
      background-color: green;
      color: white;
      border-bottom: 1px solid black;
      padding: 5px 0;
      box-shadow: 0px 0px 0px 0px grey;
      margin: 0 auto 15px;
    }
    #list2 li:hover {
      box-shadow: 0px 2px 4px 4px grey;
    }`
  ]
})
export class CompletatiComponent implements OnInit {
  arTodo = arrayTodo
  ricerca = 'Sto cercando i tasks completati...'
  ricerca2 = ''

  constructor() { }

  cancella(id: number) {
    this.arTodo[id - 1].modifica = true;
  }

  ricercaTaskCompl(): any {
    let ricercato: boolean = false;
    for (let i = 0; i < this.arTodo.length; i++) {
      if (this.arTodo[i].completed === true) {
        ricercato = true
      }
    }

    if (ricercato === true) {
      document.querySelector('#stampa')?.remove();
    } else {
      this.ricerca2 = 'Sto cercando i tasks completati...'
      setTimeout(() => {
        this.ricerca2 = 'Nessun Tasks Completato'
      }, 2000);
    }

  }

  aggiornaCompl() {
    if (this.arTodo.length === 0) {
      setTimeout((): any => {
        return this.ricerca = 'Nessun Tasks Completato'
      }, 2000)
    } else {
      this.ricercaTaskCompl();
    }
  }
  ngOnInit(): void {
    this.aggiornaCompl();
  }
}
