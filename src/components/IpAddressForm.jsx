import { useState, useEffect } from 'react'
import arrow from '../images/icon-arrow.svg'

export function IpAddressForm(props) {
    const [ipAddress, setIpAddress] = useState("");

    
  const checkIpAddress =
  /^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$/gi
const checkDomain =
  /^[a-zA-Z0-9][a-zA-Z0-9-]{1,61}[a-zA-Z0-9](?:\.[a-zA-Z]{2,})+/

  useEffect(() => {
    try {
      const getInitialData = async () => {
        const res = await fetch(`https://geo.ipify.org/api/v2/country,city?apiKey=at_6Quodzm307DcxQRM23P4ZYdVuLF6g&ipAddress=${
          checkIpAddress.test(ipAddress) ? `${ipAddress}` : checkDomain.test(ipAddress) ? `domain=${ipAddress}` : ""
        }`);

        const data = await res.json();
        props.onSubmit(data);
      } 

      getInitialData();
      
      
    } catch (error) {
      console.trace(error);
    }
    
  }, [])


    const getEnteredAddress = async () => {
        const res = await fetch(`https://geo.ipify.org/api/v2/country,city?apiKey=at_6Quodzm307DcxQRM23P4ZYdVuLF6g&ipAddress=${
          checkIpAddress.test(ipAddress) ? `${ipAddress}` : checkDomain.test(ipAddress) ? `domain=${ipAddress}` : ""
        }`);
        const data = await res.json();
            console.log(data);
            props.onSubmit(data);
      }

    const handleSubmit = async (e) => {
        e.preventDefault();
        await getEnteredAddress();
    
      }

    return <>
        <article className="p-8">
          <h1 className="text-2xl lg:text-3xl text-center text-white font-medium mb-8 font-sf">IP Address Tracker</h1>
          <form 
          onSubmit={handleSubmit}
          className="flex justify-center max-w-xl mx-auto "
          action="">
            <input
            value={ipAddress}
            onChange={e => setIpAddress(e.target.value)}
            className="py-3 px-4 rounded-l-xl w-full"
            type="text" name='ipAddress' id='ipAddress' placeholder='Search for Ip Address'/>
            <button type="submit">
              <img
              className="bg-black py-5 px-4 hover:opacity-60 rounded-r-xl"
              src={arrow} alt="arrow image"/>
            </button>
          </form>
        </article>
    </>
}