import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { User2Icon } from "lucide-react";
import {
  getEventById,
  getRelatedEvents,
} from "../../../../lib/actions/event.actions";
import { formatDateTime } from "../../../../lib/utils";
import Image from "next/image";
import Link from "next/link";
import { SignedIn, SignedOut } from "@clerk/nextjs";
import RegisterAndAddToCalendar from "@/components/shared/RegisterButton";
import EventCard from "@/components/EventCard";
import { auth, currentUser } from "@clerk/nextjs/server";
import Head from "next/head";
import TwitterIcon from "@/components/shared/TwitterIcon";
import { FaTwitter } from "react-icons/fa";

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
  const user = await currentUser();
  console.log("Metadata", user?.publicMetadata.userId);
  const userId = user?.publicMetadata.userId as string;
  console.log("Event details ", userId);

  const event = await getEventById(id);

  const isEventCreator =
    event.organizer && userId === event.organizer._id.toString();

  const related = await getRelatedEvents({
    eventId: event._id,
    category: event.category,
  });


  const calendarEvent = {
    title: event.title,
    description: event.description,
    start: event.startDateTime,
    end: event.endDateTime,
    location: event.location,
  };

  return (
    <div className="bg-gray-900 text-gray-50 min-h-screen">
      <Head>
        <title>Local Loop </title>
        <meta name="description" content={event.description} />
        <meta property="og:title" content={event.title} />
        <meta property="og:description" content={event.description} />
        <meta property="og:image" content={event.imageUrl} />
        <meta
          property="og:url"
          content={`https://local-loop.vercel.app/events/${event._id}`}
        />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={event.title} />
        <meta name="twitter:description" content={event.description} />
        <meta name="twitter:image" content={event.imageUrl} />
        <meta
          name="twitter:url"
          content={`https://local-loop.vercel.app/events/${event._id}`}
        />
        {/* Linkedin meta */}
        <meta property="linkedin:card" content="summary_large_image" />
        <meta property="linkedin:title" content={event.title} />
        <meta property="linkedin:description" content={event.description} />
        <meta property="linkedin:image" content={event.imageUrl} />
        <meta
          property="linkedin:url"
          content={`https://local-loop.vercel.app/events/${event._id}`}
        />
      </Head>
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
              <div className="flex justify-between items-center">
                <div className="inline-block rounded-lg bg-gray-800 px-3 py-1 text-sm">
                  {event.category}
                </div>
                <div className="flex items-center gap-2 rounded-md p-2 ">
                  <TwitterIcon event={event} />
                </div>
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
                <Button className="button rounded-full" size="lg">
                  <Link href="/sign-in">Get Tickets</Link>
                </Button>
              </SignedOut>

              <SignedIn>
                {!isEventCreator && (
                  <RegisterAndAddToCalendar
                    userId={userId}
                    eventId={id}
                    calendarEvent={calendarEvent}
                  />
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
