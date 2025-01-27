import { Component } from '@angular/core';
import { ToastService } from '../../services/toast.service';
import { RouterLink } from '@angular/router';
import { NgClass } from '@angular/common';

@Component({
  selector: 'test-toast-page',
  standalone: true,
  imports: [RouterLink, NgClass],
  templateUrl: './test-toast.component.html',
})
export default class TestToastComponent {
  // Array de prueba para ver los toasts bonitos diseñados
  numberOfToasts = [
    {
      title: 'Éxito',
      body: 'Operación completada con éxito',
      url: 'https://example.com',
      duration: 5000,
      type: 'success',
    },
    {
      title: 'Información',
      body: 'Esto es un mensaje informativo',
      url: 'https://example.com',
      duration: 3000,
      type: 'info',
    },
    {
      title: 'Advertencia',
      body: 'Algo podría no estar bien',
      url: 'https://example.com',
      duration: 3000,
      type: 'warning',
    },
    {
      title: 'Error',
      body: 'Algo salió mal. Inténtalo de nuevo.',
      url: 'https://example.com',
      duration: 3000,
      type: 'error',
    },
  ];

  // Sustituir por inject
  constructor(private toastService: ToastService) {}

  // Método para mostrar un toast de éxito sin tiempo para comprobar que funciona durante el tiempo de espera indicado en el servicio
  showSuccessToast() {
    this.toastService.success(
      'Éxito',
      'Operación completada con éxito',
      'https://example.com'
    );
  }

  // Método para mostrar un toast de error
  showErrorToast() {
    this.toastService.error(
      'Error',
      'Ha ocurrido un error',
      'https://example.com',
      5000
    );
  }

  // Método para mostrar un toast de información
  showInfoToast() {
    this.toastService.info(
      'Información',
      'Información adicional',
      'https://example.com',
      3000
    );
  }

  // Método para mostrar un toast de advertencia
  showWarningToast() {
    this.toastService.warning(
      'Advertencia',
      'Advertencia de ciertas condiciones',
      'https://example.com',
      2000
    );
  }
}
