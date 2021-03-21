import { Button } from '@material-ui/core';
import React from 'react';
import { UploadImage } from '../components/UploadImage';
import { UserImages } from '../components/UserImages';
import { GlobalProvider } from '../context/GlobalState';

const Home = ({ handleLogout }) => {
    return (
        <GlobalProvider>
            <React.Fragment>
                <Button onClick={handleLogout} variant="contained" color="primary" type="submit">Logout</Button>
                <h2>Image repo</h2>
                <UploadImage />
                <UserImages />
            </React.Fragment>
        </GlobalProvider>
    )
}

export default Home