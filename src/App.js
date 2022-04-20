import './App.css';
import Card from './components/Card';
import Header from './components/Header';
import AvgComponent from './components/AvgComponent';
import AddTracker from './components/AddTracker';
import { useEffect, useState } from 'react';

const cities = [
  { value: 'trabzon', label: 'Trabzon' },
  { value: 'istanbul', label: 'İstanbul' },
  { value: 'ankara', label: 'Ankara' },
  { value: 'samsun', label: 'Samsun' },   
]

const district = [
  { value: 'ortahisar', label: 'Ortahisar',city:'trabzon' },
  { value: 'kadikoy', label: 'Kadıköy', city:'istanbul' },
  { value: 'cankaya', label: 'Çankaya', city:'ankara' },
  { value: 'atakum', label: 'Atakum',city:'samsun' },
  
]


function App() {

  const saveTrackerHandle = () => {
    selectedCard.push({city:selectedCity.value, district:selectedDistrict.value,
    })
    setSelectedCard([...selectedCard]);
  }

  
  const handleSelectedOption = (e) => {
    setSelectedCity(e)
  }

  const handleSelectedOptionD = (e) => {
    setSelectedDistrict(e)
  }

 
  const [filteredDistrict, setFilteredDistrict] = useState([]);
  const [selectedCard,setSelectedCard] = useState([]);
  const [selectableCities,setSelectableCities] = useState([]);
  const [selectedCity,setSelectedCity] = useState({});
  const [selectedDistrict,setSelectedDistrict] = useState({});

// console.log('https://api.collectapi.com/gasPrice/turkeyGasoline?district='+ selectedDistrict.value + '&city=' + selectedCity.value)


useEffect(() => {
      if (selectedCity) {
        setFilteredDistrict(district.filter(x => x.city === selectedCity.value))
      }

},[selectedCity,district])


//   useEffect(()=> {
//     axios('https://api.collectapi.com/gasPrice/turkeyGasoline?', {
//         headers:{
//             Authorization:`apikey 61vx3j2Uxzcc5T18QGHmTi:0g5nK19hUn6hC1KkNNdrlE`,
//         },
//         params: {
//             city:selectedCity.value,
//             district:selectedDistrict.value
//         }
//     })
//     .then((res) => console.log(res.data , 'Test App.js'))
//     .catch((e) => console.log(e))
    
// },)


  return (
     <div  style={{backgroundColor:"#F8F9FC", height:"100vh"}}>
     <div>
        <Header/>
        <div className='wrapper container-fluid'>
          <div className='row d-flex justify-content-between'>
            <div className='col-9'>
            <AvgComponent />
            </div>
            <div className='col-3'>
            <AddTracker     handleSelectedOptionD={handleSelectedOptionD} handleSelectedOption={handleSelectedOption} selectedCity={setSelectedCity} addTracker={saveTrackerHandle} district={filteredDistrict} selection={cities} citySelection={[selectableCities]}/>
            </div>
          </div>
          <div className='row'>
            {selectedCard.map((card,i) => (
              <div key={i} className='col'>
            <Card  id={selectedCity.id}  city={card.city} district={card.district} ></Card>
            </div>            
            ))}           
          </div>
        </div>
       
     </div>
   </div>
  
  );
}

export default App;
