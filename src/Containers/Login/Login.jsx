import { useState } from "react";
import axios from "axios";
function Login() {
    const [Name, setName] = useState();
    const [Email, setEmail] = useState();
    const [phonenumber, setphonenumber] = useState();
    const [password, setpassword] = useState();
    const [image, setimage] = useState();

    const Adduser = () => {
        axios.post(`http://localhost:5051/login`, {
            fullname: Name,
            email: Email,
            phone: phonenumber,
            password: password,
        }, {
            withCredentials: true
        })
            .then((res) => console.log("res====>", res))
            .catch((err) => console.log("errr", err))
    }
    const sendimg = () => {

        const picture = document.getElementById("picture")
        console.log(picture.files[0])
        const url = URL.createObjectURL(picture.files[0])
        setimage(url)
        console.log(url)

    }

    return (
        <div>
            <input type="text" onChange={(e) => setName(e.target.value)} placeholder="name" />
            <br />
            <input type="email" onChange={(e) => setEmail(e.target.value)} placeholder="email" />
            <br />
            <input type="text" onChange={(e) => setpassword(e.target.value)} placeholder="setpassword" />
            <br />
            <input type="number" onChange={(e) => setphonenumber(e.target.value)} placeholder="number" />
            <button onClick={Adduser}>login</button>

            <input type="file" id="picture" accept="image/*" />
            <button onClick={sendimg}>send photo </button>
            <img src={image} alt="" width={300} height={300} />

        </div>
    );
}

export default Login;