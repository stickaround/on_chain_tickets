import { useState } from 'react';

import './index.css';

const items = [
  { name: 'Yes', fee: '0% fees', image: 1 },
  { name: 'No', fee: '0% fees', image: 3 },
];

type DropDownProps = {
  onChange: (hasTier: string) => void;
};

const DropDown = (props: DropDownProps) => {
  const [collapsed, setCollapsed] = useState(false);
  const [selected, setSelected] = useState('No');
  return (
    <div className='relative mt-3'>
      <button
        onClick={() => setCollapsed(!collapsed)}
        className={`flex items-center bg-[#332424]/50 w-full p-2 rounded-lg ${
          collapsed ? 'rounded-b-none' : ''
        }`}
      >
        {selected}
      </button>
      {collapsed && (
        <div
          id='dropdown'
          className='absolute z-10 divide-y divide-gray-100 w-full'
        >
          <ul
            className='dropdown-list text-sm text-white bg-[#65474D] rounded-b-lg'
            aria-labelledby='dropdownDefault'
          >
            {items.map((item, index) => (
              <li
                className='flex items-center p-[10px] hover:cursor-pointer hover:bg-slate-500'
                key={index}
                onClick={() => {
                  setSelected(item.name);
                  setCollapsed(false);
                  props.onChange(item.name);
                }}
              >
                {item.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default DropDown;
