'use client'
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useEffect } from "react";
import ChatHistory from "./modals/ChatHistory";


const DeleteChatModel = ({ isOpen, setisOpen, checkProfile, closeProfileModal }) => {

    console.log(isOpen, '+++++++')
    // if(checkProfile && isOpen) console.log(closeProfileModal())

    const closeDeleteModal = () => {
        // console.log(isOpen)
        setisOpen(false)
    }


    return (
        <>
            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-50" onClose={closeDeleteModal}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed blur-lg inset-0 bg-modalbg bg-opacity-40" />

                    </Transition.Child>

                    <div className="fixed inset-0  overflow-y-auto">
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

                                    <ChatHistory closeModal={closeDeleteModal} />

                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>

        </>
    )
}

export default DeleteChatModel