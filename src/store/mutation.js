import {
  RECEIVE_HOMEPAGE,
  RECEIVE_CATEGORY,
  RECEIVE_BRAND,
} from './mutation-type'

export default {
  [RECEIVE_HOMEPAGE](state,{homepage}) {
    state.homepage = homepage
  },
  [RECEIVE_CATEGORY](state,{category}) {
    state.category = category
  },
  [RECEIVE_BRAND] (state,{brand}) {
    state.brand = brand
  }
}
