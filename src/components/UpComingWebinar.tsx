"use client";
import Link from "next/link";
import React from "react";
import { HoverEffect } from "./ui/card-hover-effect";

const musicwebinars = [
  {
    title: "Spotify",
    description:
      "A digital music service that gives you access to millions of songs.",
    link: "https://spotify.com",
  },
  {
    title: "Apple Music",
    description:
      "A streaming service that allows you to listen to over 70 million songs. It also offers curated playlists and radio shows.",
    link: "https://music.apple.com",
  },
  {
    title: "SoundCloud",
    description:
      "A global online audio distribution platform that enables its users to upload, promote, and share their originally-created sounds.",
    link: "https://soundcloud.com",
  },
  {
    title: "Bandcamp",
    description:
      "An online music company that allows artists to share and earn money from their music.",
    link: "https://bandcamp.com",
  },
  {
    title: "Tidal",
    description:
      "A subscription-based music streaming service that combines lossless audio and high-definition music videos.",
    link: "https://tidal.com",
  },
  {
    title: "Pandora",
    description:
      "A music streaming and automated music recommendation service.",
    link: "https://pandora.com",
  },
];

const UpComingWebinar = () => {
  return (
    <div className="p-12 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center">
          <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">
            FEATURED WEBINARS
          </h2>
          <p
            className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white
          sm:text-4xl"
          >
            Enhance Your Musical Journey
          </p>{" "}
        </div>
        <div className="mt-10">
          <HoverEffect items={musicwebinars} />
        </div>
        <div className="mt-10 text-center">
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
    </div>
  );
};

export default UpComingWebinar;
