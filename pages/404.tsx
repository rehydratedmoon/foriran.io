import { NextPage } from "next";
import Link from "next/link";
const Page: NextPage = () => {
  return (
    <div className='h-full flex flex-col jc '>
      <h1>خطای ۴۰۴</h1>
      <p>صفحه‌ای با این آدرس وجود ندارد.</p>
      <Link href="/" className="mt-10 w-fit btn-prm-grd af-i-ph-arrow-left">
        بازگشت به صفحه خانه
      </Link>
    </div>
  );
};

export default Page;
