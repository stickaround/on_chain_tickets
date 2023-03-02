import TeamMember from '../TeamMember';
import { Carousel } from 'react-responsive-carousel';

import 'react-responsive-carousel/lib/styles/carousel.min.css';
import FadeInSection from '../FadeInSection';
import Hover3D from '../Hover3D';

const TeamSection = () => {
  return (
    <section className='md:mt-[270px] mt-[80px]'>
      <div className='text-center max-w-md mx-auto mb-20 md:mt-24'>
        <FadeInSection>
          <h4 className='font-bold text-md text-primary-500 font-inter mb-2'>
            Discover
          </h4>
          <h3 className='font-bold text-[45px] leading-[52px] mb-1'>
            Our Team
          </h3>
        </FadeInSection>
        <p>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum
        </p>
      </div>
      <Carousel
        showStatus={false}
        className='block md:hidden'
        showThumbs={false}
      >
        <TeamMember
          name='Paul'
          role='Founder'
          position='Data Engineer/Scientist'
          className='mx-auto'
        />
        <TeamMember
          name='Paul'
          role='Founder'
          position='Data Engineer/Scientist'
          className='mx-auto'
        />
        <TeamMember
          name='Paul'
          role='Founder'
          position='Data Engineer/Scientist'
          className='mx-auto'
        />
        <TeamMember
          name='Paul'
          role='Founder'
          position='Data Engineer/Scientist'
          className='mx-auto'
        />
        <TeamMember
          name='Paul'
          role='Founder'
          position='Data Engineer/Scientist'
          className='mx-auto'
        />
      </Carousel>
      <div className='hidden md:block'>
        <div className='flex justify-center'>
          <div className='mr-10'>
            <Hover3D>
              <TeamMember
                name='Paul'
                role='Founder'
                position='Data Engineer/Scientist'
              />
            </Hover3D>
          </div>
          <div className='mr-10 relative'>
            <Hover3D>
              <TeamMember
                name='Paul'
                role='Founder'
                position='Data Engineer/Scientist'
              />
            </Hover3D>
          </div>
          <Hover3D>
            <TeamMember
              name='Paul'
              role='Founder'
              position='Data Engineer/Scientist'
            />
          </Hover3D>
        </div>
        <div className='flex justify-center mt-11'>
          <div className='mr-10'>
            <Hover3D>
              <TeamMember
                name='Paul'
                role='Founder'
                position='Data Engineer/Scientist'
              />
            </Hover3D>
          </div>
          <Hover3D>
            <TeamMember
              name='Paul'
              role='Founder'
              position='Data Engineer/Scientist'
            />
          </Hover3D>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
