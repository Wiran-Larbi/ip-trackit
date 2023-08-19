import { Popover, Transition } from '@headlessui/react'
// import { Fragment } from 'react'
// import { solutions, IconOne, IconTwo, IconThree } from './assets'
import { PopOverBtn } from './PopOverBtn'
import { PopOverPanel } from './PopOverPanel'


export function PopOver() {
    return (
        <div className="px-4">
            <Popover className="relative">
                {({ open }) => (
                    <>
                        <PopOverBtn open={open}>
                            <span>Solutions</span>
                        </PopOverBtn>
                        <PopOverPanel />

                    </>
                )}
            </Popover>
        </div>
    )
}
