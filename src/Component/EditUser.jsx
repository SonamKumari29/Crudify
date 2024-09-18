import { useState, useEffect } from 'react';
import { FormGroup, FormControl, InputLabel, Input, Button, styled, Typography } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
import { getUsers, editUser } from '../Service/api';

const initialValue = {
    name: '',
    username: '',
    email: '',
    phone: ''
}

const Container = styled(FormGroup)`
    width: 50%;
    margin: 5% 0 0 25%;
    & > div {
        margin-top: 20px;
    }
`;

const EditUser = () => {
    const [user, setUser] = useState(initialValue);
    const { name, username, email, phone } = user;
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        loadUserDetails();
    }, [id]);

    const loadUserDetails = async () => {
        try {
            const response = await getUsers(id);
            setUser(response.data);
        } catch (error) {
            console.error("Error fetching user details:", error);
        }
    }

    const editUserDetails = async () => {
        try {
            await editUser(id, user);
            navigate('/all');
        } catch (error) {
            console.error("Error editing user details:", error);
        }
    }

    const onValueChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    }

    return (
        <Container>
            <Typography variant="h4">Edit Information</Typography>
            <FormControl>
                <InputLabel htmlFor="name-input">Name</InputLabel>
                <Input 
                    onChange={onValueChange} 
                    name='name' 
                    value={name} 
                    id="name-input" 
                    aria-describedby="name-helper-text" 
                />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="username-input">Username</InputLabel>
                <Input 
                    onChange={onValueChange} 
                    name='username' 
                    value={username} 
                    id="username-input" 
                    aria-describedby="username-helper-text" 
                />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="email-input">Email</InputLabel>
                <Input 
                    onChange={onValueChange} 
                    name='email' 
                    value={email} 
                    id="email-input" 
                    aria-describedby="email-helper-text" 
                />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="phone-input">Phone</InputLabel>
                <Input 
                    onChange={onValueChange} 
                    name='phone' 
                    value={phone} 
                    id="phone-input" 
                    aria-describedby="phone-helper-text" 
                />
            </FormControl>
            <FormControl>
                <Button 
                    variant="contained" 
                    color="primary" 
                    onClick={editUserDetails}
                >
                    Edit User
                </Button>
            </FormControl>
        </Container>
    )
}

export default EditUser;
