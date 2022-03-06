import { createSlice } from '@reduxjs/toolkit';
import { useSelector, useDispatch } from 'react-redux';

const initialState = {
  leftColor: {
    hex: null,
  },
  rightColor: {
    hex: null,
  },
  isRadial: null,
  radialPosition: 'center',
  gradientLinearDegs: 90,
};

export const selectColorSlice = createSlice({
  name: 'selectColorSlice',
  initialState,
  reducers: {
    setColors: (state, action) => {
      if (action.payload.length > 0) {
        state.leftColor.hex = action.payload[0];
        state.rightColor.hex = action.payload[1];
      } else if (action.payload.isRandom) {
        state.leftColor = action.payload.color;
        state.rightColor = action.payload.color;
      } else if (action.payload.isLeft) {
        state.leftColor = action.payload.color;
      } else {
        state.rightColor = action.payload.color;
      }
    },
    setIsRadial: (state, action) => {
      state.isRadial = action.payload;
    },
    setGradientLinearDegs: (state, action) => {
      state.gradientLinearDegs = action.payload;
    },
    setRadialPosition: (state, action) => {
      state.radialPosition = action.payload;
    },
  },
});

export default selectColorSlice.reducer;

export const useSelectColors = () => {
  const dispatch = useDispatch();
  const {
    isRadial,
    leftColor,
    rightColor,
    gradientLinearDegs,
    radialPosition,
  } = useSelector((state) => state.SelectColorSlice);

  const setColors = (payload) => {
    dispatch(selectColorSlice.actions.setColors(payload));
  };

  const setGradientLinearDegs = (payload) => {
    dispatch(selectColorSlice.actions.setGradientLinearDegs(payload));
  };

  const setIsRadial = (payload) => {
    dispatch(selectColorSlice.actions.setIsRadial(payload));
  };

  const setRadialPosition = (payload) => {
    dispatch(selectColorSlice.actions.setRadialPosition(payload));
  };

  return {
    isRadial,
    leftColor,
    rightColor,
    radialPosition,
    gradientLinearDegs,
    setColors,
    setGradientLinearDegs,
    setIsRadial,
    setRadialPosition,
  };
};
