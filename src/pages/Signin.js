import React, { useState, useEffect } from 'react';
import { GoogleButton } from 'react-google-button';
import { UserAuth } from '../context/Authcontext';

c

import {Typography, Button,  Modal, Card} from 'antd';
import AddCarForm from '../components/AddCarForm';
import UpdateCarForm from '../components/UpdateCarForm';
import CarList from '../components/CarList';
import { cars as initialCars } from '../data/yourCarsData';
import { GoogleAuthProvider } from 'firebase/auth';

const { Title } = Typography;

const Signin = () => {
    const { googleSignIn } = UserAuth();
    const navigate = useNavigate();
    const handleGoogleSignIn = async () => {
        try {
            await googleSignIn();
        } catch (error) {
            console.log(error)
        }
    };

    useEffect{() => {
        if(user != null) {
            navigate('/account');
        }
    }, []}

        return (
          <div

          style={{
            display:'flex',
            flexDirection:'column',
            justifyContent:'center',
            alignItems:'center'
          }} 
          >

            <Title level={3}>Sign In</Title>
            <GoogleButton onClick={handleGoogleSignIn} />

          </div>
        );
      };
      


export default Signin