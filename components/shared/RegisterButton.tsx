"use client"

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  registerEvent,
} from "@/lib/actions/event.actions";
import { useRouter } from "next/navigation";

type RegisterButtonProps = {
  userId: string;
  eventId: string;
};

export default function RegisterButton({
  userId,
  eventId,
}: RegisterButtonProps) {
  const [isRegistering, setIsRegistering] = useState(false);
  const router = useRouter()

  const handleRegister = async () => {
    setIsRegistering(true);
    try {
      const register = await registerEvent({ userId, eventId });
      router.push('/profile')

      console.log(`Registerd with ${userId} and ${eventId} `)
    } catch (error) {
      console.error("Error registering for event:", error);
    } finally {
      setIsRegistering(false);
    }
  };

  return (
    <Button onClick={handleRegister} disabled={isRegistering}>
      {isRegistering ? "Booking..." : "Book Now"}
    </Button>
  );
}
