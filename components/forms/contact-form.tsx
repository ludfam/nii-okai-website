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
import { Textarea } from "@/components/ui/textarea"

import * as z from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { toast } from "sonner"

const formSchema = z.object({
    email: z.string().email({
        message: "Please enter a valid email"
    }).min(10, {
        message: "Please enter more than 10 characters"
    }),
    name: z.string().min(5, {
        message: "Please enter more than 5 characters"
    }),
    subject: z.string().min(5, {
        message: "Please enter more than 5 characters"
    }),
    message: z.string().min(5, {
        message: "Please enter more than 5 characters"
    }),

})


export default function ContactForm() {

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
            name: "",
            subject: "",
            message: ""
        },
    })

    function onSubmit(values: z.infer<typeof formSchema>, e: any) {
       e.preventDefault()
        toast.info(`Hello ${values.name}`, {
            description: "This feature is not available yet"
        })
    }


    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col  w-full space-y-6  md:p-4">
                <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Full Name</FormLabel>
                            <FormControl>
                                <Input
                                    className="text-black outline-0 focus:ring-0 focus-visible:ring-offset-0  "
                                    {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                                <Input className="text-black outline-0 focus:ring-0 focus-visible:ring-offset-0  "  {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="subject"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Subject</FormLabel>
                            <FormControl>
                                <Input className="text-black outline-0 focus:ring-0 focus-visible:ring-offset-0  " {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Message</FormLabel>
                            <FormControl>
                                <Textarea className="text-black outline-0 focus:ring-0 focus-visible:ring-offset-0 resize-none "  {...field} rows={6} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button className=" w-full bg-o-darkblue" type="submit" >Submit</Button>
            </form>
        </Form>
    )
}