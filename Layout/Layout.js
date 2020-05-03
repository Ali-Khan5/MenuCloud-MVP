import Navbar from "./navbar";
import Head from "next/head";
import Link from "next/link";


// const store=createStore(reducer)
const DynamicLinking = props => {
  return (

    <Link href={`/Post?title=${props.title}`}>
      {props.text}
    </Link>

  );
};
const Layout = props => (
  <div>
    <Head>
      <link
        
        href="https://use.fontawesome.com/releases/v5.06/css/all.css"
      />
      {/* <!--     Fonts and icons     --> */}
<link
  href="https://fonts.googleapis.com/css?family=Montserrat:400,700,200"
  rel="stylesheet"
/>
<link
  href="https://maxcdn.bootstrapcdn.com/font-awesome/latest/css/font-awesome.min.css"
  rel="stylesheet"
/>
      
    </Head>
    <Navbar />
    <div>
      {props.children}
    </div>
    {/* dynamic routing  */}
   
    {/* <div className="container">
      <h4>check out links below</h4>
      <ul>
        <li className="list-group-item">
          <DynamicLinking title={'woah this is the first title '} text={'hello world'} />
        </li>
        <li className="list-group-item">
          <DynamicLinking title={'Welcome to the second title '} text={'this is a second link'} />
        </li>
      </ul>
    </div> */}

  </div>
);
export default Layout;
