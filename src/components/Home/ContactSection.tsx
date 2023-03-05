import { Icon } from '@iconify/react';
import { useFormik } from 'formik';
import Button from '../Button';

import Card from '../Card';
import FadeInSection from '../FadeInSection';
import Input from '../Input';

const ContactSection = () => {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      message: '',
    },
    onSubmit: (values) => {
      console.log(JSON.stringify(values, null, 2));
    },
  });

  return (
    <section className='md:mt-[200px] md:mb-[250px] mt-[90px] mb-[70px]'>
      <FadeInSection>
        <Card className='mx-auto max-w-[580px] calc-card'>
          <h4 className='font-bold text-md text-primary-300 font-inter mb-2 text-center'>
            Still have questions
          </h4>
          <h3 className='medium-title text-center'>Contact us</h3>
          <p className='text-center font-bold px-5'>
            If you have anything to ask, feel free to reach out to me. We are
            delighted to help yuo anytime.
          </p>
          <div className='flex mt-8 flex-col md:flex-row'>
            <div className='md:w-1/2 md:mr-4'>
              <Input
                label='Name'
                name='name'
                type='text'
                error={false}
                value={formik.values.name}
                handleChange={formik.handleChange}
              />
            </div>
            <div className='md:w-1/2 mt-2 md:mt-0'>
              <Input
                label='Email address'
                name='email'
                type='number'
                error={false}
                value={formik.values.email}
                handleChange={formik.handleChange}
              />
            </div>
          </div>
          <div className='mt-4 text-left'>
            <label className='mb-2 text-sm font-medium text-[#E5E7EB]'>
              Message
            </label>
            <textarea
              rows={5}
              style={{ resize: 'none' }}
              className='bg-[#65474D] w-full text-sm block p-2.5 rounded-lg text-white border border-white focus:ring-white'
            />
          </div>
          <Button className='w-full mt-6'>Send message</Button>
          <div className='mt-8'>
            <div className='md:flex justify-between'>
              <div className='flex items-center'>
                <Icon icon='akar-icons:twitter-fill' className='mr-3' />{' '}
                @onchaintickets
              </div>
              <div className='flex items-center'>
                <Icon icon='teenyicons:envelope-solid' className='mr-3' />{' '}
                contact@onchaintickets.com
              </div>
            </div>
            <div className='md:flex justify-between md:mt-5'>
              <div className='flex items-center'>
                <Icon icon='fa:paper-plane' className='mr-3' />{' '}
                t.me/onchaintickets
              </div>
              <div className='flex items-center'>
                <Icon icon='fa:paper-plane' className='mr-3' /> @onchaintickets
              </div>
            </div>
          </div>
        </Card>
      </FadeInSection>
    </section>
  );
};

export default ContactSection;
