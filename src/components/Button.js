/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import randomColor from 'randomcolor';

// CSS-in-JS
const button = css`
  margin-bottom: 1rem;
  color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px auto;
  font-size: 20px;
  width: 150px;
  height: 50px;
  font-family: 'Montserrat', sans-serif;
`;

function Button({ setColor, luminosity, hue }) {
  return (
    <button
      css={button}
      onClick={() =>
        setColor(
          randomColor({
            luminosity: luminosity,
            hue: hue,
          }),
        )
      }
    >
      Click me
    </button>
  );
}

export default Button;
