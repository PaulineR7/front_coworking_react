import { useNavigate } from "react-router-dom";
import HeaderAdmin from "../../components/admin/HeaderAdmin";
import { useEffect } from "react";

function DashboardPage() {

    const navigate = useNavigate();

    // au chargement du composant
    useEffect(() => {
      // je récupère le token en local storage
      const token = localStorage.getItem("jwt");
  
      // si le token n'existe pas => je redirige l'utilisateur vers le login
      if (!token) {
        navigate("/login");
      }
  
      // idéalement, si y'a un token existant,
      // on le décode (avec jwt-decode) et on regarde si les données sont correctes
      // si elles ne sont pas correctes (pas de clé data etc)
      // on redirige
    });

    return (
        <HeaderAdmin />
    )
}

export default DashboardPage;