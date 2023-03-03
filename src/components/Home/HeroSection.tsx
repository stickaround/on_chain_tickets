import { useState } from 'react';
import { Icon } from '@iconify/react';
import Button from '../../components/Button';
import CornerBorderDiv from '../CornerBorderDiv';
import FadeInSection from '../FadeInSection';
import Lode from '../Lode';
import DemoModal from './DemoModal';
import JoinAsABrandModal from './JoinAsABrandModal';
import JoinAsAFanModal from './JoinAsAFanModal';
import ConfirmCodeModal from './ConfirmCodeModal';

const HeroSection = () => {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const [isJoinAsABrandModalOpen, setIsJoinAsABrandModalOpen] = useState(false);
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
            <p className='font-inter mb-x-big text-sm'>
              Onchain ticket is to manage ticketing on top of blockchain. Ticket
              buyers and event organizers who make use of the protocol's
              products don't need to worry about scam; they simply experience a
              top-notch ticketing experience.
            </p>
            <Button
              className='px-[60px] py-4'
              handleClick={() => setIsDemoModalOpen(true)}
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
      <div className='grid grid-cols-6 gap-4 mt-[450px] mb-[200px]'>
        <div className='col-start-2 col-span-2'>
          <Button
            className='bg-primary-50 w-[100%] cursor-pointer'
            handleClick={() => setIsJoinAsABrandModalOpen(true)}
          >
            Join as a Brand
          </Button>
        </div>
        <div className='col-span-2'>
          <Button
            className='w-[100%] bg-transparent cursor-pointer outline outline-primary-50 outline-1'
            handleClick={() => setIsJoinAsAFanModalOpen(true)}
          >
            Join as a Fan
          </Button>
        </div>
      </div>
      <DemoModal
        open={isDemoModalOpen}
        closeModal={() => setIsDemoModalOpen(false)}
      />
      <JoinAsABrandModal
        open={isJoinAsABrandModalOpen}
        closeModal={() => setIsJoinAsABrandModalOpen(false)}
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
