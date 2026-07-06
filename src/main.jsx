import { StrictMode, useEffect } from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

function AppWrapper() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return <App />;
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppWrapper />
  </StrictMode>,
)