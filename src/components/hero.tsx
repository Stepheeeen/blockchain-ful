import React from 'react';
import { Globe, Users, Shield, Sparkles, ArrowRight } from 'lucide-react';

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-center px-4">
        {/* Animated background element */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-96 h-96 bg-purple-500/20 rounded-full blur-3xl -top-10 -left-10 animate-pulse" />
          <div className="absolute w-96 h-96 bg-blue-500/20 rounded-full blur-3xl -bottom-10 -right-10 animate-pulse" />
        </div>
        
        {/* Content */}
        <div className="relative z-10 text-center max-w-4xl">
          <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
            Web3 Community Hub
          </h1>
          <p className="text-xl mb-8 text-gray-300">
            Join the decentralized revolution. Connect, collaborate, and create the future of the web together.
          </p>
          <div className="flex gap-4 justify-center">
            <button className="group bg-gradient-to-r from-purple-500 to-blue-500 px-8 py-3 rounded-lg font-semibold flex items-center gap-2 hover:opacity-90 transition-all">
              Connect Wallet
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-8 py-3 rounded-lg font-semibold border border-gray-700 hover:bg-gray-800 transition-all">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-24 px-4 bg-gray-900/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-16 text-center bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
            Why Join Our Community
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard 
              icon={<Globe className="w-8 h-8" />}
              title="Decentralized Network"
              description="Connect with like-minded individuals in a truly decentralized ecosystem powered by blockchain technology."
            />
            <FeatureCard 
              icon={<Users className="w-8 h-8" />}
              title="Active Community"
              description="Engage with passionate Web3 enthusiasts, developers, and creators in our vibrant community."
            />
            <FeatureCard 
              icon={<Shield className="w-8 h-8" />}
              title="Secure Platform"
              description="Built with cutting-edge blockchain security to ensure your assets and data remain protected."
            />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-16 text-center bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
            Community Voices
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <TestimonialCard 
              quote="Being part of this Web3 community has opened up incredible opportunities for collaboration and growth."
              author="Alex.eth"
              role="DeFi Developer"
            />
            <TestimonialCard 
              quote="The support and knowledge sharing in this community is unmatched. It's where Web3 innovation happens."
              author="CryptoNinja"
              role="NFT Artist"
            />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 px-4 bg-gray-900/50">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 text-center">
          <StatCard number="10K+" label="Community Members" />
          <StatCard number="500+" label="Daily Active Users" />
          <StatCard number="1M+" label="Transactions" />
        </div>
      </section>
    </div>
  );
};

const FeatureCard = ({ icon, title, description }:any) => (
  <div className="p-8 rounded-xl bg-gray-800/50 border border-gray-700 hover:border-purple-500/50 transition-all group" id='#'>
    <div className="mb-4 text-purple-400 group-hover:scale-110 transition-transform">
      {icon}
    </div>
    <h3 className="text-xl font-bold mb-3">{title}</h3>
    <p className="text-gray-400">{description}</p>
  </div>
);

const TestimonialCard = ({ quote, author, role }:any) => (
  <div className="p-8 rounded-xl bg-gray-800/50 border border-gray-700">
    <Sparkles className="w-8 h-8 text-purple-400 mb-4" />
    <p className="text-lg mb-6 text-gray-300">{quote}</p>
    <div>
      <p className="font-bold">{author}</p>
      <p className="text-gray-400">{role}</p>
    </div>
  </div>
);

const StatCard = ({ number, label }:any) => (
  <div className="p-8 rounded-xl bg-gray-800/50 border border-gray-700">
    <p className="text-4xl font-bold mb-2 bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
      {number}
    </p>
    <p className="text-gray-400">{label}</p>
  </div>
);

export default Home;