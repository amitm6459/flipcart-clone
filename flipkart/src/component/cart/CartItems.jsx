import { Typography, Box, styled, Button } from "@mui/material";
import { addElipses } from "../../utils/CommonUtils";
import GroupedButton from "./ButtonGroup";
import {removeToCart} from "../../redux/action/cartAction"
import { useDispatch } from "react-redux";

const Component = styled(Box)`
  border-top: 1px solid #f0f0f0;
  display: flex;
  background:#fff;
`;
const LeftComponent = styled(Box)`
  margin: 20px;
  display:flex;
  flex-direction:column;
`;
const SmallText = styled(Typography)`
  color: #878787;
  font-size: 14px;
  margin-top: 10px;
`;
const Remove = styled(Button)`
margin-top:20px;
font-size:16px;
color:#000;
font-weight:600
`

const fassured =
  "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png";

  

const CartItems = ({ item }) => {
   
   const dispatch=useDispatch();

  const removeItemFromCart = (id) =>{
     dispatch(removeToCart(id))

  }


  return (
    <Component>
      <LeftComponent>
        <img src={item.url} alt="product" style={{height:110,width:110}}/>
        <GroupedButton/>
      </LeftComponent>
      <Box style={{margin:20}}>
        <Typography>{addElipses(item.title.longTitle)}</Typography>
        <SmallText>
          Seller:RetailNet
          <Box component="span">
            <img
              src={fassured}
              alt="Flipkart"
              style={{ width: 50, marginLeft: 10 }}
            />
          </Box>
        </SmallText>
        <Typography style={{margin:'20px 0 '}}>
          <Box component="span" style={{ fontWeight: 600, fontSize:18}}>₹{item.price.cost}</Box>&nbsp;&nbsp;&nbsp;
          <Box component="span" style={{ color: "#878787" }}><strike>₹{item.price.mrp}</strike></Box>&nbsp;&nbsp;&nbsp;
          <Box component="span" style={{ color: "#388E3C" }}>{item.price.discount}Off</Box>
        </Typography>
        <Button onClick={()=> removeItemFromCart(item.id)}>REMOVE</Button>
      </Box>
    </Component>
  );
};

export default CartItems;
