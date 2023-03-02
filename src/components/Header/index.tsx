import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className='md:px-[90px] z-40'>
      <div className='flex min-h-[80px] md:items-center items-end text-white'>
        <div>
          {/* <img src='/assets/logo.svg' alt='logo' className='max-w-[unset]' /> */}
          On Chain Tickets
        </div>
        <div className='font-inter text-[14px] xl:flex hidden ml-[110px]'>
          <Link to='/#home' className='mr-xxx-big'>
            How it works
          </Link>
          <Link to='/#home' className='mr-xxx-big'>
            FAQs
          </Link>
        </div>
        <div className='ml-auto md:flex hidden'>
          <Link to='/signin' className='mr-xxx-big'>
            Sign in
          </Link>
          <Link to='/join' className='mr-xxx-big'>
            Join
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
