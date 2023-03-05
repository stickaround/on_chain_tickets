import React from 'react';
import { useFormik } from 'formik';

import Card from '../Card';
import Input from '../Input';
import DropDown from '../Dropdown';
import TierSection from './TierSection';

import './Tier.css';

type JoinAsAVenueModalProps = {
  open: boolean;
  closeModal: () => void;
  openSuccessModal: () => void;
};

export default function JoinAsAVenueModal({
  open,
  closeModal,
  openSuccessModal,
}: JoinAsAVenueModalProps) {
  const [hasTier, setHasTier] = React.useState('No');
  const formik = useFormik({
    initialValues: {
      name: '',
      date: '',
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

  const handleChangeHasTier = (hasTier: string) => {
    setHasTier(hasTier);
  };

  return open ? (
    <Card className='mx-auto w-[90%] calc-card'>
      <div className='justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none'>
        <div className='relative w-[80%] my-6'>
          {/*content*/}
          <div className='border-0 rounded-lg shadow-lg relative bg-[#65474D]/90 flex flex-col outline-none focus:outline-none w-[100%]'>
            {/*header*/}
            <div className='flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t'>
              <h3 className='text-3xl font-semibold'>Request a Venue</h3>
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
                  label='Name your brand'
                  name='name'
                  type='text'
                  className='bg-transparent'
                  error={false}
                  value={formik.values.name}
                  handleChange={formik.handleChange}
                />
              </div>
              <div className='md:mr-4 mt-3'>
                <Input
                  label='Date'
                  name='date'
                  className='bg-transparent'
                  error={false}
                  type='text'
                  value={formik.values.date}
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
                  <label className='mb-2 text-sm font-medium text-[#E5E7EB]'>
                    Different levels/tiers of tickets?
                  </label>
                  <DropDown onChange={handleChangeHasTier} />
                </div>
              </div>
              {hasTier === 'Yes' && <TierSection />}
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
                type='button'
                onClick={() => {
                  closeModal();
                  openSuccessModal();
                }}
              >
                Request
              </button>
            </div>
          </div>
        </div>
      </div>
    </Card>
  ) : null;
}
