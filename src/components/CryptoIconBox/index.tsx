import './index.css';

type Props = {
  icon: string;
  fee?: number;
  label: string;
};

const CryptoIconBox = (props: Props) => (
  <div className='text-left relative md:mb-[60px] mb-8'>
    {props.fee === undefined ? null : (
      <span className='hidden md:block text-[11px] bg-success absolute left-[calc(50%+30px)] top-0 text-white rounded-[5px] py-1 px-[5px]'>
        {props.fee + '% fees'}
      </span>
    )}
    <div className='text-center flex flex-col items-center mt-3'>
      <img
        src={`/assets/${props.icon}`}
        alt={props.icon}
        className='w-[60px] h-[60px] mb-[6px] icon-shadow rounded-full'
      />
      <p className='text-[14px]'>{props.label}</p>
    </div>
  </div>
);

export default CryptoIconBox;
