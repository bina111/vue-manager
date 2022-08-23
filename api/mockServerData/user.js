import Mock from 'mockjs'

let userList = [];
let count = 600;

function paramsObj(url){
    const temp = url.split('?');
    let params = {};
    if(temp[1]){
        const paramsArr = temp[1].split('&');
        paramsArr.forEach(item=>{
            const p = item.split('=');
            params[p[0]] = decodeURIComponent(p[1]);
        });
    }
    return params;
}

for(let i=0;i<count;i++){
    userList.push(
        Mock.mock({
            id:Mock.Random.guid(),
            name:Mock.Random.cname(),
            addr:Mock.mock('@county(true)'),
            'age|18-60':1,
            birth:Mock.Random.date(),
            sex:Mock.Random.integer(0,1)
        })
    )
}

export default{
    addUser:config=>{
        const {name,age,sex,birth,addr} = JSON.parse(config.body)
        userList.unshift(
            {
                id:Mock.Random.guid(),
                name,
                age,
                sex,
                birth,
                addr
            }
        )
        return {
            code:200,
            data:{
                message:'添加成功'
            }
        }
    },

    editUser:config=>{
        let {id,name,age,sex,birth,addr} = JSON.parse(config.body)
        sex = parseInt(sex);
        userList.some(item=>{
            if(item.id === id){
                item.name = name;
                item.age = age;
                item.sex = sex;
                item.birth = birth;
                item.addr = addr;
                return true;
            }
        })
        return {
            code:200,
            data:{
                message:'编辑成功'
            }
        }
    },

    deleteUser:config=>{
        const {id} = paramsObj(config.url)
        userList = userList.filter(u=>u.id!==id)
        return {
            code:200,
            data:{
                message: '删除成功'
            }
        }
    },

    getUserList:config=>{
        const {name,page = 1,limit = 20} = paramsObj(config.url);
        const mockList = userList.filter(item=>{
            if(name && item.name.indexOf(name) === -1)  return false;
            return true;
        });
        const pageList = mockList.filter((item,index)=>{
            return index < page * limit && index >= (page-1)*limit
        });
        return {
            code: 200,
            count:mockList.length,
            userList:pageList
        }
    }
}