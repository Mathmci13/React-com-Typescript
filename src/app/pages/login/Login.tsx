import { useEffect, useMemo, useState,useCallback, useRef } from "react";
import { useNavigate } from "react-router-dom"

export const Login = () => {
  const navigate = useNavigate();

  const inputPasswordRef = useRef<HTMLInputElement>(null);

  const [password,setPassword] = useState('');
  const [email,setEmail] = useState('');

  const emailLenght = useMemo(()=>{
    console.log('Executou')
    return email.length ;
  },[email.length]);

  useEffect(() =>{
    if ( window.confirm('Você é homem?')) 
    {
      console.log('Homem')
    }
    else
    {
      console.log('Mulher')
    }
  }, []);
  
  useEffect(() => {
    console.log(email)
  }, [email]);
  
  useEffect(() => {
    console.log(password)
  }, [password]);

  const handleLogin = useCallback(() => {
   console.log(email);
   console.log(password);
  },[email,password],
  )
  
  

  const handleClick = () =>{
    navigate('/dashboard')
  }
  return (
    <div>
      <div>
      <form>
        <p>Quantidade de caracteres no email: {emailLenght}</p>
        <label>
          <span>Email</span>
          <input  value = {email} 
                  onChange={e => setEmail(e.target.value)} 
                  onKeyDown = {e => e.key === 'Enter' ? inputPasswordRef.current?.focus() : undefined}/>
        </label>

        <label>
          <span>Senha</span>
          <input type = "password" value ={password} ref = {inputPasswordRef} onChange={e => setPassword(e.target.value)}/>
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