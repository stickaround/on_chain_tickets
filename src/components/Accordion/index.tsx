import React, { useState } from 'react';

type Props = {
  title: String;
  content: String;
  opened: boolean;
};

const Accordion = (props: Props) => {
  const [isActive, setIsActive] = useState(props.opened);

  return (
    <div className='bg-[#65474D]/50 rounded-[8px]'>
      <div
        className='flex justify-between items-center p-4 w-full font-medium text-left text-white'
        onClick={() => setIsActive(!isActive)}
      >
        <div className='text-base font-bold'>{props.title}</div>
        <div className='text-3xl'>{props.opened ? '-' : '+'}</div>
      </div>
      {props.opened && <div className='p-4 pt-0'>{props.content}</div>}
    </div>
  );
};

export default Accordion;
