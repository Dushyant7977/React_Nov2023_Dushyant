import './webpage.css';
import Button from '@mui/material/Button';
import Navbar from './navbar';
import Booking from './booking';
import Nearyou from './nearyou';
const Webpage = () => {
    return ( 
       
        
  <body >
    
      <div className="header">
        <h1><b>MAKE YOUR RESERVATION</b></h1>
        
    </div>
      <Navbar/>
      <Booking/>
      <Nearyou/>
    
    <div className="location">
        
    <h1>Select Your Location</h1>
    <div className="dog">
    <div className="friend">
        <h2>Chennai</h2>
        <p>available-10</p>
    </div>
    <div className="friend">
        <h2>Mumbai</h2>
        <p>available-15</p>
    </div>
    <div className="friend">
        <h2>Delhi</h2>
        <p>available-17</p>
    </div>
    </div>
    <div className="dog1">
    <div className="friend">
        <h2>Hydrabad</h2>
        <p>available-13</p>
    </div>
    <div className="friend">
        <h2>Pune</h2>
        <p>available-19</p>
    </div>
    <div className="friend">
        <h2>Bangalore</h2>
        <p>available-20</p>
    </div>
    </div>

    </div>

    <div className="footer">

        <p>Find the best Restaurants, Deals, Discounts & Offers</p>
        <p>Write to us at:<a href="#">xyz@gmail.com</a></p>
        <Button href="/h">LOG IN</Button>
        <Button href='/r'>REGISTER</Button>
        
    </div>
</body>


       
        
     );
}
 
export default Webpage;