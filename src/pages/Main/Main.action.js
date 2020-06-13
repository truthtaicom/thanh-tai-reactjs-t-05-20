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