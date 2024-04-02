const trainsAll = [
  { from: "Москва", to: "Санкт-Петербург", date: "2024-04-03", time: "08:00" },
  { from: "Красноярск", to: "Самара", date: "2024-04-11", time: "11:00" },
  { from: "Нижний Новгород", to: "Москва", date: "2024-04-03", time: "11:00" },
  { from: "Нижний Новгород", to: "Санкт-Петербург", date: "2024-04-04", time: "13:00" },
  { from: "Нижний Новгород", to: "Новосибирск", date: "2024-04-05", time: "15:00" },
  { from: "Нижний Новгород", to: "Екатеринбург", date: "2024-04-06", time: "17:00" },
  { from: "Казань", to: "Челябинск", date: "2024-04-09", time: "09:00" },
  { from: "Казань", to: "Омск", date: "2024-04-10", time: "11:00" },
  { from: "Казань", to: "Самара", date: "2024-04-11", time: "13:00" },
  { from: "Самара", to: "Москва", date: "2024-04-03", time: "10:00" },
  { from: "Самара", to: "Санкт-Петербург", date: "2024-04-04", time: "12:00" },
  { from: "Самара", to: "Новосибирск", date: "2024-04-05", time: "14:00" },
  { from: "Ростов-на-Дону", to: "Нижний Новгород", date: "2024-04-08", time: "21:00" },
  { from: "Ростов-на-Дону", to: "Казань", date: "2024-04-09", time: "23:00" },
  { from: "Ростов-на-Дону", to: "Челябинск", date: "2024-04-10", time: "10:00" },
  { from: "Ростов-на-Дону", to: "Омск", date: "2024-04-11", time: "12:00" },
  { from: "Омск", to: "Москва", date: "2024-04-03", time: "12:00" },
  { from: "Омск", to: "Санкт-Петербург", date: "2024-04-04", time: "14:00" },
  { from: "Омск", to: "Челябинск", date: "2024-04-10", time: "11:00" },
  { from: "Омск", to: "Самара", date: "2024-04-11", time: "13:00" },
]

interface Train {
  from: string;
  to: string;
  date: string;
  time: string;
}

interface FilterCriteria {
  from?: string;
  to?: string;
  dataPeriod?: {
    startPeriod: string;
    endPeriod: string;
  };
}

type FilterMethod = (data: Train[], criteria: FilterCriteria) => Train[];

const autoFilter = (method: FilterMethod, data: Train[], criteria: FilterCriteria) => {
  return method(data, criteria);
};

const filterTrains = (data: Train[], criteria: FilterCriteria): Train[] => {
  let filteredData = [...data];
  
  if (criteria.from) {
    filteredData = filteredData.filter(train => train.from === criteria.from);
  }
  
  if (criteria.to) {
    filteredData = filteredData.filter(train => train.to === criteria.to);
  }
  
  if (criteria.dataPeriod) {
    const { startPeriod, endPeriod } = criteria.dataPeriod;
    filteredData = filteredData.filter(train => train.date >= startPeriod && train.date <= endPeriod);
  }
  
  return filteredData;
};

console.log(autoFilter(filterTrains, trainsAll, { from: "Москва" }));
console.log(autoFilter(filterTrains, trainsAll, { to: "Санкт-Петербург" }));
console.log(autoFilter(filterTrains, trainsAll, { dataPeriod: { startPeriod: "2024-04-03", endPeriod: "2024-04-05" } }));

// console.log(autoFilter({from: false, to: false, dataPeriod: false}, trainsAll));
