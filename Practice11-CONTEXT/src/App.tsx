import "./App.css";
import Notification from "./components/Notification";
import TriggerButton from "./components/TriggerButton";
import TriggerButton2 from "./components/TriggerButton2";
import { NotificationContext } from "./context/NotificationContext";
import { useNotificationProvider } from "./context/useNotificationProvider";

function App() {
  const notificationValue = useNotificationProvider();
  return (
    <NotificationContext value={notificationValue}>
      <div className="app">
        <Notification />
        <nav className="navbar">
          <h1 className="navbar__title"> Notification System</h1>
          <TriggerButton2 />
        </nav>
        <main className="main">
          <TriggerButton />
        </main>
      </div>
    </NotificationContext>
  );
}

export default App;
