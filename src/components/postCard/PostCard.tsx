import Image from "next/image";
import React from "react";
import PostTitle from "./PostTitle";

const PostCard = () => {
  return (
    <div className="p-4 flex flex-col gap-4
    border rounded-xl border-borderColor">
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
        <h3 className="text-titleColor text-2xl font-semibold">
          The Impact of Technology on the Workplace: How Technology is Changing
        </h3>
        <div className="flex items-center gap-5">
          <div className="flex gap-3">
            <h1>Image</h1>
            <p className="text-subColor">Rajin Sakha</p>
          </div>
          <p className="text-subColor">January 17, 2024</p>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
