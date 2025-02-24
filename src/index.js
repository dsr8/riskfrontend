import ReactDOM from 'react-dom/client';  // Add this import for ReactDOM
import App from './App';

const rootElement = document.getElementById("app");

if (rootElement) {
    ReactDOM.createRoot(rootElement).render(<App />);
} else {
    console.error("React root element not found!");
}
