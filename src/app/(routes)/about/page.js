// app/about/components/FinalCTAAlt.jsx

import ComplianceAndTransparency from "@/app/components/about/Compliance&Transparency";
import ConsultantsAndBuyers from "@/app/components/about/ConsultantsAndBuyers";
import Cta from "@/app/components/about/Cta";
import HeroSection from "@/app/components/about/HeroSection";
import HowAvxWorks from "@/app/components/about/HowAvxWorks";
import VisionAndApproach from "@/app/components/about/OurVision&Approach";
import ProblemWeAreSolve from "@/app/components/about/ProblemWeAreSolve";
import TrustSignals from "@/app/components/about/TrustSignal";
import WhyAvxDifferent from "@/app/components/about/WhyAvxDifferent";





export default function FinalCTAAlt() {
    return (
        <>
            <HeroSection />
            <ProblemWeAreSolve />
            <WhyAvxDifferent />
            <HowAvxWorks />
            <ConsultantsAndBuyers />
            <TrustSignals />
            <VisionAndApproach />
            <ComplianceAndTransparency />
            <Cta />
        </>
    );
}
