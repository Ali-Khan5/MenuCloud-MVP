import {
  Button,
  Card,
  CardBody,
  CardImg,
  CardTitle,
  CardText
} from "reactstrap";
import ItemPopupModel from "./Model";
const MenuCard = props => {
  const [scrollingLongContent, setScrollingLongContent] = React.useState(false);
  return (
    <div className="col-md-6">
      <div style={{ width: "100%" }}>
        {/* <CardImg alt="..." data-src="holder.js/100px180/" top></CardImg> */}
     
          <div className="row text-left">
            <div className="col-md-12" style={{padding:'6px 0px'}}>
              <h4  style={{margin:'0',fontWeight:'530'}}>{props.name}</h4>
              <p>{props.text}</p>
            </div>
            <div className="col-md-6 "> 
              <p style={{fontWeight:'600',margin:'0'}}>
                ${props.price}
              </p>
              </div>
              <div className="col-md-6 "> 
              <Button
                style={{backgroundColor:'#f44336',border:'0px  '}}
                href="#"
                size="sm"
                onClick={e => {
                  e.preventDefault();
                  // props.callValue({name:props.name,price:props.price,quantity:1})
                  // props.ChangeModel();
                  props.SelectionDetails
                  ? setScrollingLongContent(true)
                  : props.callValue({
                    name: props.name,
                    price: props.price,
                    quantity: 1
                  });
                  // setScrollingLongContent(true)
                }}
                >
                Add +
              </Button>
            
                </div>
          </div>
        </div>
      
      {props.SelectionDetails
        ? <ItemPopupModel
          title={props.name}
          price={props.price}
          Selections={props.SelectionDetails}
          scrollingLongContent={scrollingLongContent}
          setScrollingLongContent={setScrollingLongContent}
          minSelectedItems={props.minSelectedItems}
          AddTOcart={props.callValue}
          Addon={props.Addon}

        /> : null}

    </div>
  );
};

export default MenuCard;
