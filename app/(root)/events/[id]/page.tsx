import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { User2Icon } from "lucide-react";
import {
  getEventById,
  getRegisteredByUser,
  getRelatedEvents,
  registerEvent,
} from "@/lib/actions/event.actions";
import { formatDateTime } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { SignedIn, SignedOut, auth } from "@clerk/nextjs";
import RegisterButton from "@/components/shared/RegisterButton";
import { getUserById } from "@/lib/actions/user.actions";
import { useState } from "react";
import EventCard from "@/components/EventCard";

type EventDetails = {
  params: { id: string };
};

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

export default async function EventDetails({ params: { id } }: EventDetails) {
  const { sessionClaims } = auth();
  const userId = sessionClaims?.userId as string;
  const event = await getEventById(id);

  const isEventCreator =
    event.organizer && userId === event.organizer._id.toString();

  // let isRegistered = false;

  // const registered = (await getRegisteredByUser({
  //   userId,
  // })) as unknown as { data: RegisteredEvent[] };
  // if (registered && registered.data) {
  //   const eventIds = registered.data.map((event) => event._id);
  //   isRegistered = eventIds.includes(id);
  // }

  // const registered = await getRegisteredByUser({userId})

  const related = await getRelatedEvents({
    eventId: event._id,
    category: event.category,
  });

  return (
    <div className="bg-gray-900 text-gray-50 min-h-screen">
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-12 md:grid-cols-[1fr_2fr] md:gap-16">
            <div className="flex justify-center">
              <Image
                src={event.imageUrl}
                width={600}
                height={300}
                alt="Event Banner"
                className="rounded-xl object-cover"
              />
            </div>
            <div className="space-y-6">
              <div className="inline-block rounded-lg bg-gray-800 px-3 py-1 text-sm">
                {event.category}
              </div>
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
                {event.title}
              </h1>
              <div className="flex items-center gap-4 text-sm text-gray-400">
                <div className="flex flex-col">
                  <span className="font-semibold">Date:</span>
                  <p>{formatDateTime(event.startDateTime).dateOnly} to </p>
                  <p>{formatDateTime(event.endDateTime).dateOnly}</p>
                </div>
                <Separator orientation="vertical" className="h-6" />
                <div className="flex flex-col">
                  <span className="font-semibold">Location:</span>
                  <span>{event.location}</span>
                </div>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-400">
                <User2Icon className="w-4 h-4" />
                <div className="font-semibold">{event.organizer.username}</div>
                <Link href={event.url} target="_blank" className="">
                  {event.url}
                </Link>
              </div>

              <SignedOut>
                <Button asChild className="button rounded-full" size="lg">
                  <Link href="/sign-in">Get Tickets</Link>
                </Button>
              </SignedOut>

              <SignedIn>
                {!isEventCreator && (
                  <RegisterButton userId={userId} eventId={id} />
                )}

                {isEventCreator && (
                  <Link href="/profile">
                    <Button className="mt-5">Go to Profile</Button>
                  </Link>
                )}
              </SignedIn>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 border-t border-gray-800">
        <div className="container mx-auto px-4 md:px-6">
          <div className="prose max-w-none text-gray-300">
            <h2 className="text-2xl font-bold mb-4">About the Event</h2>
            <p>{event.description}</p>
          </div>
        </div>
      </section>
      <section className="w-full py-10 md:py-20 lg:py-20 border-t border-gray-800">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-2xl font-bold mb-10">You might also like</h2>
          <EventCard
            data={related?.data}
            empty="No Events Found"
            collection="All Events"
          />
        </div>
      </section>
    </div>
  );
}
