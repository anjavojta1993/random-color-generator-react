/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

// CSS-in-JS
const box = (color) => {
  return css`
    background-color: ${color};
    transition: 1s;
    font-size: 25px;
    width: 300px;
    height: 200px;
    margin: 20px auto;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 30px/60px;
    font-family: Montserrat, sans-serif;
  `;
};

function ColorBox({ color }) {
  return (
    <div className="colorBox" css={box(color)}>
      {color}
    </div>
  );
}

export default ColorBox;
