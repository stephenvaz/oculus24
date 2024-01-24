import { Fragment, useEffect, useState } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { useDispatch, useSelector } from 'react-redux'
import { saveUser } from '../redux/userslice'
// import { NavLink } from 'react-router-dom'
import logo from '../assets/Full White.png'
import Center from '../animated-components/Center'
import NavLink from '../animated-components/NavLink'


const navigation = [
  { name: 'Home', href: '/', current: true },
  { name: 'Events', href: '/events', current: false },
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
      <div className='grow flex justify-around items-center' style={{
        width: 'calc(50% - 80px)'
      }}>
        {/* <NavLink> */}
        <a href="/events" className='hidden lg:block font-semibold tracking-wide text-[14px]'>EVENTS</a>
        {/* </NavLink> */}
        <a href="/sponsors" className='hidden lg:block font-semibold tracking-wide text-[14px]'>SPONSORS</a>
        <a href="/contact" className='hidden lg:block font-semibold tracking-wide text-[14px]'>CONTACT</a>
      </div>
      <a href="/">
        <Center>
          <img
            src={logo}
            alt=""
            className={`mx-2 shrink-0 h-full w-40 object-cover ${currPath === '/' ? 'opacity-0' : ''}`}
          />
        </Center>
      </a>
      <div className='grow flex justify-around items-center' style={{
        width: 'calc(50% - 80px)'
      }}>
        <a href="/schedule" className='hidden lg:block font-semibold tracking-wide text-[14px]'>SCHEDULE</a>
        <a href="/donation" className='hidden lg:block font-semibold tracking-wide text-[14px]'>DONATION</a>
        <a href="/login" className='hidden lg:block font-semibold tracking-wide text-[14px]'>LOGIN</a>
      </div>
    </div>
    // <Disclosure as="nav" className="text-white sticky top-0 z-50 ">
    //   {({ open }) => (
    //     <>
    //       <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
    //         <div className="relative flex h-16 items-center justify-between">
    //           <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
    //             {/* Mobile menu button*/}
    //             <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
    //               <span className="absolute -inset-0.5" />
    //               <span className="sr-only">Open main menu</span>
    //               {open ? (
    //                 <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
    //               ) : (
    //                 <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
    //               )}
    //             </Disclosure.Button>
    //           </div>
    //           <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
    //             <div className="flex flex-shrink-0 items-center">
    //               <img
    //                 className="h-8 w-auto"
    //                 src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
    //                 alt="Your Company"
    //               />
    //             </div>
    //             <div className="hidden sm:ml-6 sm:block">
    //               <div className="flex space-x-4">
    //                 {navigation.map((item) => (
    //                   <NavLink
    //                     key={item.name}
    //                     to={item.href}
    //                     className={({isActive, isPending}) =>classNames(
    //                       isActive ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
    //                       'rounded-md px-3 py-2 text-sm font-medium'
    //                     )}
    //                     aria-current={item.current ? 'page' : undefined}
    //                   >
    //                     {item.name}
    //                   </NavLink>
    //                 ))}
    //               </div>
    //             </div>
    //           </div>
    //           <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
    //             <button
    //               type="button"
    //               className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
    //             >
    //               <span className="absolute -inset-1.5" />
    //               <span className="sr-only">View notifications</span>
    //               <BellIcon className="h-6 w-6" aria-hidden="true" />
    //             </button>

    //             {/* Profile dropdown */}
    //             <Menu as="div" className="relative ml-3">
    //               <div>
    //                 <Menu.Button className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
    //                   <span className="absolute -inset-1.5" />
    //                   <span className="sr-only">Open user menu</span>
    //                   <img
    //                     className="h-8 w-8 rounded-full"
    //                     src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    //                     alt=""
    //                   />
    //                 </Menu.Button>
    //               </div>
    //               <Transition
    //                 as={Fragment}
    //                 enter="transition ease-out duration-100"
    //                 enterFrom="transform opacity-0 scale-95"
    //                 enterTo="transform opacity-100 scale-100"
    //                 leave="transition ease-in duration-75"
    //                 leaveFrom="transform opacity-100 scale-100"
    //                 leaveTo="transform opacity-0 scale-95"
    //               >
    //                 <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
    //                   <Menu.Item>
    //                     {({ active }) => (
    //                       <a
    //                         href="#"
    //                         className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
    //                       >
    //                         Your Profile
    //                       </a>
    //                     )}
    //                   </Menu.Item>
    //                   <Menu.Item>
    //                     {({ active }) => (
    //                       <a
    //                         href="#"
    //                         className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
    //                       >
    //                         Settings
    //                       </a>
    //                     )}
    //                   </Menu.Item>
    //                   <Menu.Item>
    //                     {({ active }) => (
    //                       <a
    //                         href="#"
    //                         className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
    //                       >
    //                         Sign out
    //                       </a>
    //                     )}
    //                   </Menu.Item>
    //                 </Menu.Items>
    //               </Transition>
    //             </Menu>
    //           </div>
    //         </div>
    //       </div>

    //       <Disclosure.Panel className="sm:hidden">
    //         <div className="space-y-1 px-2 pb-3 pt-2">
    //           {navigation.map((item) => (
    //             <NavLink
    //               key={item.name}
    //               to={item.href}
    //               className={({isActive})=>classNames(
    //                 isActive ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
    //                 'block rounded-md px-3 py-2 text-base font-medium'
    //               )}
    //               aria-current={item.current ? 'page' : undefined}
    //               >
    //             <Disclosure.Button
    //             >
    //               {item.name}
    //             </Disclosure.Button>
    //             </NavLink>
    //           ))}
    //         </div>
    //       </Disclosure.Panel>
    //     </>
    //   )}
    // </Disclosure>
  )
}
