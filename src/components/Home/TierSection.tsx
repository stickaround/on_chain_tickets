import React from 'react';

const TierSection = () => {
  const [transferable, setTransferable] = React.useState(false);

  return (
    <div>
      <div className='flex mt-4 flex-col md:flex-row'>
        <div className='md:w-1/3 md:mr-4'>
          <div className=' text-left'>
            <label className='mb-2 text-sm font-medium text-[#E5E7EB]'>
              Name of the levels/tiers Name
            </label>
            <input
              type='text'
              className='bg-[#65474D] w-full text-sm border-[0.5px] p-2.5 mt-3 rounded-lg text-white'
            />
          </div>
        </div>
        <div className='md:w-1/3 md:mr-4'>
          <div className=' text-left'>
            <label className='mb-2 text-sm font-medium text-[#E5E7EB]'>
              Cost
            </label>
            <input
              type='number'
              className='bg-[#65474D] w-full text-sm border-[0.5px] p-2.5 mt-3 rounded-lg text-white'
            />
          </div>
        </div>
        <div className='md:w-1/3 md:mr-4'>
          <div className=' text-left'>
            <label className='mb-2 text-sm font-medium text-[#E5E7EB]'>
              Description
            </label>
            <input
              type='text'
              className='bg-[#65474D] w-full text-sm border-[0.5px] p-2.5 mt-3 rounded-lg text-white'
            />
          </div>
        </div>
      </div>
      <div className='flex mt-4'>
        <span className='flex items-center mr-2'>Transferable? </span>
        <div className='flex items-center mr-4'>
          <input
            id='radio1'
            type='radio'
            name='radio'
            className='hidden'
            onClick={() => {
              setTransferable(true);
            }}
            checked={transferable}
          />
          <label className='flex items-center cursor-pointer text-xl'>
            <span
              className='w-8 h-8 inline-block mr-2 rounded-full border border-grey flex-no-shrink'
              onClick={() => {
                setTransferable(true);
              }}
            ></span>
            Yes
          </label>
        </div>

        <div className='flex items-center mr-4'>
          <input
            id='radio2'
            type='radio'
            name='radio'
            className='hidden'
            checked={!transferable}
          />
          <label className='flex items-center cursor-pointer text-xl'>
            <span
              className='w-8 h-8 inline-block mr-2 rounded-full border border-grey flex-no-shrink'
              onClick={() => setTransferable(false)}
            ></span>
            No
          </label>
        </div>
      </div>
      {transferable && (
        <div className='flex mt-4 flex-col md:flex-row'>
          <div className='md:w-1/2 md:mr-4'>
            <div className=' text-left'>
              <label className='mb-2 text-sm font-medium text-[#E5E7EB]'>
                Date of Event
              </label>
              <input
                type='text'
                className='bg-[#65474D] w-full text-sm border-[0.5px] p-2.5 mt-3 rounded-lg text-white'
              />
            </div>
          </div>
          <div className='md:w-1/2 md:mr-4'>
            <div className=' text-left'>
              <label className='mb-2 text-sm font-medium text-[#E5E7EB]'>
                Location
              </label>
              <input
                type='text'
                className='bg-[#65474D] w-full text-sm border-[0.5px] p-2.5 mt-3 rounded-lg text-white'
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TierSection;
