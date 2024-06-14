import * as actions from './actionsType';

export const addBug = (bug) => {
  return {
    type:actions.ADD_BUG,
    payload:bug
  }
}

export const deleteBug = (id) => {
  return {
    type:actions.DELETE_BUG,
    payload:id
  }
}

export const resolveBug = (id) => {
 return{
  type:actions.RESOLVE_BUG,
  payload:id
 }

}

export const addToCart = (product) => {
  return {
    type:actions.ADD_TO_CART,
    payload:product
  }
}

export const removeCart = (id) => {
  return {
    type:actions.REMOVE_FROM_CART,
    payload:id
  }
}

export const addToWishList = (id) => {
  return {
    type:actions.ADD_TO_WISHLIST,
    payload:id, 
  }
}

export const removeWishList = (id) => {
  return {
    type:actions.REMOVE_FROM_WISHLIST,
    payload:id
  }
}