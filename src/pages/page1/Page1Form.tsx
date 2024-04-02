
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

import { cities } from '../../components/func/data'

const FormSchema = z.object({
  fromField: z
    .string({
      required_error: "Please select an email to display.",
    }),
  toWhereField: z
    .string({
      required_error: "Please select an email to display.",
    }),
  dateField: z.date({
    required_error: "A date of birth is required.",
  }),

})
const today = new Date();
const nextYear = new Date(today.getFullYear() + 1, today.getMonth(), today.getDate());

export default function Page1Form() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  })

  function onSubmit(data: z.infer<typeof FormSchema>) {
    console.log('data: ', data);
    // после пользователя переносит на следующую страницу 
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-6">
        <FormField
          control={form.control}
          name="fromField"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Откуда</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder='Откуда поедем?' />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {cities.map(({ name }) =>
                    <SelectItem value={name}>{name}</SelectItem>
                  )}
                </SelectContent>
              </Select>
              <FormDescription>
                {/* You can manage email addresses in your{" "} */}
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="toWhereField"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Куда</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder='Куда поедем?' />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {cities.map(({ name }) =>
                    <SelectItem value={name}>{name}</SelectItem>
                  )}
                </SelectContent>
              </Select>
              <FormDescription>
                {/* You can manage email addresses in your{" "} */}
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  )
}