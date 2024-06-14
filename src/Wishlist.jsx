import React from 'react'
import { connect } from 'react-redux';
import { Link} from 'react-router-dom';
import './App.css';
import WishlistTIle from './components/WishlistTIle';
import { addToCart } from './Store/actioniCreators/actionCreators';



const Home = ({ AllWishList,allCartItems }) => {

  // useEffect(() => {
  // }, [AllWishList, allCartItems]);
  console.log('===allWishListItem', AllWishList)

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
      <div className='bg-[#f5f5f5] h-[100vh] w-[100vw] grid grid-cols-3 md:grid-cols-3 justify-around p-[50px_50px] flex-wrap  '>
        {AllWishList && AllWishList.length > 0 && AllWishList.map((product) => {
          return <WishlistTIle product={product} key={product.id}/>
        })}
      </div>
        {/* Footer */}
      <div className='App-header w-[100vw] h-[6px] p-[10px_50px] flex'>
      </div>
    </div>
  )
}

function mapStateToProps(state) {
  return {
    AllWishList: state.wishList,
    allCartItems : state.cartItems
  }
}
const mapDispatchToProps = (dispatch) => {
  return{
    AddProductToCart: (id) => dispatch(addToCart(id)),
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Home)
