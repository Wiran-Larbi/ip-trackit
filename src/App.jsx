import { useState, useEffect } from 'react'
import './App.css'

import { IpAddressForm } from './components/IpAddressForm'
import { BackgroundDesktop } from './components/Background'
import { Modal } from './components/Modal'
import { MapModal } from './components/MapModal'

function App() {
  const [address, setAddress] = useState("");
  

  

  return (
    <>
      <section>
        <BackgroundDesktop/>

        <IpAddressForm onSubmit={setAddress}/>

        
        {address && <> <Modal address={address}/>
      
                      <MapModal address={address}/>
    
        </>}
        
      </section>
    </>
  )
}

export default App
