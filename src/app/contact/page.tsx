"use client";
import React, { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { ChevronLeftCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import { Textarea } from "@/components/ui/textarea";
import axios from "axios";
import { TitleHeading } from "@/components/titleHeading";
import { useRouter } from "next/navigation";
import Image from "next/image";

const Contact = () => {
  const { toast } = useToast();
  const router = useRouter();
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
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.7 }}
    >
      <div className="flex justify-center">
        <div className="fixed ml-[130px]">
          <div className="flex w-full">
            {" "}
            {/* <Bio /> */}
            <div className="flex relative">
              <div className=" bg-icon opacity-10 h-[850px] w-[690px] rounded-md"></div>
              <div className="bg-input h-[855px] w-[690px] absolute top-[20px] left-[25px] rounded-md shadow-black shadow-md ">
                <div className="relative">
                  <Image
                    alt={"contact image"}
                    src={"/contact.jpg"}
                    width={690}
                    height={850}
                    className="w-full h-full opacity-60"
                  />
                </div>
              </div>
            </div>
            <div className="snap-y snap-mandatory shadow-lg shadow-inner ml-6 pl-16 bg-input border-1 border-secondary h-[800px] w-[1000px] mt-10  pt-8 rounded-md pr-12 overflow-auto pt-10">
              <div>
                <div className="max-w-[1200px] mx-auto">
                  <div>
                    <TitleHeading
                      title="Contact"
                      isIcon
                      icon={
                        <div
                          onClick={() => {
                            router.push("/home");
                          }}
                          className=" cursor-pointer w-[150px] border-2 border-accent-foreground rounded-full flex items-center"
                        >
                          <ChevronLeftCircle
                            className=" text-icon  p-3 mr-4"
                            size="55"
                          />
                          <div className="text-title text-[18px] ">Back</div>
                        </div>
                      }
                    />
                    <div className="mb-24 text-title text-[21px]">
                      Thank you for reaching out, I would love to hear from you!
                      weather you have a question,a comment, or just to chat.
                    </div>
                    {/* <div>
                      Thank you for reaching out, I would love to hear from you!
                      weather you have a question,a comment, or just to chat
                    </div> */}
                    <Form {...form}>
                      <form
                        onSubmit={form.handleSubmit(onSubmit)}
                        className="w-full"
                      >
                        <div className="flex items-center w-full mb-16 h-full">
                          <FormField
                            control={form.control}
                            name="fullname"
                            render={({ field }) => (
                              <FormItem className="w-full mr-16 ">
                                <FormLabel className="text-lg">
                                  Full Name
                                </FormLabel>
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
                                <FormLabel className="text-lg">
                                  E Mail
                                </FormLabel>
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
                          className=" mt-14 mb-5 hover:bg-icon bg-popover hover:text-base text-title py-6 px-7"
                        >
                          Send Message
                        </Button>
                      </form>
                    </Form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
