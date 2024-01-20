import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import PostTitle from "@/components/postCard/PostTitle";
import PostCard from "@/components/postCard/PostCard";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function Home() {
  return (
    <main className="flex flex-col px-8 sm:px-16 lg:px-32 py-8 gap-16">
      <div className="relative w-full">
        <div className="relative w-full max-sm:h-[50vh] lg:h-[75vh] ">
          <Image
            src="/hero-image.jpg"
            alt="Hero Image"
            sizes="100vw"
            fill
            style={{ objectFit: "cover", borderRadius: "12px" }}
          />
        </div>

        <div
          className="w-fit max-[500px]: min-[500px]:w-2/3 lg:w-[43%] p-8 flex flex-col gap-6 bg-white dark:bg-titleColor rounded-xl absolute bottom-[-50px] left-[50px] border border-solid border-borderColor dark:border-darkBorder"
          style={{ boxShadow: "0px 12px 24px -6px rgba(24, 26, 42, 0.12)" }}
        >
          <PostTitle title="Technology" color="iconBg" />
          <h1 className="sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-titleColor dark:text-white">
            The Impact of Technology on the Workplace: How Technology is
            Changing
          </h1>
          <div className="flex items-center gap-5">
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
        </div>
      </div>

      <div className="mt-16">
        <h1 className="text-titleColor text-2xl font-bold">Latest Post</h1>
        <div className="mt-4 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
        </div>
        <div className="flex items-center justify-center mt-8">
          <Button
            variant="outline"
            className="border px-6 font-medium text-[#696A75]"
            style={{ border: "1px solid rgba(105, 106, 117, 0.30)" }}
            asChild
          >
            <Link href="/blog">View All Post</Link>
          </Button>
        </div>
      </div>
    </main>
  );
}
