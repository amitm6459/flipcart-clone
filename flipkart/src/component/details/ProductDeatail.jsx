import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableRow,
  Typography,
  styled,
} from "@mui/material";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";

const SmallText = styled(Box)`
  font-size: 14px;
  & > p {
    font-size: 14px;
    margin-top: 10px;
  }
`;
const StyledBadge = styled(LocalOfferIcon)`
  margin-right: 10px;
  color: #00cc00;
  font-size: 15px;
  vertical-align: baseLine;
`
const ColText = styled(TableRow)`
  font-size: 14px;
  vertical-align: baseline;
  & > td {
    font-size: 14px;
    margin-top: 10px;
    border:none;
  }
`

const ProductDeattail = ({ product }) => {
  const fassured =
    "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png";
  const adURL =
    "https://rukminim1.flixcart.com/lockin/774/185/images/CCO__PP_2019-07-14.png?q=50";

  const date = new Date(new Date().getTime() + 5 * 24 * 60 * 60 * 1000);
  return (
    <>
      <Typography>{product.title.longTitle}</Typography>
      <Typography style={{ marginTop: 5, color: "#878787", fontSize: 14 }}>
        8 rating & 1 Reviews
        <Box component="span">
          <img src={fassured} alt="" style={{ width: 77, marginLeft: 20 }} />
        </Box>
      </Typography>
      <Typography>
        <Box component="span" style={{ fontSize: 28 }}>
          ₹{product.price.cost}
        </Box>
        &nbsp;&nbsp;&nbsp;
        <Box component="span" style={{ color: "#878787" }}>
          <strike>₹{product.price.mrp}</strike>
        </Box>
        &nbsp;&nbsp;&nbsp;
        <Box component="span" style={{ color: "#388E3C" }}>
          {product.price.discount}off
        </Box>
      </Typography>
      <Typography>Availabel Offers</Typography>
      <SmallText>
        <Typography>
          <StyledBadge />
          Flat ₹1250 Discount on HDFC Bank Credit Card EMI Transactions on
          orders of ₹15,000 and above T&C
        </Typography>
        <Typography>
          <StyledBadge />
          Flat ₹4000 Discount on HDFC Bank Credit Card EMI Transactions on
          orders of ₹50,000 and above T&C
        </Typography>
        <Typography>
          <StyledBadge />
          0% off on DBS Bank Debit and Credit Card Transactions, up to ₹1500. On
          orders of ₹5,000 and above T&C
        </Typography>
        <Typography>
          <StyledBadge />
          5% Cashback on Flipkart Axis Bank Card T&C
        </Typography>
        <Typography>
          <StyledBadge />
          Purchase now & get 1 surprise cashback coupon in Future
        </Typography>
        <Typography>
          <StyledBadge />
          EMI starting from ₹2,013/month
        </Typography>
      </SmallText>
      <Table>
        <TableBody>
          <ColText>
            <TableCell style={{ color: "#878787" }}>Delivery</TableCell>
            <TableCell style={{ fontWeight: 600 }}>
              Delivery by {date.toDateString()} | ₹40
            </TableCell>
          </ColText>
          <ColText>
            <TableCell style={{ color: "#878787" }}>Warranty</TableCell>
            <TableCell> No Warranty</TableCell>
          </ColText>
          <ColText>
            <TableCell style={{ color: "#878787" }}>Seller</TableCell>
            <TableCell>
              <Box component="span" style={{ color: "#2874f0" }}>
                SuperComNet
              </Box>
              <Typography>Gst Invoice Availabel</Typography>
              <Typography>
                View more Seller starting From ₹{product.price.cost}
              </Typography>
            </TableCell>
          </ColText>
          <ColText>
            <TableCell colSpan={2}>
              <img src={adURL} alt="" style={{ width: 390 }} />
            </TableCell>
          </ColText>
          <ColText>
            <TableCell style={{ color: "#878787" }}>Discription</TableCell>
            <TableCell> {product.description}</TableCell>
          </ColText>
        </TableBody>
      </Table>
    </>
  );
};

export default ProductDeattail;
