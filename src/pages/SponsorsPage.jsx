import SponsorCard from "../components/SponsorCard";
import bgImg from "../assets/backgrounds/bg.png";
import redBullLogo from "../assets/logos/redbull.png";
import chetakLogo from "../assets/logos/chetak.png";
import vivoLogo from "../assets/logos/vivo.png";
import mankindLogo from "../assets/logos/mankind.png";
import globalreachLogo from "../assets/logos/globalreach.png";
import sosLogo from "../assets/logos/sos.png";
import ktmLogo from "../assets/logos/ktm.png";
import React from "react";

function SponsorsPage() {
  return (
    <section
      style={{ backgroundImage: `url(${bgImg})` }}
      className="p-12 bg-center bg-cover min-h-screen flex flex-col items-center"
    >
      <h1 className="font-jersey text-7xl sm:text-8xl md:text-9xl text-white text-center pixel-shadow pb-12 sm:pb-16">
        Our Sponsors
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-12 gap-x-36 place-items-center">
        <SponsorCard logo={redBullLogo} label={"Drinking\nPartner"} />
        <SponsorCard logo={vivoLogo} label={"Special\nPartner"} />
        <SponsorCard logo={chetakLogo} label={"Vehicle Dealership\nPartner"} />
        <SponsorCard logo={globalreachLogo} label={"Educational\nPartner"} />
        <SponsorCard logo={mankindLogo} label={"Healthcare\nPartner"} />
        <SponsorCard logo={sosLogo} label={"Drinking\nPartner"} />
        <div className="lg:col-span-3 flex justify-center">
          <SponsorCard logo={ktmLogo} label={"Riding\nPartner"} />
        </div>
      </div>
    </section>
  );
}

export default SponsorsPage;
