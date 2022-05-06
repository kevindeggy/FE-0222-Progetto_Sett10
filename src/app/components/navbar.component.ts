import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  template: `
   <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="cointener-fluid">
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="navbarToggler" aria-expanded="false" aria-controls="navbarToggler" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
        <div class="collapse navbar-collapse" id="navbarToggler">
            <a class="navbar-brand mx-5" href="javascript:void(0)">ToDoList</a>
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                    <a class="nav-link" aria-current="page" [routerLink]="['/']" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}">Home</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" aria-current="page" [routerLink]="['/completed']" routerLinkActive="active">Completati</a>
                </li>
            </ul>
        </div>
    </div>
</nav>
  `,
  styles: [
  ]
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
