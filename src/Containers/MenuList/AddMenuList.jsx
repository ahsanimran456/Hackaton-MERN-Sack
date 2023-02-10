import Appslider from "../../Compnents/Appslider/Slider";
import Header from "../../Compnents/Header/Header";
import "../Container.css"
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom"
import {
    faHouse,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { PlusOutlined } from '@ant-design/icons';
import Button from 'react-bootstrap/Button';
import {
    DatePicker,
    Form,
    Input,
    Select,
    Upload,
} from 'antd';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import axios from "axios";
const { RangePicker } = DatePicker;
const { TextArea } = Input;



function AddMenulist() {
    const navigate = useNavigate()
    const [productname, setproductname] = useState("");
    const [category, setcategory] = useState("Category 1");
    const [price, setprice] = useState("");
    const [description, setdescription] = useState("");
    const [errormessage, seterrormessage] = useState("");

    const addproduct = () => {
        axios.post(`http://localhost:5051/addproducts`, {
            ProductName: productname.trim(),
            Category: category,
            Price: price,
            Description: description,
        })
            .then((res) => {
                console.log(res.data.message)
                if (res.data.message == 'Product Added Successfully') {
                    toast.success("Product Add Successfully !")
                    setproductname("");
                    // setcategory("");
                    setprice("");
                    setdescription("")
                    return
                }
                else if (res.data.message == 'Product is Already token') {
                    seterrormessage("Product is Already token *")
                    toast.warn(`Product is Already token`)
                    return
                }
                else if (res.data.message == 'Required parameter is missing') {
                    seterrormessage("Required parameter in missing *")
                    toast.error(`Required parameter in missing`)
                    return
                }

            })
            .catch((err) => console.log("errr", err))
    }

    const gohome = () => {
        navigate("/")
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
                <div className="main-section-Addmenu">
                    <ToastContainer
                        position="bottom-right"
                        theme="colored"
                        autoClose={3000}

                    />
                    <div style={{ marginTop: 10 }}>
                        <span style={{ color: "#7E37D8", cursor: "pointer" }} onChange={gohome}>
                            <FontAwesomeIcon icon={faHouse} />
                        </span> /
                        <span style={{ color: "#7E37D8", cursor: "pointer" }} onChange={gohome}> Home  </span> /
                        <span style={{ color: "#7E37D8" }}> Menu  </span> /
                        <span style={{ color: "#6c757d" }} >  Add Product </span>
                    </div>

                    <div className="addproduct-form" >
                        <Form
                            labelCol={{
                                span: 4,
                            }}
                            wrapperCol={{
                                span: 14,
                            }}
                            layout="horizontal">
                            <Form.Item label="Menu Name">
                                <Input value={productname} onChange={(e) => setproductname(e.target.value)} />
                            </Form.Item>
                            <Form.Item label="Category">
                                <select value={category} onChange={(e) => setcategory(e.target.value)} className="customdrop" >
                                    <option>Burgers Category 1</option>
                                    <option >Pizza's Category 2</option>
                                    <option >Noodles Category 3</option>
                                    <option >Ice Cream Category 4</option>
                                    <option >Smoothies & Mocktails Category 5</option>
                                    <option >Dessert Category 6</option>
                                </select>
                            </Form.Item>
                            <Form.Item label="Price">
                                <Input value={price} type="number" onChange={(e) => setprice(e.target.value)} />
                            </Form.Item>
                            <Form.Item label="Description :">
                                <TextArea value={description} rows={4} onChange={(e) => setdescription(e.target.value)} />
                            </Form.Item>
                            <Form.Item label="Upload Image" valuePropName="fileList">
                                <Upload action="/upload.do" listType="picture-card">
                                    <div>
                                        <PlusOutlined />
                                        <div
                                            style={{
                                                marginTop: 8,
                                            }}
                                        >
                                            Upload Image
                                        </div>
                                    </div>
                                </Upload>
                            </Form.Item>
                            {/* {errormessage ?
                                <Form.Item >
                                    <div style={{ marginLeft: 50 }}>
                                        <span style={{ fontWeight: 600, color: "red" }}>
                                            {errormessage}
                                        </span>
                                    </div>
                                </Form.Item> : null} */}
                            <Form.Item >
                                <Button variant="outline-success" className="addproduct-btn" onClick={addproduct}>Add Product</Button>
                            </Form.Item>
                        </Form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default AddMenulist;