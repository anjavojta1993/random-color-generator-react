function Inputs({ setHue, luminosity, hue, setLuminosity }) {
  function handleChangeHue(event) {
    setHue(event.currentTarget.value);
  }

  function handleChangeLuminosity(event) {
    setLuminosity(event.currentTarget.value);
  }

  return (
    <>
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
    </>
  );
}

export default Inputs;
