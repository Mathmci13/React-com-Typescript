import { useState } from "react";
import { useNavigate } from "react-router-dom"

export const Login = () => {
  const navigate = useNavigate();

  const [password,setPassword] = useState('');
  const [email,setEmail] = useState('');

  const handleLogin = () =>{
    console.log(email);
    console.log(password);
  }

  const handleClick = () =>{
    navigate('/dashboard')
  }
  return (
    <div>
      <div>
      <form>
        
        <label>
          <span>Email</span>
          <input value = {email} onChange={e => setEmail(e.target.value)}/>
        </label>

        <label>
          <span>Senha</span>
          <input type = "password" value ={password} onChange={e => setPassword(e.target.value)}/>
        </label>

        <button type="button" onClick={handleLogin}>
          Entrar
        </button>
      </form>
      </div>
      {/* <button onClick={handleClick}>Home Page</button> */}
    </div>
  )
}

// export default Login