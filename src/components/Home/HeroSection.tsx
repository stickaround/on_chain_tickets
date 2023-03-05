import { Icon } from '@iconify/react';
import { useState } from 'react';
import Button from '../../components/Button';
import CornerBorderDiv from '../CornerBorderDiv';
import FadeInSection from '../FadeInSection';
import Lode from '../Lode';
import ConfirmCodeModal from './ConfirmCodeModal';
// import DemoModal from './JoinAsAVenueModal';
import JoinAsAFanModal from './JoinAsAFanModal';
import JoinAsAVenueModal from './JoinAsAVenueModal';

const HeroSection = () => {
  const handleClickDemo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  // const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const [isJoinAsAVenueModalOpen, setIsJoinAsAVenueModalOpen] = useState(false);
  const [isJoinAsAFanModalOpen, setIsJoinAsAFanModalOpen] = useState(false);
  const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false);

  return (
    <section className='md:mt-[15px] md:px-[20px] mt-0' id='howitworks'>
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
              <p>
                The next level <br /> of blockchain{' '}
                <span className='text-orange-400'>ticketing</span>
              </p>
            </h2>
            <p className='font-inter mb-x-big text-base'>
              <span className='italic text-lg mr-[4px] text-amber-400'>
                Onchain ticket
              </span>{' '}
              is to manage ticketing on top of blockchain. Ticket buyers and
              event organizers who make use of the protocol's products don't
              need to worry about scam; they simply experience a top-notch
              ticketing experience.
            </p>
            <Button
              className='px-[60px] py-4'
              handleClick={() => handleClickDemo('demo')}
            >
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
      <div className='grid grid-cols-2 gap-4 mt-[250px] mb-[200px]' id='demo'>
        <div className='block rounded-lg bg-gray-600 shadow-lg dark:bg-neutral-700'>
          <img
            className='rounded-t-lg w-[100%]'
            src='/assets/venue.jpg'
            alt='venue'
          />
          <div className='p-6'>
            <Button
              className='bg-primary-50 w-[100%] cursor-pointer'
              handleClick={() => setIsJoinAsAVenueModalOpen(true)}
            >
              Join as a Venue
            </Button>
          </div>
        </div>
        <div className='block rounded-lg bg-gray-600 shadow-lg dark:bg-neutral-700'>
          <img
            className='rounded-t-lg w-[100%]'
            src='/assets/fan.jpg'
            alt='venue'
          />
          <div className='p-6'>
            <Button
              className='w-[100%] bg-transparent cursor-pointer outline outline-primary-50 outline-1'
              handleClick={() => setIsJoinAsAFanModalOpen(true)}
            >
              Join as a Fan
            </Button>
          </div>
        </div>
      </div>
      <JoinAsAVenueModal
        open={isJoinAsAVenueModalOpen}
        closeModal={() => setIsJoinAsAVenueModalOpen(false)}
      />
      <JoinAsAFanModal
        open={isJoinAsAFanModalOpen}
        closeModal={() => setIsJoinAsAFanModalOpen(false)}
        openConfirmModal={() => setIsConfirmModalOpen(true)}
      />
      <ConfirmCodeModal
        open={isConfirmModalOpen}
        closeModal={() => setIsConfirmModalOpen(false)}
      />
    </section>
  );
};

export default HeroSection;
