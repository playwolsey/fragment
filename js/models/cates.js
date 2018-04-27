import * as Service from '../services/cates';

export default {
  namespace: 'cates',

  state: {
    productCateList: [],
  },

  reducers: {
    save(state, {
      payload: {
        productCateList,
      },
    }) {
      return {
        ...state,
        productCateList,
      };
    },
  },

  effects: {
    *fetch(_, { call, put }) {
      const data = yield call(Service.getProductCate);
      const productCateList = data.data.datas.page.dataList;
      yield put({
        type: 'save',
        payload: {
          productCateList,
        },
      });
    },
  },

  subscriptions: {
    setup({ dispatch }) {
      dispatch({ type: 'fetch' });
    },
  },
};
