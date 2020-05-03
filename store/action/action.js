import ActionTypes from "../constant/constant";
// import createBrowserHistory from 'history/createBrowserHistory'

export function changeUserName() {
  return dispatch => {
    dispatch({ type: ActionTypes.USERNAME, payload: "Ali" });
  };
}

export function changeRecipientUID(recpUID) {
  return dispatch => {
    dispatch({ type: "ADDtoCART", payload: recpUID });
  };
}
   
export function addDetailedItem(itemDetails,currentstate) {
  return dispatch => {
    let currentvalue=currentstate;
    if(currentvalue){
      currentvalue.push(itemDetails);
    }
    else{
      currentvalue=[];
      currentvalue.push(itemDetails);
    }
    dispatch({ type: "ADDdetailedItem", payload: currentvalue });
  };
}

export function AddToCart(value, state) {
  return dispatch => {
    let currentstate = state;
    // console.log('cs',currentstate,'value',value)
    //make sure that if our initial state is empty dont use spread operators
    if (currentstate === [] ) {
      currentstate.push(value);
      return dispatch({ type: "ADDtoCART", payload: currentstate });
      //   this.setState({ cart: currentstate });
    } 
    else {
    let FindOutifItemExist = false;
      currentstate = currentstate.map(x => {
        if (!value.details && x.name == value.name) {
          x.quantity++;
           FindOutifItemExist = true;
        }
        return x;
      });
      // console.log('cart',this.state.cart,'currentstate',currentstate)
        // this.setState({ cart: currentstate });
       if(FindOutifItemExist ===false) {
         currentstate.push(value);
        }
        return dispatch({ type: "ADDtoCART", payload: currentstate });
    }
   
  };
}


export function RemoveFromCart(value, state) {
  return dispatch => {
    let currentstate = state;
   
    currentstate = currentstate.map(x => {
      if (x.name == value.name) {
        x.quantity--;
      }
      return x;
    });

    currentstate = currentstate.filter(x => {
      return x.quantity > 0;
    });
    console.log("cart", value, "oldstate", currentstate);
  
    dispatch({ type: "MINUSfromCART", payload: currentstate });
  };
}