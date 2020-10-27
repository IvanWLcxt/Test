import request from 'umi-request';
import Cookies from 'js-cookie'
// import Cookies from 'js-cookie'
// const userToken = 'mobile-AdminToken'
// export function getToken () {
//   return Cookies.get(userToken)
// }
const userToken = 'mobile-AdminToken'
export function getToken () {
  return Cookies.get(userToken);
}
export async function getClient(params) {

  const token = getToken()
  return request('http://47.112.5.225/ferry_cabinet_api/tms/balance/search', {
    method: 'POST',
    data: params,
    header:{'Authorization':`Bearer ${token}`},}
    // headers: {'Authorization':'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VySWQiOiI2MiIsImNsaWVudElkIjoiNDYxIiwidXNlciI6IntcImFjY291bnRcIjpcInNoZW50dW8tdGVzdFwiLFwiY2xpZW50SWRcIjo0NjEsXCJjcmVhdGVUaW1lXCI6MTU3MTczMDI0MjAwMCxcImNyZWF0ZVVzZXJcIjo2MSxcImRpc3BhdGNoUGhvbmVcIjpcInZiZzdHeXpkK01qN0RnUk5yNlhEcEE9PVwiLFwiaWRcIjo2MixcImlzQWRtaW5cIjoxLFwiaXNWYWxpZFwiOjEsXCJsb2dpbldheVwiOlwiMFwiLFwibmFtZVwiOlwi56We6am856CU5Y-R6YOoXCIsXCJ1cGRhdGVUaW1lXCI6MTU4OTg5Mzk2MTAwMCxcInVzZXJDZWxscGhvbmVcIjpcInZiZzdHeXpkK01qN0RnUk5yNlhEcEE9PVwiLFwidXNlckVtYWlsXCI6XCJLNWpOYTlkL0ROb1Z4SWdVdDNFU1NnRUZKbDFIZFE3eHA5RGxPYXhwYnNFPVwifSIsImlzcyI6ImlhbiIsImlhdCI6MTYwMzc2MTcwOX0.LA0IFDb_OxIRclMUWUH9lcDajkAOStKhC_8eFGdP5nI'}}
    )
}
// 示例
// import request from 'umi-request';
//
// request('/api/v1/xxx', {
//   method: 'get',
//   params: { id: 1 },
// })
//   .then(function(response) {
//     console.log(response);
//   })
//   .catch(function(error) {
//     console.log(error);
//   });
//
// request('/api/v1/user', {
//   method: 'post',
//   data: {
//     name: 'Mike',
//   },
// })
//   .then(function(response) {
//     console.log(response);
//   })
//   .catch(function(error) {
//     console.log(error);
//   });
