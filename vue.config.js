// // 解决跨域问题
// module.exports = {
//   devServer: {
//     proxy: {  //配置跨域
//       "/api": {
//         target: "http://apis.juhe.cn",
//         changOrigin: true,  //允许跨域
//         pathRewrite: {
//           "^/api": ""  //请求的时候使用这个api就可以
//         }
//       }
//     }
//   }
// }