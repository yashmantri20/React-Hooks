import './App.css';
import Auth from './Hooks/Auth';
import UseEffectOne from './Hooks/UseEffectOne';
import UseEffectTwo from './Hooks/UseEffectTwo';
import UseStateOne from './Hooks/UseStateOne';
import UseStateThree from './Hooks/UseStateThree';
import UseStateTwo from './Hooks/UseStateTwo';

function App() {
  return (
    <div className="App">
      <h1>Hooks HandsOn</h1>

      <h1>Use State Hooks</h1>

      <UseStateOne/>
      <UseStateTwo/>
      <UseStateThree/>

      <hr/>

      <h1>Use Effect Hooks</h1>
      <UseEffectOne/>
      <UseEffectTwo/>

      <hr/>

      <Auth/>
    </div>
  );
}

export default App;
