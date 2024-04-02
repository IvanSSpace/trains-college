import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { trainsAll } from "../../components/func/trainsData";

const Page2TrainViews = () => {

  return (
    <div className="bg-slate-300">
      <Table>
        <TableCaption>A list of your recent invoices.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Invoice</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Method</TableHead>
            <TableHead className="text-right">Amount</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {trainsAll.map((train, index) => (
            <TableRow key={`uniqueId${index}`}>
              <TableCell className="font-medium">{train.from}</TableCell>
              <TableCell>{train.to}</TableCell>
              <TableCell>{train.date}</TableCell>
              <TableCell className="text-right">{train.time}</TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={3}>Total</TableCell>
            <TableCell className="text-right">$2,500.00</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </div>
  )
}

export default Page2TrainViews;