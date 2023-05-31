import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import '../styles/global.css'
import { Provider } from 'react-redux'
import { store, persistor } from '../../redux/store'
import { PersistGate } from 'redux-persist/integration/react'

const App = ({ Component, pageProps}) => {
 return (
  <Provider store={store}>
   <PersistGate loading={null} persistor={persistor}>
    <div className="app">
     <Navbar />
     <Component {...pageProps} />
     <Footer />
    </div>
   </PersistGate>
  </Provider>
 )
}
export default App