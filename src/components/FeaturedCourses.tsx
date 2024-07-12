"use client";
import Link from "next/link";
import React from "react";
import courseData from "../data/music_data.json";
import { BackgroundGradient } from "./ui/background-gradient";
import { Meteors } from "./ui/meteors";

interface Course {
  id: number;
  title: string;
  description: string;
  call_to_action: string;
  isFeatured: boolean;
}

const FeaturedCourses = () => {
  const FeaturedCourses = courseData.courses.filter(
    (course: Course) => course.isFeatured
  );
  return (
    <div className="py-12 ☐ bg-gray-900">
      <div>
        <div className="text-center my-16">
          <h2 className="text-base ☐ text-teal-600 font-semibold tracking-wide uppercase">
            FEATURED COURSES
          </h2>
          <p
            className="mt-2 text-3xl leading-8
          font-extrabold tracking-tight text-white
          sm:text-4xl
          "
          >
            Learn With the Best
          </p>
        </div>
      </div>
      <div className="mx-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
        {FeaturedCourses.map((course: Course) => (
          <div className="flex justify-center" key={course.id}>
            <BackgroundGradient className="rounded-[22px] p-4 bg-white dark:bg-zinc-900">
              <div
                className="p-4 h-56 flex justify-center flex-col items-center 
                flex-grow"
              >
                <p
                  className="text-lg text-center
                sm:text-xl text-black mt-4
                mb-2 dark:text-neutral-200"
                >
                  {course.title}
                </p>
                <p
                  className="text-sm text-center py-2
                text-neutral-600 dark:text-neutral-200"
                >
                  {course.description}
                </p>
                <Link
                  href={`/courses/${course.id}`}
                  className="px-4 py-1 my-4 rounded border 
                  border-neutral-600 text-neutral-700 bg-white
                  hover:bg-gray-100 transition duration-200"
                >
                  Learn More
                </Link>
              </div>
            </BackgroundGradient>
          </div>
        ))}
      </div>
      <div className="mt-20 text-center">
        <Link
          href={"/courses"}
          className="px-4 py-2 rounded border 
            border-neutral-600 text-neutral-700 bg-white
            hover:bg-gray-100 transition duration-200"
        >
          View All courses
        </Link>
      </div>
    </div>
  );
};

export default FeaturedCourses;
