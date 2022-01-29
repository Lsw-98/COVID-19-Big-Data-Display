import axios from '@/utils/request'

const ncovData = {
  baseUrl: "http://api.tianapi.com",
  ncov: "/ncov/index",
}

const ncovCityData = {
  url: "http://vyps.api.storeapi.net/api/94/221"
}

const api = {
  /**
   * 疫情数据
   */
  getNcov(params) {
    return axios.get(ncovData.baseUrl + ncovData.ncov, {
      params
    })
  },
  /**
   * 省市疫情
   * @param {*} params 
   * @returns 
   */
  getCityNcov(params) {
    return axios.get(ncovCityData.url, {
      params
    })
  }
}

export default api