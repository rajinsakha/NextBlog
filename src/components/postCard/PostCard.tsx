import Image from "next/image";
import React from "react";
import PostTitle from "./PostTitle";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const PostCard = () => {
  return (
    <div className="p-4 flex flex-col gap-4
    border rounded-xl border-borderColor dark:border-darkBorder">
      <div className="relative w-full h-[240px]">
        <Image
          src="/gaming.jpg"
          alt="Gaming Controller"
          sizes="100vw"
          fill
          style={{ objectFit: "cover" }}
        />
      </div>

      <div className="flex flex-col gap-4">
        <PostTitle title="Technology" color="iconBg" />
        <h3 className="text-titleColor text-2xl font-semibold dark:text-white">
          The Impact of Technology on the Workplace: How Technology is Changing
        </h3>
        <div className="flex items-center gap-5">
          <div className="flex items-center gap-3">
            <div><Avatar>
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar></div>
            <p className="text-subColor">Rajin Sakha</p>
          </div>
          <p className="text-subColor">January 17, 2024</p>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
