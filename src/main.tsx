import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

(function () {
  const redirect = sessionStorage.getItem('redirect');
  if (redirect) {
    sessionStorage.removeItem('redirect');
    if (window.location.pathname !== redirect) {
      window.history.replaceState(null, '', redirect);
    }
  }
})();

createRoot(document.getElementById("root")!).render(<App />);
