"use client";

import Image from "next/image";
import { Linkedin } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface TeamMemberCardProps {
  name: string;
  title: string;
  bio: string;
  photoUrl: string;
  linkedinUrl?: string;
}

export function TeamMemberCard({ name, title, bio, photoUrl, linkedinUrl }: TeamMemberCardProps) {
  // Split the bio into sentences and clean up any extra spaces
  const sentences = bio.split('. ').filter(Boolean).map(s => s.trim());

  return (
    <Card className="overflow-hidden h-full flex flex-col">
      <div className="relative w-full p-4">
        <Image
          src={photoUrl}
          alt={`${name} photo`}
          width={500}
          height={500}
          className="w-full rounded-lg"
          priority
        />
      </div>
      <CardHeader>
        <CardTitle className="text-2xl font-bold">{name}</CardTitle>
        <CardDescription className="text-lg">{title}</CardDescription>
        {linkedinUrl && (
          <a 
            href={linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-gray-600 hover:text-blue-600 transition-colors mt-2"
          >
            <Linkedin className="h-5 w-5 mr-2" />
            <span>LinkedIn Profile</span>
          </a>
        )}
      </CardHeader>
      <CardContent>
        <div className="text-gray-600 space-y-2">
          {sentences.map((sentence, index) => (
            <p key={index}>{sentence + '.'}</p>
          ))}
        </div>
      </CardContent>
    </Card>
  );
} 