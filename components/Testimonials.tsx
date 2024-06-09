import React from 'react'
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
function Testimonials() {
  return (
    <div>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-900">
        <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6 lg:gap-10">
          <div className="space-y-3">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              What People Are Saying
            </h2>
            <p className="mx-auto max-w-[700px] text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Hear from past participants about their experience at Local Loop
              events.
            </p>
          </div>
          <div className="divide-y rounded-lg border border-gray-800">
            <div className="grid w-full grid-cols-3 items-stretch justify-center divide-x md:grid-cols-3">
              <div className="mx-auto flex w-full items-center justify-center p-4 sm:p-8">
                <div className="flex flex-col items-center justify-center space-y-2">
                  <Avatar>
                    <AvatarFallback className='bg-black'>JD</AvatarFallback>
                  </Avatar>
                  <p className="text-sm font-medium">John Doe</p>
                  <p className="text-sm text-gray-400">Software Engineer</p>
                  <p className="text-sm text-gray-400">
                    The Local Loop events have been a great way for me to
                    connect with like-minded individuals in my community.
                  </p>
                </div>
              </div>
              <div className="mx-auto flex w-full items-center justify-center p-4 sm:p-8">
                <div className="flex flex-col items-center justify-center space-y-2">
                  <Avatar>
                    <AvatarFallback className='bg-black'>SM</AvatarFallback>
                  </Avatar>
                  <p className="text-sm font-medium">Sarah Miller</p>
                  <p className="text-sm text-gray-400">Graphic Designer</p>
                  <p className="text-sm text-gray-400">
                    The events which are being conducted here really helped me to network more and helped in increasing my social life
                  </p>
                </div>
              </div>
              <div className="mx-auto flex w-full items-center justify-center p-4 sm:p-8">
                <div className="flex flex-col items-center justify-center space-y-2">
                  <Avatar>
                    <AvatarFallback className='bg-black'>MJ</AvatarFallback>
                  </Avatar>
                  <p className="text-sm font-medium">Michael Johnson</p>
                  <p className="text-sm text-gray-400">Entrepreneur</p>
                  <p className="text-sm text-gray-400">
                    The Local Loop community has been invaluable for
                    networking and finding new business opportunities.;
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Testimonials
