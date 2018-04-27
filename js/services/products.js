import request from '../utils/request';

export function getProductList(seriesNo) {
  return request(`http://admin-dev1.7qjf.com/app/product/children.jhtml?seriesNo=${seriesNo}`, {
    method: 'GET',
  });
}
