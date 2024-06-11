"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  registerEvent,
  getRegisteredByUser,
} from "@/lib/actions/event.actions";
import { useRouter } from "next/navigation";
import { useToast } from "@/components/ui/use-toast";
import AddToCalendarButton from "@/components/shared/AddtoCalender";
import Link from "next/link";

type RegisterAndAddToCalendarProps = {
  userId: string;
  eventId: string;
  calendarEvent: {
    title: string;
    description: string;
    start: string;
    end: string;
    location: string;
  };
};

export default function RegisterAndAddToCalendar({
  userId,
  eventId,
  calendarEvent,
}: RegisterAndAddToCalendarProps) {
  const { toast } = useToast();
  const router = useRouter();

  const [isRegistering, setIsRegistering] = useState(false);
  const [isAlreadyRegistered, setIsAlreadyRegistered] = useState(false);

  useEffect(() => {
    const checkRegistration = async () => {
      try {
        const registered = await getRegisteredByUser({ userId });
        if (registered && registered.data) {
          const eventIds = registered.data.map(
            (event: { _id: any }) => event._id
          );
          setIsAlreadyRegistered(eventIds.includes(eventId));
        }
      } catch (error) {
        console.error("Error checking registration:", error);
      }
    };

    checkRegistration();
  }, [userId, eventId]);

  const handleRegister = async () => {
    setIsRegistering(true);
    try {
      const register = await registerEvent({ userId, eventId });
      toast({
        title: "Registered!",
        description: "You successfully registered for the event",
        duration: 5000,
        className: "success-toast",
      });
      setIsAlreadyRegistered(true);
    } catch (error) {
      console.error("Error registering for event:", error);
      toast({
        title: "Error!",
        description: "Error while registering for the event",
        duration: 5000,
        className: "error-toast",
      });
    } finally {
      setIsRegistering(false);
    }
  };

  return (
    <>
      {!isAlreadyRegistered && (
        <Button onClick={handleRegister} disabled={isRegistering}>
          {isRegistering ? "Booking..." : "Book Now"}
        </Button>
      )}
      {isAlreadyRegistered && (
        <>
          <Link href="/profile">
            <Button className="mt-5">Go to Event</Button>
          </Link>
          <AddToCalendarButton event={calendarEvent} />
        </>
      )}
    </>
  );
}
