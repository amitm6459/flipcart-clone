import { AppBar, Toolbar, styled, Box, Typography, Grid,IconButton,Drawer,List,ListItem } from "@mui/material";
import React, { useState } from "react";
import Search from "./Search";
import CustomeButtons from "./CustomeButtons";
import { Link } from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';

const StyledHeder = styled(AppBar)`
  background: #2784f0;
  height: 55px;
`;
const Component = styled(Link)`
  margin-left: 12%;
  line-height: 0;
  text-decoration: none;
  color: inherit;
`;
const SubHeading = styled(Typography)`
  font-size: 10px;
  font-style: italic;
`;
const PlusImg = styled("img")({
  width: 10,
  height: 10,
  marginLeft: 4,
});
const CustButtonsWrapper = styled(Box)(({ theme }) => ({
  margin: "0px 5% 0 auto",
  [theme.breakpoints.down("md")]: {
    display: "none"
  }
}));

const MenuButton = styled(MenuIcon)(({theme})=>({

    display:'none',
    [theme.breakpoints.down('md')]:{display:'block'}
}))

const Header = () => {
  const logoURL =
    "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png";
  const subURL =
    "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png";

    const [open,setOpen] = useState(false);

    const handelOpen = ()=>{

         setOpen(true);
    }
    
    const handelClose = ()=>{
           
        setOpen(false);

    }
    const list = () =>(
         <Box style={{width:200}} onClick={handelClose}>
           <List>
               <ListItem button>
                 <CustomeButtons/>
               </ListItem>
           </List>


         </Box>

    )

  return (
    <div>
      <StyledHeder>
        <Toolbar style={{ minHeight: 55 }}>
          <IconButton>
            <MenuButton style={{color:'inherit'}} onClick={handelOpen}/>
            <Drawer open={open} onClose={handelClose}>
                {list()}
            </Drawer>
          </IconButton>
          <Component to="/">
            <img src={logoURL} alt="logo" style={{ width: "75px" }} />
            <Box style={{ display: "flex " }}>
              <SubHeading>
                Explore&nbsp;
                <Box component={"span"} style={{ color: "yellow" }}>
                  Plus
                </Box>
              </SubHeading>
              <PlusImg src={subURL} alt="subUrl" />
            </Box>
          </Component>
          <Search />
          <CustButtonsWrapper>
            <CustomeButtons />
          </CustButtonsWrapper>
        </Toolbar>
      </StyledHeder>
    </div>
  );
};

export default Header;
