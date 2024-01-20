import React from 'react'

interface PostTitleProps {
    title: string;
    color:string;
  }


const PostTitle: React.FC<PostTitleProps> = ({title, color}) => {
  return (
    <div className={`py-1 px-[10px] w-fit bg-${color} rounded-md text-white text-sm dark:bg-blue-500`}>{title}</div>
  )
}

export default PostTitle