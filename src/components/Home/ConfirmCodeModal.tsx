import { useFormik } from 'formik';

import Card from '../Card';
import Input from '../Input';

type ConfirmCodeModalProps = {
  open: boolean;
  closeModal: () => void;
  openSuccessModal: () => void;
};

export default function ConfirmCodeModal({
  open,
  closeModal,
  openSuccessModal,
}: ConfirmCodeModalProps) {
  const formik = useFormik({
    initialValues: {
      code: '',
    },
    onSubmit: (values) => {
      console.log(JSON.stringify(values));
    },
  });
  return open ? (
    <Card className='mx-auto max-w-[580px] calc-card'>
      <div className='justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none'>
        <div className='relative w-[80%] my-6'>
          {/*content*/}
          <div className='border-0 rounded-lg shadow-lg relative flex flex-col bg-[#65474D]/90 w-full outline-none focus:outline-none'>
            {/*header*/}
            <div className='flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t'>
              <h3 className='text-3xl font-semibold'>Confirm the code</h3>
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
              <p className='my-4 text-gray-300 text-[35px] leading-relaxed'>
                Please checkout your mailbox and enter code below
                <span className='border-b-[1px] border-b-imperGrey w-1/2'>
                  <Input
                    label=''
                    name='code'
                    type='text'
                    className='bg-transparent'
                    error={false}
                    value={formik.values.code}
                    handleChange={formik.handleChange}
                  />
                </span>
              </p>
            </div>
            {/*footer*/}
            <div className='flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b'>
              <button
                className='text-white background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150'
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
                Confirm
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
