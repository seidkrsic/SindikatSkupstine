import React from 'react'
import "./Session.css" 
import HeaderPhoto from '../../components/HeaderPhoto/HeaderPhoto'
import { Link } from 'react-router-dom'
import pdfdownload from "../../images/pdf.png"





const Session = () => {

    const sessionLinks = [ 
        {id: 102342, 
        title: "Prva sjednica Sindikata 2022", 
        agenda_items: ["Usvajanje zapisnika", "Razno" ], 
        documents: [
            {
                id: 22212, 
                title: "Statut", 
                created: "20.12.2022",
            }, 
            {
                id: 244212, 
                title: "Statut", 
                created: "20.12.2022",
            },
        ]

        }, 
        {id: 1024245542, 
            title: "Prva sjednica Sindikata 2022", 
            agenda_items: ["Usvajanje zapisnika", "Razno" ], 
            documents: [
                {
                    id: 22212, 
                    title: "Statut", 
                    created: "20.12.2022",
                }, 
                {
                    id: 244212, 
                    title: "Statut", 
                    created: "20.12.2022",
                },
            ]
            
            }, 
            {id: 1055242442, 
                title: "Prva sjednica Sindikata 2022", 
                agenda_items: ["Usvajanje zapisnika", "Razno" ], 
                documents: [
                    {
                        id: 22212, 
                        title: "Statut", 
                        created: "20.12.2022",
                    }, 
                    {
                        id: 244212, 
                        title: "Statut", 
                        created: "20.12.2022",
                    },
                ]
                
                }, 
                {id: 1242405542, 
                    title: "Prva sjednica Sindikata 2022", 
                    agenda_items: ["Usvajanje zapisnika", "Razno" ], 
                    documents: [
                        {
                            id: 22212, 
                            title: "Statut", 
                            created: "20.12.2022",
                        }, 
                        {
                            id: 244212, 
                            title: "Statut", 
                            created: "20.12.2022",
                        },
                    ]
                    
                    }, 
                    {id: 105424542, 
                        title: "Prva sjednica Sindikata 2022", 
                        agenda_items: ["Usvajanje zapisnika", "Razno" ], 
                        documents: [
                            {
                                id: 22212, 
                                title: "Statut", 
                                created: "20.12.2022",
                            }, 
                            {
                                id: 244212, 
                                title: "Statut", 
                                created: "20.12.2022",
                            },
                        ]
                        
                        }, 
                        {id: 105221542, 
                            title: "Prva sjednica Sindikata 2022", 
                            agenda_items: ["Usvajanje zapisnika", "Razno" ], 
                            documents: [
                                {
                                    id: 22212, 
                                    title: "Statut", 
                                    created: "20.12.2022",
                                }, 
                                {
                                    id: 244212, 
                                    title: "Statut", 
                                    created: "20.12.2022",
                                },
                            ]
                            
                            }, 
                            {id: 102421542, 
                                title: "Prva sjednica Sindikata 2022", 
                                agenda_items: ["Usvajanje zapisnika", "Razno" ], 
                                documents: [
                                    {
                                        id: 22212, 
                                        title: "Statut", 
                                        created: "20.12.2022",
                                    }, 
                                    {
                                        id: 244212, 
                                        title: "Statut", 
                                        created: "20.12.2022",
                                    },
                                ]
                                
                                }, 
                                {id: 1012542, 
                                    title: "Prva sjednica Sindikata 2022", 
                                    agenda_items: ["Usvajanje zapisnika", "Razno" ], 
                                    documents: [
                                        {
                                            id: 22212, 
                                            title: "Statut", 
                                            created: "20.12.2022",
                                        }, 
                                        {
                                            id: 244212, 
                                            title: "Statut", 
                                            created: "20.12.2022",
                                        },
                                    ]
                                    
                                    }, 

    ]

    const singleSession = {id: 102342, 
        title: "Prva sjednica Sindikata 2022", 
        created: "12.12.2012",
        agenda_items: ["Usvajanje zapisnika", "Razno" ], 
        documents: [
            {
                id: 22212, 
                title: "Statut", 
                created: "20.12.2022",
            }, 
            {
                id: 244212, 
                title: "Pravilnik", 
                created: "20.12.2022",
            },
        ]

        }

  return (
    <div className='Session__container-main'>
        <HeaderPhoto page_name={"Sjednice"} />
        <div className='Session__container'>
            <div className='Session__container-left'>
                <div>
                    <h1>{singleSession.title}</h1>
                    <p className='border-Bottom '>{singleSession.created}</p>
                    <div className='Session__agenda-container'>
                        <h3>Dnevni red</h3>
                        {singleSession.agenda_items.map((item, index)=> 
                            <p key={item.id}>{index+1 + ". " + item}</p>

                        )}
                    </div>
                    <div className='Session__documents-container'>
                        <h3>Dokumenta</h3>
                        {singleSession.documents.map((item, index)=> 
                                <Link className='Session__document-container'>  
                                    <img src={pdfdownload} alt="pdf" />
                                    <div className='Session__document-info__container'>
                                        <h5>{item.title}</h5> 
                                        <p>{item.created}</p>
                                    </div>
                                  
                                </Link>
                              

                        )}
                    </div>
                </div>
            </div>

            <div className='Session__container-right'>
                    <h1>Sjednice Skupštine</h1>
                    <div className='Session__links-container'>
                        {sessionLinks.map((session, index) => 
                            <Link>{session.title}</Link>
                        )}
                    </div>
            </div>

        </div>
       

    </div>
  )
}


export default Session