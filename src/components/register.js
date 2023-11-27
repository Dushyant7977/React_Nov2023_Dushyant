import * as React from 'react';
import './register.css';
import {useState} from 'react';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import Button from '@mui/material/Button';
const Register = () => 
{
    const [visibile,setVisible]=useState(false);
    const[type,setType]=useState(false);
    const onchange=()=>
    {
           setVisible(!visibile);
           setType(!type);
    }

    return ( 
    <div>
    <div className="container1">
    <table>
        <tr>
            <th><div><TextField id="outlined-basic" placeholder="Username" variant="outlined"/></div></th>
        </tr>

        <tr>
            <th><div><TextField id="outlined-basic" placeholder="Email" variant="filled"/></div></th>
        </tr>

        <tr>
            
            <th>
                <TextField 
            className='password'
          placeholder='password'
          variant="filled"
          type={type ? ('text'):('password')}
          InputProps={{
              endAdornment: (
              <InputAdornment position="end" onClick={onchange} style={{cursor:'pointer'}}>
                {visibile ? (<VisibilityIcon style={{color:'white'}}/>):(<VisibilityOffIcon style={{color:'white'}}/>)}
              </InputAdornment>

              
            ),
            }
            }/></th>
            
        </tr>

        <tr>
            <th><TextField 
            className='Password'
          placeholder='Confirm Password'
          variant="filled"
          type={type ? ('text'):('password')}
          InputProps={{
              endAdornment: (
              <InputAdornment position="end" onClick={onchange} style={{cursor:'pointer'}}>
                {visibile ? (<VisibilityIcon style={{color:'white'}}/>):(<VisibilityOffIcon style={{color:'white'}}/>)}
              </InputAdornment>

              
            ),
            }
            }/></th>
        </tr>
        
        <tr>
            <th colSpan="2"><Button id="regbutton" href='/'><b>REGISTER</b></Button></th>
        </tr>
    </table>
    </div>
    </div>
    
     );
}
 
export default Register;