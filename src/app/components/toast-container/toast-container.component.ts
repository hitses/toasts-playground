import { Component } from '@angular/core';
import { Toast } from '../../models/toast-interface';
import { ToastService } from '../../services/toast.service';

// Componente principal del container de toasts, que se encarga de mostrar y eliminar cada toast
@Component({
  selector: 'toast-container-component',
  standalone: true,
  imports: [],
  templateUrl: './toast-container.component.html',
})
export class ToastContainerComponent {
  // Sustituir por signal
  toasts: Toast[] = [];

  // Sustituir por inject
  constructor(private toastService: ToastService) {}

  // Obtener los toasts y asignarlos a la variable
  ngOnInit() {
    this.toastService.getToasts().subscribe((toasts) => {
      this.toasts = toasts;
    });
  }

  // Eliminar el toast activo en pantalla
  removeToast(toast: Toast) {
    this.toastService.removeToast(toast);
  }
}
