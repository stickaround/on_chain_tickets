type Props = {
  name: string;
  label: string;
  value: string | number | readonly string[] | undefined;
  error: Boolean;
  errorMsg?: string;
  type: string;
  className?: '' | string;
  required?: boolean;
  handleChange: (e: React.ChangeEvent<any>) => void;
};

const Input = (props: Props) => {
  return (
    <>
      <div className=' text-left'>
        <label className='mb-2 text-sm font-medium text-[#E5E7EB]'>
          {props.label}
        </label>
        <input
          type={props.type}
          id={props.name}
          className={
            'bg-[#65474D] w-full text-sm border-[0.5px] p-2.5 mt-3 rounded-lg text-white ' +
            (props.error
              ? 'border-error focus:ring-error'
              : 'border-whit' + props.className)
          }
          value={props.value}
          onChange={props.handleChange}
          required={props.required}
        />
        {props.error && (
          <p className='mt-2 text-sm text-error'>
            {props.errorMsg ? props.errorMsg : 'Error Message'}
          </p>
        )}
      </div>
    </>
  );
};

export default Input;
