import request from './request'




export function askForSms(data) {

  return request({
    url:'/mv/user/askForSms',
    method: 'post',
    params:data
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




export function visitInfoListForInterviewee(data){
  return request({
    url:'/mv/visit/visitInfoListForInterviewee',
    method:'post',
    params:data
  })
}




export function getRestSpaceCount(data) {

  const obj = Object.assign({}, data, {userId:'123456'})

  return request({
    url:'/getRestSpaceCount',
    method: 'post',
    params:obj
  })
}



export function bookParkSpace(data) {

  const obj = Object.assign({}, data, {userId:'123456'})

  return request({
    url:'/bookParkSpace',
    method: 'post',
    params:obj
  })
}

export function getBookedOrders(data) {

  const obj = Object.assign({}, data, {userId:'123456'})

  return request({
    url:'/getBookedOrders',
    method: 'post',
    params:obj
  })
}

export function delayParkSpaceBook(data) {

  const obj = Object.assign({}, data, {userId:'123456'})

  return request({
    url:'/delayParkSpaceBook',
    method: 'post',
    params:obj
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

export function getSpaceUnitOfRegion(data) {

  return request({
    url:'/getSpaceUnitOfRegion',
    method: 'post',
    params:data
  })
}
