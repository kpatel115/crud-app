// CarList.js
import React, { useState } from 'react';
import { Card, Button, Typography } from 'antd';

const { Meta } = Card;
const { Title } = Typography;
// 

const CarList = ({ cars, onEdit, onDelete }) => {
  
  return (
    <div>
      <Title level={3}>All Cars</Title>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {cars.map((car, index) => (
          <Card
            key={index}
            hoverable
            style={{ width: 240, margin: '16px' }}
            cover={<img alt={`${car.make} ${car.model}`} src={`/images/${car.pic}`} />}
          >
            <Meta title={`${car.year} ${car.make} ${car.model}`} description={`Color: ${car.color}`} />
            <p>Engine Type: {car.engineType}</p>
            <p>Transmission Type: {car.transmissionType}</p>
            <p>Fuel Type: {car.fuelType}</p>
            <p>Seller Contact: {car.sellerContact}</p>

            <Button onClick={() => onEdit(car)}>Update</Button>
            <Button onClick={() => onDelete(car)}>Delete</Button>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default CarList;
