import {React, useContext, useEffect} from 'react'
import "../LoginPage/LoginPage.css"
import logo from "../../images/Artboard.png"
import HeaderPhoto from '../../components/HeaderPhoto/HeaderPhoto'
import AuthContext from '../../Context/AuthContext'


const LoginPage = () => {
    
    useEffect(() => {
        
        window.scrollTo(0, 0); 

    }, []);




    const {userLogin} = useContext(AuthContext)

  return (

    <div className='LoginPage__container'>
            <HeaderPhoto page_name={"PRIJAVA KORISNIKA"} />
            <div className='LoginPage__img-container'>
                <img src={logo} alt="" />
            </div>
            <form onSubmit={userLogin}>
                <p>Username</p>
                <input autoFocus id='LoginPage-input' type="text" name="username"  placeholder='unesi svoje korisničko ime' />
                <p>Password</p>
                <input id='LoginPage-input2' type="password" name="password" placeholder='unesi lozinku' />
                <button id='LoginPage-input_button'>Uloguj se</button>
            </form>
    </div>
  )
}

export default LoginPage