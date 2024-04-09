'use client'
import Image from "next/image";
import Answer from "../../components/Answer";
import InputElement from "../../components/InputElement";
import Question from "../../components/Question";
import SideBar from "../../components/Sidebar";
import { useRef, useEffect, useState, useContext } from "react";
import LogoImage from '/image/scripty-logo.png'
import WelcomeModal from "../../components/modals/WelcomeModal";
import Generating from "../../components/Generating";
import startNewSession, { generateTranscript, getHistory, getSessions,getSession } from "@/lib/fetch";
import { SkryptlyContext } from "@/context/ContextProvider";


export default function Home() {

  const [allChats, setallChats] = useState([])
  const { currentChannelId, currentSessionId, setcurrentChannelId, setcurrentSessionId } = useContext(SkryptlyContext)

  //   const allChat = [
  //     {
  //         role: "user",
  //         content: "This is the new Question regarding Nextjs",
  //     },
  //     {
  //         role: "assistant",
  //         content: "This is the new Answer regarding Nextjs",
  //     },
  //     {
  //         role: "user",
  //         content: "This is the new Question regarding Nextjs",
  //     },
  //     {
  //         role: "assistant",
  //         content: "This is the new Answer regarding Nextjs",
  //     },
  //     {
  //         role: "user",
  //         content: "This is the new Question regarding Nextjs",
  //     },
  //     {
  //         role: "assistant",
  //         content: "This is the new Answer regarding Nextjs",
  //     },
  //     {
  //         role: "user",
  //         content: "This is the new Question regarding Nextjs",
  //     },
  //     {
  //         role: "assistant",
  //         content: "This is the new Answer regarding Nextjs",
  //     },

  // ]
  const handleScroll = useRef(null)

  const [isWelcomeOpen, setisWelcomeOpen] = useState(false)
  const [isTourOpen, setisTourOpen] = useState(false)
  const [isAnsGenerated, setisAnsGenerated] = useState(false)
  const [isStopLoading, setisStopLoading] = useState(true)
  const [allSessions, setallSessions] = useState([])

  const userId = 'user_12345'
  console.log("from home page", currentChannelId, currentSessionId)
  const handleQuery = (query, role) => {
    setallChats([...allChats, { role: role, content: query }])
    const path = '/home'
    console.log(currentChannelId, currentSessionId)
    async function fetchData() {
      const result = await generateTranscript(query, userId, path, '66151712e886db7e08205a56', '6615702f1124a008bfc8d718')
      if (result) {
        const answer = { role: result.role, content: result.response }
        setallChats(prev => [...prev, answer])
        setisAnsGenerated(false)
        setisStopLoading(false)
      }
    }

    fetchData()
  }
  const handleSessionClick = (sessionId) => {

    async function fetchHistory() {
      const response = await getHistory(userId, sessionId)
      if (response?.history?.messages.length > 0) setallChats(response?.history?.messages)
      else setallChats([])
    }
    fetchHistory()
  }
  const handleNewChat = () => {
    async function fetchNewSession() {
      const response = await startNewSession(userId)
      console.log(response)
      setallSessions([...allSessions, response])
      setcurrentChannelId(response.channel_id)
      setcurrentSessionId(response.session_id)
      setallChats([])
    }
    fetchNewSession()
  }
  useEffect(() => {

    async function fetchSessions() {
      const response = await getSessions(userId)
      setallSessions(response)
    }
    // if (allSessions.length === 0) {

    //   async function fetchNewSession() {
    //     const response = await startNewSession(userId)
    //     console.log(response)
    //     setcurrentChannelId(response.channel_id)
    //     setcurrentSessionId(response.session_id)
    //     setallChats([])
    //   }
    //   fetchNewSession()
    // }
    
    fetchSessions()


  }, [currentChannelId, currentSessionId])

  useEffect(() => {
    if (handleScroll.current) {
      handleScroll.current.scrollIntoView({ behavior: "smooth" })
    }
  }, [allChats])

  useEffect(() => {
    setisWelcomeOpen(true)
    // handleNewChat()
  }, [])
  console.log("allChats", allChats)
  return (
    <>
      {
        <>
          <WelcomeModal isOpen={isWelcomeOpen} setisOpen={setisWelcomeOpen} setisTourOpen={setisTourOpen} />
          <div className={` ${(isWelcomeOpen || isTourOpen) && 'blur-xs'} ${'grid grid-cols-12 lg:grid-cols-9 h-[700px]'}`}>
            <div className="lg:col-span-2 col-span-3 px-2 ">

              <SideBar handleSessionClick={handleSessionClick} handleNewChat={handleNewChat} allSessions={allSessions} />
            </div>
            <main className="w-auto h-[700px] flex justify-between flex-col col-span-9 lg:col-span-7">
              <div className=" h-4/5 scroll-auto snap-y overflow-auto touch-pan-y p-6 pt-10 w-full">
                {allChats?.length > 0 ?
                  <>
                    {
                      allChats?.map((item, index) => {
                        return (
                          <>

                            <div className="my-4" key={index}>

                              {
                                item.role === 'user' ? <Question setisStopLoading={setisStopLoading} question={item} /> : <Answer answer={item} />
                              }

                            </div>
                            <div ref={handleScroll}></div>
                          </>
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

