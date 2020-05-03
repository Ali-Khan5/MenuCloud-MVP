import {
  Button,
  Card,
  CardBody,
  CardTitle,
  CardText
} from "reactstrap";
import { connect } from 'react-redux';
import Link from "next/link";
class Cart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: ''
    };
  }
  renderItemOnMenu = data => {
    return (
      <div className="row text-left">
        <div className="col-md-12">
          <CardText>
            <span style={{ fontWeight: "600" }}>{data.quantity} </span>x
            <span style={{ fontWeight: "500" }}> {data.name} </span>
            {data.isDetailed? data.details.map((y,key)=>{
            return <p>+ {y.item}</p>
            })
            
            
            :null}
          </CardText>
        </div>
        <div className="col-md-6">
          <Button
            style={{
              margin: "0px 5px",
              border: "0",
              backgroundColor: "#f44336"
            }}
            className="btn-just-icon"
            size="sm"
            onClick={e => {
              e.preventDefault();
              this.props.getValue({ name: data.name });
            }}
          >
            {" "}
            +{" "}
          </Button>
          <Button
            style={{
              margin: "0px 5px",
              border: "0px",
              backgroundColor: "#f44336"
            }}
            color="#f44336"
            className="btn-just-icon"
            size="sm"
            onClick={e => {
              e.preventDefault();
              this.props.minusValue({ name: data.name });
            }}
          >
            {" "}
            -{" "}
          </Button>
        </div>
        <div className="col-md-6">
          <CardText>
            <span style={{ fontWeight: "600" }}> $ {data.price} </span>
          </CardText>
        </div>
      </div>
    );
  };
  giveTotal = data => {
    let total = 0;
    data.map(x => {
      total += x.price * x.quantity;
    });
    return total;
  };
 
  render() {
    return (
      <>
       <Link href="/checkout">
         <Button  size="lg" style={{margin:'20px 0px' }}color="info" type="button" className="text-left" block="true">
        Checkout ( {this.props.cart.length} ITEMS )
      </Button>
      </Link>
        <Card>
          <CardBody>
            <CardTitle tag="h4">Your Order</CardTitle>

            {this.props.cart
              ? this.props.cart.map(x => {
                  return this.renderItemOnMenu(x);
                })
              : null}
            <hr />
            <h5 className="text-left">
              {" "}
              <span style={{ fontWeight: "500" }}>Total:</span>{" "}
              {this.props.cart ? (
                <span style={{ fontWeight: "700" }}>
                  {this.giveTotal(this.props.cart)}{" "}
                </span>
              ) : (
                0
              )}
            </h5>
          </CardBody>
        </Card>
      </>
    );
  }
}
function mapStateToProps(state) {
  return ({
      cart: state.CartReducer.Cart
      
  })
}
export default connect(mapStateToProps) (Cart);
