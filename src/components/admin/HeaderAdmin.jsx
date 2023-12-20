import { Link, useNavigate } from "react-router-dom";

function HeaderAdmin() {
    const navigate = useNavigate();
    
    const handleLogout = () => {
        // sortir le token du localStorage
        localStorage.removeItem('jwt');
        // rediriger vers la page login à la déconnexion
        navigate("/login")
    }
    return(
        <nav>
            <ul>
                <li><Link to="/admin/">Dashboard</Link></li>
                <li><Link to="/admin/coworkings/create">Créer un coworking</Link></li>
                <li><Link to="/admin/coworkings">Gérer les coworkings</Link></li>
                <li><button onClick={handleLogout}>Se déconnecter</button></li>
            </ul>
        </nav>
    )
}

export default HeaderAdmin;