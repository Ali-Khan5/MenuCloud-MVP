const INITIAL_STATE = {
  Cart: [],
  testing:'hello'
  
}


export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case "ADDtoCART":
        return {
          ...state,
          Cart: action.payload
        };
        case "MINUSfromCART":
          return {
            ...state,
            Cart:action.payload
          }
          case "ADDdetailedItem":
            return{
              ...state,
              Cart:action.payload
            }
      default:
        return state;
    }
  };
  