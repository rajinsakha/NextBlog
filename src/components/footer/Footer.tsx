import { IQuickLink } from "@/utils/interface/Link";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

const Footer = () => {
  const quickLinks: IQuickLink[] = [
    {
      title: "Home",
      path: "/",
    },
    {
      title: "About",
      path: "/about",
    },
    {
      title: "Contact",
      path: "/contact",
    },
    {
      title: "Blog",
      path: "/blog",
    },
  ];

  const categoryLinks: IQuickLink[] = [
    {
      title: "Technology",
      path: "/blog",
    },
    {
      title: "Sports",
      path: "/blog",
    },
    {
      title: "Travel",
      path: "/blog",
    },
    {
      title: "Lifestyle",
      path: "/blog",
    },
  ];

  const otherLinks: IQuickLink[] = [
    {
      title:"Terms of Use",
      path:"/"
    },
    {
      title:"Privacy Policy",
      path:"/"
    },
    {
      title:"Cookie Policy",
      path:"/"
    },

  ]

  return (
    <>
    <section className="mt-16 px-8 sm:px-16 lg:px-32 py-16 flex justify-between items-start gap-16 bg-[#F6F6F7] dark:bg-[#141624] dark:text-white ">
    
      <div className="flex flex-col gap-3">
        <h4 className="text-lg">About</h4>
        <p className="w-60">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam
        </p>
        <div className="flex flex-col gap-3">
          <p className="font-semibold">
            Email: <span className="font-normal">rajinsakha07@gmail.com</span>
          </p>
          <p className="font-semibold">
            Phone: <span className="font-normal">+977-9761626067</span>
          </p>
        </div>
      </div>

      <div className="flex gap-20 px-16">
      <div className=" flex flex-col gap-6">
        <h4>Quick Link</h4>
        <div className="flex flex-col gap-2 text-descriptionColor dark:text-darkDescription">
          {quickLinks.map((link, index) => (
            <Link key={link.title + index} href={link.path}>
              {link.title}
            </Link>
          ))}
        </div>
      </div>

      <div className=" flex flex-col gap-6">
        <h4>Category</h4>
        <div className="flex flex-col gap-2 text-descriptionColor dark:text-darkDescription">
          {categoryLinks.map((link, index) => (
            <Link key={link.title + index} href={link.path}>
              {link.title}
            </Link>
          ))}
        </div>
      </div>
      </div>

    

      <div className="p-12 flex flex-col gap-5 bg-white dark:dark:bg-[#141624] rounded-xl border-b-orange">
        <div className="flex flex-col items-center gap-2">
          <h4 className="text-titleColor text-xl font-semibold">Weekly Newsletter</h4>
          <p>Get Blogs and Articles via email</p>
        </div>

        <div className="flex flex-col gap-4">
          <div className="relative ">

          <Input type="email" placeholder="Your email" />
            <svg
              className="absolute top-[10px] right-[10px]"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M3.4375 4.375C2.91973 4.375 2.5 4.79473 2.5 5.3125V14.6875C2.5 15.2053 2.91973 15.625 3.4375 15.625H16.5625C17.0803 15.625 17.5 15.2053 17.5 14.6875V5.3125C17.5 4.79473 17.0803 4.375 16.5625 4.375H3.4375ZM1.25 5.3125C1.25 4.10438 2.22938 3.125 3.4375 3.125H16.5625C17.7706 3.125 18.75 4.10438 18.75 5.3125V14.6875C18.75 15.8956 17.7706 16.875 16.5625 16.875H3.4375C2.22938 16.875 1.25 15.8956 1.25 14.6875V5.3125Z"
                fill="#696A75"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M3.88165 5.86629C4.09357 5.59382 4.48625 5.54474 4.75871 5.75665L10 9.83321L15.2413 5.75665C15.5138 5.54474 15.9064 5.59382 16.1183 5.86629C16.3303 6.13875 16.2812 6.53143 16.0087 6.74335L10.3837 11.1183C10.158 11.2939 9.84198 11.2939 9.61629 11.1183L3.99129 6.74335C3.71882 6.53143 3.66974 6.13875 3.88165 5.86629Z"
                fill="#696A75"
              />
            </svg>

          </div>
          <Button className="bg-blue-600 w-full hover:bg-blue-800 dark:text-white">Subscribe</Button>
        </div>
      </div>
    </section>

    <div className="px-8 sm:px-16 lg:px-32  bg-[#F6F6F7] dark:bg-[#141624]">
  <hr className="border-[#DCDDDF] dark:border-[#242535]" />
</div>


    <div className="bg-[#F6F6F7] dark:bg-[#141624] px-8 sm:px-16 lg:px-32 py-16 flex justify-between items-center">
        <div className="flex flex-col">
          <p className="text-xl text-[#141624]
          dark:text-white">Next<span className="text-xl font-extrabold text-[#18181b] dark:text-white">Blog</span></p>
          <p>All Rights Reserved.</p>
        </div>

        <div className="text-descriptionColor dark:text-darkDescription flex gap-4">
         {otherLinks.map((link,index)=>(
          <Link href={link.path} key={index}>{link.title}</Link>
         ))}
        </div>
    </div>
    </>
  );
};

export default Footer;
