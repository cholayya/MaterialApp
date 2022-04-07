import React, {useState} from 'react';

 function Login() {
    const [name, setName] = useState('');
    const [pwd, setPwd] = useState('');

    const handle = () => {
        localStorage.setItem('Name', name);
        localStorage.setItem('Password', pwd);
    };
    
    const remove  = () =>{
        localStorage.removeItem('Name');
        localStorage.removeItem('Password');
    };

    return (

        
    <div>
        <h1>Login</h1>
        <div>
            <label>User Name:</label>
            <input type="text" value={name}  placeholder="Enter User Name..." onChange={(e) => setName(e.target.value)} />
            <label>Passowrd:</label>
            <input type="password" value={pwd}  placeholder="Enter Password..." onChange={(e) => setPwd(e.target.value)} />
        </div>
        <div>
            <button onClick={handle}>Login</button>
        </div>
        {
            localStorage.getItem('Name')&&(
                <div>
                    Name: <p>{localStorage.getItem('Name')}</p>
                    </div>
            )
        }
        {
            localStorage.getItem('Password')&&(
                <div>
                    Password: <p>{localStorage.getItem('Password')}</p>
                    </div>
            )
        }
<div>
            <button onClick={remove}>Clear</button>
        </div>
    </div>
  )
}

export default Login;