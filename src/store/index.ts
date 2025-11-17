import { configureStore } from '@reduxjs/toolkit';
import reducer from './reducer/reducer';

const store = configureStore({
  reducer: reducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;

// 사용하지 않는 코드
// import { useDispatch, useSelector } from 'react-redux';
// const dispatch = useDispatch();
// const logger = useSelector((state: RootState) => state.logger);
// type A = ReturnType<typeof store.getState>;
// store.getState();
