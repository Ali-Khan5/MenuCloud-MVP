import Layout from "../Layout/Layout";
import MenuCatagory from "../Components/menu-catagory.jsx";
import Menu from "../Components/main-Menu";
import Cart from "../Components/Cart";
import { connect } from 'react-redux';
import Banner from "../Components/restaurantBanner"
import { AddToCart,RemoveFromCart } from "../store/action/action"
// function ReturnValues(value){
//     console.log(value);
// }
class Alpha extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cart: this.props.cart,
      showModel: false
    };
  }
  AddtoCart = (value)=> {
    this.props.AddToCart(value,this.props.cart)
  };
  removeFromCart = value => {
    this.props.RemoveFromCart(value,this.props.cart)
  };
  changeModel = () => {
    this.setState({ showModel: !this.state.showModel });
  };
  render() {
    return (
      <Layout>
        <Banner/>
        <div className="container">
          <div className="row text-center">
            {/* <div className="col-md-3">
              <MenuCatagory
                catagoriesItem={[
                  { item: "Appetizers" },
                  { item: "Special Dinners Offers" },
                  { item: "Dinners Combo - Best Deals" },
                  { item: "Souvlaki Dinners" },
                  { item: "Souvlaki Skewers" },
                  { item: "Souvlaki & Gyros on a Pita" },
                  { item: "Salads" },
                  { item: "Seafood" },
                  { item: "Gyro Dinners" },
                  { item: "Vegetarian" },
                  { item: "Desserts" },
                  { item: "Side Orders" },
                  { item: "Extras" },
                  { item: "Burgers" }
                ]}
              />
            </div> */}
            <div className="col-md-8 ">
             
              <Menu
                ChangeModel={this.changeModel}
                getValue={this.AddtoCart}
                
              />
              
            </div>
            <div className="col-md-4">
              <Cart
                getValue={this.AddtoCart}
                isMenu={true}
                minusValue={this.removeFromCart}
              />
            </div>
          </div>
          <br/>
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
function mapDispatchToProp(dispatch){
  return({
    AddToCart: (value,state)=>{dispatch(AddToCart(value,state))},
    RemoveFromCart:(value,state)=>{
      dispatch(RemoveFromCart(value,state))
    }
  })
}

// export default connect(mapStateToProp, {})(Index);
export default connect(mapStateToProps,mapDispatchToProp)(Alpha);
