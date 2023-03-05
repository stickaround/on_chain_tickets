import React from 'react';

import CornerBorderDiv from '../CornerBorderDiv';
import CryptoIconBox from '../CryptoIconBox';
import FadeInSection from '../FadeInSection';

const StakeSection = () => {
  const [isVisible, setVisible] = React.useState(false);
  const domRef = React.useRef<HTMLDivElement | null>(null);

  React.useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => setVisible(entry.isIntersecting));
    });
    if (domRef?.current) {
      observer.observe(domRef.current);
    }
  }, [domRef]);

  return (
    <section>
      <div className='md:block hidden'>
        <div
          ref={domRef}
          className={`absolute mt-36 -left-[470px] ${
            isVisible ? 'translate-x-[220px]' : ''
          }`}
          style={{ transition: 'transform 1s ease-in-out 0.5s' }}
        >
          <img src='/assets/pilonne1.png' alt='plonne1' />
        </div>
        <div
          ref={domRef}
          className={`absolute mt-36 -right-[440px] ${
            isVisible ? '-translate-x-[220px]' : ''
          }`}
          style={{ transition: 'transform 1s ease-in-out 0.5s' }}
        >
          <img src='/assets/pilonne2.png' alt='plonne2' />
        </div>
      </div>
      <div className='max-w-[587px] mx-auto md:mt-[155px] mt-[30px]'>
        <CornerBorderDiv className='left-top-corner right-bottom-corner text-center'>
          <div className='md:pb-[42px] pt-2'>
            <FadeInSection>
              <h3 className='font-bold md:text-[45px] md:leading-[64px] text-5xl mb-2 text-center'>
                Experience
              </h3>
            </FadeInSection>
            <p className='font-inter mb-x-big text-[25px]'>
              We are now on a mission to make ticketing experience faster,
              cheaper and safer for any type of events and all attendees around
              the world.
            </p>
          </div>
        </CornerBorderDiv>
      </div>
      <div className='hidden md:grid md:grid-cols-4 grid-cols-3 xl:px-[200px] mt-8'>
        <CryptoIconBox label='Generate Royalties' icon={'money.png'} />
        <CryptoIconBox label='Fast' icon={'crypto_icon_2.svg'} />
        <CryptoIconBox label='Secure' icon={'secure.png'} />
        <CryptoIconBox label='Cheap' icon={'crypto_icon_4.svg'} />
        <CryptoIconBox label='Bullet Proof Secure' icon={'crypto_icon_5.svg'} />
        <CryptoIconBox label='No Country Fee' icon={'crypto_icon_6.svg'} />
        <CryptoIconBox label='Rewarding' icon={'gift.png'} />
        <CryptoIconBox label='Everyone' icon={'users.png'} />
      </div>
    </section>
  );
};

export default StakeSection;
