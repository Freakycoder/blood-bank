"use client"

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
import { Input } from "@/components/ui/input"
import { forwardRef, useImperativeHandle, useRef } from "react"

const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
})

interface ProfileFormProps {
  onSubmitForm: () => void
}

export const ProfileForm = forwardRef(function ProfileForm(
  { onSubmitForm }: ProfileFormProps,
  ref
) {
  const formRef = useRef<HTMLFormElement | null>(null)

  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
    },
  })

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
    onSubmitForm() // Call the function to handle modal closure, etc.
  }

  // Expose the triggerSubmit function to the parent component using useImperativeHandle.
  useImperativeHandle(ref, () => ({
    triggerSubmit() {
      if (formRef.current) {
        formRef.current.requestSubmit()
      }
    },
  }))

  return (
    <Form {...form}>
      <form
        ref={formRef}
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-8"
      >
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="shadcn" {...field} />
              </FormControl>
              <FormDescription>
                This is your public display name.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="hidden">
          Submit
        </Button>
      </form>
    </Form>
  )
})
