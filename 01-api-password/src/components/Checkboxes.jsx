const Checkboxes = ({checkedItems, setCheckedItems}) => {
  const handleCheckboxChange = (event) => {
    const name = event.target.name;
    const checked = event.target.checked;

    setCheckedItems((prev) => {
      const updatedItems = {
        disableNumbers: prev.disableNumbers,
        disableSymbols: prev.disableSymbols,
        disableLowercase: prev.disableLowercase,
        disableUppercase: prev.disableUppercase,
      };

      updatedItems[name] = checked;

      return updatedItems;
    });
  };

  return (
    <div>
      <label>
        <input
          type="checkbox"
          name="disableNumbers"
          checked={checkedItems.disableNumbers}
          onChange={handleCheckboxChange}
        />
        Disable Numbers
      </label>
      <br />
      <label>
        <input
          type="checkbox"
          name="disableSymbols"
          checked={checkedItems.disableSymbols}
          onChange={handleCheckboxChange}
        />
        Disable Symbols
      </label>
      <br />
      <label>
        <input
          type="checkbox"
          name="disableLowercase"
          checked={checkedItems.disableLowercase}
          onChange={handleCheckboxChange}
        />
        Disable Lowercase
      </label>
      <br />
      <label>
        <input
          type="checkbox"
          name="disableUppercase"
          checked={checkedItems.disableUppercase}
          onChange={handleCheckboxChange}
        />
        Disable Uppercase
      </label>
    </div>
  );
};

export default Checkboxes;
