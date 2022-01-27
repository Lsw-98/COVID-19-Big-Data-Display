import axios from '@/utils/request'

const base = {
  baseUrl: "http://api.tianapi.com",
  ncov: "/ncov/index",
}

const api = {
  /**
   * 疫情数据
   */
  getNcov(params) {
    return axios.get(base.baseUrl + base.ncov, {
      params
    })
  }
}

export default api