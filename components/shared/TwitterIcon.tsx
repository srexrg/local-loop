"use client";

import React from "react";
import { BirdIcon } from "lucide-react";
import { TwitterShareButton } from "next-share";
import { Button } from "../ui/button";
import { FaTwitter } from "react-icons/fa";
type RegisteredEvent = {
  _id: string;
  category: string;
  description: string;
  endDateTime: string;
  imageUrl: string;
  location: string;
  organizer: {
    _id: string;
    username: string;
    firstName: string;
    lastName: string;
  };
  startDateTime: string;
  title: string;
};

function TwitterIcon({ event }: { event: RegisteredEvent }) {
  const shareUrl = `https://local-loop.vercel.app/events/${event._id}`;
  const shareText = `Hey guys, join me on ${event.title}!`;

  return (
    <TwitterShareButton url={shareUrl} title={shareText}>
      Share on Twitter
    </TwitterShareButton>
  );
}

export default TwitterIcon;
