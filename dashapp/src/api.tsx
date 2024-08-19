import axios, { AxiosRequestConfig } from "axios";
import { message } from "antd";
import React from "react";

const BASE_URL = "/api";

export interface RestResponse<T> {
  code: number;
  msg: string;
  data: T;
}

// 创建axios实例
const ajax = axios.create({
  baseURL: BASE_URL,
  timeout: 10000, // 请求超时时间 10s
});

// request拦截器
ajax.interceptors.request.use(
  (config) => {
    config.headers["Accept"] = "*/*";
    config.headers["X-Requested-With"] = "XMLHttpRequest";
    return config;
  },
  (error) => {
    message.error("请求后端接口异常");
    Promise.reject(error);
  }
);

// response 拦截器
ajax.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error?.response) {
      const value = error.response.data;
      if (typeof value === "string" || value instanceof String) {
        //字符型错误.
        message.error(<span>错误. {error?.response.data}</span>);
      } else {
        //json对象.
        message.error(
          <span>
            错误. {value?.msg} {JSON.stringify(value?.data)}
          </span>
        );
      }
      return Promise.reject(error);
    }
    message.error("未知错误");
    return Promise.reject(error);
  }
);

//列数据请求
export type ListDataReq<T> = {
  filter: T;
  //是否模糊匹配. 对name等字段包含匹配
  fuzzyMatch: boolean;
  pageNo: number;
  pageSize: number;
};

//分页结果
export type PageResult<T> = {
  total: number;
  records: T[];
};

export async function getAction<T>(url: string, params?: any) {
  return ajax.get<RestResponse<T>>(url, {
    params: params,
  } as AxiosRequestConfig);
}

export async function postAction<T>(url: string, params?: any) {
  return ajax.post<RestResponse<T>>(url, {
    params: params,
  } as AxiosRequestConfig);
}

export async function putAction<T>(url: string, params?: any) {
  return ajax.put<RestResponse<T>>(url, {
    params: params,
  } as AxiosRequestConfig);
}

export async function deleteAction<T>(url: string, params?: any) {
  return ajax.delete<RestResponse<T>>(url, {
    params: params,
  } as AxiosRequestConfig);
}

//----------api方法-------
export type LoadAvgDto = {
  load1m: number;
  load5m: number;
  load10m: number;
};

export const getLoadAvg = async (): Promise<LoadAvgDto> => {
  const rsp = await getAction<LoadAvgDto>("/loadavg");
  return rsp.data.data;
};
