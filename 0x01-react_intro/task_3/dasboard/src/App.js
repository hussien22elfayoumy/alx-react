import image from './logo.jpg';
import './App.css';
import { getFooterCopy, getFullYear } from './utils';

function App() {
  return (
    <div className='App'>
      <div className='App-header'>
        <img src={image} alt='logo' />
        <h1>School dashboard</h1>
      </div>

      <div className='App-body'>
        <p>Login to access the full dashboard</p>
        <form>
          <div>
            <label htmlFor='email'>email: </label>
            <input type='email' id='email' />
          </div>

          <div>
            <label htmlFor='password'>password: </label>
            <input type='password' id='password' />
          </div>

          <button>OK</button>
        </form>
      </div>

      <div className='App-footer'>
        Copyright {getFullYear()} - {getFooterCopy(true)}
      </div>
    </div>
  );
}

export default App;
