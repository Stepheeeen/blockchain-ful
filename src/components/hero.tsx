import React from "react";
import {
  Globe,
  Users,
  Shield,
  Sparkles,
  ArrowRight,
  AudioLines,
  BadgeCheck,
} from "lucide-react";
import Link from "next/link";

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
        <div className="relative z-10 text-center max-w-5xl mx-auto px-4 py-20 sm:py-24">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent leading-tight sm:leading-snug">
            EMPOWERING A VISIONARY FUTURE THROUGH BLOCKCHAIN LITERACY
          </h1>
          <p className="text-base sm:text-lg md:text-xl mb-8 text-gray-300 max-w-3xl mx-auto">
            Join a thriving community dedicated to blockchain adoption,
            cryptocurrency education, and the future of AI & NFTs. Whether
            you're a beginner or a builder, we provide free learning and
            hands-on opportunities to grow in Web3. Ready to be part of the
            future?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="group bg-gradient-to-r from-purple-500 to-blue-500 px-6 sm:px-8 py-3 rounded-lg font-semibold flex items-center justify-center gap-2 hover:opacity-90 transition-all text-white">
              Connect Wallet
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <Link href="#about">
              <button className="px-6 sm:px-8 py-3 rounded-lg font-semibold border border-gray-700 hover:bg-gray-800 transition-all text-white">
                Learn More
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-24 px-4 bg-gray-900/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-16 text-center bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
            WHY JOIN OUR COMMUNITY?
          </h2>
          <div className="grid place-items-center gap-8">
            <FeatureCard
              icon={<BadgeCheck className="w-8 h-8" />}
              title="Membership Levels"
              description="BlockchainFUL is made up of passionate individuals at different levels of engagement. Community Members actively learn, connect, and grow in a vibrant blockchain space. High Council Members play a key role in guiding initiatives and decision-making. Team Members are the driving force behind BlockchainFUL’s mission and innovation, ensuring continuous growth and impact."
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
              quote="BlockchainFUL is a life-changing community! I secured my first
              ambassador role and learned social media & community management;
              all for free!. This space is truly empowering!"
              author="@IRepLight"
              role=""
            />
            <TestimonialCard
              quote="The BLOCKCHAINFUL CONFERENCE and CRYPTO PAYMENT FESTIVAL
              were game-changers! I’ve learned so much, met amazing people, and
              had the chance to contribute to impactful projects."
              author="@unekwuojo_tweets"
              role=""
            />
            <TestimonialCard
              quote="Joining BlockchainFUL felt like joining a family. The
              support, learning, and opportunities here are unmatched. I can’t
              wait to see where we go from here!"
              author="@only_bukolaa"
              role=""
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

const FeatureCard = ({ icon, title, description }: any) => (
  <div
    className="p-8 rounded-xl bg-gray-800/50 border border-gray-700 hover:border-purple-500/50 transition-all group"
    id="#"
  >
    <div className="mb-4 text-purple-400 group-hover:scale-110 transition-transform">
      {icon}
    </div>
    <h3 className="text-xl font-bold mb-3">{title}</h3>
    <p className="text-gray-400">{description}</p>
  </div>
);

const TestimonialCard = ({ quote, author, role }: any) => (
  <div className="p-8 rounded-xl bg-gray-800/50 border border-gray-700">
    <AudioLines className="w-8 h-8 text-purple-400 mb-4" />
    <p className="text-lg mb-6 text-gray-300">{quote}</p>
    <div>
      <p className="font-bold">{author}</p>
      <p className="text-gray-400">{role}</p>
    </div>
  </div>
);

const StatCard = ({ number, label }: any) => (
  <div className="p-8 rounded-xl bg-gray-800/50 border border-gray-700">
    <p className="text-4xl font-bold mb-2 bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
      {number}
    </p>
    <p className="text-gray-400">{label}</p>
  </div>
);

export default Home;
