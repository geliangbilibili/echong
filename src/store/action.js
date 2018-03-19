import {
  reqHomePage,
  reqCateGory,
  reqBrand
} from '../api/index'

import {
  RECEIVE_HOMEPAGE,
  RECEIVE_CATEGORY,
  RECEIVE_BRAND
} from './mutation-type'

export default {
  //异步获取首页
  async getHomePage ({commit},cb){
    const result = await reqHomePage()
    commit(RECEIVE_HOMEPAGE,{homepage: result.data})
    cb && cb()
  },

  //异步获取分类
  async getCateGory ({commit},cb){
    const result = await reqCateGory()
    commit(RECEIVE_CATEGORY,{category: result.data})
    cb&&cb();
  },

  //异步获取品牌
  async getBrand ({commit}){
    const result = await reqBrand()
    commit(RECEIVE_BRAND,{brand: result.data})
  }
}
