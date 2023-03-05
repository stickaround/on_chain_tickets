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
        <div className='flex items-center'>
          <img
            src='/assets/gold_coin.png'
            alt='logo'
            width='50px'
            className='max-w-[unset]'
          />
          <h2 className='ml-2 text-[30px]'>OCT</h2>
        </div>
        <div className='ml-auto md:flex hidden'>
          <span
            onClick={() => handleClickScroll('howitworks')}
            className='mr-xxx-big cursor-pointer'
          >
            About
          </span>
          <span
            onClick={() => handleClickScroll('faqs')}
            className='mr-xxx-big cursor-pointer'
          >
            FAQs
          </span>
          <Link to='/join' className='mr-xxx-big'>
            Join
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
