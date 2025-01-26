import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-test-route',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './test-route.component.html',
})
export default class TestRouteComponent {}
