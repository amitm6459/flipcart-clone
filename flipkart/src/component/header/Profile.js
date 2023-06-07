import { Typography, Box,MenuItem ,Menu} from "@mui/material"
import { useState } from "react";
import styled from "styled-components";
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
const Component = styled(Menu)`
 margin-Top: 5px;
`

const Logout = styled(Typography)`
  
  margin-left:20px;
  font-size:14px;

`
const Profile = ({ account,setAccount }) => {

    const logoutUser = ()=>{
        setAccount('')
    }

    const [open,setOpen]=useState(false)

     const  handleClick = (event)=>{
        setOpen(event.currentTarget)
     }
     const handleClose = ()=>{
        setOpen(false)
     }

    return (

        <>
            <Box onClick={handleClick}>
                <Typography style={{ marginTop: 2 , curser:'pointer'}}>{account}</Typography>
            </Box>
            <Component 
                
                anchorEl={open}
                open={Boolean(open)}
                onClose={handleClose}
                
            >
                <MenuItem onClick={()=> {handleClose(); logoutUser(); }}>
                     <PowerSettingsNewIcon color="primary" fontSize="small"/>
                    <Logout>LogOut</Logout>
                </MenuItem>
                
            </Component>

        </>
    )
}
export default Profile;