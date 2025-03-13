import React from "react";
import {
  Github,
  Twitter,
  Globe,
  Users,
  Award,
  BookOpen,
  Code,
  ArrowBigRight,
  Mail,
  ChevronRight,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

const Teams = () => {
  return (
    <div
      className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white"
      id="teams"
    >
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
            At BLOCKCHAINFUL, we’re driven by a passionate team dedicated to
            making Web3 knowledge accessible to everyone.
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
            {[
              {
                name: "Raji Rufai",
                role: "Founder & Visionary",
                bio: "Leads the mission to create a thriving Web3 learning ecosystem.",
              },
              {
                name: "Joseph Ojochegbe (Dev Praise)",
                role: " Community Lead",
                bio: " Oversees engagement, ensuring inclusivity and dynamic collaboration.",
              },
              {
                name: "Ukolojo Lucky",
                role: " Community Manager",
                bio: " Fosters engagement and organizes community activities.",
              },
              {
                name: "Stephen Onucheyo",
                role: "Development Team Lead",
                bio: "Heads technical innovations and smart contract development.",
              },
              {
                name: "DecenToria",
                role: "Content Team Lead",
                bio: "Generally officiates all BlockchainFUL contents",
              },
              {
                name: "Favour Aroniyo",
                role: "Lead Video Creator",
                bio: "Simplifies blockchain concepts through educational video content.",
              },
              {
                name: "Tenuojo Odokina",
                role: "Lead Content Writer",
                bio: "Creates high-quality content to drive awareness and understanding of Web3 technologies.",
              },
              {
                name: "Olarenwaju Celebrity Rejoice",
                role: "Graphics Designer",
                bio: "Enhances branding and community engagement through captivating visuals.",
              },
            ].map((item) => (
              <TeamMemberCard
                name={item.name}
                role={item.role}
                image="/api/placeholder/150/150"
                bio={item.bio}
                skills={[]}
                twitter=""
              />
            ))}
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
            {[
              {
                icon: <Code className="w-8 h-8" />,
                name: "Stephen Onucheyo",
                title: "Development",
                bio: "Heads technical innovations and smart contract development.",
              },
              {
                icon: <Users className="w-8 h-8" />,
                name: "Joseph Ojochegbe (Dev Praise)",
                title: " Community",
                bio: " Oversees engagement, ensuring inclusivity and dynamic collaboration.",
              },
              {
                icon: <Globe className="w-8 h-8" />,
                name: "DecenToria",
                title: "Content",
                bio: "Generally officiates all BlockchainFUL contents",
              },
            ].map((item) => (
              <LeadCard
                icon={item.icon}
                title={item.title}
                name={item.name}
                description={item.bio}
              />
            ))}
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
      <section className="py-20 sm:py-24 px-4 bg-gray-900/50">
        <div className="max-w-5xl mx-auto flex flex-col gap-y-20 text-center">
          {/* Join Community Section */}
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
              Join the BLOCKCHAINFUL Community!
            </h2>
            <p className="text-base sm:text-lg text-gray-300 mb-6 sm:mb-8 max-w-2xl mx-auto">
              Be part of a visionary movement driving blockchain adoption and
              innovation. Whether you’re a beginner, developer, or industry
              expert, there's a place for you in our community.
            </p>
            <button className="group bg-gradient-to-r from-purple-500 to-blue-500 px-6 sm:px-8 py-3 rounded-lg font-semibold flex items-center gap-2 hover:opacity-90 transition-all mx-auto text-white">
              Join Us Now
              <ArrowRight className="w-5 h-5 group-hover:rotate-12 transition-transform" />
            </button>
          </div>

          {/* Partner Section */}
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
              Partner With Us
            </h2>
            <p className="text-base sm:text-lg text-gray-300 mb-6 sm:mb-8 max-w-2xl mx-auto">
              Have questions, ideas, or want to collaborate with BLOCKCHAINFUL?
              We’d love to hear from you. We welcome partnerships with
              organizations, industry leaders, and innovators looking to shape
              the future of blockchain.
            </p>
            <button>
              <Link
                href="mailto:blockchainful@gmail.com"
                className="group bg-gradient-to-r from-purple-500 to-blue-500 px-6 sm:px-8 py-3 rounded-lg font-semibold flex items-center gap-2 hover:opacity-90 transition-all mx-auto text-white"
              >
                Email Us
                <Mail className="w-5 h-5 group-hover:rotate-12 transition-transform" />
              </Link>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

const TeamMemberCard = ({ name, role, image, bio, skills, twitter }: any) => (
  <div className="p-6 rounded-xl bg-gray-800/50 border border-gray-700 hover:border-purple-500/50 transition-all group text-center">
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
