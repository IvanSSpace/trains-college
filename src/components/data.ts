


export interface City {
  name: string;
}

export interface PeopleCount {
  count: string;
}

const cities: {name: string}[] = [ 
  { name: 'Москва' }, 
  { name: 'Омск' }, 
  { name: 'Санкт-Петербург' },
  { name: 'Краснодар' },
  { name: 'Ростов-на-Дону' },
  { name: 'Самара' },
  { name: 'Новосибирск' },
  { name: 'Екатеринбург' },
  { name: 'Казань' },
  { name: 'Нижний Новгород' },
];

const peopleCount: {count: string}[] = [
    { count: '1' },
    { count: '2' },
    { count: '3' },
    { count: '4' },
]

// type Data = {
//   peopleCount: { count: string }[];
//   cities: { name: string }[];
// };

export interface Data {
  peopleCount: PeopleCount[];
  cities: City[];
}

const data: Data = {
  peopleCount,
  cities
}

export {cities, peopleCount, data};