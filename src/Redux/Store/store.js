import { configureStore } from '@reduxjs/toolkit';

import SelectColorSlice from '../Slices/SelectColorSlice';

export const store = configureStore({
  reducer: {
    SelectColorSlice,
  },
});
