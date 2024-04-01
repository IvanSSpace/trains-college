import { create } from 'zustand'

type DataForm = {
  from: string;
  where: string;
  date: string;
  ticketQuantity: number;
};

type Store = DataForm & {
  setForm: (dataForm: DataForm) => void;
  getForm: () => DataForm;
};

export const useStore = create<Store>((set) => ({
  from: '',
  where: '',
  date: '',
  ticketQuantity: 0,
  setForm: (dataForm) => set({ ...dataForm }),
  getForm: () => set((state) => ({ ...state })),
}));

// export const useStore = create<Store>()((set) => ({
//   count: 1,
//   inc: () => set((state) => ({ count: state.count + 1 })),
// }))


// // Define the type for the data form
// interface DataForm {
//   from: string;
//   where: string;
//   date: string;
//   ticketQuantity: number;
// }

// // Define the type for the store
// interface Store {
//   dataForm: DataForm;
//   setForm: (dataForm: DataForm) => void;
//   getForm: () => DataForm;
// }

// // Create the store
// const useStore = create<Store>()((set) => ({
//   dataForm: {
//     from: '',
//     where: '',
//     date: '',
//     ticketQuantity: 0,
//   },
//   setForm: (dataForm) => set({ dataForm }),
//   getForm: () => useStore.getState().dataForm,
// }));


// export default useStore;
