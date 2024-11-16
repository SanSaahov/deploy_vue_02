import { ref, reactive, computed, watch } from 'vue'
import { createPinia, defineStore, acceptHMRUpdate } from 'pinia'
import axios from 'axios'

export const useAuthStore = defineStore ( 'auth', () => {
   const user = ref<IUser> ( {
      name: '',
      email: '',
      role: '',
      accessToken: '',
   } )
   
   // ':Promise<any>' - нужно указывать у функций
   const register_User = async ( payload: IUser ): Promise<any> => {
      //
   }
   
   return { register_User, user }
} )























