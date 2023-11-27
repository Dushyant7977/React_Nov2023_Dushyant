import './nearyou.css';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
const itemData1 = [
  {
    img: 'https://tse1.mm.bing.net/th?id=OIP.ZQ7CPR3zogZAjC1Ae3qerwHaFj&pid=Api&P=0&h=180',
    
  },
  {
    img: 'https://img.freepik.com/free-photo/modern-wood-kitchen-bar-with-elegant-lighting-decor-generated-by-ai_188544-40668.jpg?ga=GA1.1.663548997.1700211103&semt=ais_ai_generated',
    
  },
  {
    img: 'https://img.freepik.com/free-photo/delicious-food-table_23-2150857894.jpg?ga=GA1.1.663548997.1700211103&semt=ais_ai_generated',
    
  },
 
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROuv-ybPKcGLsKW7_IAs2bWJraoKlqSXivug&usqp=CAU',
    
  },
  {
    img: 'https://img.freepik.com/free-photo/coffee-shop-table-with-wood-chair-coffee-cup-saucer-generated-by-artificial-intelligence_188544-84849.jpg?ga=GA1.1.663548997.1700211103&semt=ais_ai_generated',
    
  },
  {
    img: 'https://img.freepik.com/premium-photo/delicious-juicy-burger-isolated-white-background-fast-food_554439-40.jpg?size=626&ext=jpg&ga=GA1.1.663548997.1700211103&semt=sph',
    
  },
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSo12_8Ywjbm4Waayi5cvBGYSRgob6357zqgw&usqp=CAU',
    
  },
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIkogA7QhJBbRNUmt6YAdSgPVnbRb3llZA1Q&usqp=CAU',
    
  },
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeP6HhqcpvwjAKSW-WzSb2-WG3YcVCIq9lMQ&usqp=CAU',
    
  },
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPWLu0U9UXEX8m6IBTg0yCl0u4OuaGxH05oA&usqp=CAU',
    
  },
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdlwkAtLrgLjVw8DS7I9nsAMET9zjfZwULag&usqp=CAU',
    
  },
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQp9Tdch3EpVlxGNCyuGq_8c3Zx0hLeyZvs5g&usqp=CAU',
    
  },
  
];


const itemData2 = [
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzMJ2ro7Qge6rSI7SB3-SKSxn3xnST63XpPA&usqp=CAU',
    
  },
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0vrVNme7_4IGgkIHvlsbG-N6ccyx1mpyVwQ&usqp=CAU',
    
  },
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRy9H-ekRUP9zOuOIfTrfsy_otEocGW2xPS1A&usqp=CAU',
    
  },
 
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-WwJ4MusSb-Fq4mzgBr8kBG4oKvNn4YRoiw&usqp=CAU',
    
  },
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6etN5PN9mt1mEev4ysisVMx6SMZ6tdrT5CA&usqp=CAU',
    
  },
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZFJH7CVFN0v23lcMcm2z58_Cx8hySUa9Imw&usqp=CAU',
    
  },
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfyj9OM7NrMnRhMlMG9-bkuDCYy1SGDGnXsw&usqp=CAU',
    
  },
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTG-Nd8pOSGxpFIPWRNoMW5lCVhbWVGhUykIA&usqp=CAU',
    
  },
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeYGLFnrqX7-10aFEi34QbNpivpd6ip1cmEA&usqp=CAU',
    
  },
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT22xXh_5BI080_7wznu-N8TnGQcz2xYTRmTw&usqp=CAU',
    
  },
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ47Dzl6j6QrmO_oz0a0kTipbOmL1J84ovWPg&usqp=CAU',
    
  },
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLB22alqMJaFimjAJ2EP8nItmcH3mw1cNm4A&usqp=CAU',
    
  },
  
];


const itemData3 = [
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqtRtsoGgEjdP35PV5yq_FX7eP3oQeiZYAEA&usqp=CAU',
    
  },
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7d2a4rUJRvlRE4kmEOGw894mI9GZ2lLC5gQ&usqp=CAU',
    
  },
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuY-CBDCK6iTaHfdK6_P5M6AGCnn4uDzituQ&usqp=CAU',
    
  },
 
  {
    
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjaCRWgzY3jnO1YvI7UHOxr2e8_XoU7O7uRQ&usqp=CAU',
  },
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFgDmak1irajJIic0I_zOKJsEWPp4dKm_EFA&usqp=CAU',
    
  },
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS13pvQpo8B3aY7RWqWzBL5itUvyVrB3mubIDbY8s9rZMsr_VNujRv3qXY3s91j0hkl64Y&usqp=CAU',
    
  },
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqWXb1A6mrKYk07Gzk_1Aho2EK0Uqo2PJc2MdldZGrY7YgW5IUNxvrU-ReINDc0tA0TtE&usqp=CAU',
    
  },
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDElu7FnWFs49gnADyAKwXFJ64mU-xsv8yf8OyYQXwldnP5VRA4vSJvYMEehsUT_BEr0w&usqp=CAU',
    
  },
  {
    img: 'https://www.seriouseats.com/thmb/zx_xD_D7q41h5RdNOAyAoxqx6ig=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__recipes__images__2017__01__20170128-bagel-bites-cheese-pepperoni-vicky-wasik-6-0c90262d24f940fc84030b3d5826319e.jpg',
    
  },
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTeEX-NXJD5OVxZq_UhTa0Kw5vgXci3NN9ZBsxtNEsWFHU-SuRenoTBLkZ0DfWqY8aBZw&usqp=CAU',
    
  },
  {
    img: 'https://www.marcellinaincucina.com/wp-content/uploads/2023/08/italian-butter-cookies-featured.jpg',
    
  },
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlUUeVocz_ekzxhogM4aK6hWJJ1zsGMJFYhzPUGs1woVcC5YXifYhXl_FR0ojjNAKGwAA&usqp=CAU',
    
  },
  
];

const Nearyou = () => {
    return ( 
        

   

    <div class="contain">
        <h1 id="title-nearyou"><b>Restaurants Near You</b></h1>
        <div className="nearyou-box">
          <div className="nearyou-image"> 
    <Box className="imagebox1" sx={{ width: 900, height: 240, overflowY: 'scroll' }}>
      <ImageList variant="masonry" cols={3} gap={8}>
        {itemData1.map((item) => (
          <ImageListItem key={item.img}>
            <img className="imagebox1"
              srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
              src={`${item.img}?w=248&fit=crop&auto=format`}
              alt={item.title}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>


            
          </div>
        <div className="nearyou-text">
            <h2 id="nearyou-textcolour">Take It Cheesy</h2>
            <p></p>
            <button id="nearyoubut">Book Now</button>
        </div>

        </div>


        <div className="nearyou-box">
          <div className="nearyou-image"> 
    <Box className="imagebox1" sx={{ width: 900, height: 240, overflowY: 'scroll' }}>
      <ImageList variant="masonry" cols={3} gap={8}>
        {itemData2.map((item) => (
          <ImageListItem key={item.img}>
            <img className="imagebox1"
              srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
              src={`${item.img}?w=248&fit=crop&auto=format`}
              alt={item.title}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>


            
          </div>
        <div className="nearyou-text">
            <h2 id="nearyou-textcolour">Bonehead Burgers</h2>
            <p></p>
            <button id="nearyoubut">Book Now</button>
        </div>

        </div>


        <div className="nearyou-box">
          <div className="nearyou-image"> 
    <Box className="imagebox1" sx={{ width: 900, height: 240, overflowY: 'scroll' }}>
      <ImageList variant="masonry" cols={3} gap={8}>
        {itemData3.map((item) => (
          <ImageListItem key={item.img}>
            <img className="imagebox1"
              srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
              src={`${item.img}?w=248&fit=crop&auto=format`}
              alt={item.title}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>


            
          </div>
        <div className="nearyou-text">
            <h2 id="nearyou-textcolour">Wonder Fuel</h2>
            <p></p>
            <button id="nearyoubut">Book Now</button>
        </div>

        </div>
    
        
        </div>

        
     );
}
 
export default Nearyou;