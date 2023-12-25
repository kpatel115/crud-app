import React, { useState, useEffect } from 'react';
import {Typography, Button,  Modal, Card} from 'antd';
import AddCarForm from '../components/AddCarForm';
import UpdateCarForm from '../components/UpdateCarForm';
import CarList from '../components/CarList';
// import { cars as initialCars } from '../data/yourCarsData';

const { Title } = Typography;

const Home = () => {

    // const [cars, setCars] = useState(initialCars);
    const [cars, setCars] = useState([]);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [selectedCar, setSelectedCar] = useState(null); 

    // Fetch Cars from Express API when Component mounts
    useEffect(() => {
      const fetchCars = async () => {
        try {
          const response = await fetch('http://localhost:5000/cars');
          const data = await response.json();
          setCars(data);
        } catch (error) {
          console.error('Error fetching cars: ', error);
        }
      };
      fetchCars();
    }, []); // runs only when component mounts
      
      // You can use this 'cars' array in your application for testing or initial data.
    const handleAddCar = (newCar) => {
      setCars([...cars, newCar]);
      setIsModalVisible(false);
      setSelectedCar(null)
     // setShowAddCarForm(false); // Hide the Form after adding a car
    };

    const handleUpdateCar = (updatedCar) => {
      const updatedCars = cars.map((car) => 
      car === selectedCar ? { ...car, ...updatedCar } : car );

      setCars(updatedCars);
      setIsModalVisible(false);
      setSelectedCar(null)
    };

    const handleDeleteCar = () => {
      console.log('Deleting Car: ', selectedCar);
      const updatedCars = cars.filter((car) => car !== selectedCar);
      setCars(updatedCars);
      setIsModalVisible(false);
      setSelectedCar(null);
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
            <Button onClick={() => setIsModalVisible(true)}>
              {selectedCar ? 'Edit Car' : 'Add Car'}
            </Button>

            {/*<Button onClick={() => setShowAddCarForm(!showAddCarForm)}>
              {showAddCarForm ? 'Cancel' : 'Add Car'}
        </Button> */}
            {/* Conditionally render the AddCarForm based on state */}
            
            <Modal
            title={selectedCar ? 'Edit Car' : 'Add Car'}
            open={isModalVisible}
            onCancel={() => {
              setIsModalVisible(false);
              setSelectedCar(null);
            }}
            footer={null}
            >

            {/* Conditionally render AddCarForm or UpdateCarForm based on selectedCar */}
              {selectedCar ? (
                <UpdateCarForm onSubmit={handleUpdateCar} initialData={selectedCar} />
                ) : (
                <AddCarForm onSubmit={handleAddCar} />
                )
              }

            </Modal>

            {/*showAddCarForm && <AddCarForm onSubmit={handleAddCar} /> */}
            {/* Display the List of Cars*/}
            <CarList 
              cars={cars}
              onEdit={(car) => {
                setSelectedCar(car);
                setIsModalVisible(true);

            }} 

            onDelete={(car) => {
              if (window.confirm(`Are you sure you want to delete ${car.make} ${car.model}?` )) {
                setSelectedCar(car);
                handleDeleteCar();
              }
            }} />

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