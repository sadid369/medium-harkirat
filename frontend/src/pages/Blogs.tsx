import React from "react";
import BlogCard from "../components/BlogCard";
import AppBar from "../components/AppBar";

export default function Blogs() {
  return (
    <div>
      <AppBar />
      <div className="flex flex-col  justify-center max-w-xl: items-center">
        <BlogCard
          authorName={"Sadid"}
          title={
            "Nostrud amet nostrud occaecat pariatur consequat sunt anim ullamco id eiusmod."
          }
          content={
            "Exercitation eiusmod cillum ea pariatur fugiat duis. Sunt nisi proident cillum duis sit in."
          }
          publishedDate={"2023-01-01"}
        />
        <BlogCard
          authorName={"Sadid"}
          title={
            "Nostrud amet nostrud occaecat pariatur consequat sunt anim ullamco id eiusmod."
          }
          content={
            "Exercitation eiusmod cillum ea pariatur fugiat duis. Sunt nisi proident cillum duis sit in."
          }
          publishedDate={"2023-01-01"}
        />
        <BlogCard
          authorName={"Sadid"}
          title={
            "Nostrud amet nostrud occaecat pariatur consequat sunt anim ullamco id eiusmod."
          }
          content={
            "Exercitation eiusmod cillum ea pariatur fugiat duis. Sunt nisi proident cillum duis sit in."
          }
          publishedDate={"2023-01-01"}
        />
        <BlogCard
          authorName={"Sadid"}
          title={
            "Nostrud amet nostrud occaecat pariatur consequat sunt anim ullamco id eiusmod."
          }
          content={
            "Exercitation eiusmod cillum ea pariatur fugiat duis. Sunt nisi proident cillum duis sit in."
          }
          publishedDate={"2023-01-01"}
        />
        <BlogCard
          authorName={"Sadid"}
          title={
            "Nostrud amet nostrud occaecat pariatur consequat sunt anim ullamco id eiusmod."
          }
          content={
            "Exercitation eiusmod cillum ea pariatur fugiat duis. Sunt nisi proident cillum duis sit in."
          }
          publishedDate={"2023-01-01"}
        />
      </div>
    </div>
  );
}
