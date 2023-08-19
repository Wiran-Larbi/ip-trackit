import { useState } from 'react'
// import './App.css'
import ItemsContainer from './Item/ItemsContainer'
import SocialIcons from './Item/SocialIcons'
import { Icons } from './Menu.js';

function Footer() {

  return (
    <>
      <div className="absolute w-full h-full">
        <footer className="bg-[#1D5D9B] text-white relative top-full">
          <div className="md:flex md:justify-between md:items-center sm:px-12 px-4 py-8 bg-[#1B6B93]">
            <h1 className="lg:text-4xl text-3xl md:mb-0 mb-6 lg:leading-normal  font-sf font-semibold md:w-2/5">
              <span className="text-cyan-500 ">
                Get notify
              </span>
              &nbsp;
              About our latest technology

            </h1>
            <div>
              <input type="text" placeholder="Enter your email 📧" className="text-gray-800 sm:w-72 w-full sm:mr-5 mr-1 lg:mb-0 mb-4 py-2.5 rounded px-2 focus:outline-none "/>
              <button className="bg-cyan-500 hover:bg-teal-500 duration-300 px-5 py-2.5 font-sf
           rounded-md text-white md:w-auto w-full"
          >
            Subscribe
          </button>
            </div>
          </div>

          <ItemsContainer />
          <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10
      text-center pt-2 text-gray-200 text-sm pb-8"
      >
        <span>© 2023 <span className="font-sf font-semibold text-cyan-500">IpTrackit</span>. All rights reserved.</span>
        <span>Terms · Privacy Policy</span>
        <SocialIcons Icons={Icons} />
      </div>
        </footer>
      </div>
    </>
  )
}

export default Footer
