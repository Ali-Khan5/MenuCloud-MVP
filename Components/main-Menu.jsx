import MenuCard from "../Components/MenuCard-item";
import { connect } from 'react-redux';
const Menu = props => {
  return (
    <div className="mb-5">
      {props.Payload
        ? props.Payload.map((x, i) => {
          return (
            <div className="row">
              <h3 className=" col-md-12 mb-2" id={`${x.catagory}`}> {x.catagory}</h3>
           
             
              {x.items.map((y, index) => {

                return (
                  <MenuCard
                    name={y.itemName}
                    text={y.details}
                    callValue={props.getValue}
                    price={y.price}
                    ChangeModel={props.ChangeModel}
                    SelectionDetails={y.Selections ? y.Selections : null}
                    key={index}
                    minSelectedItems={y.minSelectedItems}
                    Addon={y.AddOn ? y.AddOn : null}
                  />
                );
              })}
            </div>
            )
        })
        : null}
    </div>
  );
};
// export default Menu;
function mapStateToProps(state) {
  return ({
    Payload: state.store.Payload
  })
}

export default connect(mapStateToProps)(Menu);