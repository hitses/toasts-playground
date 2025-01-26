import { Component } from '@angular/core';
import { ToastService } from '../../services/toast.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'test-toast-page',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './test-toast.component.html',
})
export default class TestToastComponent {
  constructor(private toastService: ToastService) {}

  showSuccessToast() {
    this.toastService.success(
      'Éxito',
      'Operación completada con éxito',
      'https://example.com',
      5000
    );
  }

  showErrorToast() {
    this.toastService.error(
      'Error',
      'Ha ocurrido un error',
      'https://example.com',
      3000
    );
  }

  showInfoToast() {
    this.toastService.info(
      'Información',
      'Información adicional',
      'https://example.com',
      3000
    );
  }

  showWarningToast() {
    this.toastService.warning(
      'Advertencia',
      'Advertencia de ciertas condiciones',
      'https://example.com',
      3000
    );
  }
}
