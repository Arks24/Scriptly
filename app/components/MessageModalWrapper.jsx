'use client'
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useEffect } from "react";
import InformationModal from "./modals/InformationModal";

import { useState } from "react";

const MessageModelWrapper = ({ isOpen, closeProfileModal, ismessageOpen, setismessageOpen }) => {

    console.log(isOpen)
    const [messageInformation, setmessageInformation] = useState({ type: '', text: '' })


    const closemessageModal = () => {
        console.log(isOpen)
        closeProfileModal()
        setismessageOpen(false)
    }

    const handleMessageInformation = (prop) => {
        setmessageInformation(
            {
                type: prop.type,
                text: prop.text
            }
        )

    }


    return (
        <>
            <Transition appear show={ismessageOpen} as={Fragment}>
                <Dialog as="div" className="relative z-10" onmessageClose={closemessageModal}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-modalbg bg-opacity-40" />
                       
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="w-full md:ml-60 md:mb-20 max-w-3xl transform overflow-hidden rounded-2xl bg-bgColor  text-left align-middle shadow-xl transition-all">
                                    <Dialog.Title
                                        as="h3"
                                        className="text-lg font-medium leading-6 text-gray-900"
                                    ></Dialog.Title>

                                    <InformationModal isOpen={isOpen} closeProfileModal={closeProfileModal} closeModal={closemessageModal} messageInformation={messageInformation} handleMessageInformation={handleMessageInformation} />

                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>

        </>
    )
}

export default MessageModelWrapper