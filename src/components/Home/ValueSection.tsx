import CornerBorderDiv from '../CornerBorderDiv';
import FadeInSection from '../FadeInSection';

const ValueSection = () => {
  return (
    <section className='md:mt-[80px] 2xl:mx-[100px]'>
      <div className='md:px-[150px]'>
        <div className='md:flex-row justify-between flex-col flex'>
          <FadeInSection>
            <div className=' text-left md:mb-0 mb-6 order-2 md:order-1 bg-[#65474D]/50 rounded-2xl p-7 md:max-w-[280px] md:mt-[145px] md:ml-16'>
              <h3 className='text-[32px] font-spaceGrotesk'>
                Tokenized and Customizable
              </h3>
              <p className='mt-4 label-large'>
                Set the look and feel of your NFT tickets to stand out from the
                crowd by designing them with images and custom colours. Need
                help? We can also offer a personalised NFT consultancy service
                to ensure you're maximising value for yourself and your fans.
              </p>
            </div>
          </FadeInSection>
          <div className='order-1 md:order-2'>
            <CornerBorderDiv className='right-top-corner left-bottom-corner py-8 max-w-[360px]'>
              <div>
                <FadeInSection>
                  <h4 className='font-bold text-md text-primary-500 font-inter mb-2'>
                    This is
                  </h4>
                  <h3 className='font-bold text-[45px] leading-[64px] mb-2 text-center md:text-left'>
                    Our values
                  </h3>
                </FadeInSection>
                <p>
                  Extraordinary experiences define the key moments of our lives.
                  <br />
                  <span className='text-orange-400 italic text-lg'>
                    On-Chain-Tickets
                  </span>{' '}
                  improves the live event experience for fans and brings them
                  closer to their favorite events.
                </p>
              </div>
            </CornerBorderDiv>
          </div>
        </div>
        <div className='md:flex justify-between md:mt-6 md:ml-12 text-left'>
          <FadeInSection>
            <div className='md:mb-0 mb-6 bg-[#65474D]/50 rounded-2xl p-7 md:max-w-[290px] md:mr-[80px] md:mt-[80px]'>
              <h3 className='text-[32px] font-spaceGrotesk'>Rewarding</h3>
              <p className='mt-4 label-large'>
                Access events, services, and other token gates you didn't even
                know existed, with peace of mind.
              </p>
            </div>
          </FadeInSection>
          <div>
            <FadeInSection>
              <div className='bg-[#65474D]/50 rounded-2xl p-7 mx-auto md:max-w-[490px]'>
                <h3 className='text-[32px] font-spaceGrotesk'>
                  Safe and secure
                </h3>
                <p className='mt-4 label-large'>
                  Purchasing NFT tickets and other assets on the
                  On-Chain-Tickets marketplace is super secure and safe. An
                  integrated fiat on/off-ramp and intuitive user interface make
                  transitioning from legacy ticketing platforms more even for
                  the most crypto-averse event-goers.
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
