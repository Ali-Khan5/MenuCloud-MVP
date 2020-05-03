const MenuCatagory = props => {
  return (
    <div className="list-group">
      {props.catagoriesItem ?  
      props.catagoriesItem.map((x,i) => {
    return <a href="#" index={i} className="list-group-item list-group-item-action text-left">
        {x.item}
        </a>;
  })
   : none}
    <style jsx> {`
        
        .list-group-item .list-group-item-action:hover{
            border-left:2px solid orange !important;
        }
    `}
    </style>
    </div>
  );
};
function returnItem(itemlist) {
  itemlist.map(x => {
    return (<li className="list-group-item "><a href={`#${x.item}`}>{x.item}</a></li>)
  });
}
export default MenuCatagory;
