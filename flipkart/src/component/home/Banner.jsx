import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import  {bannerData} from '../../constant/Data';
import { styled } from '@mui/material';
 const Image =styled('img')(({theme})=>({
    width:'100%' ,
  height:280,
  [theme.breakpoints.down('md')]:{
    pbjectFit:'cover',
    height:180
  }
 }))

const responsive = {
    
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1 
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  }; 
  
function Banner(props) {
    return (
        <>
            <Carousel
               slidesToSlide={1}
               autoPlaySpeed={4000}
               autoPlay={true}
               responsive= {responsive}
               dotListClass="custom-dot-list-style"
               itemClass="carousel-item-padding-40-px"
               containerClass="carousel-container"
               swipeable={false}
               draggable={false}
               infinite={true}
            >
                {
                     bannerData.map( data =>(
                        <Image src={data.url} alt='banner'></Image>
                     ))
                }
            </Carousel>
        </>
    );
}

export default Banner; 