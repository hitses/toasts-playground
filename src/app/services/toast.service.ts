import { Injectable } from '@angular/core';
import { Toast } from '../models/toast-interface';
import { filter, Subject } from 'rxjs';
import { NavigationStart, Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class ToastService {
  private toasts: Toast[] = [];
  private toastSubject = new Subject<Toast[]>();

  constructor(private router: Router) {
    // Escuchar cambios de ruta para mantener los toasts
    this.router.events
      .pipe(filter((event) => event instanceof NavigationStart))
      .subscribe(() => {
        // Reiniciar los temporizadores después de la navegación
        this.toasts.forEach((toast) => {
          if (toast.duration) {
            const elapsedTime = Date.now() - toast.timestamp; // Tiempo transcurrido
            const remainingTime = toast.duration - elapsedTime; // Tiempo restante

            if (remainingTime > 0) {
              clearInterval(toast.timerId); // Limpiar el temporizador anterior
              this.startProgressAnimation(toast, remainingTime); // Reiniciar la animación
            } else {
              this.removeToast(toast); // Si no queda tiempo, eliminar el toast
            }
          }
        });
        this.toastSubject.next([...this.toasts]);
      });
  }

  getToasts() {
    return this.toastSubject.asObservable();
  }

  success(title: string, body: string, url?: string, duration?: number) {
    this.addToast({
      title,
      body,
      url,
      duration,
      type: 'success',
      timestamp: Date.now(),
      progress: 100,
    });
  }

  error(title: string, body: string, url?: string, duration?: number) {
    this.addToast({
      title,
      body,
      url,
      duration,
      type: 'error',
      timestamp: Date.now(),
      progress: 100,
    });
  }

  info(title: string, body: string, url?: string, duration?: number) {
    this.addToast({
      title,
      body,
      url,
      duration,
      type: 'info',
      timestamp: Date.now(),
      progress: 100,
    });
  }

  warning(title: string, body: string, url?: string, duration?: number) {
    this.addToast({
      title,
      body,
      url,
      duration,
      type: 'warning',
      timestamp: Date.now(),
      progress: 100,
    });
  }

  removeToast(toast: Toast) {
    // Limpiar el temporizador si existe
    if (toast.timerId) {
      clearInterval(toast.timerId);
    }

    this.toasts = this.toasts.filter((t) => t !== toast);
    this.toastSubject.next([...this.toasts]);
  }

  private addToast(toast: Toast) {
    toast.progress = 100; // Inicializar el progreso en 100%
    if (toast.duration) {
      this.startProgressAnimation(toast, toast.duration);
    }

    this.toasts.push(toast);
    this.toastSubject.next([...this.toasts]);
  }

  private startProgressAnimation(toast: Toast, duration: number) {
    const interval = 50; // Intervalo de actualización (en milisegundos)
    const steps = duration / interval; // Número de pasos
    const decrement = 100 / steps; // Reducción del progreso en cada paso

    toast.timerId = setInterval(() => {
      toast.progress -= decrement;
      if (toast.progress <= 0) {
        clearInterval(toast.timerId);
        this.removeToast(toast);
      }
      this.toastSubject.next([...this.toasts]); // Actualizar el estado
    }, interval);
  }
}
