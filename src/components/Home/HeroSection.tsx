import { Icon } from '@iconify/react';
import { useState } from 'react';
import Button from '../../components/Button';
import CornerBorderDiv from '../CornerBorderDiv';
import FadeInSection from '../FadeInSection';
import Lode from '../Lode';
import ConfirmCodeModal from './ConfirmCodeModal';
import SuccessModal from './SuccessModal';
import JoinAsAFanModal from './JoinAsAFanModal';
import JoinAsAVenueModal from './JoinAsAVenueModal';

const HeroSection = () => {
  // const handleClickDemo = (id: string) => {
  //   const element = document.getElementById(id);
  //   if (element) {
  //     element.scrollIntoView({ behavior: 'smooth' });
  //   }
  // };
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
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
            <h2 className='font-bold md:text-d-lg leading-[64px] mb-2 text-center md:text-left text-[55px]'>
              <p>Tickets</p>
            </h2>
            <p className='font-inter mb-x-big text-3xl'>
              <span className='italic text-3xl mr-[4px] text-amber-400'>
                A TOP-NOTCH
              </span>{' '}
              ticketing experience for event organizers & attendees
            </p>
            {/* <Button
              className='px-[60px] py-4'
              handleClick={() => handleClickDemo('demo')}
            >
              <div className='flex items-center'>
                View Demo
                <Icon icon='bi:arrow-down' className='ml-md' />
              </div>
            </Button> */}
            <div className='flex items-center mt-[50px]'>
              <Button
                className='bg-cyan-500 hover:bg-cyan-600 active:bg-cyan-800 w-[100%] cursor-pointer'
                handleClick={() => setIsJoinAsAVenueModalOpen(true)}
              >
                Join as a Venue
              </Button>
              <Button
                className='w-[100%] bg-transparent cursor-pointer bg-cyan-400 hover:bg-cyan-500 active:bg-cyan-600 outline-1'
                handleClick={() => setIsJoinAsAFanModalOpen(true)}
              >
                Join as a Fan
              </Button>
            </div>
          </div>
        </CornerBorderDiv>
      </div>
      <div className='md:grid md:grid-cols-4 md:ml-[110px] mt-[230px]'>
        <div className='col-end-4'>
          <FadeInSection>
            <div className='md:mb-md mb-[70px]'>
              <span>More than</span>
              <h2 className='font-bold text-d-lg leading-[64px]'>5000</h2>
              <span>tickets are sold</span>
            </div>
          </FadeInSection>
          <FadeInSection>
            <div className='md:mb-md mb-[70px]'>
              <span>Cooperate with</span>
              <h2 className='font-bold text-d-lg leading-[64px]'>1.5k</h2>
              <span>event organizers</span>
            </div>
          </FadeInSection>
        </div>
        <div className='col-end-5 md:mt-1'>
          <FadeInSection>
            <div className='md:mb-md mb-[70px]'>
              <span>Made more than</span>
              <h2 className='font-bold text-d-lg leading-[64px]'>$1.47M</h2>
              <span>Tickets</span>
            </div>
          </FadeInSection>
          <FadeInSection>
            <div className='md:mb-md'>
              <span>Made </span>
              <h2 className='font-bold text-d-lg leading-[64px]'>$0.35M</h2>
              <span>in the secondary market</span>
            </div>
          </FadeInSection>
        </div>
      </div>
      <div className='grid grid-cols-2 gap-4 mt-[250px] mb-[200px]' id='demo'>
        <div className='block rounded-lg dark:bg-neutral-700'>
          <img
            className='rounded-t-lg w-[100%]'
            src='/assets/organizer.jpg'
            alt='venue'
          />
          <Button
            className='bg-cyan-400 hover:bg-cyan-600 active:bg-cyan-800 w-[100%] rounded-t-none  text-[25px]'
            handleClick={() => setIsJoinAsAVenueModalOpen(true)}
          >
            Join as an organizer
          </Button>
        </div>
        <div className='block rounded-lg dark:bg-neutral-700'>
          <img
            className='rounded-t-lg w-[100%]'
            src='/assets/fan.jpg'
            alt='venue'
          />
          <Button
            className='w-[100%] bg-cyan-200 hover:bg-cyan-500 active:bg-cyan-600 rounded-t-none text-[25px]'
            handleClick={() => setIsJoinAsAFanModalOpen(true)}
          >
            Join as a fan
          </Button>
        </div>
      </div>
      <JoinAsAVenueModal
        open={isJoinAsAVenueModalOpen}
        closeModal={() => setIsJoinAsAVenueModalOpen(false)}
        openSuccessModal={() => setIsSuccessModalOpen(true)}
      />
      {isSuccessModalOpen && (
        <SuccessModal closeModal={() => setIsSuccessModalOpen(false)} />
      )}
      <JoinAsAFanModal
        open={isJoinAsAFanModalOpen}
        closeModal={() => setIsJoinAsAFanModalOpen(false)}
        openConfirmModal={() => setIsConfirmModalOpen(true)}
      />
      <ConfirmCodeModal
        open={isConfirmModalOpen}
        closeModal={() => setIsConfirmModalOpen(false)}
        openSuccessModal={() => setIsSuccessModalOpen(true)}
      />
    </section>
  );
};

export default HeroSection;
