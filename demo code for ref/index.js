import Layout from "../Layout/Layout";
import fetch from "isomorphic-unfetch";
import Prices from "../Components/Prices.js";
import Head from "next/head"
import { connect } from 'react-redux';
import { changeUserName } from '../store/action/action'
const Index = props => (
  <div>
        <Head>
                <title>homepage</title>
        </Head>
    <Layout>
<h1>welcome to our dummy application {props.currentUser}</h1>
      <p>check current Bitcoin rate</p>
      <Prices bpi={props.bpi} />
       
      <br />
      <br />
      <button onClick={()=>{props.changeUserName()}}>click</button>
    </Layout>
  </div>
);
// calls in  an bitcoin api which provides us bitcoin rate in usd,eur,gbp
Index.getInitialProps = async function() {
  const response = await fetch(
    "https://api.coindesk.com/v1/bpi/currentprice.json"
  );
  const data = await response.json();
  return {
    bpi: data.bpi
  };
};

function mapStateToProps(state) {
  return ({
      currentUser: state.store.userName
      // allUsers: state.root.users,
      // allMessages: state.root.messages,
      // recipientID: state.root.recipientID
  })
}
function mapDispatchToProp(dispatch){
  return({
      changeUserName: ()=>{dispatch(changeUserName())}
  })
}

// export default connect(mapStateToProp, {})(Index);
export default connect(mapStateToProps,mapDispatchToProp)(Index);
