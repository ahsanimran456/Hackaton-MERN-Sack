import Header from "../../Compnents/Header/Header";
import Appslider from "../../Compnents/Appslider/Slider";
import Table from 'react-bootstrap/Table';
import "../Container.css"
import axios from "axios";
import { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
function Users() {
    const [allusers, setallusers] = useState([]);
    const [Series, setSeries] = useState();
    const [load, setload] = useState(false);
    const [users, setusers] = useState(false);
    useEffect(() => {
        axios.get(`http://localhost:5051/getusers`)
            .then((res) => {
                console.log(res.data)
                setallusers(res.data)
                if (res.data.length == 0) {
                    setusers(true)
                }
            })
            .catch((err) => console.log(err))
    }, [load]);

    const deleteonce = (id) => {
        axios.delete(`http://localhost:5051/deleteuser/${id}`)
            .then((res) => {
                console.log(res.data)
                setload(!load)
            })
            .catch((err) => console.log(err))
        console.log(id)
    }

    return (
        <>
            <div>
                <Header />
            </div>
            <div style={{ width: "100%", position: "relative" }}>
                <div className="Slider">
                    <Appslider />
                </div>
                <div className="main-section-user">
                    <Table striped bordered hover variant="">
                        <thead>
                            <tr>
                                {/* <th>#</th> */}
                                <th>Full Name</th>
                                <th>Email</th>
                                <th>Phone Number</th>
                            </tr>
                        </thead>
                        {users ? <div className="empty"><h3>User Collection are Empty</h3></div>
                            :
                            <tbody>
                                {allusers.map((data, i) => {
                                    return (
                                        <tr key={i} style={{ position: "relative", textAlign: "center", }}>
                                            {/* <td >{Series}</td> */}
                                            <td style={{ display: "flex", alignItems: "center", justifyContent: "center", textAlign: "center" }}>{data.fullname}</td>
                                            <td >{data.email}</td>
                                            <td >{data.phone}
                                                <Button className="edit-btn" variant="outline-warning">Edit</Button>
                                                <Button className="delete-btn" variant="outline-danger" onClick={() => deleteonce(data._id)}>Delete</Button>
                                            </td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        }
                    </Table>
                </div>
            </div>
        </>

    );
}

export default Users;