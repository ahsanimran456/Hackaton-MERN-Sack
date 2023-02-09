import Appslider from "../../Compnents/Appslider/Slider";
import Header from "../../Compnents/Header/Header";
import "../Container.css"
import { useNavigate } from "react-router-dom"
import {
    faHouse,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import Button from 'react-bootstrap/Button';
import {
    SettingOutlined,
    ExclamationCircleFilled,
    EditOutlined,
    DeleteOutlined,
    EllipsisOutlined,
    CheckCircleOutlined,
    CloseCircleOutlined
} from '@ant-design/icons';
import { useState, useEffect } from 'react';
import { Avatar, Input, } from 'antd';
import Card from 'react-bootstrap/Card';
import { Button, Modal, Space } from 'antd';
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';

const { Meta } = Card;


const { confirm } = Modal;


function AllMenulist() {
    const [deleteproducd, setdeleteproduct] = useState()
    const [datahandler, setdatahandler] = useState(false);
    const [products, setproducts] = useState();
    const [ProductTitle, setProductTitle] = useState();
    const [ProductDescription, setProductDescription] = useState();
    const [ProductCategory, setProductCategory] = useState();
    const [ProductPrice, setProductPrice] = useState();
    const [edit, setedit] = useState(false);
    const [EditingProduct, setEditingProduct] = useState({});
    const navigate = useNavigate()
    const gohome = () => {
        navigate("/")
    }

    useEffect(() => {
        axios.get(`https://drab-erin-bighorn-sheep-ring.cyclic.app/getproducts`)
            .then((res) => {
                console.log(res.data)
                if (res.data.length == 0) {
                    setproducts("")
                }
                else if (res.data.length >= 0)
                    setproducts(res.data)
            })
            .catch((err) => console.log(err))
    }, [datahandler]);

    const showPromiseConfirm = (id) => {
        confirm({
            title: 'Do you want to delete these item?',
            icon: <ExclamationCircleFilled />,
            content: 'When clicked the OK button,item will be deleted',
            onOk() {
                return new Promise((resolve, reject) => {
                    console.log(id)
                    DeleteProduct(id)
                    setTimeout(Math.random() > 0.5 ? resolve : reject, 1000);
                }).catch(() => { });
            },
            onCancel() { },
        });
    };


    const DeleteProduct = (id) => {
        axios.delete(`http://localhost:5051/removeproduct/${id}`)
            .then((res) => {
                console.log(res.data)
                toast.success("Product Delete Successfully !")
                setdatahandler(!datahandler)
            })
            .catch((err) => console.log(err))
        console.log("iddd deletepro", id)
    }

    const Changeitems = (product) => {
        setedit(true)
        setEditingProduct(product)
        setProductTitle(product.ProductName)
        setProductDescription(product.Description)
        setProductPrice(product.Price)
        setProductCategory(product.Category)
    }

    const Cancel = () => {
        setedit(false)
    }
    const editProduct = (productID) => {
        axios.put(`http://localhost:5051/product/${productID}`, {
            ProductName: ProductTitle,
            Category: ProductCategory,
            Price: ProductPrice,
            Description: ProductDescription,
        })
            .then((res) => {
                toast.success("Product Edit Successfully !")
                setdatahandler(!datahandler)
                setedit(false)
            })
            .catch((err) => console.log("errr", err))
    }
    return (
        <>
            <div className="Header-app">
                <Header />
            </div>
            <div>
                <div className="Slider">
                    <Appslider />
                </div>
                <div className="main-section-allmenu">
                    <ToastContainer
                        position="bottom-right"
                        theme="colored"
                        autoClose={3000}
                    />
                    <div style={{ marginTop: 10 }}>
                        <span style={{ color: "#7E37D8", cursor: "pointer" }} onClick={gohome}>
                            <FontAwesomeIcon icon={faHouse} />
                        </span> /
                        <span style={{ color: "#7E37D8", cursor: "pointer" }} onClick={gohome}> Home  </span> /
                        <span style={{ color: "#7E37D8" }}> Menu  </span> /
                        <span style={{ color: "#6c757d" }} >  All Menu List </span>
                    </div>
                    <div className="allproducts">
                        {products ? products.map((items, i) => {
                            return (
                                <div className="allproductscards" style={{ marginTop: 15 }} key={i}>
                                    <Card style={{ width: '18rem' }}>
                                        <Card.Img variant="top" src={require("../../Assests/images/burgers.jpg")} />
                                        <Card.Body>
                                            <Card.Title>{(edit && items._id === EditingProduct._id) ? <input className="editinput1" type="text" value={ProductTitle} onChange={(e) => setProductTitle(e.target.value)} /> : items.ProductName}</Card.Title>
                                            <Card.Text className="card-discription">
                                                {(edit && items._id === EditingProduct._id) ?
                                                    <input className="editinput1" type='textarea' value={ProductDescription} onChange={(e) => setProductDescription(e.target.value)} />
                                                    :
                                                    <span style={{ fontWeight: 600, fontStyle: "italic" }}>
                                                        {items.Description}
                                                    </span>
                                                }
                                                {(edit && items._id === EditingProduct._id) ? <input type="number" value={ProductPrice} className="editinput2" />
                                                    :
                                                    <div>
                                                        <span style={{ fontWeight: 600 }}>
                                                            {items.Price} Rs
                                                        </span>
                                                    </div>
                                                }


                                            </Card.Text>
                                            <Card.Text>
                                                {edit && items._id === EditingProduct._id ?
                                                    <CheckCircleOutlined onClick={() => editProduct(items._id)} style={{ fontSize: 25, }} />
                                                    :
                                                    <EditOutlined key="edit" style={{ fontSize: 25 }} onClick={() => Changeitems(items)} />}
                                                {edit && items._id === EditingProduct._id ?
                                                    <>
                                                        <CloseCircleOutlined onClick={Cancel} style={{ fontSize: 25, margin: "0 10px" }} />
                                                        <select value={ProductCategory} onChange={(e) => setProductCategory(e.target.value)} className="customdrop" >
                                                            <option>Burgers Category 1</option>
                                                            <option >Pizza's Category 2</option>
                                                            <option >Noodles Category 3</option>
                                                            <option >Ice Cream Category 4</option>
                                                            <option >Smoothies & Mocktails Category 5</option>
                                                            <option >Dessert Category 6</option>
                                                        </select>
                                                    </>
                                                    :
                                                    <DeleteOutlined key="delete" style={{ fontSize: 25, margin: "0 10px" }} onClick={() => showPromiseConfirm(items._id)} />}
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </div>
                            )
                        }) :
                            <div>
                                <h1 style={{
                                    color: "#7E37D8",
                                    boxShadow: " 0 2px 5px 0 rgb(0 0 0 / 16%), 0 2px 10px 0 rgb(0 0 0 / 12%)",
                                    backgroundColor: "transparent",
                                    borderRadius: 7,
                                    padding: "7px 8px"
                                }}>
                                    Please Add Your Products
                                </h1>
                            </div>}


                    </div>
                </div>
            </div>
        </>
    );
}

export default AllMenulist;