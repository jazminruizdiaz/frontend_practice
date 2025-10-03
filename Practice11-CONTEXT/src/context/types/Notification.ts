export type NotificationType = "success" | "info";

export interface Notification {
  message: string;
  type: NotificationType;
}

export interface NotificationContextType {
  notification: Notification | null;
  showNotification: (message: string, type: NotificationType) => void;
  clearNotification: () => void;
}
