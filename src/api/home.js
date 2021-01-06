import { SERVICEDEFAULT as request } from "./request.js";
export const API = "/sjzx";
// 登录
export function addlogin(query) {
  return request({
    url: `${API}/api/locallogin`,
    method: "post",
    data: query
  });
}
//获取数据接入情况
export function getDataAccess() {
  return request({
    url: `${API}/datacent/getDataAccess`,
    method: "get"
  });
}
// 获取数据接入方式
export function getDataAccessMode() {
  return request({
    url: `${API}/datacent/getDataAccessMode`,
    method: "get"
  });
}
// 获取单位API接入情况
export function getUnitApiAccess(query) {
  return request({
    url: `${API}/datacent/getUnitApiAccess`,
    method: "get",
    params: query
  });
}
