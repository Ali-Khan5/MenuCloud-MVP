import React from "react";
// reactstrap components
import SelectBox from "./smallComponents/SelectBox";
import CheckBox from "./smallComponents/CheckBox"
import { Button, FormGroup, Input, Modal } from "reactstrap";
import { throws } from "assert";

class ItemPopupModel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      Quantity: 1,
      Total: this.props.price
    };
  }
  CheckBeforeAddingtoCart = () => {
    console.log(this.props.minSelectedItems, 'my data', this.state.data.length)
    if (this.state.data.length < this.props.minSelectedItems) {
      console.log('Pick the required amount of items');
    }
    else {
      console.log('your good to goo :D ');
      this.props.AddTOcart({
        name: this.props.title,
        price: this.state.Total,
        quantity: this.state.Quantity,
        isDetailed:true,
        details:this.state.data
      })
      this.props.setScrollingLongContent(false);
    }
  }

  AddMoreQuantity = (action) => {
    let QuantityValue = this.state.Quantity;
    let totalamount = this.state.Total;

    if (action === "plus") {
      QuantityValue++;
      this.setState({ Quantity: QuantityValue, Total: (totalamount+=this.props.price) })
    }
    else if (action == 'minus') {
      if (QuantityValue - 1 > 0) {
        QuantityValue--;
        this.setState({ 
          Quantity: QuantityValue,
          Total:(totalamount-=this.props.price)
        })
      }
    }
  }
  AddMoreQuantityAddon = (action,price) => {
    //this.props.price == is the price of the whole item
    let totalamount=this.state.Total;

    if (action === "plus") {
      this.setState({  Total: totalamount + price })
    }
    else if (action == 'minus') {
        this.setState({
          Total: totalamount - price
        })
    }
  }

  getValue = val => {
    console.log(val);
    let initalVal = this.state.data;
    if (initalVal.length > 0) {
      //if our arrayof data contains the already selected item update it .... 
      let updateIndex = initalVal.findIndex(x => x.from === val.from);
      console.log(updateIndex);
      if (updateIndex !== -1) {
        initalVal.splice(updateIndex, 1, val);
        console.log(initalVal);
        // initalVal.push(val);
        this.setState({ data: initalVal });
      }
      else {
        initalVal.push(val);
        this.setState({ data: initalVal });
      }
    }
    else {
      initalVal.push(val);
      this.setState({ data: initalVal });
    }
  };
  GetAddon=(val)=>{
    console.log(val);
    let initalVal = this.state.data;

    if (initalVal.length > 0) {
      //if our arrayof data contains the already selected item update it .... 
      let updateIndex = initalVal.findIndex(x => x.from === val.from);
      console.log(updateIndex);

      if (updateIndex !== -1 && val.isSelected===false) {
        initalVal.splice(updateIndex, 1);
        console.log(initalVal);
        // initalVal.push(val);
        this.setState({ data: initalVal });
        this.AddMoreQuantityAddon('minus',val.price)
      }
      else if(updateIndex !== -1){
        initalVal.splice(updateIndex, 1, val);
        console.log(initalVal);
        // initalVal.push(val);
        this.setState({ data: initalVal });
        this.AddMoreQuantityAddon('plus',val.price)
      }
      else {
        initalVal.push(val);
        this.setState({ data: initalVal });
        this.AddMoreQuantityAddon('plus',val.price)
      }
    }
    else {
      initalVal.push(val);
      this.setState({ data: initalVal });
      this.AddMoreQuantityAddon('plus',val.price)
    }
  }
  render() {
    return (
      <>
        <Modal
          isOpen={this.props.scrollingLongContent}
          toggle={() => this.props.setScrollingLongContent(false)}
        >
          <div className="modal-header">
            <h4 className="modal-title" id="exampleModalLongTitle">
              {this.props.title}
            </h4>
          </div>
          <div className="modal-body">
            {this.props.Selections
              ? this.props.Selections.map((x, key) => {
                return (
                  <SelectBox
                    SelectOptionText={x.SelectOptionText}
                    options={x.options}
                    Name={x.SelectOptionText + "" + key}
                    giveValue={this.getValue}
                  />
                );
              })
              : null}
              {this.props.Addon ? 
              <div>
              <h4 className="text-center">Add ON</h4>
              {this.props.Addon.map((x,index)=>{
                return (
                  <CheckBox  giveValue={this.GetAddon} name={x.title+''+index}title={x.title} price={x.price} key={index}/>
                )
              })}
              </div>
              :null}
          
          </div>
          <hr />
          <div className="row text-center" style={{ margin: '5px' }}>
            <div className="col">
              <Button
                style={{ margin: "0px 5px" }}
                color="info"
                className="btn-just-icon"
                size="sm"
                onClick={e => {
                  e.preventDefault();
                  // this.props.getValue({ name: data.name })
                  this.AddMoreQuantity('plus')
                }}
              >
                {" "}
                + <i className="fas fa-plus"></i>{" "}
              </Button>
              <span style={{ fontSize: '1.5rem', fontWeight: '500' }}>
                {this.state.Quantity}
              </span>
              <Button
                style={{ margin: "0px 7px" }}
                color="info"
                className="btn-just-icon"
                size="sm"
                onClick={e => {
                  e.preventDefault();
                  // this.props.minusValue({ name: data.name })
                  this.AddMoreQuantity('minus')
                }}
              >
                {" "}
                -{" "}
              </Button>
            </div>
            <div className="col">
              {" "}
              <h3 style={{ fontWeight: '500', marginTop: '5px' }}>${this.state.Total}</h3>
            </div>
          </div>
          <div className="modal-footer">
            <div className="left-side">
              <Button
                className="btn-link"
                color="default"
                data-dismiss="modal"
                type="button"
                onClick={() => this.props.setScrollingLongContent(false)}
              >
                Never mind
              </Button>
            </div>
            <div className="divider" />
            <div className="right-side">
              <Button
                className="btn-link"
                color="success"
                type="button"
                onClick={() => {
                  this.CheckBeforeAddingtoCart();

                }}
              >
                Add
              </Button>
            </div>
          </div>
        </Modal>
      </>
    );
  }
}

export default  ItemPopupModel;
