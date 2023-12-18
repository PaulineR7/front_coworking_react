import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../../components/guest/Header";

function CoworkingDetailPage () {
    const {id} = useParams()
    const [coworkings, setCoworkings] = useState(null);

    useEffect(()=> {
        (async()=> {
            const coworkingResponse = await fetch("http://localhost:3000/api/coworkings/" + id)
            const coworkingJson = await coworkingResponse.json()
            setCoworkings(coworkingJson)
        })()
    },[])
    return(
        <>
        <Header />
        <article>
                {coworkings ? (
                    <>
                            <>
                            <h3>{coworkings.data.name}</h3>
                            <p>{coworkings.data.price.hour}</p>
                            <p>{coworkings.data.price.day}</p>
                            <p>{coworkings.data.price.month}</p>
                            </>
                    </>  
                ):
                (
                    <p>En cours de chargement</p>
                )}
        </article>
        </>
    )
}

export default CoworkingDetailPage;