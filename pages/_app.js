// styles
import "../assets/css/bootstrap.min.css";
import "../assets/css/paper-kit.css";
// import "assets/css/paper-kit.min.css";
// import "assets/css/paper-kit.css.map";
import "../assets/demo/demo.css";
import "../assets/demo/react-demo.css";
import { Provider }from "react-redux";
import App, { Container } from "next/app";

import {makeStore} from "../store";
import withRedux from "next-redux-wrapper";
// export default function MyApp({ Component, pageProps }) {
//   // return <Component {...pageProps} />
  
//   return (
    
//       <Provider  store={store}>
//         <Component {...pageProps} />
//       </Provider>
//   );
// }

// export default withRedux(initStore, { debug: true })(
//   class MyApp extends App {
//     static async getInitialProps({ Component, ctx }) {
//       return {
//         pageProps: {
//           ...(Component.getInitialProps
//             ? await Component.getInitialProps(ctx)
//             : {})
//         }
//       };
//     }

//     render() {
//       const { Component, pageProps, store } = this.props;
//       return (
//         <Container>
//           <Provider store={store}>
//             <Component {...pageProps} />
//           </Provider>
//         </Container>
//       );
//     }
//   }
// );

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    const pageProps = Component.getInitialProps
      ? await Component.getInitialProps(ctx)
      : {};

    return { pageProps };
  }

  render() {
    const { Component, pageProps, store } = this.props;

    return (
    
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
      
    );
  }
}

export default withRedux(makeStore)(MyApp);