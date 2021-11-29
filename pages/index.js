import React,{useState} from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {AiOutlineMenuFold} from 'react-icons/ai';
import {MdCancel} from 'react-icons/md';
import {BiLeftArrow, BiRightArrow} from 'react-icons/bi';
import {BsFacebook, BsTwitter, BsInstagram, BsYoutube} from 'react-icons/bs';

import glover_logo from '../public/images/glover_logo.svg';
import appstore from '../public/images/appstore.svg';
import playstore from '../public/images/playstore.svg';
import first from '../public/images/first.png';
import airtime from '../public/images/airtime.png';
import refill from '../public/images/refill.png';
import perfect from '../public/images/perfect.png';
import personalized from '../public/images/personalized.png';
import download from '../public/images/download.png';
import biz from '../public/images/biz.png';

export default function Home() {
  const [open, setOpen] = useState(false)
  return (
    <div className='w-full h-full font-nunito'>
      <div className='w-full h-60 bg-header bg-cover sm:h-96 md:h-120 lg:h-145'>
        <div className='sm:hidden flex items-center place-content-between px-2 fixed bg-white w-full z-10'>
          <div>
            <Image src={glover_logo} alt='glover logo' width='50' height='50' />
          </div>
          <div onClick={() => setOpen(!open)}>
            {
              open ? <MdCancel /> : <AiOutlineMenuFold />
            }
          </div>
        </div>
        {
          open ? (
            <div className='bg-white w-full shadow-lg absolute top-14 py-4 px-8 text-ls font-extrabold'>
              <div className='leading-6'>
                <p>About Us</p>
                <p>Products</p>
                <p>Resources</p>
                <p>Business</p>
              </div>
              <div className='mt-14'>
                <p className='bg-yellow-400 w-20 mb-2 text-center py-2 rounded-lg'>Get Started</p>
                <p className='border border-blue-500 w-16 py-1 text-center rounded-lg'>Sign In</p>
              </div>
            </div>
          ): (
            null
            )
          }
        <div className='hidden sm:border sm:flex sm:flex-auto sm:place-content-around sm:gap-4 sm: sm:px-4 sm:bg-white sm:items-center sm:justify-items-center sm:fixed sm:w-full sm:h-16 sm:z-50'>
          <div>
            <Image src={glover_logo} alt='glover logo' width='50' height='50' />
          </div>
          <div className='flex flex-auto text-ls items-center place-content-around font-extrabold gap-8 lg:w-2/4 lg:px-80 lg:gap-1 lg:text-mds xl:'>
            <p>About Us</p>
            <p>Products</p>
            <p>Resources</p>
            <p>Business</p>
          </div>
          <div className='flex gap-2 text-ls'>
            <p className='bg-yellow-400 h-8 w-20 grid items-center text-center rounded-lg lg:text-mds lg:w-24'>Get Started</p>
            <p className='border border-blue-500 h-8 w-20 grid items-center text-center rounded-lg lg:text-mds lg:w-24'>Sign In</p>
          </div>
        </div>
      </div>
      <div className='w-10/12 h-120 p-20 rounded-3xl bg-c1 mx-auto -mt-4 mb-4 sm:w-11/12 sm:-mt-8 sm:flex sm:gap-8 sm:h-130 lg:mb-8'>
        <div className='lg:w-96 lg:grid lg:content-center'>
          <h4 className='text-xl font-extrabold text-center mb-4 sm:text-3xl sm:text-left lg:text-5xl lg:leading-20'>Enjoy Seamless Giftcard Trading</h4>
          <p className='text-ls text-center sm:text-left sm:text-sm lg:text-lg lg:my-4'>Buy and sell Giftcard from over 20 countries around the world.</p>
          <div className='w-24 mx-auto sm:ml-0 lg:w-28'>
            <button className='border-none bg-blue-500 py-2 px-4 text-ls text-center rounded-lg my-6 lg:w-32 lg:h-12 lg:text-lg'>Learn more</button>
          </div>
        </div>
        <div className='w-full mx-auto lg:w-96 lg:h-110'>
          <Image src={first} alt='first' width='350' height='350' />
        </div>
      </div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-4 sm:w-11/12 sm:mx-auto">
        <div className='relative w-11/12 grid justify-items-center h-120 rounded-3xl bg-c2 mx-auto sm:w-full sm:relative sm:h-120 lg:h-125'>
          <div className='p-20 sm:p-6'>
            <h4 className='text-xl font-extrabold text-center mb-4 sm:text-3xl sm:my-8'>Excess Airtime?</h4>
            <p className='text-ls text-center sm:text-sm lg:w-60 lg:mx-auto lg:text-md'>Experience the best way to convert your excess airtime recharge to cash.</p>
            <div className='w-32 mx-auto sm:w-28 sm:my-4'>
              <button className='border border-blue-500 bg-white py-2 px-4 text-ls text-center rounded-lg my-6 sm:text-sm sm:mb-20'>Learn more</button>
            </div>
          </div>
          <div className="w-11/12 absolute bottom-0 sm:absolute sm:bottom-0 sm:mx-auto sm:px-4 lg:w-2/3">
            <Image src={airtime} alt='airtime' width='400' height='280' />
          </div>
        </div>
        <div className='w-11/12 h-120 relative grid justify-items-center rounded-3xl bg-c3 mx-auto sm:w-full sm:relative sm:h-120 lg:h-125'>
          <div className='p-20  sm:p-6'>
            <h4 className='text-xl font-extrabold text-center mb-4 sm:text-3xl sm:my-8'>Refil On The Go!</h4>
            <p className='text-ls text-center sm:text-sm lg:w-60 lg:mx-auto lg:text-md'>Pay bills with ease and convience.</p>
            <div className='w-32 mx-auto sm:w-28 sm:my-4'>
              <button className='border border-blue-500 bg-white py-2 px-4 text-ls text-center rounded-lg my-6 sm:text-sm sm:mb-20'>Learn more</button>
            </div>
          </div>
          <div className="w-11/12 absolute bottom-0 sm:absolute sm:bottom-0 sm:mx-auto sm:w-11/12 sm:px-4 lg:w-2/3">
            <Image src={refill} alt='refill' width='350' height='250' />
          </div>
        </div>
        <div className='w-11/12 h-120 relative grid justify-items-center rounded-3xl bg-c4 mx-auto sm:gap-4 sm:w-full sm:relative sm:h-140'>
          <div className='p-20 sm:p-6'>
            <h4 className='text-xl font-extrabold text-center mb-4 sm:text-3xl sm:my-8'>Perfect Money</h4>
            <p className='text-ls text-center sm:text-sm lg:w-60 lg:mx-auto lg:text-md'>Send and receive money with ease.</p>
            <div className='w-32 mx-auto sm:w-28 sm:my-4'>
              <button className='border border-blue-500 bg-white py-2 px-4 text-ls text-center rounded-lg my-6 sm:text-sm sm:mb-20'>Learn more</button>
            </div>
          </div>
          <div className="w-11/12 absolute bottom-0 sm:absolute sm:bottom-0 sm:mx-auto sm:w-11/12 sm:px-4 lg:w-3/5 lg:h-80 lg:bottom-0">
            <Image src={perfect} alt='perfect' width='300' height='300' />
          </div>
        </div>
        <div className='w-11/12 h-120 relative grid justify-items-center rounded-3xl bg-c5 mx-auto sm:gap-4 sm:w-full sm:relative sm:h-140'>
          <div className='p-20 sm:p-6'>
            <h4 className='text-xl font-extrabold text-center mb-4 sm:text-3xl sm:my-6'>Personalized Shopping</h4>
            <p className='text-ls text-center sm:text-sm lg:w-60 lg:mx-auto lg:text-md'>With Glover, you can now sit back and let us take care of your shopping and as an additionla bonus, we bring it to you doorstep.</p>
            <div className='w-32 mx-auto sm:w-28 sm:my-2'>
              <button className='border border-blue-500 bg-white py-2 px-4 text-ls text-center rounded-lg my-6 sm:text-sm sm:mb-20'>Learn more</button>
            </div>
          </div>
          <div className="w-2/5 absolute bottom-0 sm:absolute sm:bottom-0 sm:mx-auto sm:w-11/12 sm:px-4 lg:w-3/5 lg:h-80 ">
            <Image src={personalized} alt='personalized' width='300' height='300' />
          </div>
        </div>
      </div>
      <div className="w-11/12 font-extrabold text-3xl text-center mx-auto my-14 sm:text-4xl">
        Join millions of users to experience the world of Glover
      </div>
      <div className="relative w-11/12 mx-auto bg-c1 rounded-xl h-130 p-20 mb-4 sm:grid sm:justify-items-center sm:h-140 lg:relative lg:py-0" style={{
        clipPath: 'polygon(0% 5%, 100% 0%, 100% 100%, 0 100%)'
      }}>
        <div className='lg:relative lg:left-32 lg:h-60 lg:w-96 lg:my-auto'>
          <h1 className="text-3xl font-extrabold text-center sm:5xl lg:text-5xl lg:text-left">Download our Mobile App</h1>
          <div className="flex gap-3 sm:w-11/12 sm:grid sm:grid-cols-2 sm:gap-4 lg:-mt-0">
            <div className=''>
              <Image src={appstore} alt='app store' width='150' height='150' />
            </div>
            <div className=''>
              <Image src={playstore} alt='playstore' width='150' height='150' />
            </div>
          </div>
        </div>
        <div className='absolute bottom-0 mx-auto w-40 sm:absolute sm:bottom-0 sm:w-72 sm:h-110 lg:absolute lg:bottom-0 lg:w-80 lg:h-130 lg:left-0 lg:z-20'>
          <Image src={download} alt='download' width='400' height='700' />
        </div>
      </div>
      <div className='w-11/12 mx-auto my-24 grid grid-cols-1 gap-8 sm:flex sm:flex-auto lg:h-13'>
        <div>
          <h1 className="text-3xl font-extrabold mb-4 sm:4xl">Introducing: Glover Business</h1>
          <p className="text-lss sm:text-sm">Are you a business owner? Join other smart merchants to create your business create
          Giftcards for your business and take its marketing to a whole new level.</p>
          <ul className="text-lss font-bold my-4 leading-8 sm:text-sm sm:leading-10">
            <li>Better consumer visibility</li>
            <li>Brand awareness</li>
            <li>Simplify Transactions</li>
            <li>Enhance Shopping Experiences</li>
          </ul>
          <button className='bg-blue-500 py-2 px-6 text-ls text-center rounded-lg sm:text-sm'>Join the waitlist</button>
        </div>
        <div className='w-40 h-40 sm:w-11/12 sm:h-60 sm:rounded-2xl lg:h-full lg:w-110'> 
          <Image src={biz} alt='biz' width='600' height='600' />
        </div>
      </div>
      <div className='w-full h-120 bg-c3' style={{
        clipPath: 'polygon(0% 0%, 100% 5%, 100% 100%, 0 100%)'
      }}>
        <div className='w-11/12 mx-auto pt-16 mb-20'>
          <h1 className="text-3xl font-extrabold mb-4 sm:text-4xl lg:6xl">Dont just take our word for it</h1>
          <p className="text-lss sm:text-sm lg:text-md lg:text-lg">Hear from our 120,000+ happy customer</p>
        </div>
        <div className='flex justify-end gap-4 px-8'>
          <BiLeftArrow style={{fontSize: '1.5rem'}} />
          <BiRightArrow style={{fontSize: '1.5rem'}}/>
        </div>
        <div className='w-11/12 h-36 mx-auto mt-8 border overflow-x-auto grid grid-cols-4 gap-8'>
          <div className='h-full w-72 border border-blue-900'>boxes</div>
          <div className='h-full w-72 border border-blue-400'>boxes</div>
          <div className='h-full w-72 border border-blue-200'>boxes</div>
        </div>
      </div>
      <div className='w-11/12 mx-auto py-12 sm:w-3/5 '>
        <h1 className="text-2xl font-extrabold mb-4 sm:text-3xl sm:text-center">Create a free account now</h1>
        <p className="text-lss sm:text-sm sm:text-center">Hear from our 120,000+ happy customer</p>
        <div className='w-full mx-auto relative'>
          <input type='text' placeholder='Enter your email address' className="w-full h-14 rounded-lg bg-gray-200 my-8 pl-4 pr-36 text-ls sm:text-sm" />
          <button className='bg-blue-500 py-3 px-8 text-ls text-center rounded-lg absolute right-2 top-10 sm:text-sm'>Get Started</button>
        </div>
      </div>
      <div className="w-full p-8 bg-gray-100">
        <div className="w-full bg-gray-100 grid grid-cols-2 gap-10 mb-8 sm:grid-cols-3">
          <div>
            <h1 className="text-lss font-extrabold mb-2 sm:text-sm">Company</h1>
            <ul className="text-ls leading-6 sm:text-sm sm:leading-9">
              <li>About Us</li>
              <li>Careers</li>
              <li>Business</li>
            </ul>
          </div>
          <div>
            <h1 className="text-lss font-extrabold mb-2 sm:text-sm">Support</h1>
            <ul className="text-ls leading-6 sm:text-sm sm:leading-9">
              <li>Policies</li>
              <li>Learn</li>
            </ul>
          </div>
          <div>
            <h1 className="text-lss font-extrabold mb-2 sm:text-sm">Products</h1>
            <ul className="text-ls leading-6 sm:text-sm sm:leading-9">
              <li>Giftcards</li>
              <li>Refill</li>
              <li>Airtime to Cash</li>
              <li>Personalized Shopping</li>
            </ul>
          </div>
          <div>
            <h1 className="text-lss font-extrabold mb-2 sm:text-sm">Contact</h1>
            <ul className="text-ls leading-6 sm:text-sm sm:leading-9">
              <li>hello@gloverapp.co</li>
              <li>+2349020119024</li>
              <li className='grid grid-cols-3 gap-4 lg:w-3/6'>
                <BsFacebook style={{
                  fontSize: '1.8rem',
                  padding: '.3rem',
                  background: 'white',
                  borderRadius: '50%',
                  border: 'none',
                  boxShadow: '2px 2px 2px gray'}}
                />
                <BsTwitter style={{
                  fontSize: '1.8rem',
                  padding: '.3rem',
                  background: 'white',
                  borderRadius: '50%',
                  border: 'none',
                  boxShadow: '2px 2px 2px gray'}}
                />
                <BsInstagram style={{
                  fontSize: '1.8rem',
                  padding: '.3rem',
                  background: 'white',
                  borderRadius: '50%',
                  border: 'none',
                  boxShadow: '2px 2px 2px gray'}}
                />
                <BsYoutube style={{
                  fontSize: '1.8rem',
                  padding: '.3rem',
                  background: 'white',
                  borderRadius: '50%',
                  border: 'none',
                  boxShadow: '2px 2px 2px gray'}}
                />
              </li>
            </ul>
          </div>
        </div>
        <div className='sm:w-3/6 lg:w-2/6'>
          <div className="sm:w-full lg:w-full lg:mb-4">
            <Image src={glover_logo} alt='glover logo' width='70' height='70' />
            <p className="text-lss sm:text-sm lg:leading-8 lg:text-md">Glover is a company duly registered with RC Number: 148208 under the Laws of the Federal Reblic of Nigeria.</p>
          </div>
          <div className='grid grid-cols-2 gap-4 sm:w-3/4 sm:mx-auto lg:w-5/6'>
            <Image src={appstore} alt='app store' width='150' height='150' />
            <Image src={playstore} alt='playstore' width='150' height='150' />
          </div>
        </div>
        <p className="text-ls text-center lg:text-md">Copyright &copy; 2021 Gloverapp.co</p>
      </div>
    </div>
  )
}
