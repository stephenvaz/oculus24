import { Fragment, useEffect, useState } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { useDispatch, useSelector } from 'react-redux'
import { saveUser } from '../redux/userslice'
// import { NavLink } from 'react-router-dom'
import logo from '../assets/Full White.png'
import Center from '../animated-components/Center'
import NavLink from '../animated-components/NavLink'
import GlassmorphicButton from './glassmorphic/CButtonv1'
import { toggleNavBar } from '../redux/uislice'


const navigation = [
  { name: 'Home', href: '/', current: true },
  { name: 'Events', href: '/events', current: false },
  { name: 'Schedule', href: '/schedule', current: false },
  { name: 'Sponsors', href: '/sponsors', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Navbar() {

  const dispatch = useDispatch()
  // const user = useSelector(state => state.user.user)


  // useEffect(() => {
  //   // read from local storage if user data is present
  //   // const user = localStorage.getItem('user')
  //   if (!user) {
  //     dispatch(saveUser("test"))
  //     console.log("user", user)
  //   }
  //   else {
  //     console.log("user", user)
  //   }

  // }, [])

  // useEffect(() => {
  //   console.log("userc", user)
  // }, [user])
  const [currPath, setCurrPath] = useState(window.location.pathname)

  useEffect(() => {
    // console.log(currPath)
    const path = window.location.pathname
    setCurrPath(path)
  }, [currPath])

  return (
    <div className='w-full bg-white bg-opacity-[0.075] h-20 flex
    fixed top-0 z-50 backdrop-blur-md transition-all text-white'>
      {/* <div className='grow flex justify-around items-center' style={{
        width: 'calc(50% - 80px)'
      }}>
        <a href="/events" className='hidden lg:block font-semibold tracking-wide text-[14px]'>EVENTS</a>
        <a href="/sponsors" className='hidden lg:block font-semibold tracking-wide text-[14px]'>SPONSORS</a>
        <a href="/contact" className='hidden lg:block font-semibold tracking-wide text-[14px]'>CONTACT</a>
      </div> */}
      <a href="/">
        <Center>
          <img
            src={logo}
            alt=""
            className={`mx-2 shrink-0 h-full w-40 object-cover ${currPath === '/' ? 'opacity-0' : ''}`}
          />
        </Center>
      </a>
      {/* <div className='grow flex justify-around items-center' style={{
        width: 'calc(50% - 80px)'
      }}>
        <a href="/schedule" className='hidden lg:block font-semibold tracking-wide text-[14px]'>SCHEDULE</a>
        <a href="/donation" className='hidden lg:block font-semibold tracking-wide text-[14px]'>DONATION</a>
        <a href="/login" className='hidden lg:block font-semibold tracking-wide text-[14px]'>LOGIN</a>
      </div> */}
        <GlassmorphicButton className='hidden lg:block font-semibold tracking-wide text-[14px]' onClick={
          () => {
            dispatch(toggleNavBar())
          }
        }>Open Nav</GlassmorphicButton>
    </div>
  )
}
