import React from "react";

interface BlogCardProps {
  authorName: string;
  title: string;
  content: string;
  publishedDate: string;
}
export default function BlogCard({
  authorName,
  title,
  content,
  publishedDate,
}: BlogCardProps) {
  return (
    <div className="border-b border-slate-200 pb-4 max-w-xl p-4">
      <div className="flex items-center  ">
        <div className="mr-2">{<Avatar name={authorName} />}</div>
        <div className="font-thin mr-2 text-sm">{authorName}</div>
        <div className="text-xs mr-2">{<Circle />}</div>
        <div className="font-thin text-slate-500 text-sm">{`${publishedDate}`}</div>
      </div>
      <div className="text-xl font-semibold mt-2">{title}</div>
      <div className="text-md font-thin">{content.slice(0, 100) + "..."}</div>
      <div className="text-slate-500 text-sm font-thin mt-4">{`${Math.ceil(
        content.length / 100
      )} minute(s) read`}</div>
      {/* <div className="bg-slate-200 h-1 w-full"></div> */}
    </div>
  );
}

function Avatar({ name }: { name: string }) {
  return (
    <div className="relative flex items-center justify-center w-6 h-6 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
      <span className="text-sm text-gray-600 dark:text-gray-300">
        {name[0]}
      </span>
    </div>
  );
}

//make a small circle like dot
function Circle() {
  return <div className="bg-slate-200 h-1 w-1 rounded-full"></div>;
}
