import Layout from "../Layout/Layout";
import { connect } from 'react-redux';
import Cart from "../Components/Cart";
import { AddToCart, RemoveFromCart } from "../store/action/action";
import Tab from "../Components/Tab"
// function ReturnValues(value){
//     console.log(value);
// }
class Alpha extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }
    AddtoCart = (value) => {
        this.props.AddToCart(value, this.props.cart)
    };
    removeFromCart = value => {
        this.props.RemoveFromCart(value, this.props.cart)
    };
    changeModel = () => {
        this.setState({ showModel: !this.state.showModel });
    };
    render() {
        return (
            <Layout>
                <div className="container">
                    <div className="row text-center">

                        <div className="col-md-8  text-left">
                        <h3>Hey, Review Your Order: </h3>
                            <Tab/>
                        </div>
                        <div className="col-md-4">
                            <Cart 
                            getValue={this.AddtoCart}
              
                            minusValue={this.removeFromCart}/>
                            
                        </div>
                    </div>
                    <br />
                </div>
            </Layout>
        );
    }
}

function mapStateToProps(state) {
    return ({
        cart: state.CartReducer.Cart
    })
}
function mapDispatchToProp(dispatch) {
    return ({
        AddToCart: (value, state) => { dispatch(AddToCart(value, state)) },
        RemoveFromCart: (value, state) => {
            dispatch(RemoveFromCart(value, state))
        }
    })
}

// export default connect(mapStateToProp, {})(Index);
export default connect(mapStateToProps, mapDispatchToProp)(Alpha);
