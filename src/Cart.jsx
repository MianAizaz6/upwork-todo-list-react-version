import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import CartTile from './components/CartTile'

const Cart = ({ allCartItems, AllWishList }) => {
  console.log('===asdfasdfasf', allCartItems)
  return (
    <div className='App'>
      <div className='App-header w-[100vw] h-[100px] p-[10px_50px] flex'>
        <h2>Shoping Cart</h2>
        <Link to={'/'} > <h4 className='ml-[30px]'>Home</h4></Link>
        <Link to={'/cart'} > <h4 className='ml-[30px]'>Cart</h4></Link>
        <Link to={'/wishlist'} > <h4 className='ml-[30px]'>WishList</h4></Link>
        <h3 className='ml-auto'>Liked Items-{AllWishList.length}</h3>
        <h3 className='ml-auto'>Cart items-{allCartItems.length}</h3>
      </div>
      <div className=''>
        {allCartItems && allCartItems.length > 0 ? allCartItems.map((item) => {
          return <CartTile item={item} />
        }) : <div className='bg-[#f9f9dd] mb-[30px]  relative w-[80vw] m-auto h-[10vh] shadow-md mt-5 flex rounded-[8px] flex items-center justify-center'>
          <h3 className='text-[20px] font-medium'> No Items in Cart...</h3>
        </div>}

      </div>

     {
      allCartItems.length > 0 ?  <div className='bg-[#f9f9dd] mb-[30px]  relative w-[80vw] m-auto h-[10vh] shadow-md mt-5 flex rounded-[8px] flex items-center justify-center'>
      <h3 className='text-[20px] font-medium'> Total Items- {allCartItems.length}</h3>
      <button className='rounded-[50px] font-medium ml-[20px] bg-[#2a3a4a] text-white p-[5px_20px] mt-[10px] border-[1px]'>Checkout</button>
      
    </div> : ''
     }

      {/* Footer */}
      <div className='App-header w-[100vw] h-[6px] p-[10px_50px] flex '>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    AllWishList: state.wishList,
    allCartItems: state.cartItems
  }
}

export default connect(mapStateToProps)(Cart)