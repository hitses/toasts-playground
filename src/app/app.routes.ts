import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadComponent: () => import('./pages/test-toast/test-toast.component'),
  },
  {
    path: 'route',
    pathMatch: 'full',
    loadComponent: () => import('./pages/test-route/test-route.component'),
  },
];
