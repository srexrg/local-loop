
import EventCard from "@/components/EventCard";
import { Button } from "@/components/ui/button";
import { getEventByUser, getRegisteredByUser } from "@/lib/actions/event.actions";
import { auth } from "@clerk/nextjs";
import Link from "next/link";
import React from "react";

const ProfilePage = async () => {
   const { sessionClaims } = auth();
   const userId = sessionClaims?.userId as string;

  const organizedEvents = await getEventByUser({ userId });
  console.log("Organized are", organizedEvents);

  const registeredEvents = await getRegisteredByUser({userId});
  console.log("Registered are",registeredEvents)

  return (
    <>
      <section className="bg-gray-900 text-gray-50 bg-dotted-pattern bg-cover bg-center py-5 md:py-10">
        <div className="wrapper flex items-center justify-center sm:justify-between">
          <h3 className="h3-bold text-center sm:text-left">Events Organized</h3>
          <Button asChild size="lg" className="button hidden sm:flex">
            <Link href="/events/create">Create New Event</Link>
          </Button>
        </div>
      </section>

      <section className="wrapper my-8">
        <EventCard
          data={organizedEvents?.data}
          empty="No events have been created yet"
          collection="Events Organized"
        />
      </section>
      <section className="bg-gray-900 text-white bg-cover bg-center py-5 md:py-10">
        <div className="wrapper flex items-center justify-center sm:justify-between">
          <h3 className="h3-bold text-center sm:text-left">My Tickets</h3>
          <Button asChild size="lg" className="button hidden sm:flex">
            <Link href="/events">Explore More Events</Link>
          </Button>
        </div>
      </section>
      <section className="wrapper my-8">
        <EventCard
          data={registeredEvents?.data}
          empty="No event tickets purchased yet"
          collection="My Tickets"
        />
      </section>
    </>
  );
};

export default ProfilePage;
