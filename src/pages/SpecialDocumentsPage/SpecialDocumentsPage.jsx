import React, { useContext, useState, useEffect } from "react";
import HeaderPhoto from "../../components/HeaderPhoto/HeaderPhoto";
import AuthContext from "../../Context/AuthContext";
import "./SpecialDocumentsPage.css";
import salon from "../../images/Zgrada_skupstine.jpg";
import searchIcon from "../../images/search2.png";
import Paginator from "../../components/Paginator/Paginator";
import DocumentCard from "../../components/DocumentCard/DocumentCard";



const SpecialDocumentsPage = () => {
    const [query, setQuery] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [documents, setDocuments] = useState([]);
    const [totalPages, setTotalPages] = useState(1);
    const [isLoading, setIsLoading] = useState(false);
    const [hasResults, setHasResults] = useState(false);
    const { lang, domain_url } = useContext(AuthContext);
    
    const handlePageChange = (newPage) => {
        setCurrentPage(newPage);
        setTotalPages(totalPages);
        fetchDocuments(newPage, query);
    }; 

    const fetchDocuments = async (page, searchQuery) => {
        setIsLoading(true);
        const url = `${domain_url}api/getSpecialDocuments/?page=${page}`;
        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ search: searchQuery })
            });
            if (!response.ok) throw new Error('Network response was not ok');
            const data = await response.json();
            console.log(data);
            setDocuments(data.results.length > 0 ? data.results : []);
            setHasResults(data.results.length > 0);
            const calculatedTotalPages = Math.ceil(
                data.count < 7 ? 1 : data.count / 6
            );
            // console.log(calculatedTotalPages);
            setTotalPages(calculatedTotalPages);
            setIsLoading(false);
        } catch (error) {
            console.error('There was a problem with the fetch operation:', error);
            setDocuments([]);
            setIsLoading(false);
            setHasResults(false);
        }
    };

    const handleSearch = () => {
        setCurrentPage(1);
        if (query !== ""){ 
            fetchDocuments(1, query);
        }

        

    };

    const handleInputChange = (event) => {
        setQuery(event.target.value);
    };

 

    useEffect(() => {
        window.scrollTo(0, 0);
        if (query){ 
            fetchDocuments(currentPage, query);
        }


    }, [currentPage]);

    return (
        <div className="SpecialDocumentsPage__container-main">
            <HeaderPhoto image_url={salon} page_name={lang === "latin" ? "Finansijske Odluke" : "Финансијске одлуке"} />
            <div className="SpecialDocumentsPage__container">
                <form onSubmit={(e) => e.preventDefault()}>
                    <input
                        type="text"
                        placeholder="Pretraži dokumenta"
                        value={query}
                        onChange={handleInputChange}
                    />
                    <img src={searchIcon} alt="Search" onClick={handleSearch} style={{ cursor: 'pointer' }} />
                </form>

                {isLoading ? (
                    <p>Loading...</p>
                ) : hasResults ? (
                    <div className="SpecialDocument__results">
                        {documents.map((doc, index) => (
                            <DocumentCard key={index} file_link={doc.download_link} title={doc.title} title_cyrillic={doc.title_cyrillic} document_number={doc.document_number}  />
                        ))}
                    </div>
                ) : (
                    <p>{lang === "latin" ? "Nema rezultata." : "Нема резултата."}</p>
                )}


               
              


                {/* Paginator div here */} 
                <Paginator onPageChange={handlePageChange} totalPages={totalPages} currentPage={currentPage} />


            </div>
            
        </div>
    );
};

export default SpecialDocumentsPage;
