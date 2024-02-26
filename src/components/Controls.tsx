import { useDispatch } from "react-redux";
import { decrement, increment } from "../store/reducers/counter.reducer";

const Controls = () => {
  const dispatch = useDispatch();

  const onIncrement = () => {
    dispatch(decrement());
  };
  return (
    <>
      <button onClick={() => dispatch(increment())}>Увеличить на 1</button>
      <button>Увеличить на 5</button>
      <button onClick={onIncrement}>Уменьшить на 1</button>
      <button>Уменьшить на 3</button>
    </>
  );
};

export default Controls;
