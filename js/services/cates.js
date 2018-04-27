import request from '../utils/request';

export function getProductCate() {
  return request('http://admin-dev1.7qjf.com/app/product/list.jhtml', {
    method: 'GET',
  });
}
