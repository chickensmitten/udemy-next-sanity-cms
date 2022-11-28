// import '../styles/globals.css'
import '@fortawesome/fontawesome-svg-core/styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'highlight.js/styles/darcula.css';
import "react-toggle/style.css"
import 'styles/index.scss';

import ThemeProvider from 'providers/ThemeProvider';

function MyApp({ Component, pageProps }) {
  return <ThemeProvider>
    <Component {...pageProps} />
  </ThemeProvider>
}

export default MyApp



