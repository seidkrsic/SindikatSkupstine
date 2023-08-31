import React, { useContext, useState } from 'react'
import "./Session.css" 
import HeaderPhoto from '../../components/HeaderPhoto/HeaderPhoto'
import { Link, useLocation } from 'react-router-dom'
import pdfdownload from "../../images/pdf.png"
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import AuthContext from '../../Context/AuthContext'




const Session = () => {


    const location_id = useParams().id 
    const location = useLocation().pathname
    
    let [sessionInfo, setSessionInfo] = useState({})
    let [sessionsInfo, setSessionsInfo] = useState([])
    const {user} = useContext(AuthContext)
    const {lang} = useContext(AuthContext)

    const getSessions = async () => { 
        let response = await fetch("http://127.0.0.1:8000/api/sessions/")
        let data = await response.json()
        setSessionsInfo(data) 
        if (location_id === null || location_id === undefined ) { 
            for (const item in data){ 
                data[item].created = data[item].created.slice(0,10)
                for (const i in data[item].documents) { 
                    data[item].documents[i].created = data[item].documents[i].created.slice(0,10)
                   
                }
    
            }

            setSessionInfo(data[0])
        }
    
        
 
    }  

    const getSession = async () => { 
        let response = await fetch(`http://127.0.0.1:8000/api/sessions/${location_id}/`)
        let data = await response.json() 
       
        data.created = data.created.slice(0,10) 
            
        
        for (const i in data.documents) { 
            data.documents[i].created = data.documents[i].created.slice(0,10)
           
        }
        
        setSessionInfo(data) 
        
    };

   

    useEffect(() => {
      
        getSessions()
        window.scrollTo(0, 0); 

    }, []);

    useEffect(() => {

        if (location_id) { 
            getSession();
        }

        // if (location.includes("skupstina")) { 
        //     const getSessions = async () => { 
        //         let response = await fetch("http://127.0.0.1:8000/api/sessions/?name=skupstina/", { 
        //             method: "GET", 
        //             headers: {"Content-Type" : "application/json"},
        //             body:  JSON.stringify({"category" : "skupstina"})
        //         })
        //         let data = await response.json()
        //         setSessionsInfo(data) 
        //         if (location_id === null || location_id === undefined ) { 
        //             for (const item in data){ 
        //                 data[item].created = data[item].created.slice(0,10)
        //                 for (const i in data[item].documents) { 
        //                     data[item].documents[i].created = data[item].documents[i].created.slice(0,10)
                           
        //                 }
            
        //             }
        
        //             setSessionInfo(data[0])
        //         }

        //         getSessions()
                
            
                
         
        //     } 
        // }
    
     

      
        

    }, [location_id, location]);

  return (

    <div className='Session__container-main'>
        <HeaderPhoto page_name={lang === "latin" ? "Sjednice" : "Сједнице"} />
        <div className='Session__container'>
        <div className='Session__container-left'>
    
        {sessionInfo && (
            <div>
                <h1 className='Session__document-container__documentHeader'>{ lang === "latin" ? sessionInfo.title : sessionInfo.title_cyrillic }</h1>
                <p className='border-Bottom '>{sessionInfo.created_eu_time}</p>
                {sessionInfo.agenda_items && (
                    <div className='Session__agenda-container'>
                        <h3>{ lang === "latin" ? "Dnevni red" : "Дневни ред"}</h3>
                        {sessionInfo.agenda_items.map((item, index) => (
                            <p key={item.id}>{index + 1 + ". " } {lang === "latin" ? item.title : item.title_cyrillic}</p>
                        ))}
                    </div>
                )}
                {sessionInfo.documents && user ? (
                    <div className='Session__documents-container'>
                        <h3>{ lang === "latin" ? "Dokumenta" : "Документа"}</h3>
                        {sessionInfo.documents.map((item) => (
                            <a key={item.id} href={item.download_link} className='Session__document-container'>
                                <img src={pdfdownload} alt="pdf" />
                                    <div className='Session__document-info__container'>
                                        <h5>{lang === "latin" ? item.title : item.title_cyrillic}</h5> 
                                        <p>{item.created_eu_time}</p>
                                    </div>
                            </a>
                        ))}
                    </div>
                ): <></>}
            </div>
        )}
    
</div>


            <div className='Session__container-right'>
                    <h1>{lang === "latin" ? "Sjednice Skupštine" : "Сједнице Скупштине"}</h1>
                    <div className='Session__links-container'>
                        {sessionsInfo?.map( item => (
                            <Link to={"/session/"+item.id} key={item.id}>{lang === "latin" ? item.title: item.title_cyrillic}</Link>
                        ))}
                    </div>
            </div>

        </div>
       

    </div>
  )
}


export default Session