import { createContext, useContext } from "react";
import type { NotificationContextType } from "./types/Notification";

export const NotificationContext = createContext<
  NotificationContextType | undefined
>(undefined);

export const useNotification = (): NotificationContextType => {
  const context = useContext(NotificationContext);
  if (!context) {
    throw new Error(
      "useNotification must be used within a NotificationProvider"
    );
  }

  return context;
};
