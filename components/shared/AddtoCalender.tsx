"use client"

import { useEffect, useRef, useState } from "react";
import {
  google,
  outlook,
  office365,
  yahoo,
  ics,
  CalendarEvent,
} from "calendar-link";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";

type AddToCalendarButtonProps = {
  event: CalendarEvent;
};

const AddToCalendarButton: React.FC<AddToCalendarButtonProps> = ({ event }) => {
  const buttonRef = useRef<HTMLSpanElement | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  const googleUrl = google(event);
  const outlookUrl = outlook(event);
  const office365Url = office365(event);
  const yahooUrl = yahoo(event);
  const icsUrl = ics(event);

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
    <div className="relative inline-block ml-5">
      <span ref={buttonRef}>
        <Button className="mt-5" onClick={() => setIsOpen(!isOpen)}>
          Add to Calendar
        </Button>
        <ul
          className={`${
            isOpen ? "opacity-100 visible" : "opacity-0 invisible"
          } absolute top-full left-0 mt-2 w-48 bg-gray-800 text-white shadow-lg py-2 transition-opacity z-10`}
        >
          <li>
            <Link
              href={googleUrl}
              target="_blank"
              className="flex items-center gap-2 text-white hover:bg-gray-700 px-4 py-2"
            >
              <Image
                alt="Google Calendar"
                src="/google.svg"
                width={25}
                height={25}
              />
              Google Calendar
            </Link>
          </li>
          <li>
            <Link
              href={office365Url}
              target="_blank"
              className="flex items-center gap-2 text-white hover:bg-gray-700 px-4 py-2"
            >
              <Image
                alt="Office 365 Calendar"
                src="/office.svg"
                width={25}
                height={25}
              />
              Office 365
            </Link>
          </li>
          <li>
            <Link
              href={outlookUrl}
              target="_blank"
              className="flex items-center gap-2 text-white hover:bg-gray-700 px-4 py-2"
            >
              <Image
                alt="Outlook Calendar"
                src="/outlook.svg"
                width={25}
                height={25}
              />
              Outlook Calendar
            </Link>
          </li>
          <li>
            <Link
              href={yahooUrl}
              target="_blank"
              className="flex items-center gap-2 text-white hover:bg-gray-700 px-4 py-2"
            >
              <Image
                alt="Yahoo Calendar"
                src="/yahoo.svg"
                width={25}
                height={25}
              />
              Yahoo Calendar
            </Link>
          </li>
        </ul>
      </span>
    </div>
  );
};

export default AddToCalendarButton;
