import "./App.css";

import Home from "./components/home";

const App = (props) => {
  return (
    <>
      <h1 className="">
        My App {props.name} - {props.toinen}
      </h1>
      <Home />
    </>
  );
};
export default App;
