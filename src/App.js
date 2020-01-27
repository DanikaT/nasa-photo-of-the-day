import React, {useState, useEffect} from "react";
import "./App.css";
import ComponentCardContainer from "./Components/ComponentCardContainer";
import axios from "axios";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("https://api.nasa.gov/planetary/apod?api_key=TvE1IYeov47cGJDDL9v0WPeGUkRHTfQeZ3tupeAR")
    .then(response => {
       setData(response.data);
      console.log(response.data);
    })

  .catch(error => {
    console.log("Uh ohhh! Where's my data??!!", error);
});

}, []);

  return (
    <div className="App">
      <ComponentCardContainer />
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun 🚀!
      </p>
    </div>
  );
}

export default App;
