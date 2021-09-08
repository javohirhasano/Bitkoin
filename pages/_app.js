import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.css'


import "@fortawesome/fontawesome-svg-core/styles.css"; // import Font Awesome CSS
import { config } from "@fortawesome/fontawesome-svg-core";
import { Provider } from 'react-redux';
import store from './redux.js/store';
config.autoAddCss = false; // Tell Font Awesome to skip adding the CSS automatically since it's being imported above

function MyApp({ Component, pageProps }) {
  return <Provider store={store}><div><Component {...pageProps} />





  </div></Provider>
}

export default MyApp
