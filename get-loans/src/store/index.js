import { createStore } from 'vuex'
import auth from '../modules/auth/store'
import loans from '../modules/loans/store'

export default createStore({
  modules: {
    auth,
    loans
  }
})
