import { Carousel } from 'react-responsive-carousel';
import TeamMember from '../TeamMember';

import 'react-responsive-carousel/lib/styles/carousel.min.css';
import FadeInSection from '../FadeInSection';
import Hover3D from '../Hover3D';

const TeamSection = () => {
  return (
    <section className='md:mt-[100px] mt-[80px]'>
      <div className='text-center max-w-[600px] mx-auto mb-20 md:mt-24'>
        <FadeInSection>
          <h4 className='font-bold text-md text-primary-500 font-inter mb-2'>
            Discover
          </h4>
          <h3 className='font-bold text-[45px] leading-[52px] mb-1'>
            Our Team
          </h3>
        </FadeInSection>
        <p className='mt-3'>
          Observations & Customizations from around the ticketing & blockchain
          industries.
          <br />
          We help anyone who issues tickets worldwide to take advantage of the
          latest technological innovations
        </p>
      </div>
      <Carousel
        showStatus={false}
        className='block md:hidden'
        showThumbs={false}
      >
        <TeamMember
          name='Paul Estes'
          role='Founder'
          position='General Manager'
          className='mx-auto'
        />
        <TeamMember
          name='Kristine'
          role='Co-Founder'
          position='Web3 Developer'
          className='mx-auto'
        />
        <TeamMember
          name='Andrew Scott'
          role='Co-Founder'
          position='Senior Web Developer'
          className='mx-auto'
        />
      </Carousel>
      <div className='hidden md:block'>
        <div className='flex justify-center'>
          <div className='mr-10'>
            <Hover3D>
              <TeamMember
                name='Paul Estes'
                role='Founder'
                position='General Manager'
                className='mx-auto'
                src='https://cdn.loom.com/avatars/15043890_a75e863e5ba06436ba38c591cb109278_192.jpg'
              />
            </Hover3D>
          </div>
          <div className='mr-10 relative'>
            <Hover3D>
              <TeamMember
                name='Kristine Vilnite'
                role='Co-Founder'
                position='Web3 Developer'
                className='mx-auto'
                src='/assets/kristine.jfif'
              />
            </Hover3D>
          </div>
          <Hover3D>
            <TeamMember
              name='Andrew Scott'
              role='Co-Founder'
              position='Senior Web Developer'
              className='mx-auto'
              src='/assets/me.jpg'
            />
          </Hover3D>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
