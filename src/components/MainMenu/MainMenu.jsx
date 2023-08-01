import React from 'react'
import "./MainMenu.css"
import DropdownMenu from '../DropdownMenu/DropdownMenu'


const MainMenu = () => {

    const button1Items = ['Predsjednik', 'Zamjenik Predsjednika', 
                            "Generalni sekretar", "Izvršni odbor", "Nadzorni Odbor", 
                            "Statutarna Komisija"
                        ];
    const button2Items = ['Sjednice Skupštine', 'Sjednice Izvršnog odbora'];
    const button3Items = ['Akti SOSCG', 'Zakoni i drugi Akti', 'Formulari i Obrasci'];
 


  return (
    <div className='MainMenu__container' >
        <div className='MainMenu__container2'>   
        <DropdownMenu buttonName="Aktuelnosti"  />
        <DropdownMenu buttonName="Sindikat" menuItems={button1Items} />
        <DropdownMenu buttonName="Sjednice" menuItems={button2Items} />
        <DropdownMenu buttonName="Zakoni" menuItems={button3Items} />
        <DropdownMenu buttonName="Pogodnosti za članove" />
        <DropdownMenu buttonName="Kontakt" />
        </div>
      
    </div>
  )
}

export default MainMenu