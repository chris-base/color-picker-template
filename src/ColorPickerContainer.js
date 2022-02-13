import "./ColorPickerContainerStyles.css";

const ColorPickerContainer = () => {
  return (
    <div id='pickerContainer'>
      <div id='toolbarContainer'>
        <div id='closeButton'>
          <p id='closeText'>X</p>
        </div>
      </div>

      <div id='appBody'>
        <div id='wheelAndInfoContainer'>
          <div id='colorWheel' />

          <div id='colorInfoContainer'></div>
        </div>

        <div id='prevColorContainer'></div>

        <div id='buttonContainer'></div>
      </div>
    </div>
  );
};

export default ColorPickerContainer;
