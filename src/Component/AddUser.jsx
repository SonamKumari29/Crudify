import React, { useState } from 'react';
import { FormGroup, FormControl, InputLabel, Input, Button, styled, Typography } from '@mui/material';
import { addUser } from '../Service/api';
import { useNavigate } from 'react-router-dom';

const initialValue = {
    name: '',
    username: '',
    email: '',
    phone: ''
};

const Container = styled(FormGroup)`
    width: 50%;
    margin: 5% 0 0 25%;
    & > div {
        margin-top: 20px;
    }
`;


const AddUser = () => {
    const [user, setUser] = useState(initialValue);
    const { name, username, email, phone } = user;
    let navigate = useNavigate();

    const onValueChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    }

    const addUserDetails = async () => {
        await addUser(user);
        navigate('/all');
    }

    return (
        <Container>
            <Typography variant="h4">Add User</Typography>
            <FormControl>
                <InputLabel htmlFor="name-input">Name</InputLabel>
                <Input 
                    onChange={onValueChange} 
                    name='name' 
                    value={name} 
                    id="name-input" 
                />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="username-input">Username</InputLabel>
                <Input 
                    onChange={onValueChange} 
                    name='username' 
                    value={username} 
                    id="username-input" 
                />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="email-input">Email</InputLabel>
                <Input 
                    onChange={onValueChange} 
                    name='email' 
                    value={email} 
                    id="email-input" 
                />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="phone-input">Phone</InputLabel>
                <Input 
                    onChange={onValueChange} 
                    name='phone' 
                    value={phone} 
                    id="phone-input" 
                />
            </FormControl>
            <FormControl>
                <Button 
                    variant="contained" 
                    color="primary" 
                    onClick={addUserDetails}
                >
                    Add User
                </Button>
            </FormControl>
        </Container>
    );
}

export default AddUser;
