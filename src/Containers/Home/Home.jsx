import Appslider from "../../Compnents/Appslider/Slider";
import Header from "../../Compnents/Header/Header";
import "./Home.css"
import "../Container.css"
import { Carousel } from 'antd';
const contentStyle: React.CSSProperties = {
    // height: '300px',
    // width: "100%",
    // color: '#fff',
    // lineHeight: '160px',
    // textAlign: 'center',
    // background: '#364d79',
};
function Home() {

    return (
        <>
            <div className="Header-app">
                <Header />
            </div>
            <div>
                <div className="Slider">
                    <Appslider />
                </div>
                <div className="main-section-home">
                    <div>
                        <h4 style={{fontWeight:600 ,fontStyle:"italic",color:"#7E37D8",}}>
                            Welcome Admin , 
                        </h4>
                    </div>
                    <div className="slider-header">
                        <Carousel className="slider-header" autoplay >
                            <div style={{ borderRadius: 7, width: "100%" }}>
                                <img src={require("../../Assests/images/food1.jpg")} alt="" style={{ borderRadius: 7, width: "100%", height: "300px" }} />
                            </div>
                            <div style={{ borderRadius: 7, width: "100%" }}>
                                <img src={require("../../Assests/images/food2.jpg")} alt="" style={{ borderRadius: 7, width: "100%", height: "300px" }} />
                            </div>
                            <div style={{ borderRadius: 7, width: "100%" }}>
                                <img src={require("../../Assests/images/food3.jpg")} alt="" style={{ borderRadius: 7, width: "100%", height: "300px" }} />
                            </div>
                            <div style={{ borderRadius: 7, width: "100%" }}>
                                <img src={require("../../Assests/images/food4.jpg")} alt="" style={{ borderRadius: 7, width: "100%", height: "300px" }} />
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </>

    );
}

export default Home;