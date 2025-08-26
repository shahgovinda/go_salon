
import BlurText from "@/components/BlurText";
import Section3 from "@/components/homepage/Section3";
import { AnimatedGradientText } from "@/components/magicui/animated-gradient-text";
import { BlurFade } from "@/components/magicui/blur-fade";
import { NumberTicker } from "@/components/magicui/number-ticker";
import { ServicesMenu } from "@/components/homepage/ServiceMenu";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion"

export default function Home() {
  return (
    <main>
      <section className="py- flex items-center justify-center min-h-[calc(100vh-150px)] border">
        <div className="grid grid-cols-1 gap-20 md:grid-cols-2 container px-40 mx-auto borde border-red-500">
          <div className="border flex gap-3 flex-col justify-center items-start">
            <div className="group relative  flex  rounded-full px-4 py-1.5   ">
              <span
                className={cn(
                  "absolute inset-0 block h-full w-full animate-gradient rounded-[inherit] bg-gradient-to-r  from-[#ffaa40]/70 via-[#9c40ff]/80 to-[#ffaa40]/70 bg-[length:300%_100%] p-[3px]",
                )}
                style={{
                  WebkitMask:
                    "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                  WebkitMaskComposite: "destination-out",
                  mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                  maskComposite: "subtract",
                  WebkitClipPath: "padding-box",
                }}
              />

              <AnimatedGradientText className="text-2xl font-bold carattere-font">
                Priya
              </AnimatedGradientText>
            </div>
            <BlurText
              text="Explore a Hand Picked edit of skincare and makeup, guided by trust not trends."
              delay={150}
              animateBy="words"
              direction="top"
              className="text-5xl instrument-font font-bold"
            />

          </div>
          <div className="border flex items-center justify-center size-[500px]">
            <BlurFade delay={0.5} blur="10px" inView>
              <img
                className=" size-full  object-cover"
                src="/hero.jpg"
              />
            </BlurFade>
          </div>

        </div>
      </section>

      <section className=" py-50 border">
        <div className="container px-40 grid grid-cols-1 lg:grid-cols-3 gap-30 mx-auto ">
          <div className="flex flex-col gap-5 justify-center items-start">
            <div className="flex gap-10 ">
              <div className="inline-flex -space-x-2">
                <Avatar>
                  <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                </Avatar>
                <Avatar>
                  <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                </Avatar>
                <Avatar>
                  <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                </Avatar>
                <Avatar>
                  <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                </Avatar>
              </div>
              <p className="text-muted-foreground text-sm">200+ Satisfied Clients All Over Mumbai</p>
            </div>
            <Button className="w-full">Contact Me</Button>
          </div>
          <div className="col-span-2 flex flex-row justify-between">
            <span>
              <span className="flex item-center gap-2">
                <NumberTicker
                  value={100}
                  className="whitespace-pre-wrap text-8xl instrument-font font-bold tracking-tighter text-black dark:text-white"
                />
                <p className="text-6xl instrument-font font-bold  text-black dark:text-white">+</p>
              </span>
              <p className="text-muted-foreground text-sm">Years of Experience</p>
            </span>
            <span>
              <span className="flex item-center gap-2">
                <NumberTicker
                  value={200}
                  className="whitespace-pre-wrap text-8xl instrument-font font-bold tracking-tighter text-black dark:text-white"
                />
                <p className="text-6xl instrument-font font-bold  text-black dark:text-white">+</p>
              </span>
              <p className="text-muted-foreground text-sm">Happy Customers</p>
            </span>
            <span>
              <span className="flex item-center gap-2">
                <NumberTicker
                  value={40}
                  className="whitespace-pre-wrap text-8xl instrument-font font-bold tracking-tighter text-black dark:text-white"
                />
                <p className="text-6xl instrument-font font-bold  text-black dark:text-white">+</p>
              </span>
              <p className="text-muted-foreground text-sm">Varieties of Services</p>
            </span>
          </div>
        </div>
      </section>

      <section className="mt-20 py-50 bg- ">
        <Section3/>
      </section>

      <section className="border border-yellow-600 mt-20 py-50 ">
        <ServicesMenu />
      </section>
    </main>
  );
}
