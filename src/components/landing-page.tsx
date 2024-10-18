'use client'

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Camera, MapPin, Calendar, Users, Utensils, Home, ChevronRight, Sun, Moon } from "lucide-react"

export function LandingPageComponent() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="absolute top-0 left-0 right-0 z-20 px-4 lg:px-6 h-14 flex items-center">
        <Link className="flex items-center justify-center" href="#">
          <Camera className="h-6 w-6 text-white" />
          <span className="ml-2 text-lg font-bold text-white">PhotoJourney</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium text-white hover:text-gray-200" href="#">
            Destinations
          </Link>
          <Link className="text-sm font-medium text-white hover:text-gray-200" href="#">
            About Us
          </Link>
          <Link className="text-sm font-medium text-white hover:text-gray-200" href="#">
            Contact
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="relative w-full h-[100vh]">
          <Image
            src="/columbia.jpeg"
            alt="Beautiful Colombian beach at sunset"
            fill
            style={{ objectFit: 'cover' }}
            quality={100}
            priority
            onError={(e) => {
              console.error("Image failed to load", e);
            }}
          />
          {/* Add a fallback background color */}
          <div className="absolute inset-0 bg-gray-300 z-[-1]"></div>
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center h-full">
            <div className="text-center px-4 md:px-6 max-w-4xl">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl text-white mb-6">
                Capture the Beauty of Colombia
              </h1>
              <p className="mx-auto max-w-[700px] text-xl text-gray-200 mb-8">
                Join us in January 2025 for an unforgettable photography adventure along Colombia's stunning coastlines and lush landscapes.
              </p>
              <div className="space-x-4">
                <Link href="#signup">
                  <Button className="bg-white text-black hover:bg-gray-200">
                    Sign Up Now
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="#details">
                  <Button variant="outline" className="text-white border-white hover:bg-white hover:text-black">
                    Learn More
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section id="details" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Trip Details</h2>
            <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3">
              <div className="flex flex-col items-center space-y-2 border-gray-200 p-4 rounded-lg">
                <MapPin className="h-10 w-10 mb-2" />
                <h3 className="text-xl font-bold">Destination</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
                  Colombia's most picturesque locations
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 border-gray-200 p-4 rounded-lg">
                <Calendar className="h-10 w-10 mb-2" />
                <h3 className="text-xl font-bold">Date</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
                  January 2025 (Exact dates TBA)
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 border-gray-200 p-4 rounded-lg">
                <Users className="h-10 w-10 mb-2" />
                <h3 className="text-xl font-bold">Group Size</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
                  Limited spots available
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 border-gray-200 p-4 rounded-lg">
                <Sun className="h-10 w-10 mb-2" />
                <h3 className="text-xl font-bold">Daytime Shoots</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
                  Exotic birds and breathtaking landscapes
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 border-gray-200 p-4 rounded-lg">
                <Moon className="h-10 w-10 mb-2" />
                <h3 className="text-xl font-bold">Evening Shoots</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
                  Stunning sunsets and moonrises
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 border-gray-200 p-4 rounded-lg">
                <Utensils className="h-10 w-10 mb-2" />
                <h3 className="text-xl font-bold">All-Inclusive</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
                  Meals, accommodations, and ground travel included
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">What You'll Experience</h2>
            <div className="grid gap-6 lg:grid-cols-3 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <h3 className="text-xl font-bold">Expert Guidance</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Professional photographers will guide you on camera settings and setup for optimal shots.
                </p>
              </div>
              <div className="flex flex-col justify-center space-y-4">
                <h3 className="text-xl font-bold">Diverse Subjects</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  From exotic birds to stunning landscapes, you'll have a variety of subjects to capture.
                </p>
              </div>
              <div className="flex flex-col justify-center space-y-4">
                <h3 className="text-xl font-bold">Skill Enhancement</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Take your photography skills to the next level with hands-on experience and expert tips.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section id="signup" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Sign Up for the Trip</h2>
            <form className="max-w-md mx-auto space-y-4">
              <Input placeholder="Full Name" />
              <Input type="email" placeholder="Email Address" />
              <Input placeholder="Camera System (e.g., Sony, Nikon, Canon)" />
              <Input placeholder="Photography Experience Level" />
              <Input placeholder="Lenses You'll Bring" />
              <Button type="submit" className="w-full">
                Reserve Your Spot
              </Button>
            </form>
            <p className="mt-4 text-sm text-center text-gray-500">
              Spots are limited and filled on a first-come, first-served basis.
            </p>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Future Destinations</h2>
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <h3 className="text-xl font-bold">Thailand</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Capture the vibrant culture and stunning landscapes of Southeast Asia.
                </p>
              </div>
              <div className="flex flex-col justify-center space-y-4">
                <h3 className="text-xl font-bold">Indonesia</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Explore the diverse islands and unique wildlife of the Indonesian archipelago.
                </p>
              </div>
            </div>
            <div className="mt-12 text-center">
              <Button variant="outline">
                Stay Updated on Future Trips
              </Button>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">
          © 2024 PhotoJourney. All rights reserved.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  )
}
