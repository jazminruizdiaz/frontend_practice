import React from "react";
import { useNotification } from "../context/NotificationContext";

const TriggerButton2: React.FC = () => {
  const { showNotification } = useNotification();

  return (
    <button
      className="btn btn--primary"
      onClick={() => showNotification("Welcome", "info")}
    >
      Trigger from Navbar
    </button>
  );
};

export default TriggerButton2;
