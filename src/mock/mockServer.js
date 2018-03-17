import Mock from 'mockjs'
import apiData from './categorys.json'
import homepage from './homepage.json'


Mock.mock('/homepage',{code:0,data:homepage})
Mock.mock('/category',{code:0,data:apiData.category})
Mock.mock('/brand',{code:0,data:apiData.brand})
