import React from 'react';
import BotonesSuperiores from './Components/botonesSuperiores';
import './App.css';

function App() {
  return (
    <div>
      <div className="App-header">
        <div className="App">
          <BotonesSuperiores />
        </div>
      </div>
      <footer>
        <div className="footer-content">
          <div className='imagen'>
            <img src={'LogoUAM.png'} alt="Logo UAM" />
          </div>
          <div className='lista'>
            <ul>
              <li>Javier Chinchilla</li>
              <li>Saul Velazquez</li>
              <li>Robin Ruiz</li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
