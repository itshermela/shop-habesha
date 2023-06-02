import '../styles/global.css'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import { Provider } from 'react-redux'
import { store, persistor } from '../../redux/store'
import { PersistGate } from 'redux-persist/integration/react'
import { StateContext } from '../../context/StateContext'

const App = ({ Component, pageProps}) => {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <StateContext>
                    <div className="app">
                        <Navbar />
                        <Component {...pageProps} />
                        <Footer />
                    </div>
                </StateContext>
            </PersistGate>
        </Provider>
    )
}

export default App