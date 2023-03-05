import { useState } from 'react';

import Accordion from '../Accordion';
import FadeInSection from '../FadeInSection';

const FAQSection = () => {
  const [activeQuestion, setActiveQuestion] = useState(0);

  const handleQuestion = (no: number) => {
    console.error({ no, activeQuestion });
    if (activeQuestion === no) {
      setActiveQuestion(0);
    } else {
      setActiveQuestion(no);
    }
  };

  return (
    <section className='md:mt-[380px] md:px-[210px] mt-[90px]' id='faqs'>
      <FadeInSection>
        <h3 className='medium-title text-center'>Have questions ?</h3>
        <h4 className='font-bold text-md text-primary-500 font-inter mb-16 text-center'>
          We have the answers
        </h4>
      </FadeInSection>
      <FadeInSection>
        <div className='mb-4' onClick={() => handleQuestion(1)}>
          <Accordion
            title='How to buy tickets?'
            content={
              'If you request any kind of tickets, we will ensure to deliver your requests on time with tokenized and customizable'
            }
            opened={activeQuestion === 1}
          />
        </div>
        <div className='mb-4' onClick={() => handleQuestion(2)}>
          <Accordion
            title='How to create an event?'
            content={
              'You can signup an event and create your own tickets and events'
            }
            opened={activeQuestion === 2}
          />
        </div>
        <div className='mb-4' onClick={() => handleQuestion(3)}>
          <Accordion
            title='All my tickets are NTFs?'
            content={
              'Yes, all your tickets are tokenized, super safe and secure.'
            }
            opened={activeQuestion === 3}
          />
        </div>
        <div className='mb-4' onClick={() => handleQuestion(4)}>
          <Accordion
            title='Can I sell my tickets?'
            content={'Yeah, sure! It depends on the venue system'}
            opened={activeQuestion === 4}
          />
        </div>
        <div className='mb-4' onClick={() => handleQuestion(5)}>
          <Accordion
            title='Can my tickets be replicated?'
            content={'No way, they are all tokenized on blockchain'}
            opened={activeQuestion === 5}
          />
        </div>
      </FadeInSection>
    </section>
  );
};

export default FAQSection;
