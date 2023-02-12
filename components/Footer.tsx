import Link from 'next/link';

const Footer = () => {
  return (
    <footer className='  px-4 c-gray9 '>
      <div className='b-t-1 b-gray7 py-4  flex flex-wrap ac gap-4'>
        <p className='text-center  text-sm mie-auto w-full sm:w-auto'>برای ایران</p>
        <div className='flex gap-4 jc text-xs w-full sm:w-auto'>
          <Link href='/terms-of-use'>قوانین کاربری</Link>
          <Link href='/privacy-policy'>سیاست محرمانگی</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
