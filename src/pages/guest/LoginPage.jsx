import { useNavigate } from "react-router-dom";

function LoginPage() {
    const navigate = useNavigate();
    const handleLogin = async(event) => {
        event.preventDefault();
        const username = event.target.username.value;
        const password = event.target.password.value;

        console.log(username, password)

        // je créé un objet qui stocke mes valeurs récupérer dans l'input
        const loginData = {
            username,
            password
        }

        // je convertie les valeurs en JSON
        const loginDataJson = JSON.stringify(loginData);

        // je fais un fecth(requête) sur l'url login
        const loginResponse = await fetch("http://localhost:3000/api/users/login", {
        //je lui dit par quel méthode je suis passée
        method: "POST",
        headers : {
            "Content-Type": "application/json"
        },
        // je précise que le body est mon objet converti en JSON
        body: loginDataJson,
        });

        //je récupère la réponse de l'api en JSON
        const loginResponseData = await loginResponse.json();

        // je récupère le token
        const token = loginResponseData.data

        // je l'affiche en console
        console.log(token)

        if (token) {
            // je le stocke dans le local storage du navigateur
            localStorage.setItem("jwt", token);
            navigate("/admin/")

        }
        
    }
    return(
        <section>
            <form onSubmit={handleLogin}>
                <label htmlFor="">
                    Username
                    <input type="text" name="username" />
                </label>

                <label htmlFor="">
                    Password
                    <input type="password" name="password" />
                </label>
                <input type="submit" />
            </form>
        </section>
    )
    }

    export default LoginPage;