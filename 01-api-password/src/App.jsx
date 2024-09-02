import { useState } from 'react';
import './App.css';
import Checkboxes from './components/Checkboxes.jsx';
import Slider from './components/Slider.jsx';
import Generator from './components/Generator.jsx';
import TextInput from './components/TextInput.jsx';

function App() {
  const [sliderValue, setSliderValue] = useState(8);
  const [checkedItems, setCheckedItems] = useState({
    disableNumbers: false,
    disableSymbols: false,
    disableLowercase: false,
    disableUppercase: false,
  });
  const [inputValue, setInputValue] = useState();

  return (
    <>
      <h1>Password Generator</h1>
      <div className="card">
        <Slider sliderValue={sliderValue} setSliderValue={setSliderValue} />
        <Checkboxes checkedItems={checkedItems} setCheckedItems={setCheckedItems}/>
        <TextInput inputValue={inputValue} setInputValue={setInputValue}/>
        <br />
        <Generator 
          length={sliderValue} 
          numbers={checkedItems.disableNumbers} 
          symbols={checkedItems.disableSymbols}
          lowercase={checkedItems.disableLowercase}
          uppercase={checkedItems.disableUppercase}
          excludeText={inputValue}
          />
      </div>
    </>
  )
}

export default App
