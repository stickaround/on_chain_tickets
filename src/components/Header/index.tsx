import { Link } from 'react-router-dom';

const Header = () => {
  const handleClickScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className='md:px-[90px] z-40'>
      <div className='flex min-h-[80px] md:items-center items-end text-white'>
        <div>
          <img
            src='/assets/logo.png'
            alt='logo'
            width='150px'
            className='max-w-[unset]'
          />
        </div>
        <div className='font-inter text-[14px] xl:flex hidden ml-[110px]'>
          <span
            onClick={() => handleClickScroll('howitworks')}
            className='mr-xxx-big cursor-pointer'
          >
            How it works
          </span>
          <span
            onClick={() => handleClickScroll('faqs')}
            className='mr-xxx-big cursor-pointer'
          >
            FAQs
          </span>
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
