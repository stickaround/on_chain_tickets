import React from 'react';
import { useFormik } from 'formik';

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

  return open ? (
    <Card className='mx-auto max-w-[580px] calc-card'>
      <div className='justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none'>
        <div className='relative w-auto my-6 mx-auto max-w-3xl'>
          {/*content*/}
          <div className='border-0 rounded-lg shadow-lg relative flex flex-col bg-slate-800 w-full outline-none focus:outline-none'>
            {/*header*/}
            <div className='flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t'>
              <h3 className='text-3xl font-semibold'>Select a ticket</h3>
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
                  Select a ticket
                </label>
                <ul
                  className='space-y-1 text-sm text-gray-700 dark:text-gray-200 py-4'
                  aria-labelledby='dropdownHelperRadioButton'
                >
                  <li>
                    <div className='flex p-2 rounded hover:bg-slate-600 dark:hover:bg-gray-600'>
                      <div className='flex items-center h-5'>
                        <input
                          name='davis'
                          type='radio'
                          value=''
                          className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500'
                        />
                      </div>
                      <div className='ml-2 text-sm'>
                        <label className='font-medium text-white dark:text-gray-300'>
                          <div>Davis Fighter</div>
                          <p
                            id='helper-radio-text-4'
                            className='text-xs font-normal text-gray-500 dark:text-gray-300'
                          >
                            Davis and Daniel is gonna have a boxing game
                          </p>
                        </label>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className='flex p-2 rounded hover:bg-slate-600 dark:hover:bg-gray-600'>
                      <div className='flex items-center h-5'>
                        <input
                          name='john'
                          type='radio'
                          value=''
                          className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500'
                        />
                      </div>
                      <div className='ml-2 text-sm'>
                        <label className='font-medium text-white dark:text-gray-300'>
                          <div>John Mayer</div>
                          <p
                            id='helper-radio-text-5'
                            className='text-xs font-normal text-gray-500 dark:text-gray-300'
                          >
                            He's gonna start his season soon.
                          </p>
                        </label>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className='flex p-2 rounded hover:bg-slate-600 dark:hover:bg-gray-600'>
                      <div className='flex items-center h-5'>
                        <input
                          id='kobe'
                          name='kobe'
                          type='radio'
                          value=''
                          className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500'
                        />
                      </div>
                      <div className='ml-2 text-sm'>
                        <label className='font-medium text-white dark:text-gray-300'>
                          <div>Kobe Bryant</div>
                          <p
                            id='helper-radio-text-6'
                            className='text-xs font-normal text-gray-500 dark:text-gray-300'
                          >
                            He was a legend
                          </p>
                        </label>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
              <div className='md:mr-4'>
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
                className='text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150'
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
