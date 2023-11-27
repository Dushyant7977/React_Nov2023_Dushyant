import {useState} from 'react';
import './Login.css';
import * as React from 'react';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import FilledInput from '@mui/material/FilledInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

const Login = () => 
{
    const [visibile,setVisible]=useState(false);
    const[type,setType]=useState(false);
    const onchange=()=>
    {
           setVisible(!visibile);
           setType(!type);
    }
    return ( 
      <div className="body">
    <div className="container">
    <div className="image">
    <div className="text">

    <div><img id="loginlogo" src="https://media.istockphoto.com/id/1222860305/vector/chef-hat-icon-flat-vector-template-design-trendy.jpg?s=612x612&w=0&k=20&c=jG868cHyA1_CMjNywEsXAJgogJ1qQN66L8ZZe_4PpX8="></img></div>
    <div className="text"><pre><h1> LOGIN</h1></pre></div>   
    </div>
          

    </div>
    <label for="uname"><b>Username or Email</b></label>
    <TextField id="outlined-basic" placeholder="Username or Email" variant="filled"/>
    
    <label for="psw"><b>Password</b></label>

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
            }/>
            <br></br>
            <div><p>Forget password?<a href="#">Click here</a></p></div>
   
   <Button id="button" variant="outlined" href='/'><b>Login</b></Button>





    
    </div>
    </div>

     );
}
 
export default Login;