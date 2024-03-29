'use client'
import Image from "next/image";
import Answer from "../../components/Answer";
import InputElement from "../../components/InputElement";
import Question from "../../components/Question";
import SideBar from "../../components/Sidebar";
import { useEffect, useState } from "react";
import LogoImage from '/image/scripty-logo.png'
import WelcomeModal from "../../components/modals/WelcomeModal";
import { useUser } from "@clerk/nextjs";
import Generating from "../../components/Generating";


export default function Home() {
  // const allChat = [
  //   {
  //     type: "question",
  //     text: "This is the new Question regarding Nextjs",
  //   },
  //   {
  //     type: "answer",
  //     text: "This is the new Answer regarding Nextjs",
  //   },
  //   {
  //     type: "question",
  //     text: "This is the new Question regarding Nextjs",
  //   },
  //   {
  //     type: "answer",
  //     text: "This is the new Answer regarding Nextjs",
  //   },
  //   {
  //     type: "question",
  //     text: "This is the new Question regarding Nextjs",
  //   },
  //   {
  //     type: "answer",
  //     text: "This is the new Answer regarding Nextjs",
  //   },
  //   {
  //     type: "question",
  //     text: "This is the new Question regarding Nextjs",
  //   },
  //   {
  //     type: "answer",
  //     text: "This is the new Answer regarding Nextjs",
  //   },

  // ]
  const [allChats, setallChats] = useState([])
  const [questions, setquestions] = useState([])
  const [isWelcomeOpen, setisWelcomeOpen] = useState(false)
  const [isTourOpen, setisTourOpen] = useState(false)
  const [isAnsGenerated, setisAnsGenerated] = useState(false)
  const [isStopLoading, setisStopLoading] = useState(true)


  const handleQuery = (querr, type) => {
    setquestions(querr)
    setallChats([...allChats, { type: type, text: querr }])
  }

  useEffect(() => {
    setisWelcomeOpen(true)
  }, [])
  return (
    <>
      {
        <>
          <WelcomeModal isOpen={isWelcomeOpen} setisOpen={setisWelcomeOpen} setisTourOpen={setisTourOpen} />
          <div className={` ${(isWelcomeOpen || isTourOpen) && 'blur-xs'} ${'grid grid-cols-12 lg:grid-cols-9 h-[700px]'}`}>
            <div className="lg:col-span-2 col-span-3 px-2 ">

              <SideBar />
            </div>
            <main className="w-auto h-[700px] flex justify-between flex-col col-span-9 lg:col-span-7">
              <div className=" h-4/5 scroll-auto snap-y overflow-auto touch-pan-y p-6 pt-10 w-full">
                {allChats?.length > 0 ?
                  <>
                    {
                      allChats?.map((item, index) => {
                        return (
                          <div className="my-4" key={index}>

                            {
                              item.type === 'question' ? <Question setisStopLoading={setisStopLoading} question={item} /> : <Answer answer={item} />
                            }

                          </div>
                        )
                      })

                    }
                    <div className="my-4">
                      {(isAnsGenerated && isStopLoading) && <Generating isStopLoading={isStopLoading} setisStopLoading={setisStopLoading} />}
                    </div>
                  </>
                  :
                  <div className="flex flex-col h-full align-middle justify-center items-center">
                    <div className="p-2 my-2">
                      <Image src={LogoImage} className="rounded-xl border" width={100} height={80} alt="logo" />
                    </div>
                    <h1 className="p-3 text-center text-xl tracking-wide font-normal">What would you like to write about today?</h1>
                    <h2 className="text-center text-lg font-normal p-1">
                      (tip:don&apos;t post forgot to add a Youtube Channel)
                    </h2>
                  </div>
                }


              </div>


              <div className="h-[15%]">
                <InputElement setisAnsGenerated={setisAnsGenerated} handleQuery={handleQuery} setisStopLoading={setisStopLoading} />
              </div>


            </main>

          </div>
        </>
      }
    </>
  );
}

