
import './App.css';
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
       <div className="container">
      <h1>Weather App</h1>
     
      <Weather />
      <footer>
        This project coded by Nataliia Melnyk and is <a href="https://github.com/avreliakotta/react-app" target="_blank" rel="noreferrer" > open sourced on GitHub
        </a>
      </footer>
      </div>
       </div>
  );
}

