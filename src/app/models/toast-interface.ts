export interface Toast {
  title: string;
  body: string;
  type: 'success' | 'error' | 'info' | 'warning';
  timestamp: number;
  url?: string;
  duration?: number;
  timerId?: any;
  progress: number; // Porcentaje de progreso del toast, seguramente desechable por no usar barra de tiempo
}
