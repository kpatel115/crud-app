import React, { useState } from 'react';
import {Typography, Button, Card} from 'antd';
import AddCarForm from '../components/AddCarForm';
import CarList from '../components/CarList';
import { cars as initialCars } from '../data/yourCarsData';

const { Title } = Typography;

const Home = () => {

    const [cars, setCars] = useState(initialCars);
    const [showAddCarForm, setShowAddCarForm] = useState(false);
      
      // You can use this 'cars' array in your application for testing or initial data.
    const handleAddCar = (newCar) => {
      setCars([...cars, newCar]);
      setShowAddCarForm(false); // Hide the Form after adding a car
    }


    const { Meta } = Card;
      

        return (
          <div
          
          style={{
            display:'flex',
            flexDirection:'column',
            justifyContent:'center',
            alignItems:'center'
          }}
          
          >
            <Title level={3}>All Cars at our plateform</Title>
            <Button onClick={() => setShowAddCarForm(!showAddCarForm)}>
              {showAddCarForm ? 'Cancel' : 'Add Car'}
            </Button>
            {/* Conditionally render the AddCarForm based on state */}
            {showAddCarForm && <AddCarForm onSubmit={handleAddCar} />}
            {/* Display the List of Cars*/}
            <CarList cars={cars} />

            {/* <div style={{ display: 'flex', flexWrap: 'wrap',justifyContent:'center' }}>
              {cars.map((car, index) => (
                <Card
                  key={index}
                  hoverable
                  style={{ width: 240, margin: '16px' }}
                  cover={<img alt={`${car.make} ${car.model}`} src={`https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNhcnN8ZW58MHx8MHx8fDA%3D`} />}
                >
                  <Meta title={`${car.year} ${car.make} ${car.model}`} description={`Color: ${car.color}`} />
                  <p>Engine Type: {car.engineType}</p>
                  <p>Transmission Type: {car.transmissionType}</p>
                  <p>Fuel Type: {car.fuelType}</p>
                  <p>Seller Contact: {car.sellerContact}</p>
                  <Button>Update</Button>
                  <Button>Delete</Button>
                </Card>
              ))}
            </div> */}
          </div>
        );
      };
      


export default Home