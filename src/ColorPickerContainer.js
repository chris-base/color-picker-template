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

        <div id='prevColorContainer'>
          <div id='currOldColorContainer'>
            <div id='currOldTextContainer'>
              <p className='currOldText'>Current:</p>

              <p className='currOldText'>Old:</p>
            </div>

            <div id='currOldColorBoxContainer'>
              <div className='currOldColor'>
                <div className='colorBox' />
              </div>

              <div className='currOldColor'>
                <div className='colorBox' id='colorBox2' />
              </div>
            </div>
          </div>

          <div id='prevColorsBoxContainer'>
            <div className='boxRow'>
              <div className='oldColorBoxes' id='colorBox-0' />

              <div className='oldColorBoxes' id='colorBox-1' />

              <div className='oldColorBoxes' id='colorBox-2' />

              <div className='oldColorBoxes' id='colorBox-3' />
            </div>

            <div className='boxRow'>
              <div className='oldColorBoxes' id='colorBox-4' />

              <div className='oldColorBoxes' id='colorBox-5' />

              <div className='oldColorBoxes' id='colorBox-6' />

              <div className='oldColorBoxes' id='colorBox-7' />
            </div>
          </div>
        </div>

        <div id='buttonContainer'>
          <div id='leftButton'>
            <div id='pickButton' className='appButtons'>
              <p id='pickText' className='buttonTexts'>
                Pick Color
              </p>
            </div>
          </div>

          <div id='rightButton'>
            <div id='quitButton' className='appButtons'>
              <p id='quitText' className='buttonTexts'>
                Quit
              </p>
            </div>
            <div id='helpButton' className='appButtons'>
              <p id='helpText' className='buttonTexts'>
                Help
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ColorPickerContainer;
