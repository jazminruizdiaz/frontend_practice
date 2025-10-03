import React from "react";
import { useNotification } from "../context/NotificationContext";

const TriggerButton: React.FC = () => {
  const { showNotification } = useNotification();

  return (
    <button
      className="btn btn--secondary"
      onClick={() => showNotification("Item saved", "success")}
    >
      Trigger Notification
    </button>
  );
};

export default TriggerButton;
