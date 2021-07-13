import './style.css'
import Places from './Places';
import {TourProvider,tourContext} from './tourProvider'
function App() {

   const removePost=(id)=>
  {
    /*const newPlaces=places.filter((place)=>place.id!==id);
    setPlaces(newPlaces)*/
  }
  /*const [places,setPlaces]=useState([]);
  const [isloading,setIsloading]=useState(true);
  useEffect(async()=>
  {
    const response= await fetch(url);
    const allPlaces=await response.json();
    setPlaces(allPlaces);
    setIsloading(false)
  },[])*/
   
  return (
    <TourProvider>
    <div className="App">
      
  
      <div className="tour_app">
       

     <Places />
     
     </div>

    </div>
    </TourProvider>
  );
}

export default App;
