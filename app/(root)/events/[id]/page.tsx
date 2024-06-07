import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { User2Icon } from "lucide-react";
import { getEventById, getRelatedEvents } from "@/lib/actions/event.actions";
import { formatDateTime } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

type EventDetails = {
  params: { id: string };
};

export default async function EventDetails({ params: { id } }: EventDetails) {
  const event = await getEventById(id);
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
                  <span className="font-semibold">Price:</span>
                  <span>{event.price}</span>
                </div>
                <Separator orientation="vertical" className="h-6" />
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
                <div className="font-semibold">
                  {event.organizer.username}
                </div>
                <Link  href={event.url} className="">
                  {event.url}
                </Link>
              </div>
              <Button className="mt-4">Register Now</Button>
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
    </div>
  );
}
