export interface Toast {
  title: string;
  body: string;
  url?: string;
  duration?: number;
  type: 'success' | 'error' | 'info' | 'warning';
  timerId?: any;
  timestamp: number;
  progress: number;
}
