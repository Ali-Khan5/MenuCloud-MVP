import { throws } from "assert";
import {
    
    Label,
    FormGroup,

    Input,
  
  } from "reactstrap";
class CheckBox extends React.Component {
    constructor(props){
        super(props);
        this.state={
            isSelected:false
        }
    }
    handleChecked =()=> {
        this.props.giveValue({item:this.props.title,from:this.props.name,isSelected: !this.state.isSelected,price:this.props.price})
        this.setState({isSelected: !this.state.isSelected});
        
      }
     
  render() {
    return (
      <div>
        <FormGroup check inline>
          <Label check>
            <Input name={this.props.name} type="checkbox" onChange={this.handleChecked}></Input>
           {`${this.props.title} -  $${this.props.price} `}
            <span className="form-check-sign"></span>
          </Label>
        </FormGroup>
      </div>
    );
  }
}

export default CheckBox;
