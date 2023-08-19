import {React, useEffect} from 'react'
import "../LoginPage/LoginPage.css"
import logo from "../../images/Artboard.png"
import HeaderPhoto from '../../components/HeaderPhoto/HeaderPhoto'


const LoginPage = () => {
    
    useEffect(() => {
        
        window.scrollTo(0, 0); 

    }, []);

  return (

    <div className='LoginPage__container'>
            <HeaderPhoto page_name={"PRIJAVA KORISNIKA"} />
            <div className='LoginPage__img-container'>
                <img src={logo} alt="" />
            </div>
            <form>
                <p>Username</p>
                <input id='LoginPage-input' type="text"  placeholder='unesi svoje korisničko ime' />
                <p>Password</p>
                <input id='LoginPage-input2' type="password" placeholder='unesi lozinku' />
                <button id='LoginPage-input_button'>Uloguj se</button>
            </form>
    </div>
  )
}

export default LoginPage