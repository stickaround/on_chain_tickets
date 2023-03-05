import { Link } from 'react-router-dom';
import CircleIcon from '../CircleIcon';
type Props = {
  name: string;
  role: string;
  position: string;
  className?: string;
  src?: string;
};
const TeamMember = (props: Props) => {
  return (
    <div
      className={`bg-[#65474D]/50 p-7 px-10 max-w-[300px] flex flex-col items-center rounded-2xl ${
        props.className ? props.className : ''
      }`}
    >
      <div>
        <img
          src={props.src ? props.src : '/assets/default_avatar.svg'}
          alt='avatar'
          className={`mx-auto w-32 ${
            props?.src ? 'rounded-full border-[6px]' : ''
          }`}
        />
      </div>
      <p className='mt-4 title-large'>{props.name}</p>
      <p>{props.role}</p>
      <p className='mt-8'>{props.position}</p>
      <div className='w-full mt-10'>
        <div className='flex justify-around mx-6'>
          <Link className='cursor-pointer' to='#'>
            <CircleIcon
              icon='akar-icons:linkedin-fill'
              classNames='w-x-big h-x-big bg-[#2E2224]'
              fontSize='12px'
            />
          </Link>
          <Link className='cursor-pointer' to='#'>
            <CircleIcon
              icon='akar-icons:github-fill'
              classNames='w-x-big h-x-big bg-[#2E2224]'
              fontSize='12px'
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TeamMember;
