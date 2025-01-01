import { Button } from "@/components/ui/button";
import { GlobeIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import Link from "next/link";
import React from "react";

// gonna change the imageURL props soon
interface LeadsInfoProps {
  name: string;
  imageURL: string;
  linkedInURL: string;
  websiteURL: string;
}

const LeadsInfo: React.FC<LeadsInfoProps> = ({
  name,
  imageURL,
  linkedInURL,
  websiteURL,
}) => {
  return (
    <div className="flex flex-col items-center gap-2 border rounded-lg pb-2">
      <Image
        src={`/${imageURL}.png`}
        alt={name}
        className="rounded-tr-lg rounded-tl-lg"
        width={200}
        height={200}
      />
      <h3 className="font-bold text-sm md:text-base">{name}</h3>
      <div className="space-x-4">
        <Button variant="outline" className="rounded-full" asChild>
          <Link href={linkedInURL} target="_blank">
            <LinkedInLogoIcon />
          </Link>
        </Button>
        <Button variant="outline" className="rounded-full" asChild>
          <Link href={websiteURL} target="_blank">
            <GlobeIcon />
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default LeadsInfo;
