import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

import { data, City, PeopleCount } from "../data"
import React from "react";


type PropTypes = {
  title: string,
  titleType: string,
  type: 'cities' | 'peopleCount';
}

const SelectCastome: React.FC<PropTypes> = ({ title, titleType, type }) => {
  return (
    <Select>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder={title} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>{titleType}</SelectLabel>
          {type === 'cities' && data.cities.map((item: City) => ( // Используем явное указание типа
            <SelectItem key={item.name} value={item.name}>{item.name}</SelectItem>
          ))}
          {type === 'peopleCount' && data.peopleCount.map((item: PeopleCount) => (
            <SelectItem key={item.count} value={item.count}>{item.count}</SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}

export default SelectCastome;