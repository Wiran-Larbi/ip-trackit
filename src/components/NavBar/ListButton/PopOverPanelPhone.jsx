import { Popover, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import { ListCardPhone } from './ListCardPhone'
import { solutions } from './assets'

export function PopOverPanelPhone() {


    return (
        <>
            <Transition
                as={Fragment}
                enter="transition ease-out duration-200"
                enterFrom="opacity-0 translate-y-1"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-1"
            >
                <Popover.Panel className="mt-1 w-screen max-w-md transform px-4 sm:px-0 lg:max-w-3xl ">
                    <div className="overflow-hidden">
                        <div className="relative grid gap-8 px-0 py-4 lg:grid-cols-2">
                            {
                                solutions.map((item) => (
                                    <ListCardPhone item={item} />
                                ))}
                        </div>
                        {/* <div className="bg-gray-50 p-4"
                            style={{
                                backgroundImage: "url(" + background + ")",
                                backgroundSize: "cover",
                            }}>
                            <ListCardLast />
                        </div> */}
                    </div>
                </Popover.Panel>
            </Transition>
        </>
    )
}