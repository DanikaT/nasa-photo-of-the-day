import React from "react";
import "./App.css";
import axios from "axios";
import APODComp from "./Components/ComponentCardContainer"


function App() {

  const [APOD, setAPOD] = React.useState({})

  React.useEffect(() => {
   // https://api.nasa.gov/planetary/apod?api_key=vP2VvW1hevv1HkpHeZFlYmECwteEo6l7ThHfifZC
   console.log(axios);

   axios.get("https://api.nasa.gov/planetary/apod?api_key=vP2VvW1hevv1HkpHeZFlYmECwteEo6l7ThHfifZC")
   .then((response)=>{
    console.log(response);
    return response.data;
   }).then((data)=>{
    console.log(data);
    setAPOD(data);
   })
   console.log("once");
  }, [])

  return (
    <div className="App">
      <p>NASA PHOTO OF THE DAY!</p>
      <APODComp data={APOD}/>
    </div>
  );
}

export default App;
  

  