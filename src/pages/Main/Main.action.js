import axios from 'axios'
export const PRODUCT_LIST_REQUEST = "PRODUCT_LIST_REQUEST"
export const PRODUCT_LIST_SUCCESS = "PRODUCT_LIST_SUCCESS"
export const PRODUCT_LIST_FAILURE = "PRODUCT_LIST_FAILURE"

export function productListRequestAction() {
  return {
    type: PRODUCT_LIST_REQUEST
  }
}

export function productListSuccessAction(data) {
  return {
    type: PRODUCT_LIST_SUCCESS,
    data
  }
}

export function productListFailureAction(error) {
  return {
    type: PRODUCT_LIST_FAILURE,
    error: error
  }
}


export function getProductsAction() {
  return async (dispatch) => {
    dispatch(productListRequestAction())

    try {
      const result = await axios({
        method: 'GET',
        url: 'https://min-shop.herokuapp.com/rest/product'
      })
    
      dispatch(productListSuccessAction(result.data.data))

    } catch(error) {
      dispatch({
        type: PRODUCT_LIST_FAILURE,
        error: error
      })
    }
  }
}