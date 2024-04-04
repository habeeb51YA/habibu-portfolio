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
      toast({
        variant: "destructive",
        title: "Error",
        description: "Something went wrong, please try again",
      });
    }
  };

  return (
    <div className="pt-20 lg:pt-10 pb-8 sm:pb-0">
      {" "}
      <TitleHeading title="Contact" />
      <div className="mb-12 text-secondary italic text-[16px]">
        Thank you for reaching out, I would love to hear from you! weather you
        have a question, a comment, or just to chat.
      </div>
      <div className="">
        {" "}
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="w-full">
            <div className="flex items-center w-full mb-10 h-full">
              <FormField
                control={form.control}
                name="fullname"
                render={({ field }) => (
                  <FormItem className="w-full mr-4 sm:mr-16 ">
                    <FormLabel className="text-sm text-title">
                      Full Name
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Your Full Name"
                        {...field}
                        className="h-8 sm:h-11  text-sm bg-accent"
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
                    <FormLabel className="text-sm text-title">E Mail</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Your E Mail"
                        {...field}
                        className="h-8 sm:h-11 text-sm bg-accent"
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
                  <FormLabel className="text-sm text-title">Message</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Your Message"
                      className="h-16 sm:h-24 text-sm bg-accent"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button
              type="submit"
              className="mt-8 mb-3 bg-primary hover:bg-popover hover:text-title text-sm py-5 px-6"
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
        <ChevronsUp className="text-primary" size={38} />
      </div>
    </div>
  );
};

export default Contact;
