import { useForm, SubmitHandler } from "react-hook-form"
import { Calendar } from "../ui/calendar"
import { useState } from "react"
import { Button } from "../ui/button"
import arrayReverse from '../../assets/arrayReverse.svg'
import SelectCastome from "../castomeUI/SelectUI"

type Inputs = {
  example: string
  exampleRequired: string
}

const Page1Form = () => {
  const [ date, setDate ] = useState<Date | undefined>(new Date())

  const {
    // register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>()
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log('тут будет лог всех значений');
    console.log(data)

  }

  console.log(watch("example"))

  return (
    <form className="flex flex-col items-center w-[800px]" onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-row justify-center">
        <SelectCastome title="Откуда" titleType="Города" type="cities" />

        <Button><img src={arrayReverse} alt="arrayReverse" /></Button>

        <SelectCastome title="Куда" titleType="Города" type="cities" />
      </div>
      <p>Когда</p>
      <div className="bg-[#ffffff]">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          className="rounded-md border"
        />
      </div>

      <SelectCastome title="Билеты" titleType="Количество билетов" type="peopleCount" />

      {errors.exampleRequired && <span>This field is required</span>}
      <Button type="submit">купить билет</Button>
    </form >
  )
}

export default Page1Form;