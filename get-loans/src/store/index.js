import { createStore } from 'vuex'
import auth from '../modules/auth/store'

export default createStore({
  modules: {
    auth
  }
})
