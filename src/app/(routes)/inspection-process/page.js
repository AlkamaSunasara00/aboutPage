import Cta from "@/app/components/about/Cta";
import DisputeHandling from "@/app/components/inspection-process/DisputeHandling";
import FAQSection from "@/app/components/inspection-process/FAQSection";
import HeroSection from "@/app/components/inspection-process/HeroSection";
import InspectionCovers from "@/app/components/inspection-process/InspectionCovers";
import InspectionInitiated from "@/app/components/inspection-process/InspectionInitiated";
import InspectionMatters from "@/app/components/inspection-process/InspectionMatters";
import InspectionNotCovered from "@/app/components/inspection-process/InspectionNotCovered";
import InspectionReportFormat from "@/app/components/inspection-process/InspectionReportFormat";
import InspectionWorkFlow from "@/app/components/inspection-process/InspectionWorkFlow";
import ReInspectionOptions from "@/app/components/inspection-process/ReInspectionOptions";




export default function inspectionProcess() {
    return (
        <>
    <HeroSection/>
    <InspectionMatters/>
    <InspectionCovers/>
    <InspectionInitiated/>
    <InspectionWorkFlow/>
    <InspectionReportFormat/>
    <ReInspectionOptions/>
    <InspectionNotCovered/>
    <DisputeHandling/>
    <FAQSection/>
    <Cta/>
        </>
    );
}
