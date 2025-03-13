import React from "react";
import {
  Target,
  BookOpen,
  Lightbulb,
  Shield,
  Users,
  Cpu,
  Book,
} from "lucide-react";

const About = () => {
  return (
    <div
      className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white"
      id="about"
    >
      {/* Hero Section */}
      <section className="relative py-24 px-4">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-96 h-96 bg-purple-500/20 rounded-full blur-3xl -top-10 -right-10 animate-pulse" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
            About BLOCKCHAINFUL
          </h1>
          <p className="text-xl text-gray-300">
            BlockchainFUL is dedicated to fostering education, innovation, and
            collaboration within the Web3 ecosystem. Through hands-on workshops,
            hackathons, structured mentorship programs, and active community
            engagement, the organization empowers individuals to explore
            blockchain, DeFi, NFTs, and emerging technologies. Its commitment to
            research and development further supports the advancement of
            knowledge and technological growth in the blockchain space.
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
              Empowering communities through blockchain innovation and
              education.
            </p>
          </div>
          <div className="p-8 rounded-xl bg-gray-800/50 border border-gray-700">
            <Lightbulb className="w-12 h-12 text-purple-400 mb-6" />
            <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
            <p className="text-gray-300 leading-relaxed">
              To drive blockchain adoption by providing resources, education,
              and opportunities for growth.
            </p>
          </div>
          <div className="p-8 rounded-xl bg-gray-800/50 border border-gray-700">
            <BookOpen className="w-12 h-12 text-purple-400 mb-6" />
            <h2 className="text-3xl font-bold mb-4">Our Core Values</h2>
            <p className="text-gray-300 leading-relaxed">
              At <span className="font-semibold">BlockchainFUL</span>, our core
              values guide everything we do. We are committed to{" "}
              <span className="font-semibold">
                empowerment through education
              </span>
              , offering free and accessible resources to help individuals
              confidently navigate the digital landscape. Rooted in{" "}
              <span className="font-semibold">transparency and trust</span>, we
              uphold open and honest communication, inspired by blockchain
              principles. We embrace{" "}
              <span className="font-semibold">inclusivity and diversity</span>,
              fostering a welcoming space for people of all backgrounds and
              experiences. With a strong focus on{" "}
              <span className="font-semibold">innovation and vision</span>, we
              drive forward-thinking ideas to keep our community ahead of
              technological trends. Finally, we believe in{" "}
              <span className="font-semibold">collaboration and community</span>
              , building a supportive network that thrives on shared learning
              and collective growth.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      {/* <section className="py-24 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
              Our Journey
            </h2>
            <p className="text-gray-300 leading-relaxed">
              Founded by a group of blockchain enthusiasts and developers in
              2020, we've grown from a small community of innovators into a
              thriving ecosystem of Web3 pioneers. Our platform has facilitated
              countless collaborations, launched groundbreaking projects, and
              helped shape the future of decentralized technology.
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
      </section> */}

      {/* Why Choose Us */}
      <section className="py-24 px-4 bg-gray-900/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-16 text-center bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
            What Sets Us Apart?
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <FeatureCard
              icon={<Book className="w-8 h-8" />}
              title="Completely Free Learning"
              description="Unlike many platforms that charge for courses, BLOCKCHAINFUL provides free education on Web3 technologies."
            />
            <FeatureCard
              icon={<Lightbulb className="w-8 h-8" />}
              title="A Vision-Driven Approach"
              description="We don’t just educate; we inspire and empower individuals to become pioneers in blockchain adoption"
            />
            <FeatureCard
              icon={<Users className="w-8 h-8" />}
              title="Strong Community Focus"
              description="We prioritize knowledge-sharing, networking, and skill development over speculation and financial gains."
            />
            <FeatureCard
              icon={<Cpu className="w-8 h-8" />}
              title="Beyond Blockchain"
              description="We integrate learning on NFTs, AI, and digital finance to keep our members ahead of emerging technologies."
            />
          </div>
        </div>
      </section>
    </div>
  );
};

const MilestoneCard = ({ year, title, description }: any) => (
  <div className="p-6 rounded-xl bg-gray-800/50 border border-gray-700 text-center">
    <p className="text-2xl font-bold text-purple-400 mb-2">{year}</p>
    <h3 className="text-xl font-bold mb-2">{title}</h3>
    <p className="text-gray-400">{description}</p>
  </div>
);

const FeatureCard = ({ icon, title, description }: any) => (
  <div className="p-8 rounded-xl bg-gray-800/50 border border-gray-700 hover:border-purple-500/50 transition-all group">
    <div className="mb-4 text-purple-400 group-hover:scale-110 transition-transform">
      {icon}
    </div>
    <h3 className="text-xl font-bold mb-3">{title}</h3>
    <p className="text-gray-400">{description}</p>
  </div>
);

export default About;
