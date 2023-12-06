"use client";

import { BParagraph, BTitle } from "@/components/elements";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

const contactFormSchema = z.object({
  name: z.string().min(3).max(50),
  email: z.string().email(),
  message: z.string().min(10).max(500),
  phone: z.string().min(10).max(20),
  consent: z.boolean().refine((v) => v === true, {
    message: "Please agree to our terms and conditions.",
  }),
});

const BContactForm = () => {
  const form = useForm<z.infer<typeof contactFormSchema>>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
      phone: "",
    },
  });

  const { handleSubmit } = form;

  function onSubmit(values: z.infer<typeof contactFormSchema>) {
    console.log(values);
  }

  return (
    <div className="bg-muted rounded-xl p-4 sm:p-6 md:p-4 lg:p-6 xl:p-10">
      <Form {...form}>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
          <div className="flex flex-col gap-2">
            <BTitle component="h2" size="md">
              Get in touch 🚀
            </BTitle>
            <BParagraph>
              Your email address will not be published. Required fields are
              marked
            </BParagraph>
          </div>

          <div className="grid gap-4 grid-cols-1">
            <div className="col-span-2">
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Textarea
                        {...field}
                        placeholder="Message"
                        className="w-full h-32"
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
            </div>
            <div className="col-span-2">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        {...field}
                        type="text"
                        placeholder="Name"
                        className="w-full h-12"
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
            </div>
            <div className="col-span-2 grid  grid-cols-1 sm:grid-cols-2 md:grid-cols-1 xl:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        {...field}
                        type="email"
                        placeholder="Email"
                        className="w-full h-12"
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        {...field}
                        type="tel"
                        placeholder="Phone"
                        className="w-full h-12"
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <FormField
              control={form.control}
              name="consent"
              render={({ field }) => (
                <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                  <div className="space-y-1 leading-none">
                    <FormLabel className="text-base leading-none font-normal">
                      Use different settings for my mobile devices
                    </FormLabel>
                  </div>
                </FormItem>
              )}
            />
            <Button
              type="submit"
              variant="default"
              disabled={!form.formState.isValid}
            >
              Submit
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default BContactForm;
