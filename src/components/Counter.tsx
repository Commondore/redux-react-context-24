import { useSelector } from "react-redux";
import { selectCounter } from "../store/reducers/counter.selectors";

const Counter = () => {
  const counter = useSelector(selectCounter);
  return <h2>Счетчик равен: {counter}</h2>;
};

export default Counter;
