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
    const handleAddCar = async (newCar) => {
      try {
        const response = await fetch('http://localhost:5000/cars', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
        },
          body: JSON.stringify(newCar),
        });
        if (!response.ok) {
          throw new Error('Failed to add car');
        }
        // assuming server responds with newly created car data
        const createdCar = await response.json();
        setCars([...cars, createdCar]);
        setIsModalVisible(false);
        setSelectedCar(null)
      } catch (error) {
        console.error('Error adding car: ', error)
      }
     // setShowAddCarForm(false); // Hide the Form after adding a car
    };

    const handleUpdateCar = async (carId,updatedCar) => {
      try{
        if (!carId) {
          console.error('Invalid carId:', carId);
        }
        const response = await fetch(`http://localhost:5000/cars/${carId}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
        },
          body: JSON.stringify(updatedCar),
        });
      
      if (!response.ok) {
        throw new Error('Failed to update car');
      }


      const editedCar = await response.json();
      const updatedCars = cars.map((car) => car._id === carId ? {...car, editedCar} : car);

      setCars(updatedCars);
      setIsModalVisible(false);
      setSelectedCar(null);
      window.location.reload();

      } catch (error) {
        console.error('Error updating car: ', error)
      // }


      // const updatedCars = cars.map((car) => 
      // car === selectedCar ? { ...car, ...updatedCar } : car );

      // setCars(updatedCars);
      // setIsModalVisible(false);
      // setSelectedCar(null)
    }};

    const handleDeleteCar = async (carId) => {
      try {
        if (!carId) {
          console.error('Invalid carId:', carId);
        }
        const response = await fetch(`http://localhost:5000/cars/${carId}`, {
          method: 'DELETE',
        });
  
        if (!response.ok) {
          throw new Error('Failed to delete car');
        }
        console.log('Deleting Car:', carId);
       const updatedCars = cars.filter((car) => car._id !== carId);

        setCars(updatedCars);
        setIsModalVisible(false);
        setSelectedCar(updatedCars);
    } catch (error) {
        console.error('Error deleting car: ', error);
    }
  };


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
                <UpdateCarForm onSubmit={handleUpdateCar} initialData={selectedCar} carId={selectedCar._id} />
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
                handleDeleteCar(car._id);
              }
            }} />
            {/* Alternative way - checking to see if able to update using car id instead of using CarList COmponenet */}

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