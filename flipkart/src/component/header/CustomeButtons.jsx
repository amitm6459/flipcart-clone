import { Badge, Box, Button, Typography, styled} from '@mui/material';
import React, { useContext, useState } from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LoginDialog from '../../logiin/LoginDialog';
import { DataConetext    } from '../../context/DataProvider';
import Profile from './Profile';
import { Link } from 'react-router-dom';
import CartItems from '../cart/CartItems';
import { useSelector } from 'react-redux';


const Wrapper = styled(Box)
(({theme})=>({
    display:'flex',
    margin:'0 3% 0 auto',
    ' & > *' :{
        marginRight:'40px !Important',
        fontSize:'16px',
        alignItems:'center',
    },
    
  [theme.breakpoints.down('md')]:{
    display:'block'
  }

}))

const Cartwrapper = styled(Link)(({theme})=>({

    display:'flex',
    padding:'5',
    textDecoration:'none',
    color:'inherit',
  [theme.breakpoints.down('md')]:{
    display:'block'
  }

}))

const LoginButton= styled(Button)`
   background:white;
   color:blue;
   text-transform:none;
   padding:5px 40px;
   border-radius:2px;
   box-shadow:none; 
   font-weight:600;
   height:32x;
`


function CustomeButtons(props) {

    const [open,setOpen] = useState(false);
    const {account,setAccount} = useContext(DataConetext)

    const {cartItems} = useSelector(state => state.cart)

    const openDialog= ()=>{
        setOpen(true); 
    }
    return (
        <Wrapper>
        {
            account ? <Profile account={account} setAccount={setAccount}/>:

            <LoginButton variant='contained' onClick={ ()=> openDialog()}> Login</LoginButton>
        }
            
            <Typography style={{marginTop:"3px", width:"135px"}}>Become a seller</Typography>
            <Typography style={{marginTop:"3px"}}>More</Typography>
            <Cartwrapper style={{ display: "flex" }} to="/cart">
                <Badge badgeContent={cartItems?.length} color='secondary'>
                       <ShoppingCartIcon />
                </Badge>
                <Typography style={{marginLeft:10}}>Cart</Typography>
            </Cartwrapper>
            <LoginDialog  open={open} setOpen={setOpen} />
        </Wrapper>
    );
}

export default CustomeButtons;