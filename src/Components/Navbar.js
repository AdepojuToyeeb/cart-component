import React from "react";
import { useGlobalContext} from '../context'
import {HiShoppingCart} from "react-icons/hi"
const Navbar = () => {
    const {amount} = useGlobalContext()
  return (
    <nav>
      <div className='nav-center'>
        <h3>NAVBAR</h3>
        <div className='nav-container'>
          <div className="icon"><HiShoppingCart /></div>
          <div className='amount-container'>
            <p className='total-amount'>{amount}</p>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
