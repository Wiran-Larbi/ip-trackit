import { Popover, Transition } from '@headlessui/react'
// import { Fragment } from 'react'
// import { solutions, IconOne, IconTwo, IconThree } from './assets'
import { PopOverBtn } from './PopOverBtn'
import { PopOverPanel } from './PopOverPanel'
import { PopOverPanelPhone } from './PopOverPanelPhone'


export function PopOverPhone() {
    return (
        <div className="px-0 sm:px-4 ">
            <Popover className="relative">
                {({ open }) => (
                    <>
                        <PopOverBtn open={open}>
                            <span>Solutions</span>
                        </PopOverBtn>
                        <PopOverPanelPhone />

                    </>
                )}
            </Popover>
        </div>
    )
}