import React from 'react';
import { Target, BookOpen, Lightbulb, Shield, Users, Cpu } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white" id='about'>
      {/* Hero Section */}
      <section className="relative py-24 px-4">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-96 h-96 bg-purple-500/20 rounded-full blur-3xl -top-10 -right-10 animate-pulse" />
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
            Pioneering the Future of Web3
          </h1>
          <p className="text-xl text-gray-300">
            We're building more than just a platform - we're creating a decentralized ecosystem where innovation meets community.
          </p>
        </div>
      </section>

      {/* Mission and Vision */}
      <section className="py-24 px-4 bg-gray-900/50">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
          <div className="p-8 rounded-xl bg-gray-800/50 border border-gray-700">
            <Target className="w-12 h-12 text-purple-400 mb-6" />
            <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
            <p className="text-gray-300 leading-relaxed">
              To democratize access to Web3 technologies and create a thriving ecosystem where developers, creators, and enthusiasts can collaborate, innovate, and shape the future of the decentralized web.
            </p>
          </div>
          <div className="p-8 rounded-xl bg-gray-800/50 border border-gray-700">
            <Lightbulb className="w-12 h-12 text-purple-400 mb-6" />
            <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
            <p className="text-gray-300 leading-relaxed">
              A world where decentralized technologies empower individuals, foster innovation, and create opportunities for meaningful connections and value creation across the global Web3 community.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-24 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
              Our Journey
            </h2>
            <p className="text-gray-300 leading-relaxed">
              Founded by a group of blockchain enthusiasts and developers in 2020, we've grown from a small community of innovators into a thriving ecosystem of Web3 pioneers. Our platform has facilitated countless collaborations, launched groundbreaking projects, and helped shape the future of decentralized technology.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <MilestoneCard 
              year="2020"
              title="Foundation"
              description="Launched with a vision to unite Web3 innovators"
            />
            <MilestoneCard 
              year="2022"
              title="Growth"
              description="Reached 10,000 active community members"
            />
            <MilestoneCard 
              year="2024"
              title="Innovation"
              description="Pioneering new Web3 collaboration tools"
            />
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 px-4 bg-gray-900/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-16 text-center bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
            Why Choose Our Platform
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard 
              icon={<Shield className="w-8 h-8" />}
              title="Security First"
              description="Built on blockchain technology with robust security measures"
            />
            <FeatureCard 
              icon={<Users className="w-8 h-8" />}
              title="Community Driven"
              description="Governed by our community through decentralized voting"
            />
            <FeatureCard 
              icon={<Cpu className="w-8 h-8" />}
              title="Cutting-edge Tech"
              description="Leveraging the latest in Web3 and blockchain innovation"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

const MilestoneCard = ({ year, title, description }:any) => (
  <div className="p-6 rounded-xl bg-gray-800/50 border border-gray-700 text-center">
    <p className="text-2xl font-bold text-purple-400 mb-2">{year}</p>
    <h3 className="text-xl font-bold mb-2">{title}</h3>
    <p className="text-gray-400">{description}</p>
  </div>
);

const FeatureCard = ({ icon, title, description }:any) => (
  <div className="p-8 rounded-xl bg-gray-800/50 border border-gray-700 hover:border-purple-500/50 transition-all group">
    <div className="mb-4 text-purple-400 group-hover:scale-110 transition-transform">
      {icon}
    </div>
    <h3 className="text-xl font-bold mb-3">{title}</h3>
    <p className="text-gray-400">{description}</p>
  </div>
);

export default About;