"use client";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { createEntry } from "@/actions/createLorem";
import { Input } from "@/components/ui/input";

const formSchema = z.object({
  username: z.string().min(2).max(50),
});

function InputTask() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
    },
  });
  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      const result = await createEntry(values.username, false);
      console.log("Entry created successfully", result);
    } catch (error) {
      console.error("Error creating entry", error);
    }
  }
  return (
    <div>
      {/* input */}
      <div className=" mt-10 mx-auto container px-28 gap-4 ">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex justify-between gap-4 "
          >
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem className="flex-grow">
                  <FormControl>
                    <Input placeholder="shadcn" {...field} className="w-full" />
                  </FormControl>
                </FormItem>
              )}
            />
            <Button type="submit" className="flex-none">
              Submit
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
}

export default InputTask;
