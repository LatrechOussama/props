import "./App.css";
import Profile from "./profile/Profile.js";

function App() {
  const data = 
    {
      FullName: "oussama",
      Bio: "29 YO",
      Profession: "Devlopper",
    }
  

  return (
    <div className="App">
      <Profile list={data} >
      <img src='https://natureconservancy-h.assetsadobe.com/is/image/content/dam/tnc/nature/en/photos/WOPA160517_D056-resized.jpg?crop=864,0,1728,2304&wid=600&hei=800&scl=2.88' alt='aa'/>

      </Profile>
    </div>
  );
}

export default App;
