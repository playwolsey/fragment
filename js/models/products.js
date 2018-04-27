import * as Service from '../services/products';

export default {
  namespace: 'products',

  state: {
    productList: [],
  },

  reducers: {
    save(state, {
      payload: {
        productList,
      },
    }) {
      return {
        ...state,
        productList,
      };
    },
  },

  effects: {
    * fetch(_, { call, put }) {
      const data = yield call(Service.getProductList, _.payload.seriesNo);
      const productList = data.data.datas.page.dataList;
      yield put({
        type: 'save',
        payload: {
          productList,
        },
      });
    },
  },

};
