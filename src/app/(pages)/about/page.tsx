import React from "react";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card"; // Adjust according to your `shadcn` components
import { Github } from "lucide-react";

type TeamMember = {
  name: string;
  role: string;
  image?: string; // Optional property for image
};

// Add your team members with optional image links
const teamMembers: TeamMember[] = [
  { name: "Ikrame Iddouch", role: "Président", image: "/members/placeholder.png" },
  { name: "Walid HASNAOUI", role: "Vice Président", image: "/members/placeholder.png" },
  { name: "Sami Sbai", role: "Resp. Communication", image: "/members/placeholder.png" },
  { name: "Islam HACHIMI", role: "Resp. Events", image: "/members/islam.png" },
  // Add more team members as needed
];

// Default placeholder image
const placeholderImage = "/members/placeholder.png"; // Replace with your actual placeholder image path

const Page = () => {
  return (
    <div className="flex flex-col items-center justify-start min-h-screen bg-transparent">
      <div className="sticky top-0 z-10 w-full">
        <Card className="max-w-md mx-auto p-6 shadow-lg rounded-lg bg-transparent text-white">
          <CardHeader>
            <CardTitle className="text-center text-2xl font-bold">À Propos de Nous</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-center mb-4">
              Nous sommes des personnes désireuses d'aider les autres à rester informées sur les avancées de l'IA et de l'IoT à la pointe de la technologie. Notre objectif est de partager des connaissances et des solutions qui inspirent et engagent les utilisateurs tout au long de leur parcours.
            </p>
            <p className="text-center">
              Ensemble, nous construisons un avenir meilleur grâce à la collaboration et à l'innovation.
            </p>
            <h3 className="mt-4 text-lg font-semibold text-center">Notre Équipe</h3>
            <ul className="mt-2">
              {teamMembers.map((member, index) => (
                <li key={index} className="flex items-center justify-between py-2">
                  <div className="flex items-center">
                    <img
                      src={member.image || placeholderImage}
                      alt={member.name}
                      className="w-12 h-12 rounded-full mr-2 object-cover"
                    />
                    <span>{member.name}</span>
                  </div>
                  <span className="text-gray-500">{member.role}</span>
                </li>
              ))}
            </ul>
          </CardContent>
          <CardFooter className="flex justify-center">
            <a
              href="https://github.com/PolyNextGenCoders"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-blue-600 hover:underline"
            >
              <Github className="mr-2" />
              Visitez notre GitHub
            </a>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default Page;
