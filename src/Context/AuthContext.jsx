import React, {createContext, useState, useEffect} from 'react'
import jwt_decode from "jwt-decode";
import { useNavigate } from 'react-router-dom';


const AuthContext = createContext(); 
 
export default AuthContext


export const AuthProvider = ({children}) => { 
    let navigate = useNavigate()



    let [loading, setLoading] = useState(true)
    let [user,setUser] = useState(()=>localStorage.getItem('authToken')? jwt_decode(localStorage.getItem('authToken')):null) 
    let [authToken, setAuthToken] = useState(()=>localStorage.getItem('authToken') ? JSON.parse(localStorage.getItem('authToken')): null) 
    let [searchResults, setSearchResults] = useState([])
    let [lang, setLang] = useState(localStorage.getItem("lang") === null ? "latin" : localStorage.getItem("lang")) 

    if (!localStorage.getItem("lang")=== null) { 
        localStorage.setItem("lang", "latin")
    }


    const updateLang = (value) => setLang(value)

    const userLogin = async (e) => { 
        e.preventDefault()
        const response = await fetch("http://127.0.0.1:8000/api/token/", { 
            method: "POST", 
            headers: { 
                "Content-Type" : "application/json"
            }, 
            body: JSON.stringify({'username': e.target.username.value, "password" : e.target.password.value}) 
        })

        let data = await response.json()
        if (response.status === 200) { 
            setAuthToken(data)
            setUser(jwt_decode(data.access))
            localStorage.setItem("authToken", JSON.stringify(data))
            navigate("/")
      
        } else { 
            alert("Not good password or username")
        }
      
    }



    const userLogout = () => { 
            setAuthToken(null) 
            setUser(null) 
            localStorage.removeItem('authToken')
            navigate("/")
    }

    const updateToken = async () => { 

        const response = await fetch("http://127.0.0.1:8000/api/token/refresh/", { 
            method: "POST", 
            headers: { 
                "Content-Type" : "application/json"
            }, 
            body: JSON.stringify({"refresh" : authToken?.refresh}) 
        })

        const data = await response.json()
        if (response.status === 200) { 
            setAuthToken(data)
            setUser(jwt_decode(data.access))
            localStorage.setItem("authToken", JSON.stringify(data))
        } else { 
            userLogout()

        }

        if (loading) { 
            setLoading(false)
        }


    }

    const searchNews = async (e) => { 
        e.preventDefault()
        let input_value = document.querySelector("#search").value 
        if (input_value != "" ){ 

        
        const response = await fetch("http://127.0.0.1:8000/api/filteredNews/", { 
              method: "POST", 
              headers: {
                "Content-Type" : "application/json"
              },
              body: JSON.stringify({"search" : input_value })
              
          })
          let data = await response.json() 
          let titleSize; 
          if (data.length > 1) { 
            for (const item in data){ 
                if (window.innerWidth < 767) { 
                    titleSize = 90
                } else if (767 < window.innerWidth < 991) { 
                    titleSize = 35
                } else { 
                    titleSize = 200
                }
                if (titleSize<data[item].title.length) { 
                    data[item].title = data[item].title.slice(0,titleSize) + "..."
                    data[item].title_cyrillic = data[item].title_cyrillic.slice(0,titleSize)+"..."
                }
             
                 
          
             

                }
            } else { 

            }
            
          setSearchResults(data)
          console.log(data)
          navigate("/search")
        }
          
      }
  
    const debounce = (func, delay) => {
    let timeout;
    return (...args) => {
        clearTimeout(timeout);
        timeout = setTimeout(() => func(...args), delay);
    };
    };

    const debouncedFetchData = debounce(searchNews, 300); // Adjust the delay as needed


 
    const contextData = { 
        userLogin: userLogin, 
        userLogout: userLogout, 
        "searchResults" : searchResults,
        updateLang: updateLang,
        debouncedFetchData: debouncedFetchData,
        "user" : user, 
        'authToken' : authToken, 
        "boardMember": user ? user.boardMember : false, 
        "lang" : lang

    }


    useEffect(()=> { 

        if (loading) { 
            updateToken()
        }

        const minutes = 4 * 1000 * 60
        let interval = setInterval(()=>{ 
            if (authToken){ 
                updateToken()
            }
        }, minutes)
        return () => clearInterval(interval)
        
        }, [authToken, loading])
        



    return (
        <AuthContext.Provider value={contextData}>
            {loading? null : children}
        </AuthContext.Provider>
    )
}