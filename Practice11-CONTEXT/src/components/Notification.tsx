import React from "react";
import { useNotification } from "../context/NotificationContext";

const Notification: React.FC = () => {
  const { notification, clearNotification } = useNotification();
  if (!notification) return null;

  return (
    <div className="toast">
      <div className="toast__content">
        <p className="toast__message">{notification.message}</p>
      </div>
      <button className="toast__close" onClick={clearNotification}>
        x
      </button>
    </div>
  );
};

export default Notification;
