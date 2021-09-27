import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent implements OnInit {
  // Variables
  public usuario!: any; // Guardar Usuario logueado
  
  constructor() {}

  ngOnInit(): void {}

  // Cerrar sesion
  logout() {
    localStorage.clear();
  }
}
