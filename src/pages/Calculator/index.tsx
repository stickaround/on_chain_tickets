import { Icon } from '@iconify/react';

import Button from '../../components/Button';
import CircleIcon from '../../components/CircleIcon';
import Accordion from '../../components/Accordion';
import Card from '../../components/Card';
import FadeInSection from '../../components/FadeInSection';
import NumberInput from '../../components/NumberInput';

const Article = () => (
  <div className='bg-[#65474D]/50 p-5 md:max-w-[300px] flex flex-col rounded-2xl md:mt-14 mt-6'>
    <div>
      <img src='/assets/atom-bg.png' alt='avatar' className='mx-auto' />
    </div>
    <h4 className='text-left text-[16px] font-bold mt-[10px]'>
      ATOM complete staking guide
    </h4>
    <p className='text-[14px] mt-2'>
      Lorem ipsum dolor sit amet consetetur sadipscing elitr, sed diam nonumy
      eirmod tempor lorem ipsum dolor sit
    </p>
    <Button className='w-full mt-6'>Read more</Button>
  </div>
);

const Home = () => {
  return (
    <div className='text-center md:text-left'>
      <FadeInSection>
        <section className='md:mx-[80px] 2xl:mx-[150px] md:mt-[105px] mt-[90px]'>
          <div className='flex md:justify-between items-center md:items-start flex-col md:flex-row'>
            <div className='flex flex-col max-w-xs items-center'>
              <img
                className='w-[72px] h-[72px] '
                src='/assets/crypto_icon_8.svg'
                alt='cosmos'
              />
              <h3 className='md:text-[45px] text-[36px] md:mt-0 mt-4 font-bold'>
                Cosmos
              </h3>
              <p className='text-info'>Visit project's website</p>
              <p className='text-[16px] font-bold text-imperGrey mt-8 md:block hidden'>
                Yearly percentage rate
              </p>
              <span className='mt-1 text-success font-spaceGrotesk md:text-[36px] font-bold text-[32px] md:block hidden'>
                +10.6%
              </span>
              <div className='mt-5'>
                <span className='text-[12px] text-warning'>8% fees</span>
                <div className='flex justify-center'>
                  <p className='underline text-imperGrey mr-2'>
                    cosmosvaloper132j...myatxlh9734g4w
                  </p>
                  <CircleIcon
                    icon='fa6-solid:copy'
                    fontSize='12px'
                    classNames='w-6 h-6'
                  />
                </div>
              </div>
              <Button className='w-full mt-8'>Stake Cosmos</Button>
            </div>
            <div className='max-w-[500px] text-center'>
              <div className='mt-8 mb-8 md:hidden block'></div>
              <p>
                How many <span className='text-info'>{`{ASSET}`}</span> do you
                have?
              </p>
              <div className='font-spaceGrotesk md:text-[45px] font-bold text-[32px]'>
                <NumberInput className='w-1/2 mx-auto' />
              </div>
              <div className='relative my-4 mt-8'>
                <div className='bg-[#3f5d4a] rounded-full overflow-hidden'>
                  <div
                    className='bg-success w-1/2 h-4'
                    role='progressbar'
                    aria-label='music progress'
                  />
                </div>
                <div className='bg-white absolute left-1/2 top-1/2 w-4 h-4 -mt-2 -ml-2 flex items-center justify-center rounded-full shadow border-0'></div>
              </div>
              <p className='text-[14px] mt-8 md:block hidden'>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores et ea rebum
              </p>
              <table className='w-full text-sm text-gray-500 text-right mt-8'>
                <tbody>
                  <tr className='border-b text-sm'>
                    <td className='text-left text-imperGrey pb-2 pt-6'>
                      Daily earnings
                    </td>
                    <td className='text-[#E5E7EB] font-bold pb-2 pt-6'>
                      8.01 ASSETS
                    </td>
                    <td className='text-imperGrey pb-2 pt-6'>$159.23</td>
                  </tr>
                  <tr className='border-b text-sm'>
                    <td className='text-left text-imperGrey pb-2 pt-6'>
                      Monthly earnings
                    </td>
                    <td className='text-[#E5E7EB] font-bold pb-2 pt-6'>
                      208.98 ASSETS
                    </td>
                    <td className='text-imperGrey pb-2 pt-6'>$169.865.23</td>
                  </tr>
                  <tr className='border-b text-sm'>
                    <td className='text-left text-imperGrey pb-2 pt-6'>
                      Yearly earnings
                    </td>
                    <td className='text-[#E5E7EB] font-bold pb-2 pt-6'>
                      2978.76 ASSETS
                    </td>
                    <td className='text-imperGrey pb-2 pt-6'>$2,187,985.55</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </FadeInSection>
      <section className='mt-[280px] md:mt-[350px]'>
        <Card className='mx-auto'>
          <img
            src='/assets/coins.png'
            alt='coins'
            className='-mt-[150px] w-[415px] mx-auto'
          />
          <h4 className='font-bold text-md text-primary-500 font-inter mb-2 text-center mt-4'>
            You don't have atom?
          </h4>
          <h3 className='font-spaceGrotesk font-bold text-[45px] leading-[64px] mb-2 text-center'>
            Buy now
          </h3>
          <p>You can purchase Atoms through our refferal link below</p>
          <div className='grid md:grid-cols-2'>
            <Button className='mt-6 bg-white text-black hover:bg-imperGrey active:bg-grey'>
              <div className='flex justify-center items-center'>
                Buy on Osmosis
                <Icon icon='charm:link-external' className='ml-2' />
              </div>
            </Button>
            <Button className='mt-6 bg-white text-black hover:bg-imperGrey active:bg-grey'>
              <div className='flex justify-center items-center'>
                Buy on Junoswap
                <Icon icon='charm:link-external' className='ml-2' />
              </div>
            </Button>
          </div>
        </Card>
      </section>
      <section className='md:mt-[160px] md:px-[80px] mt-[55px]'>
        <div className='md:w-1/2 text-left'>
          <h4 className='font-bold md:text-md text-2xl text-primary-500 font-inter mb-1 mt-3'>
            See on our blog
          </h4>
          <FadeInSection>
            <h3 className='font-spaceGrotesk font-bold md:text-[45px] text-4xl md:leading-[64px] leading-[44px] mb-2'>
              How to delagate Atoms
            </h3>
          </FadeInSection>
          <p className='text-[14px] md:text-base'>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum
          </p>
        </div>
        <div className='md:flex justify-between'>
          <Article />
          <Article />
          <Article />
        </div>
      </section>
      <section className='md:mt-[240px] md:px-[220px] md:mb-[140px] mt-[80px] mb-[140px]'>
        <FadeInSection>
          <h3 className='text-[45px] font-bold font-spaceGrotesk text-center'>
            Got questions ?
          </h3>
          <h4 className='font-bold text-md text-primary-500 font-inter mb-10 text-center'>
            We have the answers
          </h4>
        </FadeInSection>
        <FadeInSection>
          <div className='mb-4'>
            <Accordion
              title='How do i stake ?'
              content={
                'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum'
              }
              opened={false}
            />
          </div>
          <div className='mb-4'>
            <Accordion
              title='What makes me sure it is safe ?'
              content={
                'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum'
              }
              opened={false}
            />
          </div>
          <div className='mb-4'>
            <Accordion
              title='What problems does Imperator solves ?'
              content={
                'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum'
              }
              opened={false}
            />
          </div>
          <div className='mb-4'>
            <Accordion
              title='How do i earn my money ?'
              content={
                'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum'
              }
              opened={false}
            />
          </div>
        </FadeInSection>
      </section>
    </div>
  );
};

export default Home;
