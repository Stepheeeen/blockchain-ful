import React from 'react';
import { Calendar, Clock, MapPin, Users, ArrowRight, Wallet, Globe, Tag } from 'lucide-react';

const Events = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white"  id='events'>
      {/* Hero Section */}
      <section className="relative py-24 px-4">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-96 h-96 bg-purple-500/20 rounded-full blur-3xl -top-10 -left-10 animate-pulse" />
          <div className="absolute w-96 h-96 bg-blue-500/20 rounded-full blur-3xl -bottom-10 -right-10 animate-pulse" />
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
            Web3 Community Events
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Connect, learn, and grow with the leading minds in Web3
          </p>
          <button className="group bg-gradient-to-r from-purple-500 to-blue-500 px-8 py-3 rounded-lg font-semibold flex items-center gap-2 hover:opacity-90 transition-all mx-auto">
            View All Events
            <ArrowRight className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </section>

      {/* Featured Event */}
      <section className="py-16 px-4 bg-gray-900/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
            Featured Event
          </h2>
          <div className="p-8 rounded-xl bg-gray-800/50 border border-gray-700 flex flex-col md:flex-row gap-8 items-center">
            <div className="w-full md:w-1/3">
              <div className="aspect-video rounded-lg bg-gradient-to-r from-purple-500/20 to-blue-500/20 flex items-center justify-center">
                <Globe className="w-16 h-16 text-purple-400" />
              </div>
            </div>
            <div className="w-full md:w-2/3">
              <div className="flex items-center gap-2 text-purple-400 mb-2">
                <Tag className="w-4 h-4" />
                <span className="text-sm">Featured</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Web3 Global Summit 2024</h3>
              <p className="text-gray-300 mb-6">
                Join industry leaders for three days of intensive learning, networking, and collaboration. Discover the latest in blockchain technology, DeFi, and Web3 development.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
                <EventDetail icon={<Calendar className="w-4 h-4" />} text="June 25-27, 2024" />
                <EventDetail icon={<Clock className="w-4 h-4" />} text="9:00 AM - 6:00 PM" />
                <EventDetail icon={<MapPin className="w-4 h-4" />} text="Virtual & Los Angeles" />
              </div>
              <button className="bg-gradient-to-r from-purple-500 to-blue-500 px-6 py-2 rounded-lg font-semibold hover:opacity-90 transition-all">
                Register Now
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
            Upcoming Events
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <EventCard 
              title="DeFi Development Workshop"
              date="July 15, 2024"
              time="2:00 PM - 4:00 PM UTC"
              location="Virtual"
              attendees="150"
              price="0.1 ETH"
            />
            <EventCard 
              title="NFT Creator Conference"
              date="August 5, 2024"
              time="10:00 AM - 6:00 PM UTC"
              location="Paris & Virtual"
              attendees="500"
              price="0.2 ETH"
            />
            <EventCard 
              title="Web3 Security Symposium"
              date="August 20, 2024"
              time="1:00 PM - 5:00 PM UTC"
              location="Virtual"
              attendees="300"
              price="0.15 ETH"
            />
            <EventCard 
              title="Blockchain Gaming Summit"
              date="September 10, 2024"
              time="9:00 AM - 4:00 PM UTC"
              location="Tokyo & Virtual"
              attendees="400"
              price="0.25 ETH"
            />
          </div>
        </div>
      </section>

      {/* Event Categories */}
      <section className="py-16 px-4 bg-gray-900/50">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-12 bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
            Event Categories
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <CategoryCard icon={<Globe />} name="Conferences" count="5" />
            <CategoryCard icon={<Users />} name="Workshops" count="12" />
            <CategoryCard icon={<Wallet />} name="Hackathons" count="3" />
            <CategoryCard icon={<Clock />} name="Webinars" count="8" />
          </div>
        </div>
      </section>
    </div>
  );
};

const EventDetail = ({ icon, text }:any) => (
  <div className="flex items-center gap-2 text-gray-400">
    {icon}
    <span className="text-sm">{text}</span>
  </div>
);

const EventCard = ({ title, date, time, location, attendees, price }:any) => (
  <div className="p-6 rounded-xl bg-gray-800/50 border border-gray-700 hover:border-purple-500/50 transition-all">
    <h3 className="text-xl font-bold mb-4">{title}</h3>
    <div className="space-y-2 mb-6">
      <EventDetail icon={<Calendar className="w-4 h-4" />} text={date} />
      <EventDetail icon={<Clock className="w-4 h-4" />} text={time} />
      <EventDetail icon={<MapPin className="w-4 h-4" />} text={location} />
      <EventDetail icon={<Users className="w-4 h-4" />} text={`${attendees} attendees`} />
      <EventDetail icon={<Wallet className="w-4 h-4" />} text={price} />
    </div>
    <button className="w-full bg-gradient-to-r from-purple-500 to-blue-500 px-4 py-2 rounded-lg font-semibold hover:opacity-90 transition-all">
      Register
    </button>
  </div>
);

const CategoryCard = ({ icon, name, count }:any) => (
  <div className="p-6 rounded-xl bg-gray-800/50 border border-gray-700 hover:border-purple-500/50 transition-all group cursor-pointer">
    <div className="text-purple-400 mb-3 group-hover:scale-110 transition-transform">
      {icon}
    </div>
    <h3 className="font-bold mb-1">{name}</h3>
    <p className="text-gray-400">{count} Events</p>
  </div>
);

export default Events;