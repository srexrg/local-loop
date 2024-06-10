"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  registerEvent,
  getRegisteredByUser,
} from "@/lib/actions/event.actions";
import { useRouter } from "next/navigation";
import { useToast } from "@/components/ui/use-toast";
import Link from "next/link";

type RegisterButtonProps = {
  userId: string;
  eventId: string;
};

export default function RegisterButton({
  userId,
  eventId,
}: RegisterButtonProps) {
  const { toast } = useToast();

  const [isRegistering, setIsRegistering] = useState(false);
  const [isAlreadyRegistered, setIsAlreadyRegistered] = useState(false);
  const router = useRouter();

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
      router.push("/profile");
      toast({
        title: "Registered!",
        description: "You succesfully registered for the event",
        duration: 5000,
        className: "success-toast",
      });
    } catch (error) {
      console.error("Error registering for event:", error);
      toast({
        title: "Error!",
        description: "Error while registering the event",
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
        <Link href="/profile">
          <Button className="mt-5">Go to Event</Button>
        </Link>
      )}
    </>
  );
}
