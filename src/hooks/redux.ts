import type { TypedUseSelectorHook } from 'react-redux';
import { useDispatch, useSelector } from 'react-redux';
import type { AppDispatch, RootState } from '../store';

const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
const useTypedDispatch = () => useDispatch<AppDispatch>();

const logger = useSelector((state: RootState) => state.logger);

interface Obj<T> {
  name: T;
}

interface State {
  state: { data: string; loading: boolean };
}

const obj: Obj<State> = {
  name: {
    state: {
      data: 'abcd',
      loading: false,
    },
  },
};
