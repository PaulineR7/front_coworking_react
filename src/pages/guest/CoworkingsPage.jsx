import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from "../../components/guest/Header";


function CoworkingsPage() {
    const [coworkings, setCoworkings] = useState(null);

    useEffect(()=> {
        (async()=> {
            const coworkingResponse = await fetch("http://localhost:3000/api/coworkings")
            const coworkingJson = await coworkingResponse.json()
            setCoworkings(coworkingJson)
        })()
    },[])
    return(
        <>
        <Header />
        <h2>Listes des coworkings</h2>
            <article>
                {coworkings ? (
                    <>
                    {coworkings.map((coworking) => {
                        return (
                            <>
                            <h3>{coworking.name}</h3>
                            <Link to={`/coworkingdetails/${coworking.id}`}>Détails du coktail</Link>
                            </>
                        )
                    })} 
                    </>  
                ):
                (
                    <p>En cours de chargement</p>
                )}
                
            </article>
        </>
    )
}

export default CoworkingsPage;