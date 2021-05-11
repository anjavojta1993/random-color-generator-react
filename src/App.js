import './App.css';
import { useState } from 'react';
import Button from './components/Button';
import ColorBox from './components/ColorBox';
import Inputs from './components/Inputs';

function App() {
  const [color, setColor] = useState('Wow, I look so boring right now...');
  const [hue, setHue] = useState('');
  const [luminosity, setLuminosity] = useState('');

  return (
    <>
      <h1>Change the color of the box!</h1>
      <Inputs
        setHue={setHue}
        luminosity={luminosity}
        hue={hue}
        setLuminosity={setLuminosity}
      />
      <Button setColor={setColor} luminosity={luminosity} hue={hue} />
      <ColorBox color={color} />
    </>
  );
}

export default App;
