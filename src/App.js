import netlifyIdentity from 'netlify-identity-widget';
import './App.css';

netlifyIdentity.init();

function App() {

  const loginWidget = () => {
    netlifyIdentity.open('login');
  }

  return (
    <div className="App">
      <header className="App-header">
      <h2>Three Words a Day!</h2>
      <button onClick={loginWidget}>Login</button>
      </header>
    </div>
  );
}

export default App;
