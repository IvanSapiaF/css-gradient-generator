import React from 'react';
import styled from 'styled-components';

import { useSelectColors } from '../../Redux/Slices/SelectColorSlice';

const GradiantSelect = () => {
  const { isRadial, setIsRadial, setGradientLinearDegs, setRadialPosition } =
    useSelectColors();

  return (
    <>
      <Subtitle>Style</Subtitle>
      <ButtonsWrapper>
        <Button onClick={() => setIsRadial(false)} isSelect={!isRadial}>
          Lineal
        </Button>
        <Button
          left={true}
          onClick={() => setIsRadial(true)}
          isSelect={isRadial}
        >
          Radial
        </Button>
      </ButtonsWrapper>
      <Subtitle>Direction</Subtitle>
      <ButtonsDirectionWrapper>
        <Button
          onClick={() =>
            isRadial
              ? setRadialPosition('top left')
              : setGradientLinearDegs(315)
          }
        >
          &#8598;
        </Button>
        <Button
          onClick={() =>
            isRadial ? setRadialPosition('top') : setGradientLinearDegs(0)
          }
        >
          &#8593;
        </Button>
        <Button
          onClick={() =>
            isRadial
              ? setRadialPosition('top right')
              : setGradientLinearDegs(45)
          }
        >
          &#8599;
        </Button>
        <Button
          onClick={() =>
            isRadial ? setRadialPosition('left') : setGradientLinearDegs(270)
          }
        >
          &#8592;
        </Button>
        <Button
          style={{ visibility: !isRadial ? 'hidden' : 'visible' }}
          onClick={() => setRadialPosition('center')}
        >
          o
        </Button>
        <Button
          onClick={() =>
            isRadial ? setRadialPosition('right') : setGradientLinearDegs(90)
          }
        >
          &#8594;
        </Button>
        <Button
          onClick={() =>
            isRadial
              ? setRadialPosition('bottom left')
              : setGradientLinearDegs(225)
          }
        >
          &#8601;
        </Button>
        <Button
          onClick={() =>
            isRadial ? setRadialPosition('bottom') : setGradientLinearDegs(180)
          }
        >
          &#8595;
        </Button>
        <Button
          onClick={() =>
            isRadial
              ? setRadialPosition('bottom right')
              : setGradientLinearDegs(135)
          }
        >
          &#8600;
        </Button>
      </ButtonsDirectionWrapper>
    </>
  );
};

export const Subtitle = styled.span`
  display: block;
  margin-top: 16px;
  font-size: 13px;
  font-weight: 600;
`;

export const Button = styled.div`
  background-color: ${(props) => (props.isSelect ? '#f1f4f8' : 'white')};
  margin-left: ${(props) => (props.left ? '16px' : '0')};
  margin-top: 5px;
  width: 70px;
  height: 32px;
  justify-items: center;
  border: 2px solid #f1f4f8;
  border-radius: 6px;
  color: #3d4853;
  font-weight: 500;
  text-align: center;
  cursor: pointer;
  font-size: 0.8125rem;
  line-height: 1.75rem;

  :hover {
    background-color: #f1f4f8;
  }
`;

export const ButtonsWrapper = styled.div`
  display: flex;
`;

export const ButtonsDirectionWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export default GradiantSelect;
