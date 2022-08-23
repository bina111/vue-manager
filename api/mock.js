import Mock from 'mockjs'
import homeApi from './mockServerData/home'
import userApi from './mockServerData/user'
import permissionApi from './mockServerData/permission'

Mock.mock('/home/getData',homeApi.getStaticData)
Mock.mock(/\/user\/add/,'post',userApi.addUser)
Mock.mock(/\/user\/edit/,'post',userApi.editUser)
Mock.mock(/\/user\/del/,'get',userApi.deleteUser)
Mock.mock(/\/user\/getUser/,'get',userApi.getUserList)
Mock.mock(/\/permission\/getMenu/,'post',permissionApi.getMenu)