import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { ColorPicker, useColor } from 'react-color-palette';
import 'react-color-palette/lib/css/styles.css';

import { useSelectColors } from '../../Redux/Slices/SelectColorSlice';
import { Subtitle, Button, ButtonsDirectionWrapper } from './GradiantSelect';

const ColorSelect = () => {
  const { leftColor, rightColor, setColors } = useSelectColors();
  const [color, setColor] = useColor();
  const [leftPicker, setLeftPicker] = useState(false);
  const [rightPicker, setrightPicker] = useState(false);
  const [isRandom, setIsRandom] = useState(true);
  const clickRef = useRef(null);

  const colorsGenerator = () => {
    const colors = [...Array(2)].map(() => {
      return `#` + Math.floor(Math.random() * 16777215).toString(16);
    });
    if (colors[0].length > 6 && colors[1].length > 6) setColors(colors);
  };

  useEffect(() => {
    setColors({ color: color, isLeft: leftPicker, isRandom: isRandom });
  }, [color]);

  useEffect(() => {
    colorsGenerator();
  }, []);

  useEffect(() => {
    let handler = (event) => {
      if (!clickRef.current.contains(event.target)) {
        if (leftPicker) {
          setLeftPicker(false);
        }
        setrightPicker(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => {
      document.removeEventListener('mousedown', handler);
    };
  });

  return (
    <>
      <Subtitle>Colors</Subtitle>
      <ButtonsDirectionWrapper ref={clickRef}>
        <ColorPickerButton
          onClick={() => {
            setLeftPicker(true);
            setrightPicker(false);
            setIsRandom(false);
          }}
          color={leftColor.hex}
        />
        {leftPicker && (
          <ColorPickerWrapper>
            <ColorPicker
              width={255}
              height={120}
              color={leftColor}
              onChange={setColor}
              hideHSV
              hideRGB
            />
          </ColorPickerWrapper>
        )}
        <ColorPickerButton
          color={rightColor.hex}
          onClick={() => {
            setrightPicker(true);
            setLeftPicker(false);
            setIsRandom(false);
          }}
        />
        {rightPicker && (
          <ColorPickerWrapper ml={'92px'}>
            <ColorPicker
              width={255}
              height={120}
              color={rightColor}
              onChange={setColor}
              hideHSV
              hideRGB
            />
          </ColorPickerWrapper>
        )}
        <Button
          onClick={() => {
            colorsGenerator();
            setIsRandom(true);
            setrightPicker(false);
            setLeftPicker(false);
          }}
        >
          Random
        </Button>
      </ButtonsDirectionWrapper>
    </>
  );
};

const ColorPickerButton = styled.div`
  margin-top: 5px;
  width: 70px;
  height: 32px;
  justify-items: center;
  border: 2px solid #f1f4f8;
  border-radius: 6px;
  background-color: ${(props) => props.color};
  cursor: pointer;
`;

const ColorPickerWrapper = styled.div`
  margin-top: 50px;
  margin-left: ${(props) => props.ml};
  position: fixed;
`;

export default ColorSelect;
