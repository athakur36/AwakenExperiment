import React, { Component } from 'react';
import Oven1 from './sample4'
import Oven2 from './sample5'
import Oven3 from './sample6'
import Rating from '@material-ui/lab/Rating';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import {Link } from "react-router-dom";


class Page2 extends Component {
    render() { 
        return ( 
            <div>
                <Oven1/>
                <p>Please rate the price</p>
                <Box textAlign='center'>
                    <Rating />
                </Box>
                
                <p></p>
                <Oven2/>
                <p>Please rate the price</p>
                <Box textAlign='center'>
                    <Rating />
                </Box>
                
                <p></p>
                <Oven3/>
                <p>Please rate the price</p>
                <Box textAlign='center'>
                    <Rating />
                </Box>
                
                <Link to="/page3">
                <Box textAlign='right'>
                    <Button variant='contained'
                color='primary'>
                Go to Next Page
                </Button>
                </Box>
                </Link>

            </div>
         );
    }
}
 
export default Page2;