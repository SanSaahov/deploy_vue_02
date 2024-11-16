import { createPinia, defineStore, acceptHMRUpdate } from 'pinia'
// ======= ======= =======
// == user:{...} as IUser |  тип не нужно указывать
// , ts не корректно работает
// , потому что это не указание типа
// , а это УТВЕРЖДЕНИЕ ТИПА
//
//       user: {
//          id: 7,
//          firstname: 'Sorax',
//          lastname: 'Hacheroviche',
//          email: 'sypco@ya.rue'
//       } as IUser,
// ======= ======= =======
export const useUserStore = defineStore ( 'user', {
   // id: 'user',
   state: () => ( {
      user: {
         id: 7,
         firstname: 'Sorax',
         lastname: 'Hacheroviche',
         email: 'sypco@ya.rue'
      },
      accessToken: '' as string
   } ),
   getters: {
      // ======= ======= =======
      // == У гетеров обязательно указывать возвращаемый тип
      // , иначе в production будет ош
      // , потому что объект с гетарами будет пуст
      // , потому что pinia на ts не ±увидить гетеры без указаного типа
      // ======= ======= =======
      getUser: ( state ):any => state.user,
      isAuthenticated: ( state ):any => !!state.user?.id,
      getEmail: function ( state ):any {
         // this не работает со стрелочными ф.
         // return this.getUser.email
         // return this.user.firstname
         return this.user.email
      },
      getTest: ( state ):any => {
         return ( payload: string ) => `:: ${ payload } ::`
      }
   },
   actions: {
      async add_Name ( name: string ): Promise<void> {
         // ======= ======= =======
         // хороший нейминг, оч.читабельно
         // ======= ======= =======
      },
      async delete_Name ( id: string ): Promise<void> {
      
      },
      async update_Name ( name: string ): Promise<void> {
         // this.user.firstname = await name
         
         //  //TODO:
         setTimeout ( async () => {
            this.user.firstname = await name
         }, 300 )
      },
   }
} )






















