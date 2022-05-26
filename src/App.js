
import './App.css';
import Navbar from './components/Navbar.jsx';
import Offers from './components/Offers.jsx';
import Filters from './components/Filters';
import Restaurants from './components/Restaurants.jsx';

import userInfo from "./components/Data/userInfo.json";
import offers from "./components/Data/offers.json";
import restaurants from "./components/Data/restaurants.json"


function App() {
  const [filterBy,setFilterBy]=useState("");
  const [data,setData]=useState([]);
  return (
    <div className="App">
      <Navbar {...userInfo.location}/>
      <Offers  offers={offers}/>
      <section className="near-you">
        <Filters/>
        <Restaurants restaurants={restaurants}/>
      </section>
    </div>
  );
}

export default App;
