"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { registerEvent } from "@/lib/actions/event.actions";
import { useRouter } from "next/navigation";
import { useToast } from "@/components/ui/use-toast";

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
  const router = useRouter();

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

      // console.log(`Registerd with ${userId} and ${eventId} `);
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
    <Button onClick={handleRegister} disabled={isRegistering}>
      {isRegistering ? "Booking..." : "Book Now"}
    </Button>
  );
}
