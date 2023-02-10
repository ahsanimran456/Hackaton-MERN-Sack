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



function Withimg
    () {
    const navigate = useNavigate()
    const [productname, setproductname] = useState("");
    const [category, setcategory] = useState("Category 1");
    const [price, setprice] = useState("");
    const [description, setdescription] = useState("");
    const [errormessage, seterrormessage] = useState("");
    const [image, setimage] = useState();
    // const addproduct = () => {
    //     let formData = new FormData();
    //     formData.append("myFile", fileInput.files[0]);
    //     axios.post(`http://localhost:5051/addproducts`, {
    //         method: 'post',
    //             url: "http://localhost:3000/upload",
    //             data: formData,
    //             headers: { 'Content-Type': 'multipart/form-data' }
    //     })
    //         .then((res) => {
    //             console.log(res.data.message)
    //             if (res.data.message == 'Product Added Successfully') {
    //                 toast.success("Product Add Successfully !")
    //                 setproductname("");
    //                 // setcategory("");
    //                 setprice("");
    //                 setdescription("")
    //                 return
    //             }
    //             else if (res.data.message == 'Product is Already token') {
    //                 seterrormessage("Product is Already token *")
    //                 toast.warn(`Product is Already token`)
    //                 return
    //             }
    //             else if (res.data.message == 'Required parameter is missing') {
    //                 seterrormessage("Required parameter in missing *")
    //                 toast.error(`Required parameter in missing`)
    //                 return
    //             }

    //         })
    //         .catch((err) => console.log("errr", err))
    // }


    const sendimg = () => {
        const picture = document.getElementById("picture")
        console.log(picture.files[0])
        const url = URL.createObjectURL(picture.files[0])
        setimage(url)
        console.log(url)
        let formData = new FormData();
        formData.append("myFile", picture.files[0]);
        formData.append("catigory", " burger hy tyt");
        console.log(formData.get("catigory"))

        axios({
            method: 'post',
            url: "http://localhost:5051/upload",
            data: formData,
            headers: { 'Content-Type': 'multipart/form-data' }
        })
            .then(res => {
                console.log(`upload Success` + res.data);
            })
            .catch(err => {
                console.log(err);
            })

    }
    return (
        <>
            
            <input type="file" id="picture" accept="image/*" />
            <button onClick={sendimg}>send photo </button>
            <img src={image} alt="" width={300} height={300} />
        </>
    );
}

export default Withimg
    ;