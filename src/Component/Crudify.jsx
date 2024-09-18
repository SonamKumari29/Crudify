import { Box, Typography, styled } from '@mui/material';
import Crud from '../Assets/Images/crud.png';

const Header = styled(Box)`
    margin: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    & > div {
        margin-top: 50px;
        display: flex;
        justify-content: center;
    }
`;

const Image = styled('img')({
    width: '50%',
    height: '50%',
});

const Crudify = () => {
    return (
        <Header>
            <Typography variant="h4">CRUDIFY</Typography>
            <Box tabIndex="-1">
                <Image src={Crud} tabIndex="-1"/>
            </Box>
        </Header>
    );
}

export default Crudify;