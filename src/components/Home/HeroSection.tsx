import { Icon } from '@iconify/react';
import Button from '../../components/Button';
import CornerBorderDiv from '../CornerBorderDiv';
import FadeInSection from '../FadeInSection';
import Lode from '../Lode';

const HeroSection = () => {
  return (
    <section className='md:mt-[115px] md:px-[20px] mt-0'>
      <Lode />
      <div className='max-w-[587px] md:mb-xx-sm mb-[80px]'>
        <CornerBorderDiv className='block md:hidden pt-[290px]'>
          <div className='md:-mr-16'>
            <h2 className='font-bold md:text-d-lg leading-[64px] mb-2 text-center md:text-left text-[45px]'>
              <FadeInSection>On Chain Tickets</FadeInSection>
              <p>Venture Capital</p>
            </h2>
            <p className='font-inter mb-x-big text-sm'>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore
            </p>
            <Button className='px-[60px] py-4 w-full'>
              <div className='flex items-center justify-center'>
                View Demo
                <Icon icon='bi:arrow-down' className='ml-md' />
              </div>
            </Button>
          </div>
        </CornerBorderDiv>
        <CornerBorderDiv className='hidden md:block right-top-corner left-bottom-corner md:pl-16 md:pb-16 md:pt-8'>
          <div className='md:-mr-16'>
            <h2 className='font-bold md:text-d-lg leading-[64px] mb-2 text-center md:text-left text-[45px]'>
              <FadeInSection>On Chain Tickets</FadeInSection>
              <p>
                The next level <br /> of blockchain ticket
              </p>
            </h2>
            <p className='font-inter mb-x-big text-sm'>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum
            </p>
            <Button className='px-[60px] py-4'>
              <div className='flex items-center'>
                View Demo
                <Icon icon='bi:arrow-down' className='ml-md' />
              </div>
            </Button>
          </div>
        </CornerBorderDiv>
      </div>
      <div className='md:grid md:grid-cols-4 md:ml-[110px] md:-mt-5'>
        <div className='col-end-4'>
          <FadeInSection>
            <div className='md:mb-md mb-[70px]'>
              <span>More than</span>
              <h2 className='font-bold text-d-lg leading-[64px]'>5000</h2>
              <span>Customers worldwide</span>
            </div>
          </FadeInSection>
          <FadeInSection>
            <div className='md:mb-md mb-[70px]'>
              <span>More than</span>
              <h2 className='font-bold text-d-lg leading-[64px]'>15M</h2>
              <span>Delegated to us</span>
            </div>
          </FadeInSection>
        </div>
        <div className='col-end-5 md:mt-1'>
          <FadeInSection>
            <div className='md:mb-md mb-[70px]'>
              <span>We operate on</span>
              <h2 className='font-bold text-d-lg leading-[64px]'>147</h2>
              <span>Tickets</span>
            </div>
          </FadeInSection>
          <FadeInSection>
            <div className='md:mb-md'>
              <span>More than</span>
              <h2 className='font-bold text-d-lg leading-[64px]'>$35M</h2>
              <span>Distributed revenues</span>
            </div>
          </FadeInSection>
        </div>
      </div>
      <div className='grid grid-cols-6 gap-4 mt-[60px]'>
        <div className='col-start-2 col-span-2'>
          <Button className='bg-primary-50 w-[100%]'>Join as a Brand</Button>
        </div>
        <div className='col-span-2'>
          <Button className='w-[100%] bg-transparent outline outline-primary-50 outline-1'>
            Join as a Fan
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
