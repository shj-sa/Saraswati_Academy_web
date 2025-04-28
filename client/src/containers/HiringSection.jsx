import Wrapper from "./Wrapper";
import HiringProcess from "../components/Hiring/main";
import CallbackSection from "../components/ui/CallbackComp";
const HiringSection = () => {
  return (
    <Wrapper>
      <div className="mt-20">
        <HiringProcess></HiringProcess>
        <CallbackSection></CallbackSection>
      </div>
    </Wrapper>
  );
};

export default HiringSection;
