import { useFormik } from 'formik';
import { useState } from 'react';

import Card from '../Card';
import Input from '../Input';

type JoinAsAFanModalProps = {
  open: boolean;
  closeModal: () => void;
  openConfirmModal: () => void;
};

export default function JoinAsAFanModal({
  open,
  closeModal,
  openConfirmModal,
}: JoinAsAFanModalProps) {
  const formik = useFormik({
    initialValues: {
      email: '',
    },
    onSubmit: (values) => {
      closeModal();
      openConfirmModal();
      console.log(JSON.stringify(values));
    },
  });
  const [firstSelected, setFirstSelected] = useState(false);
  const [secondSelected, setSecondSelected] = useState(false);
  const [thirdSelected, setThirdSelected] = useState(false);

  return open ? (
    <Card className='mx-auto max-w-[580px] calc-card animated fadeIn fadeOut delay-200'>
      <div className='justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none'>
        <div className='relative w-[80%] my-6'>
          {/*content*/}
          <div className='border-0 rounded-lg shadow-lg bg-[#65474D]/80 relative flex flex-col w-full outline-none focus:outline-none'>
            {/*header*/}
            <div className='flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t'>
              <h3 className='text-3xl font-semibold'>Select event</h3>
              <button
                className='p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none'
                onClick={closeModal}
              >
                <span className='bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none'>
                  ×
                </span>
              </button>
            </div>
            {/*body*/}
            <div className='relative p-6 flex-auto'>
              <div>
                <label className='mb-2 text-lg font-medium text-[#E5E7EB]'>
                  Select the tickets of the events you want to attend
                </label>
                <div className='grid grid-cols-3 gap-4'>
                  <div
                    className={
                      firstSelected ? 'bg-gray-500 p-3 rounded-3xl' : ''
                    }
                  >
                    <div
                      className='hover:cursor-pointer rounded-3xl p-2 dark:hover:bg-grey-100'
                      onClick={() => setFirstSelected(!firstSelected)}
                    >
                      <img
                        src='/assets/davis_fighters.jpg'
                        className='rounded-3xl object-cover hover:scale-105'
                        alt='Davis Fighter'
                        width='200px'
                      />
                    </div>
                    <span className='mt-5 ml-3'>Davis Fighter</span>
                    <p className='text-xs ml-3 mt-2 font-normal text-gray-200 dark:text-gray-300'>
                      Davis and Daniel is gonna have a boxing game
                    </p>
                  </div>
                  <div
                    className={
                      secondSelected ? 'bg-gray-500 p-3 rounded-3xl' : ''
                    }
                  >
                    <div
                      className='hover:cursor-pointer rounded-3xl p-2 dark:hover:bg-grey-100'
                      onClick={() => setSecondSelected(!secondSelected)}
                    >
                      <img
                        src='/assets/john_mayer.jpg'
                        className={`rounded-3xl object-cover hover:scale-105 ${
                          secondSelected ? 'border-1' : ''
                        }`}
                        alt='John Mayer'
                        width='200px'
                      />
                    </div>
                    <span className='mt-5 ml-3'>John Mayer</span>
                    <p className='text-xs ml-3 mt-2 font-normal text-gray-200 dark:text-gray-300'>
                      John Mayer will start his new season soon
                    </p>
                  </div>
                  <div
                    className={
                      thirdSelected ? 'bg-gray-500 p-3 rounded-3xl' : ''
                    }
                  >
                    <div
                      className='hover:cursor-pointer rounded-3xl p-2 dark:hover:bg-grey-100'
                      onClick={() => setThirdSelected(!thirdSelected)}
                    >
                      <img
                        src='/assets/kobe_braynt.jpg'
                        className='rounded-3xl object-cover hover:scale-105'
                        alt='Kobe Bryant'
                        width='200px'
                      />
                    </div>
                    <span className='mt-5 ml-3'>Kobe Braynt</span>
                    <p className='text-xs ml-3 mt-2 font-normal text-gray-200 dark:text-gray-300'>
                      Kobe was a legend
                    </p>
                  </div>
                </div>
              </div>
              <div className='md:mr-4 mt-[75px]'>
                <Input
                  label='What is your email?'
                  name='email'
                  type='email'
                  className='bg-transparent'
                  error={false}
                  value={formik.values.email}
                  required={true}
                  handleChange={formik.handleChange}
                />
              </div>
            </div>
            {/*footer*/}
            <div className='flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b'>
              <button
                className='text-gray-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150'
                type='button'
                onClick={closeModal}
              >
                Close
              </button>
              <button
                className='bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150'
                type='submit'
                onClick={() => formik.handleSubmit()}
              >
                Send Code
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className='opacity-25 fixed inset-0 z-40 bg-black'></div>
    </Card>
  ) : null;
}
