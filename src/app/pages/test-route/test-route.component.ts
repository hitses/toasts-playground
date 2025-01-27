import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

// Componente de prueba para ver si el router funciona con los toasts entre otros componentes
@Component({
  selector: 'app-test-route',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './test-route.component.html',
})
export default class TestRouteComponent {}
