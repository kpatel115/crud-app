import './App.css';
import React, {useState} from 'react';
import Home from './pages/Home';
import Nav from './components/Nav';
import CarList from './components/CarList';
import AddCarForm from './components/AddCarForm';
import { cars as initialCars } from './data/yourCarsData'; // Import your initial dummy data

const App = () => {
  const [cars, setCars] = useState(initialCars);

  const handleAddCar = (newCar) => {
    // Add the new car to the existing array of cars
    setCars([...cars, newCar]);
  };

  return (
    <div>
      {/* <AddCarForm onSubmit={handleAddCar} />
      <CarList cars={cars} /> */}
      <Nav />
      <Home />
    </div>
  );
};

export default App;

// function App() {
//   return (
//     <div>
//       <Nav />
//           <Home />
//     </div>
//   );
// }

// export default App;

// const App = () => {
//   const [cars, setCars] = useState(initialCars);

//   const handleAddCar = (newCar) => {
//     // Add the new car to the existing array of cars
//     setCars([...cars, newCar]);
//   };

//   return (
//     <div>
//       <AddCarForm onSubmit={handleAddCar} />
//       <CarList cars={cars} />
//     </div>
//   );
// };

// export default App;

