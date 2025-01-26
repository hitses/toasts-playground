import { Component } from '@angular/core';
import { Toast } from '../../models/toast-interface';
import { ToastService } from '../../services/toast.service';

@Component({
  selector: 'toast-container-component',
  standalone: true,
  imports: [],
  templateUrl: './toast-container.component.html',
})
export class ToastContainerComponent {
  toasts: Toast[] = [];

  constructor(private toastService: ToastService) {}

  ngOnInit() {
    this.toastService.getToasts().subscribe((toasts) => {
      this.toasts = toasts;
    });
  }

  removeToast(toast: Toast) {
    this.toastService.removeToast(toast);
  }
}
