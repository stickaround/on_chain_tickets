import CornerBorderDiv from "../CornerBorderDiv";
import FadeInSection from "../FadeInSection";

const ValueSection = () => {
  return (
    <section className="md:mt-[230px] 2xl:mx-[100px]">
      <div className="md:px-[150px]">
        <div className="md:flex-row justify-between flex-col flex">
          <FadeInSection>
            <div className=" text-left md:mb-0 mb-6 order-2 md:order-1 bg-[#65474D]/50 rounded-2xl p-7 md:max-w-[280px] md:mt-[145px] md:ml-16">
              <h3 className="text-[32px] font-spaceGrotesk">Tokenized</h3>
              <p className="mt-4 label-large">
                We think big, take smart risks, and do things that have never been done before. We are not afraid to
                make tough choices that align with our long-term objectives. We know that it always seems impossible
                until it’s done
              </p>
            </div>
          </FadeInSection>
          <div className="order-1 md:order-2">
            <CornerBorderDiv className="right-top-corner left-bottom-corner p-8 max-w-[360px]">
              <div>
                <FadeInSection>
                  <h4 className="font-bold text-md text-primary-500 font-inter mb-2">This is</h4>
                  <h3 className="font-bold text-[45px] leading-[64px] mb-2 text-center md:text-left">Our values</h3>
                </FadeInSection>
                <p>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
                  labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
                  et ea rebum
                </p>
              </div>
            </CornerBorderDiv>
          </div>
        </div>
        <div className="md:flex justify-between md:mt-6 md:ml-12 text-left">
          <FadeInSection>
            <div className="md:mb-0 mb-6 bg-[#65474D]/50 rounded-2xl p-7 md:max-w-[290px] md:mr-[80px] md:mt-[80px]">
              <h3 className="text-[32px] font-spaceGrotesk">Rewarding</h3>
              <p className="mt-4 label-large">
                We never give up, carry each other through hard times, and recognise grit in our colleagues. We
                understand that building a world-changing company is a monumental task, but we love every minute of it
                We celebrate milestones together, recharge, and get back to work
              </p>
            </div>
          </FadeInSection>
          <div>
            <FadeInSection>
              <div className="bg-[#65474D]/50 rounded-2xl p-7 mx-auto md:max-w-[490px]">
                <h3 className="text-[32px] font-spaceGrotesk">Customizable</h3>
                <p className="mt-4 label-large">
                  We think big, take smart risks, and do things that have never been done before. We are not afraid to
                  make tough choices that align with our long-term objectives. We are all empowered to take initiative,
                  make the right decisions, and act as owners. We are committed to protecting our company culture and
                  seek to bring in the best people we’ve ever worked with. We aim to surprise and inspire with the
                  quality and speed of our decision-making
                </p>
              </div>
            </FadeInSection>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValueSection;
