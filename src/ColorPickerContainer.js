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

          <div id='colorInfoContainer'>
            <div id='redContainer' className='colorSliderContainer'>
              <div id='redSlider' className='colorSlider'></div>
              <div id='redNumber' className='colorNumber'>
                <p className='colorNumberText'>0</p>
              </div>
            </div>

            <div id='greenContainer' className='colorSliderContainer'>
              <div id='greenSlider' className='colorSlider'></div>
              <div id='greenNumber' className='colorNumber'>
                <p className='colorNumberText'>0</p>
              </div>
            </div>

            <div id='blueContainer' className='colorSliderContainer'>
              <div id='blueSlider' className='colorSlider'></div>
              <div id='blueNumber' className='colorNumber'>
                <p className='colorNumberText'>255</p>
              </div>
            </div>

            <div id='htmlContainer' className='colorSliderContainer'>
              <p id='htmlText'>HTML:</p>
              <div id='htmlInputContainer'>
                <p id='htmlInput'>#0000ff</p>
              </div>
              <div id='copyContainer'>
                <div id='copyButton' />
              </div>
            </div>
          </div>
        </div>

        <div id='prevColorContainer'></div>

        <div id='buttonContainer'></div>
      </div>
    </div>
  );
};

export default ColorPickerContainer;
