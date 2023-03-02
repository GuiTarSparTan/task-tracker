// import React from "react"; --> class based component import
import Header from "./components/Header";

// class based component
// class App extends React.Component {
//   render() {
//     return <h1>Hello from a class</h1>
//   }
// }

function App() {
  return (
    <div className="container">
      <Header/>
    </div>
  );
}

export default App;
