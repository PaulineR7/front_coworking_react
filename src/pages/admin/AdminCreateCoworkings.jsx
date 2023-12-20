import { useState } from "react";
import HeaderAdmin from "../../components/admin/HeaderAdmin";

function AdminCreateCoworkings() {
    const [message, setMessage] = useState(null);
    const handleCreateCoworking = async(event) => {
        event.preventDefault();

        // je récupère les valeurs du form
        const name = event.target.name.value;
        const priceByMonth = event.target.priceByMonth.value;
        const priceByDay = event.target.priceByDay.value;
        const priceByHour = event.target.priceByHour.value;
        const addressNumber = event.target.addressNumber.value;
        const addressStreet = event.target.addressStreet.value;
        const addressCity = event.target.addressCity.value;
        const addressPostcode = event.target.addressPostcode.value;
        const superficy = event.target.superficy.value;
        const capacity = event.target.capacity.value;


        const coworkingToCreate = {
            name: name,
            price: {
              month: priceByMonth,
              day: priceByDay,
              hour: priceByHour,
            },
            address: {
              number: addressNumber,
              street: addressStreet,
              city: addressCity,
              postCode: addressPostcode,
            },
            superficy: superficy,
            capacity: capacity,
        };
    
        const coworkingToCreateJson = JSON.stringify(coworkingToCreate);

        

        const token = localStorage.getItem("jwt");
        console.log(token)
    
        const responseCoworkingCreate = await fetch("http://localhost:3000/api/coworkings", {
            method: "POST",
            headers: {
                "Content-Type" : "application/json",
                Authorization: "Bearer " + token,
            },
            body: coworkingToCreateJson,
        });
       

        if (responseCoworkingCreate.status === 201) {
            setMessage("Coworking créé !");
        } else {
            setMessage("Erreur !");
        }

       
    }

    



    return(
        <>
        <HeaderAdmin />
        <section>
            {message && <p>{message}</p>}
            <form onSubmit={handleCreateCoworking}>
            <div>
          <label>
            Nom
            <input type="text" name="name" />
          </label>
        </div>
        <div>
          <label>
            Prix par mois
            <input type="number" name="priceByMonth" />
          </label>
        </div>
        <div>
          <label>
            Prix par jour
            <input type="number" name="priceByDay" />
          </label>
        </div>
        <div>
          <label>
            Prix par heure
            <input type="number" name="priceByHour" />
          </label>
        </div>
        <div>
          <label>
            Adresse : Numéro
            <input type="text" name="addressNumber" />
          </label>
        </div>
        <div>
          <label>
            Adresse : Rue
            <input type="text" name="addressStreet" />
          </label>
        </div>
        <div>
          <label>
            Adresse : Ville
            <input type="text" name="addressCity" />
          </label>
        </div>
        <div>
          <label>
            Adresse : Postcode
            <input type="text" name="addressPostcode" />
          </label>
        </div>
        <div>
          <label>
            Superficie
            <input type="number" name="superficy" />
          </label>
        </div>
        <div>
          <label>
            Capacité
            <input type="number" name="capacity" />
          </label>
        </div>

        <input type="submit" />
            </form>
        </section>
        </>
    )
}

export default AdminCreateCoworkings;