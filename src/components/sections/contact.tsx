"use client";
import React, { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import { Textarea } from "@/components/ui/textarea";
import axios from "axios";
import { TitleHeading } from "../titleHeading";
import { ChevronsUp } from "lucide-react";
import { handleScrollToSection } from "../sidenav";

const Contact = () => {
  const { toast } = useToast();
  const formSchema = z.object({
    fullname: z.string({ required_error: "full name is required" }),
    email: z.string({ required_error: "email is required" }).email({
      message: "must be a valid email",
    }),
    message: z.string({
      required_error: "message is required",
      description: "what would you like to say",
    }),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    mode: "onBlur",
  });

  const onSubmit = async (value: z.infer<typeof formSchema>) => {
    try {
      const payload = await formSchema.parse(value);
      const { data } = await axios({
        method: "POST",
        url: `${process.env.NEXT_PUBLIC_FORMSPREE_KEY}`,

        headers: {
          "Content-type": "application/json",
          Accept: "application/json",
        },
        data: {
          ...payload,
        },
      });
      if (data.ok) {
        const defaultValues = {
          email: "",
          fullname: "",
          message: "",
        };
        form.reset(defaultValues);
        toast({
          title: "Success",
          description: "Thanks You for reaching out",
        });
      }
    } catch (err) {
      console.log("err", err);
    }
  };

  return (
    <div>
      {" "}
      <TitleHeading title="Contact" />
      <div className="mb-14 text-icon italic text-[21px]">
        Thank you for reaching out, I would love to hear from you! weather you
        have a question,
        <br /> a comment, or just to chat.
      </div>
      <div className="">
        {" "}
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="w-full">
            <div className="flex items-center w-full mb-16 h-full">
              <FormField
                control={form.control}
                name="fullname"
                render={({ field }) => (
                  <FormItem className="w-full mr-16 ">
                    <FormLabel className="text-lg">Full Name</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Your Full Name"
                        {...field}
                        className="h-[60px]  text-lg bg-popover  mt-4"
                      />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel className="text-lg">E Mail</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Your E Mail"
                        {...field}
                        className="h-[60px] text-lg bg-popover"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel className="text-lg">Message</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Your Message"
                      className="h-[120px] text-lg bg-popover "
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button
              type="submit"
              className="mt-14 mb-5 bg-icon hover:bg-popover hover:text-title text-base py-6 px-7"
            >
              Send Message
            </Button>
          </form>
        </Form>
      </div>
      <div
        className="flex justify-end "
        onClick={() => {
          handleScrollToSection("dashboard-section");
        }}
      >
        <ChevronsUp className="text-icon" size={60} />
      </div>
    </div>
  );
};

export default Contact;
