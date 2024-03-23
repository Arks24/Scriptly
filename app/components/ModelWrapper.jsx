'use client'
import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import Youtube from "./modals/Youtube";
import ProfileModal from "./modals/ProfileModal";
import WelcomeModal from "./modals/WelcomeModal";

const ModelWrapper = ({ isOpen, setisOpen, ModelType,closeProfileModal }) => {


    if(ModelType && isOpen) console.log(ModelType)
    const closeModal = () => {
        setisOpen(false)
    }

    return (
        <>
            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={closeModal}>
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

                                    {(ModelType === "welcome") && <WelcomeModal closeModal={closeModal} />} 
                                    {(ModelType === "youtube") && <Youtube  closeModal={closeModal}  />} 
                                    {(ModelType === "profile") && <ProfileModal closeProfileModal={closeProfileModal}  closeModal={closeProfileModal} />} 
                                
                                    </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>

        </>
    )
}

export default ModelWrapper