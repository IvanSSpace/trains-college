import create from 'zustand';

interface City {
  [cityName: string]: string[];
}

type Store = {
  cities: {
    [countryName:string]: City;
  },
  setAllCities: () => void,
  getAllCities: () => void,
}

export const useStore = create<Store>((set) => ({
  cities: {
    'Москва': { 'Санкт-Петербург': [
      '02.04.2042',
      '09.04.2042',
      '15.04.2042',
      '07.04.2042',
      '25.04.2042',
      '12.04.2042',
      '28.04.2042',
      '20.04.2042',
      '05.04.2042',
      '18.04.2042'
  ], 
  'Сочи' : [
    '02.04.2042',
    '09.04.2042',
    '15.04.2042',
    '07.04.2042',
    '28.04.2042',
    '05.04.2042',
    '18.04.2042'
] }
  },
  setAllCities: () => set((state) => ({ cities: state.cities })),
  getAllCities: () => set((state: Store) => state.cities)
}));
