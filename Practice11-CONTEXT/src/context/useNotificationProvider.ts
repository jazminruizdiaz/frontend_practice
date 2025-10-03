import { useEffect, useState } from "react";
import type {
  NotificationContextType,
  NotificationType,
  Notification,
} from "./types/Notification";

export const useNotificationProvider = (): NotificationContextType => {
  const [notification, setNotification] = useState<Notification | null>(null);

  const showNotification = (
    message: string,
    type: NotificationType = "info"
  ) => {
    setNotification({ message, type });
  };

  const clearNotification = () => {
    setNotification(null);
  };

  useEffect(() => {
    if (notification) {
      const timer = setTimeout(clearNotification, 3000);
      return () => clearTimeout(timer);
    }
  }, [notification]);

  return { notification, showNotification, clearNotification };
};
