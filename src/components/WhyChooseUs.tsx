"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";

const WhyChooseUs = () => {
  const musicSchoolContant = [
    {
      title: "Guitar Fundamentals",
      description:
        "Learn the basics of playing guitar with our comprehensive beginner's course. This course covers fundamental techniques, chords, and melodies to get you started on your musical journey.",
    },
    {
      title: "Advanced Vocal Techniques",
      description:
        "Enhance your singing with advanced vocal techniques for intermediate to advanced learners. Improve your vocal range, control, and expression with expert guidance and practice.",
    },
    {
      title: "Music Production Fundamentals",
      description:
        "Dive into music production with this introductory course on the basics of sound engineering and mixing. Learn how to create, edit, and mix tracks using industry-standard software and equipment.",
    },
    {
      title: "Piano for Beginners",
      description:
        "Start your piano journey with this course designed for absolute beginners. Learn to read music, understand basic theory, and play simple songs to build a strong foundation.",
    },
    {
      title: "DJ Mixing Techniques",
      description:
        "Master the art of DJing with this course on mixing and beatmatching. Develop your skills on turntables and digital controllers to create seamless mixes and captivating performances.",
    },
    {
      title: "Songwriting Essentials",
      description:
        "Learn the fundamentals of writing catchy and meaningful songs. This course covers song structure, lyrics, melody, and harmony to help you craft memorable tunes.",
    },
  ];

  return (
    <div className="w-6/6">
      <StickyScroll content={musicSchoolContant} />
    </div>
  );
};

export default WhyChooseUs;
