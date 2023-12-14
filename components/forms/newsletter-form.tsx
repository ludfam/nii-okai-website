"use client"

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
import { Input } from "@/components/ui/input"

import * as z from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { toast } from "@/components/ui/use-toast"

const formSchema = z.object({
    email: z.string().email({
        message: "Please enter a valid email"
    }).min(10, {
        message: "Please enter more than 10 characters"
    }),
})


export default function NewsletterForm() {

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
        },
    })

    function onSubmit(values: z.infer<typeof formSchema>) {
        toast({
            title: `Hello ${values.email}`,
            description: "This feature is not available yet"
          })
    }


    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="max-w-lg w-full space-y-4 md:p-8">
                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                            <FormControl>
                                <Input className="text-black outline-0 focus:ring-0 focus-visible:ring-offset-0  " placeholder="example@mail.com" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button className=" w-full bg-o-yellow"  type="submit">Submit</Button>
            </form>
        </Form>
    )
}