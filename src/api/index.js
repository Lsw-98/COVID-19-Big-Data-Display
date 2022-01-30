import axios from '@/utils/request'

const ncovData = {
  baseUrl: "http://api.tianapi.com",
  url: "/ncov/index",
}

const ncovCityData = {
  url: "api/news/wap/fymap2020_data.d.json",
}

const ncovAbroadData = {
  baseUrl: "http://api.tianapi.com",
  url: "/ncovabroad/index",
}

const api = {
  /**
   * 疫情数据
   */
  getNcov(params) {
    return axios.get(ncovData.baseUrl + ncovData.url, {
      params
    })
  },
  /**
   * 省市疫情
   */
  getCityNcov(params) {
    return axios.get(ncovCityData.url, {
      params
    })
  },
  /**
   * 海外疫情数据
   */
  getAbroadNcov(params) {
    return axios.get(ncovAbroadData.baseUrl + ncovAbroadData.url, {
      params
    })
  }
}

export default api