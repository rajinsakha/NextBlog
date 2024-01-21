import PostTitle from "@/components/postCard/PostTitle";
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Image from "next/image";

const SinglePostPage = () => {
  return (
    <section className="px-16 sm:px-32 lg:px-80 py-8 flex flex-col gap-4">
      <PostTitle title="Technology" color="iconBg" />
      <h1 className="text-4xl font-semibold text-titleColor dark:text-white">
        The Impact of Technology on the Workplace: How Technology is Changing
      </h1>
      <div className="flex items-center gap-6">
        <div className="flex items-center gap-3">
          <div>
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </div>
          <p className="text-subColor">Rajin Sakha</p>
        </div>
        <p className="text-subColor">January 17, 2024</p>
      </div>

      <Image src="https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" width={0} height={0} alt="single-post" sizes="100vw" style={{width:"100%", height:"400px", objectFit:"cover"}}  />



    </section>
  );
};

export default SinglePostPage;
