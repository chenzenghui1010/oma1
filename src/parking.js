import request from './request'




export function askForSms(data) {
  return request({
    url:'/mv/user/askForSms',
    method: 'post',
    data:data
  })
}


export function phoneLogin(data){
  return  request({
    url:'/mv/user/phoneLogin',
    method:'post',
    params:data
  })
}
// 来访者预约查询被访者
export function reserveForInterviewee(data){
  return request({
    url:'/mv/visit/reserveForInterviewee',
    method:'post',
    data: data
  })
}


//来访人提交信息
export function reserve( data) {
   return  request({
     url:'/mv/visit/reserve',
     method:'post',
     data:data
   })
}




//被访者
export function visitInfoListForInterviewee(data){
  return request({
    url:'/mv/visit/visitInfoListForInterviewee',
    method:'post',
    data:data
  })
}
export function auditVisitReserveByInterviewee(data){
  return request({
    url:'/mv/visit/auditVisitReserveByInterviewee',
    method:'post',
    data:data
  })
}


//管理员
export function visitInfoListForManager(data){
  return request({
    url:'/mv/visit/visitInfoListForManager',
    method:'post',
    params:data
  })
}


export function auditVisitReserveByManager(data){
  return request({
    url:'/mv/visit/auditVisitReserveByManager',
    method:'post',
    data:data
  })
}


//详情
export function getVisitInfoById(data){
  return request({
    url:'/mv/visit/getVisitInfoById',
    method:'post',
    data:data
  })
}
//被访者邀信息

export function getMyInfo(data){
  return request({
    url:'/mv/user/getMyInfo',
    method:'post',
    data:data
  })
}



//被访者邀请来访者
export function  invite(data){
  return request({
    url:'/mv/invite/invite',
    method:'post',
    data:data
  })
}

//生成二维码
export function getVisitPassInfo(data){
  return request ({
  url: '/mv/visit/getVisitPassInfo',
    method:'post',
    data:data
  })
}






export function getParkSpaceNo(data) {

  const obj = Object.assign({}, data, {userId:'123456'})

  return request({
    url:'/getParkSpaceNo',
    method: 'post',
    params:obj
  })
}
