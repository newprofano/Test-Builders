import {key, baseUrl} from '../core/utils/config';
import axios, {AxiosPromise} from 'axios';
import {HttpMethod} from '../core/Enums';

function callApi<T>(
  endpoint: string,
  method: HttpMethod,
  params?: object,
  body?: object,
) {
  let url = baseUrl + endpoint;
  let finalParams = {
    appid: key,
    ...params,
  };

  const response: AxiosPromise<T> = axios(url, {
    params: finalParams,
    method,
    data: body,
  });

  return response;
}

export default callApi;
