import { useDispatch } from 'react-redux';
import { increment, decrement } from '../store/counterSlice';

const CounterControls = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <button onClick={() => dispatch(increment())}>Incrementar</button>
      <button onClick={() => dispatch(decrement())}>Decrementar</button>
    </div>
  );
};

export default CounterControls;
