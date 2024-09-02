const TextInput = ({ inputValue, setInputValue }) => {
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };  

  return (
    <div>
      <label>
        Exclude: 
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
        />
      </label>
    </div>
  );
};
  
export default TextInput;
  