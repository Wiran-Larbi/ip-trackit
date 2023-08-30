import { useState, useEffect } from 'react'
import './App.css'

import { IpAddressForm } from './components/IpAddressForm'
import { BackgroundDesktop } from './components/Background'
import Navbar from './components/NavBar/NavBar';
import { Modal } from './components/Modal'
import { MapModal } from './components/MapModal'
import Footer from './components/Footer/Footer';

function App() {
  const [address, setAddress] = useState("");




  return (
    <>
      <section>
        <BackgroundDesktop />
        <Navbar signedIn={true} />

        <IpAddressForm onSubmit={setAddress} />


        {address &&
          <>

             <Modal address={address} />
             <MapModal address={address} />

          </>
        }
        <Footer />

      </section>
    </>
  )
}

export default App
