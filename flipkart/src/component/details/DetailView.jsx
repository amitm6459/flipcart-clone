import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getProductDetails } from "../../redux/action/productAction";
import { Box, Typography,styled,Grid } from "@mui/material";
import ActionItems from "./ActionItems";
import ProductDeattail from "./ProductDeatail";

const Component = styled(Box)`
 background:#f2f2f2;
 
`
const Container = styled(Grid)(({theme})=>({

    background:'#FFFFFF',
    display:'flex',
    [theme.breakpoints.down('md')]:{
          margin:0
    }

}))



const RightContainer = styled(Grid)`
 margin-top:50px;
 padding-left:25px;
`

const DetailView = () => {
    const dispatch = useDispatch();

    const { loading, product } = useSelector(state => state.getProductDetails)
    const { id } = useParams();

    const fassured = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png'


    useEffect(() => {
        if(product && id !== product.id)

        dispatch(getProductDetails(id))

    }, [dispatch, id, product, loading])
    console.log(product)

    return (
        <Component>
            {
                product && Object.keys(product).length &&
                  <Container container >
                     <Grid item lg={4} md={4} sm={8} xs={12}>
                         <ActionItems product={product}/>
                     </Grid>
                     <RightContainer item lg={8} md={8 } sm={8} xs={12}>
                        
                        <ProductDeattail product={product}></ProductDeattail>
                     </RightContainer>

                  </Container>

            }
        </Component>

    )
}

export default DetailView;