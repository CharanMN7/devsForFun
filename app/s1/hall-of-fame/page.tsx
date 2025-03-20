"use client";
import React, { useEffect, useState } from "react";
import S1BaseLayout from "../s1-base-layout";
import DottedSeparator from "@/components/dotted-separator";
import S1FinisherCard from "@/components/s1-finisher-card";
import LoadingSpinner from "@/components/ui/loading-spinner";

export type Finisher = {
  id: number;
  name: string;
  gender: string;
  username: string;
  country: string;
  linkedin: string;
  github: string;
  club: string;
  vibe: string;
  pd2repo: string;
  pd2site: string;
  pd1repo: string;
  pd1site: string;
  rdcrepo: string;
  rdcsite: string;
  d14repo: string;
  d14site: string;
  d12repo2: string;
  d12repo1: string;
  d12site2: string;
  d12site1: string;
};

const Page: React.FC = () => {
  const [finishers, setFinishers] = useState<Finisher[] | []>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFinishers = async () => {
      try {
        const response = await fetch("/api/get-finishers");
        const data = await response.json();
        setFinishers(data);
      } catch (error) {
        console.error("Error fetching finishers:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchFinishers();
  }, []);

  return (
    <S1BaseLayout>
      <div className="text-center my-8">
        <h2 className="text-5xl font-extrabold">hall of fame</h2>
      </div>

      {loading ? (
        <LoadingSpinner size="55vh" />
      ) : (
        <div className="grid justify-center grid-cols-1 justify-items-center md:grid-cols-2 gap-8 md:gap-10 md:max-w-[640px] mx-auto mb-8">
          {finishers.map((person) => (
            <S1FinisherCard
              key={person.username}
              name={person.name}
              vibe={person.vibe}
              username={person.username}
            />
          ))}
        </div>
      )}

      <DottedSeparator />
    </S1BaseLayout>
  );
};

export default Page;
