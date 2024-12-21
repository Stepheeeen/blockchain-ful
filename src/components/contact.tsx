import React from "react";
import {
  Github,
  Twitter,
  Globe,
  Users,
  Award,
  BookOpen,
  Code,
} from "lucide-react";

const Teams = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white" id="teams">
      {/* Hero Section */}
      <section className="relative py-24 px-4">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-96 h-96 bg-purple-500/20 rounded-full blur-3xl -top-10 -left-10 animate-pulse" />
          <div className="absolute w-96 h-96 bg-blue-500/20 rounded-full blur-3xl -bottom-10 -right-10 animate-pulse" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
            Meet Our Team
          </h1>
          <p className="text-xl text-gray-300">
            Passionate builders and innovators shaping the future of Web3
          </p>
        </div>
      </section>

      {/* Core Team */}
      <section className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-16 text-center bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
            Core Team
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <TeamMemberCard
              name="Jane.eth"
              role="Founder & CEO"
              image="/api/placeholder/150/150"
              bio="Blockchain pioneer with 10+ years in Web3"
              skills={["Strategy", "Leadership", "Tokenomics"]}
              github="janedoe"
              twitter="janedoe"
            />
            <TeamMemberCard
              name="0xJohn"
              role="CTO"
              image="/api/placeholder/150/150"
              bio="Former lead developer at Ethereum Foundation"
              skills={["Smart Contracts", "Architecture", "Security"]}
              github="johnsmith"
              twitter="0xjohn"
            />
            <TeamMemberCard
              name="em1ly.lens"
              role="CMO"
              image="/api/placeholder/150/150"
              bio="Marketing veteran specializing in Web3 growth"
              skills={["Growth", "Community", "Brand"]}
              github="emilydavis"
              twitter="em1ly"
            />
          </div>
        </div>
      </section>

      {/* Department Leads */}
      <section className="py-24 px-4 bg-gray-900/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-16 text-center bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
            Department Leads
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <LeadCard
              icon={<Code className="w-8 h-8" />}
              title="Development"
              name="alex.eth"
              description="Leading our protocol development"
            />
            <LeadCard
              icon={<Users className="w-8 h-8" />}
              title="Community"
              name="sarah.lens"
              description="Managing community growth and engagement"
            />
            <LeadCard
              icon={<BookOpen className="w-8 h-8" />}
              title="Research"
              name="0xMark"
              description="Driving blockchain innovation research"
            />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8">
          <StatCard number="30+" label="Team Members" />
          <StatCard number="12" label="Countries" />
          <StatCard number="100+" label="Projects Launched" />
          <StatCard number="5+" label="Years in Web3" />
        </div>
      </section>

      {/* Join Us Section */}
      <section className="py-24 px-4 bg-gray-900/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
            Join Our Team
          </h2>
          <p className="text-gray-300 mb-8">
            We're always looking for passionate individuals to join our mission
            of building the decentralized future.
          </p>
          <button className="group bg-gradient-to-r from-purple-500 to-blue-500 px-8 py-3 rounded-lg font-semibold flex items-center gap-2 hover:opacity-90 transition-all mx-auto">
            View Open Positions
            <Award className="group-hover:rotate-12 transition-transform" />
          </button>
        </div>
      </section>
    </div>
  );
};

const TeamMemberCard = ({
  name,
  role,
  image,
  bio,
  skills,
  github,
  twitter,
}: any) => (
  <div className="p-6 rounded-xl bg-gray-800/50 border border-gray-700 hover:border-purple-500/50 transition-all group">
    <img
      src={image}
      alt={name}
      className="w-32 h-32 rounded-full mx-auto mb-6 bg-gray-700"
    />
    <h3 className="text-xl font-bold mb-2">{name}</h3>
    <p className="text-purple-400 mb-4">{role}</p>
    <p className="text-gray-300 mb-4">{bio}</p>
    <div className="flex flex-wrap gap-2 mb-6">
      {skills.map((skill: any, index: any) => (
        <span
          key={index}
          className="px-3 py-1 rounded-full bg-gray-700 text-sm text-gray-300"
        >
          {skill}
        </span>
      ))}
    </div>
    <div className="flex justify-center gap-4">
      <a
        href={`https://github.com/${github}`}
        className="text-gray-400 hover:text-purple-400 transition-colors"
      >
        <Github className="w-5 h-5" />
      </a>
      <a
        href={`https://twitter.com/${twitter}`}
        className="text-gray-400 hover:text-purple-400 transition-colors"
      >
        <Twitter className="w-5 h-5" />
      </a>
    </div>
  </div>
);

const LeadCard = ({ icon, title, name, description }: any) => (
  <div className="p-8 rounded-xl bg-gray-800/50 border border-gray-700 hover:border-purple-500/50 transition-all group text-center">
    <div className="mb-4 text-purple-400 group-hover:scale-110 transition-transform">
      {icon}
    </div>
    <h3 className="text-xl font-bold mb-2">{title}</h3>
    <p className="text-purple-400 mb-2">{name}</p>
    <p className="text-gray-400">{description}</p>
  </div>
);

const StatCard = ({ number, label }: any) => (
  <div className="p-8 rounded-xl bg-gray-800/50 border border-gray-700 text-center">
    <p className="text-4xl font-bold mb-2 bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
      {number}
    </p>
    <p className="text-gray-400">{label}</p>
  </div>
);

export default Teams;
