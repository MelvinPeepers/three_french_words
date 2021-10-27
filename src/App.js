import netlifyIdentity from 'netlify-identity-widget';
import './App.css';

netlifyIdentity.init();

function App() {

  const loginWidget = () => {
    netlifyIdentity.open('login');
  }

  const callFunction = () => {
    const user = netlifyIdentity.currentUser();
    console.log(user)
    fetch("/.netlify/functions/protected-function", user && {
      headers: {
        Authorization: "Bearer " + user.token.access_token
      }
    })
    .then(x => {
      return x.json()
    })
    .then(res => {
      if(res.data === "Not Allowed") {
        netlifyIdentity.open('login');
      } else {
        alert(res.data)
      }
    })

  }

  return (
    <div className="App">
      <header className="App-header">
      <h2>Three Words a Day!</h2>
      <h3>Branch</h3>
      <button onClick={loginWidget}>{"Login"}</button>
      <button onClick={callFunction}>{"Call Function"}</button>
      </header>
    </div>
  );
}

export default App;
