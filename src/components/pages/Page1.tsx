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


// type headerSelect: string;

const Page1 = () => {
  const [ date, setDate ] = useState<Date | undefined>(new Date())

  const {
    // register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>()
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data)

  console.log(watch("example")) // watch input value by passing the name of it

  return (
    <div className="">
      <h1 className="text-[36px] justify-center flex text-[#ffffff]">ПУТЕШЕСТВИЕ НА ПОЕЗДЕ</h1>
      <p>пользователь будет заходить на страницу и выбирать параметры</p>

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
    </div >
  )
}

export default Page1;