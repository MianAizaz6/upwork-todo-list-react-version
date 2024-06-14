import * as actions from '../actioniCreators/actionsType';
import initialState from '../../assets/staticData';


const productReducer = (state = initialState, action) => {

  switch (action.type) {
    case actions.ADD_TO_CART:
      const addedItem = state.products.find((item) => item.id === action.payload);
      const newArrayOfItems = [...state.cartItems, addedItem];
      const updatedProduct = state.products.map((item )=>  {
        if(action.payload === item.id){
          return { ...item, cartAdded:true}
        }
        return item
      })
      console.log('==UpdateProduct', updatedProduct)
      return {
        ...state,
        cartItems:newArrayOfItems,
        products:updatedProduct
      }
      
      //Remove product from cart
    case actions.REMOVE_FROM_CART:
      const remaingItems = state.cartItems.filter((item) => item.id !== action.payload);

      const updatedList = state.products.map((item )=>  {
        if(action.payload === item.id){
          return { ...item, cartAdded:false}
        }
        return item
      })
      return {
        ...state,
        cartItems: remaingItems,
        products:updatedList
      }

      //add product to wishlist
      case actions.ADD_TO_WISHLIST:
        const findWishList = state.products.find((item) => item.id === action.payload);
        const updatedWishList = [...state.wishList, findWishList];
        console.log('==updatedwishlist', updatedWishList)
      const UpdatedItem = state.products.map((item)=> {
        if(action.payload === item.id){
          return {...item, liked:true}
        }
        return item
      })
        return {
          ...state,
          products:UpdatedItem,
          wishList:updatedWishList
        }

      //Remove product from wishlist
      case actions.REMOVE_FROM_WISHLIST:
        const removeWishlistItem = state.wishList.filter((item ) => item.id !== action.payload )
        return {
          ...state,
          wishList:removeWishlistItem
        }
    default: return state
  }
}

export default productReducer