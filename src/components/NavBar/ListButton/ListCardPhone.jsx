import { Popover, Transition } from '@headlessui/react'
import { Fragment } from 'react'

export function ListCardPhone({ item }) {



    return (
        <>
            <a
                key={item.name}
                href={item.href}
                className="-m-2 flex items-center rounded-lg ml-4 py-2 transition duration-150 ease-in-out hover:bg-gray-100 "
            >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center text-white sm:h-12 sm:w-12">
                    <item.icon aria-hidden="true" />
                    {/* <image></image> */}
                </div>
                <div className="ml-4">
                    <p className="text-sm font-medium text-trademark">
                        {item.name}
                    </p>
                    <p className="text-sm text-gray-600">
                        {item.description}
                    </p>
                </div>
            </a>
        </>
    )
}