import './App.css';
import randomColor from 'randomcolor';
import { useState } from 'react';

function App() {
  const [color, setColor] = useState('Wow, I look so boring right now...');
  const [hue, setHue] = useState('');
  const [luminosity, setLuminosity] = useState('');

  function handleChangeHue(event) {
    setHue(event.currentTarget.value);
  }

  function handleChangeLuminosity(event) {
    setLuminosity(event.currentTarget.value);
  }

  return (
    <div>
      <h1>Click to change the color of the box!</h1>

      <label htmlFor="hue">
        Enter a hue:
        <input type="text" id="hue" value={hue} onChange={handleChangeHue} />
      </label>
      <br />

      <label htmlFor="luminosity">
        Enter a luminosity:
        <input
          type="text"
          id="luminosity"
          value={luminosity}
          onChange={handleChangeLuminosity}
        />
      </label>
      <br />

      <button
        onClick={() =>
          setColor(
            randomColor({
              luminosity: luminosity,
              hue: hue,
            }),
          )
        }
      >
        Click me!
      </button>
      <div
        // className="ColorBox"
        style={{
          backgroundColor: color,
          transition: '1s',
          border: 'solid #000 5px',
          width: '200px',
          height: '200px',
        }}
      >
        {color}
      </div>
    </div>
  );
}

export default App;
