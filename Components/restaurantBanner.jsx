//  import BannerPic from"../assets/img/food-banner.jpg";
let img = "https://res.cloudinary.com/dcw1i97ph/image/upload/ar_16:9,c_fill,e_sharpen,g_auto,h_847,w_1280/v1588466299/burgers-3203841_1280_imecfv.jpg";
let imgprops = {
    backgroundImage: `url(${img})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'right',
    position: 'relative',
    height: '33vh',
    backgroundSize:'cover'
}
import {
    Card,
    CardBody,

} from "reactstrap";

// core components


const Banner = () => {
    return (
        <div style={imgprops}  >
            <Card style={{
                minWidth: '30vh',
                maxWidth: '40vh',
                position: 'absolute',
                width: '100%',
                margin: '5% 5px 10px 20px'
            }} >
                <CardBody >
                  <h3 style={{margin:'0',fontWeight:'400'}}>Souvlaki Express</h3>
                  <p style={{fontWeight:'400'}}>$.Greek-Mediterranean-Home-Made Salad</p>
                  <p style={{fontWeight:'400'}}>25-35 Min. 4.3 (64) . $0.99 Delivery Fee</p>
                  <p style={{margin:'0',fontWeight:'400'}}>82 Ontario St, Toronto, ON  M5A 1P8</p>
                </CardBody>
            </Card>

        </div>
    )
}

export default Banner;