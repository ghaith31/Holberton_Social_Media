import Link from 'next/link';
import { HiHome } from 'react-icons/hi';

export default function Sidebar() {
  return (
    <div className='flex flex-col p-1 justify-between h-screen items-center'>
      <div className='flex flex-col gap-4 p-1'>
        <br></br>
        <Link href='/'>
          <img
            src='https://user-images.strikinglycdn.com/res/hrscywv4p/image/upload/c_limit,fl_lossy,h_630,w_1200,f_auto,q_auto/79001/331125_630361.png' // Image stockée dans /public/
            alt='Holberton School Logo'
            className= 'w-20 h-20 cursor-pointer hover:bg-gray-100 rounded-full transition-all duration-200'
          />
        </Link>
        <Link
          href='/'
          className='flex items-center p-3 hover:bg-gray-100 rounded-full transition-all duration-200 gap-2 w-fit'
        >
          <HiHome className='w-7 h-7' />
          <span className='font-bold hidden xl:inline'>Home</span>
        </Link>
        <button className='bg-blue-400 text-white rounded-full hover:brightness-95 transition-all duration-200 w-48 h-9 shadow-md hidden xl:inline font-semibold'>
          Sign in
        </button>
      </div>
    </div>
  );
}
