import Vuex from 'vuex';
import Vue from 'vue';

import actions from './actions';
import mutations from './mutations';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    userStatus: {
      nickName: ''
    },
    groupSize: 1,
    currentListStatus:{
      startTime: new Date(),
      estTime: 60,
      currentSpot: 5,
      restaurantName: 'Frijol'
    }

  },


  

  mutations,
  actions
});