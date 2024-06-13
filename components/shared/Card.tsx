import { IEvent } from "@/lib/database/models/event.model";
import { formatDateTime } from "@/lib/utils";
import { auth, currentUser } from "@clerk/nextjs/server";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { DeleteConfirmation } from "./DeleteConfirmation";

type CardProps = {
  event: IEvent;
  hasOrderLink?: boolean;
  hidePrice?: boolean;
};

const Card = async ({ event, hasOrderLink, hidePrice }: CardProps) => {
   const user = await currentUser();
  const userId = user?.publicMetadata.userId as string;
  console.log("Card page",userId)

  const isEventCreator =
    event.organizer && userId === event.organizer._id.toString();

  return (
    <div className="group relative flex min-h-[450px] w-full max-w-[450px] flex-col overflow-hidden rounded-xl shadow-lg transition-all hover:shadow-2xl md:min-h-[500px]">
      <Link
        href={`/events/${event._id}`}
        style={{ backgroundImage: `url(${event.imageUrl})` }}
        className="flex-center flex-grow bg-gray-700 bg-cover bg-center text-grey-500 h-64"
      />

      {isEventCreator && !hidePrice && (
        <div className="absolute right-2 top-2 flex flex-col gap-4 rounded-xl bg-gray-900 p-3 shadow-md transition-all">
          <DeleteConfirmation eventId={event._id} />
        </div>
      )}

      <div className="flex min-h-[250px] flex-col gap-4 p-6 md:gap-5 bg-slate-800 text-white">
        {!hidePrice && (
          <div className="flex gap-3">
            <p className="p-semibold-14 w-min rounded-full bg-grey-500/10 px-4 py-1 text-white line-clamp-1">
              {event.category}
            </p>
          </div>
        )}

        <p className="p-medium-16 p-medium-18 text-gray-400">
          {formatDateTime(event.startDateTime).dateTime}
        </p>

        <Link href={`/events/${event._id}`}>
          <p className="p-medium-16 md:p-medium-20 line-clamp-2 flex-1 text-white">
            {event.title}
          </p>
        </Link>

        <div className="flex justify-between w-full">
          <p className="p-bold-24 md:p-bold text-white">
            Organizer: {event.organizer.firstName || event.organizer.username}
          </p>

          {/* {hasOrderLink && (
              <Link href={`/orders?eventId=${event._id}`} className="flex gap-2">
                <p className="text-primary-500">Order Details</p>
                <Image
                  src="/assets/icons/arrow.svg"
                  alt="search"
                  width={12}
                  height={12}
                />
              </Link>
            )} */}
        </div>
      </div>
    </div>
  );
};

export default Card;
