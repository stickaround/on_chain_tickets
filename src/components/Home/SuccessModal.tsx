import React, { useEffect } from 'react';

import Card from '../Card';

type SuccessModalProps = {
  closeModal: () => void;
};

const SuccessModal = ({ closeModal }: SuccessModalProps) => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      console.log('msmdmfsd');
      closeModal();
    }, 2000);

    return () => {
      clearTimeout(timeout);
    };
    //eslint-disable-next-line
  }, []);

  return (
    <Card className='mx-auto max-w-[580px] calc-card animated fadeIn fadeOut'>
      <div className='justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none'>
        <div className='relative w-auto my-6 mx-auto max-w-3xl'>
          {/*content*/}
          <div className='border-0 rounded-lg shadow-lg relative flex flex-col bg-[#65474D]/90 w-full outline-none focus:outline-none'>
            {/*body*/}
            <div className='relative p-6 flex-auto'>
              <h2 className='my-4 text-slate-500 leading-relaxed text-center text-[50px]'>
                Congratulation!
              </h2>
              <p className='text-base'>
                Your request was successfully delivered. We will be in touch as
                soon as possible.
              </p>
            </div>
            {/*footer*/}
            <div className='p-6 text-center'>
              <button
                className='bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150'
                type='button'
                onClick={closeModal}
              >
                Okay
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className='opacity-25 fixed inset-0 z-40 bg-black'></div>
    </Card>
  );
};

export default SuccessModal;
