import React from 'react';
import { useFormik } from 'formik';

import Card from '../Card';
import Input from '../Input';

type DemoModalProps = {
  open: boolean;
  closeModal: () => void;
};

export default function DemoModal({ open, closeModal }: DemoModalProps) {
  const formik = useFormik({
    initialValues: {
      name: '',
      capacity: 0,
      ticketCnt: 0,
      levelOfTickets: 0,
      isTransferable: false,
      dateOfEvent: '',
      location: '',
    },
    onSubmit: (values) => {
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
              <h3 className='text-3xl font-semibold'>Request a demo</h3>
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
              <div className='md:mr-4'>
                <Input
                  label='Name of your brand'
                  name='name'
                  type='string'
                  className='bg-transparent'
                  error={false}
                  value={formik.values.name}
                  handleChange={formik.handleChange}
                />
              </div>
              <div className='md:mr-4'>
                <Input
                  label='Capacity'
                  name='capacity'
                  className='bg-transparent'
                  error={false}
                  type='number'
                  value={formik.values.capacity}
                  handleChange={formik.handleChange}
                />
              </div>
              <div className='flex mt-4 flex-col md:flex-row'>
                <div className='md:w-1/2 md:mr-4'>
                  <Input
                    label='Number of tickets you want to create'
                    name='ticketCnt'
                    className='bg-transparent'
                    type='number'
                    error={false}
                    value={formik.values.ticketCnt}
                    handleChange={formik.handleChange}
                  />
                </div>
                <div className='md:w-1/2 md:mr-4'>
                  <Input
                    label='Different levels and tears of tickets'
                    name='levelOfTickets'
                    className='bg-transparent'
                    type='number'
                    error={false}
                    value={formik.values.levelOfTickets}
                    handleChange={formik.handleChange}
                  />
                </div>
              </div>
              <div className='flex mt-4'>
                <span className='mr-1'>Transferable? </span>

                <div className='mb-[0.125rem] mr-4 inline-block min-h-[1.5rem] pl-[1.5rem]'>
                  <input
                    className="relative float-left mt-0.5 mr-1 -ml-[1.5rem] h-5 w-5 appearance-none rounded-full border-2 border-solid border-[rgba(0,0,0,0.25)] bg-white before:pointer-events-none before:absolute before:h-4 before:w-4 before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] after:absolute after:z-[1] after:block after:h-4 after:w-4 after:rounded-full after:bg-white after:content-[''] checked:border-primary checked:bg-white checked:before:opacity-[0.16] checked:after:absolute checked:after:left-1/2 checked:after:top-1/2 checked:after:h-[0.625rem] checked:after:w-[0.625rem] checked:after:rounded-full checked:after:border-primary checked:after:bg-primary checked:after:content-[''] checked:after:[transform:translate(-50%,-50%)] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:border-primary checked:focus:bg-white checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s]"
                    type='radio'
                    name='inlineRadioOptions'
                    id='inlineRadio1'
                    value='option1'
                  />
                  <label className='mt-px inline-block pl-[0.15rem] hover:cursor-pointer'>
                    Yes
                  </label>
                </div>
                <div className='mb-[0.125rem] mr-4 inline-block min-h-[1.5rem] pl-[1.5rem]'>
                  <input
                    className="relative float-left mt-0.5 mr-1 -ml-[1.5rem] h-5 w-5 appearance-none rounded-full border-2 border-solid border-[rgba(0,0,0,0.25)] bg-white before:pointer-events-none before:absolute before:h-4 before:w-4 before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] after:absolute after:z-[1] after:block after:h-4 after:w-4 after:rounded-full after:bg-white after:content-[''] checked:border-primary checked:bg-white checked:before:opacity-[0.16] checked:after:absolute checked:after:left-1/2 checked:after:top-1/2 checked:after:h-[0.625rem] checked:after:w-[0.625rem] checked:after:rounded-full checked:after:border-primary checked:after:bg-primary checked:after:content-[''] checked:after:[transform:translate(-50%,-50%)] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:border-primary checked:focus:bg-white checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s]"
                    type='radio'
                    name='inlineRadioOptions'
                    id='inlineRadio2'
                    value='option2'
                  />
                  <label className='mt-px inline-block pl-[0.15rem] hover:cursor-pointer'>
                    No
                  </label>
                </div>
              </div>
              <div className='flex mt-4 flex-col md:flex-row'>
                <div className='md:w-1/2 md:mr-4'>
                  <Input
                    label='Date of Event'
                    name='dateOfEvent'
                    className='bg-transparent'
                    type='string'
                    error={false}
                    value={formik.values.dateOfEvent}
                    handleChange={formik.handleChange}
                  />
                </div>
                <div className='md:w-1/2 md:mr-4'>
                  <Input
                    label='Location'
                    name='location'
                    className='bg-transparent'
                    type='string'
                    error={false}
                    value={formik.values.location}
                    handleChange={formik.handleChange}
                  />
                </div>
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
                type='button'
                onClick={closeModal}
              >
                Request
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className='opacity-25 fixed inset-0 z-40 bg-black'></div>
    </Card>
  ) : // </FadeInSection>
  null;
}
