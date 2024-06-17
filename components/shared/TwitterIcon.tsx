"use client";

import { useEffect, useRef, useState } from "react";
import { LinkedinShareButton, TwitterShareButton, WhatsappShareButton } from "next-share";
import { Button } from "../ui/button";
import { FaLinkedin, FaTwitter, FaWhatsapp } from "react-icons/fa";



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

type ShareButtonProps = {
  event: RegisteredEvent;
};

const ShareButton: React.FC<ShareButtonProps> = ({ event }) => {
  const buttonRef = useRef<HTMLSpanElement | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  const shareUrl = `https://local-loop.vercel.app/events/${event._id}`;
  const shareText = `Hey guys, join me on ${event.title}!`;

  function handleOnClick(event: MouseEvent) {
    if (
      buttonRef.current &&
      !event.composedPath().includes(buttonRef.current)
    ) {
      setIsOpen(false);
    }
  }

  useEffect(() => {
    document.body.addEventListener("click", handleOnClick);
    return () => {
      document.body.removeEventListener("click", handleOnClick);
    };
  }, []);

  return (
    <div className="relative inline-block ml-10">
      <span ref={buttonRef}>
        <Button className="mt-5" onClick={() => setIsOpen(!isOpen)}>
          Share
        </Button>
        <ul
          className={`${
            isOpen ? "opacity-100 visible" : "opacity-0 invisible"
          } absolute top-full left-0 mt-2 w-48 bg-gray-800 text-white shadow-lg py-2 transition-opacity z-10`}
        >
          <li className="hover:bg-gray-700">
            <TwitterShareButton
              url={shareUrl}
              title={shareText}
              className="flex items-center gap-2 text-white px-4 py-2"
            >
              <FaTwitter className="w-4 h-4 ml-5 mr-2 inline-block" />
              <span className="inline-block font-medium">Share on Twitter</span>
            </TwitterShareButton>
          </li>
          <li className="hover:bg-gray-700">
            <LinkedinShareButton
              url={shareUrl}
              content={shareText}
              className="flex items-center gap-2 text-white px-4 py-2"
            >
              <FaLinkedin className="w-4 h-4 ml-5 mr-2 inline-block" />
              <span className="inline-block font-medium">
                Share on LinkedIn
              </span>
            </LinkedinShareButton>
          </li>
          <li className="hover:bg-gray-700">
            <WhatsappShareButton
              url={shareUrl}
              title={shareText}
              className="flex items-center gap-2 text-white px-4 py-2"
            >
              <FaWhatsapp className="w-4 h-4 ml-5 mr-2 inline-block" />
              <span className="inline-block font-medium">
                Share on Whatsapp
              </span>
            </WhatsappShareButton>
          </li>
        </ul>
      </span>
    </div>
  );
};

export default ShareButton;
