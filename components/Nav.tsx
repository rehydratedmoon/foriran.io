import Lnk from '@/components/Lnk';
import ThemeToggler from './ThemeToggler';

const Nav = ({ className }: ClassName) => {
  return (
    <nav className={className}>
      <Lnk href='/' className='no-underline leading-none ls-tighter ' title='Home'>
        <div className='display-none sm:(flex flex-col)'>
          <span className='fw-900 c-orange10 '>برای</span>
          <span className='fw-300 c-gray11 '>ایران</span>
        </div>
      </Lnk>
      <div className='flex flex-col gap-6 mb-auto'>
        <Lnk href={`/safety`} className='in-sub-path:underline bf-i-ph-traffic-cone'>
          ایمنی فیزیکی
        </Lnk>
        <Lnk href={`/online-safety`} className='in-sub-path:underline bf-i-ph-mask-happy'>
          ایمنی آنلاین
        </Lnk>

      </div>
      <div className='mt-auto'>
        <ThemeToggler className="" />
      </div>
    </nav>
  );
};

export default Nav;
