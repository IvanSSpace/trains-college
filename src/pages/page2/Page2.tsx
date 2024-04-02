
// мне нужно пропускать через

import Page2Form from "./Page2Form";
import Page2TrainViews from "./Page2TrainViews";

// { from: "Москва", to: "Санкт-Петербург", date: "2024-04-03", time: "08:00" },

const Page2 = () => {
  return (
    <div>
      <h1>Page2</h1>
      <Page2Form />
      <Page2TrainViews />
    </div>
  )
}

export default Page2;