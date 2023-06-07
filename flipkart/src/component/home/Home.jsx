import React, { useEffect } from 'react';
import Nav from './Nav';
import Banner from './Banner';
import { Box, styled } from '@mui/material';
import { getProducts } from '../../redux/action/productAction';
import { useDispatch, useSelector } from 'react-redux';
import Slide from './Slide';
import MidSlide from './MidSlide';
import MidSection from './MidSection';

const Component = styled(Box)`
padding:10px ;
background: #F2F2F2;
`
function Home(props) {

    const { products } = useSelector((state) => state.getProducts)  //actaul products
    console.log(products);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getProducts()) //function in productAction

    }, [dispatch])

    return (
        <>

            <Nav />
            <Component>
                <Banner />
                <MidSlide products={products}  title='Deal of the Day' timer={true}/>
                <MidSection/>
                <Slide products={products}  title='Descount for You' timer={false}/>
                <Slide products={products}  title='Suggested item' timer={false}/>
                <Slide products={products}  title='Top Selection' timer={false}/>
                <Slide products={products}  title='Recomonded Item' timer={false}/>
                <Slide products={products}  title='Trending Offers' timer={false}/>
                <Slide products={products}  title='Top Deal an accessories' timer={false}/>
                <Slide products={products}  title='Seasons top picks' timer={false}/>

            </Component>

        </>
    );
}

export default Home;