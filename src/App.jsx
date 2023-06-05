import "./App.css";
import clsx from "clsx";

// eslint-disable-next-line react/prop-types
const App = ({ isError }) => {
  return (
    <p
      className={clsx('bold-text, text-red-400', {
        'success': isError ,
        'error': !isError,
      })}
    >
      <h1>CLSX tutorial</h1>
    </p>
  );
};

export default App;
