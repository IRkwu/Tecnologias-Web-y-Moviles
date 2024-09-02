const Slider = ({ sliderValue, setSliderValue }) => {
  const handleSliderChange = (event) => {
    setSliderValue(event.target.value);
  };

  return (
    <div>
      <label>
        Password Length: 
        <input
          type="range"
          min="8"
          max="50"
          value={sliderValue}
          onChange={handleSliderChange}
        />
      </label>
      <div>Selected Length: {sliderValue}</div>
    </div>
  );
};

export default Slider;
