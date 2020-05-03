import { FormGroup, Input } from "reactstrap";
class SelectBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedData: "Please Select"
    };
  }
  changeValueofSelect = e => {
    this.setState({ selectedData: e.target.value }); 
    this.props.giveValue({item:e.target.value,from:this.props.Name})
    // {item:x.itemName,from:this.props.Name}}
  };

  render() {
    return (
      <FormGroup>
        <label htmlFor={this.props.Name}>{this.props.SelectOptionText}</label>
        <Input
          id={this.props.Name}
          type="select"
          onChange={this.changeValueofSelect}
          value={this.state.selectedData}
        >
          {this.props.options.map((x, i) => {
            return <option value={x.itemName}>{x.itemName}</option>;
          })}
        </Input>
      </FormGroup>
    );
  }
}
export default SelectBox;
