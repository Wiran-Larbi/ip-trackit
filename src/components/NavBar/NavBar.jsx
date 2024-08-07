import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { PopOver } from './ListButton/PopOver'
import { ProfileMenu } from './NavBarStuff/ProfileMenu'
import { SignUpBtn } from './ListButton/SignUpBtn'
import { PopOverPhone } from './ListButton/PopOverPhone'
import { Logo } from './NavBarStuff/Logo'
import { ProfileMenuPhone } from './NavBarStuff/ProfileMenuPhone'

const navigation = [
    { name: 'Solutions', href: '#', current: false },
    { name: 'Teams', href: '#', current: false },
    { name: 'Blog', href: '#', current: false },
    { name: 'Contact', href: '#', current: false },
    { name: 'About', href: '#', current: false },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function NavBar({ signedIn }) {
    return (
        <Disclosure as="nav" className="bg-gray-50 shadow-2xl border border-b-slate-200 ">
            {({ open }) => (
                <>
                    <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                        <div className="relative flex h-16 items-center justify-between">
                            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                                {/* Mobile menu button*/}
                                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400  focus:outline-none">
                                    <span className="absolute -inset-0.5" />
                                    <span className="sr-only">Open main menu</span>
                                    {open ? (
                                        <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                                    ) : (
                                        <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                                    )}
                                </Disclosure.Button>
                            </div>
                            <div className="flex flex-1 gap-28 items-stretch sm:items-center justify-center sm:justify-start">
                                {/* //flex flex-1 items-stretch justify-center sm:items-stretch sm:justify-start */}
                                <Logo />
                                {
                                    signedIn
                                    &&
                                    <ProfileMenuPhone />

                                }

                                <div className="hidden mt-2 sm:ml-6 sm:block">
                                    <div className="flex space-x-4">
                                        {navigation.map((item) => (
                                            item.name === "Solutions"
                                                ?
                                                <PopOver />
                                                :
                                                <a
                                                    key={item.name}
                                                    href={item.href}
                                                    className='text-opacity-90 text-trademark px-3 py-2 text-base font-medium hover:text-opacity-100 hover:text-blue-400 transition duration-300 focus:outline-none'
                                                    aria-current={item.current ? 'page' : undefined}
                                                >
                                                    {item.name}
                                                </a>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">


                                {/* Profile dropdown */}

                                {
                                    signedIn === true
                                        ?
                                        <ProfileMenu />
                                        :
                                        <div className='hidden md:flex'>
                                            <SignUpBtn />
                                        </div>

                                }


                            </div>
                        </div>
                    </div>

                    <Disclosure.Panel className="sm:hidden p-4">
                        <div className="space-y-1 px-2 pb-3 pt-2">
                            {navigation.map((item) => (
                                item.name === "Solutions"
                                    ?
                                    <PopOverPhone />
                                    :
                                    <Disclosure.Button
                                        key={item.name}
                                        as="a"
                                        href={item.href}
                                        className='text-trademark  hover:text-cyan-500 transition duration-300 block px-3 py-2 text-lg font-medium'
                                        aria-current={item.current ? 'page' : undefined}
                                    >
                                        {item.name}
                                    </Disclosure.Button>
                            ))}


                        </div>
                        {
                            signedIn === false
                            &&
                            <div className='w-full flex flex-col items-center gap-y-2  md:hidden pt-8'>
                                <SignUpBtn />
                                <p className="mt-4 text-center text-sm font-thin font-sans">
                                    All Right Reserved &copy;
                                    <span className="text-cyan-500 font-bold "> ipTrackit</span>.
                                </p>
                            </div>

                        }
                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>
    )
}
