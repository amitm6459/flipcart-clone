
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Box, Typography, Button, styled, Divider } from '@mui/material';
import Countdown from 'react-countdown';
import { Link } from 'react-router-dom';

const responsive = {

    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 5
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};

const Component = styled(Box)`
 margin-top:10px;
 background:#FFFFFF;
 
 `
const Deal = styled(Box)`
   padding:15px 20px;
   display:flex;
 `
const Timer = styled(Box)`
 display:flex;
 margin-left:10px;
 align-itme:center;
 color:#7f7f7f;
 `
const DealText = styled(Typography)`
 font-size:22px;
 font-weight:600;
 margin-right:25px;
 line-height:32px;
 
 `
const ViewAllBUTTON = styled(Button)`
 margin-left:auto;
 background:#2874f0;
 border-radius:"2px";
 font-size:13px;
 fon-weight:600;
 `
const Text = styled(Typography)`
 font-size:14px;
 margin-top:5px;

 `
const Image = styled('img')({
    width: 'auto',
    height: 150

})
const timerURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/timer_a73398.svg';

const render = ({ hours, minutes, seconds }) => {
    return <Box variant="span">{hours} : {minutes} : {seconds} Left</Box>

}

const Slide = ({ products, title, timer }) => {
    return (
        <Component>
            <Deal>
                <DealText>{title}</DealText>
                {

                    timer &&
                    <Timer>
                        <img src={timerURL} alt='timer' style={{ width: '24px' }} />
                        <Countdown date={Date.now() + 5.04e7} render={render} />
                    </Timer>
                }
                <ViewAllBUTTON variant='contained' color="primary">view all</ViewAllBUTTON>

            </Deal>
            <Divider />
            <Carousel
                responsive={responsive}
                slidesToSlide={1}
                autoPlaySpeed={4000}
                autoPlay={true}
                swipeable={false}
                draggable={false}
                infinite={true}
                keyBoardControl={true}
                centerMode={true}
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px"
                containerClass="carousel-container"
            >
                {
                    products.map((product) => (
                        <Link to={`product/${product.id}`} style={{textDecoration:'none'}}>
                            <Box textAlign='center' style={{ padding: '25px 15px' }}>
                                <Image src={product.url} alt="product" />
                                <Text style={{ fontWeight: 600, color: '#212121' }}>{product.title.shortTitle}</Text>
                                <Text style={{ color: 'green' }}>{product.discount}</Text>
                                <Text style={{ color: '#212121', Opacity: '0.6' }}>{product.tagline}</Text>
                            </Box>
                        </Link>
                    ))

                }

            </Carousel>
        </Component>

    )

}
export default Slide;