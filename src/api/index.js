import ajax from './ajax'

/*
获取首页的信息
*/
export const reqHomePage = () => ajax('/homepage')
export const reqCateGory = () => ajax('/category')
export const reqBrand = () => ajax('/brand')
