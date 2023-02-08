import Lnk from '@/components/Lnk';
import ThemeToggler from './ThemeToggler';

const Nav = ({ className }: ClassName) => {
  return (
    <nav className={className}>
      <Lnk href='/' className='no-underline leading-none ls-tighter ' title='Home'>
        <div className='display-none sm:(flex flex-col)'>
          <span className='fw-900 c-gray11 '>برای ایران</span>
        </div>
      </Lnk>
      <div className='flex flex-col gap-6 mb-auto'>
        <Lnk href={`/safety`} className='in-sub-path:underline bf-i-ph-first-aid-kit'>
          ایمنی فیزیکی
        </Lnk>
        <Lnk href={`/online-safety`} className='in-sub-path:underline bf-i-ph-keyhole'>
          ایمنی آنلاین
        </Lnk>
        <Lnk href={`/revolution-phases`} className='in-sub-path:underline bf-i-ph-arrows-out'>
          فاز‌های انقلاب
        </Lnk>
        <Lnk href={`/fight`} className='in-sub-path:underline bf-i-ph-lightning '>
          نبرد
        </Lnk>

      </div>
      <div className='mt-auto'>
        <ThemeToggler className="" />
      </div>
    </nav>
  );
};

export default Nav;
