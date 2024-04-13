'use client'
import Image from "next/image";
import Answer from "../../components/Answer";
import InputElement from "../../components/InputElement";
import Question from "../../components/Question";
import SideBar from "../../components/Sidebar";
import { useRef, useEffect, useState, useContext, use } from "react";
import LogoImage from '/image/scripty-logo.png'
import WelcomeModal from "../../components/modals/WelcomeModal";
import Generating from "../../components/Generating";
import startNewSession, { generateTranscript, getHistory, getSessions, getSession } from "@/lib/fetch";
import { SkryptlyContext } from "@/context/ContextProvider";


export default function Home() {

  const [allChats, setallChats] = useState([])
  const { currentChannelId, currentSessionId, setcurrentChannelId, setcurrentSessionId,allChatHistory,userId } = useContext(SkryptlyContext)

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

  
  console.log("from home page", currentChannelId, currentSessionId,userId)
  const handleQuery = (query, role) => {
    setallChats([...allChats, { role: role, content: query }])
    const path = '/home'
    async function fetchData() {
      const result = await generateTranscript(query, userId, path, currentSessionId, currentChannelId)
      if (result) {
        const answer = { role: result.role, content: result.response }
        setallChats(prev => [...prev, answer])
        setisAnsGenerated(false)
        setisStopLoading(false)
      }
    }

    fetchData()
  }
  const handleSessionClick = (sessionId, channelId) => {
    console.log("handle session click", sessionId, channelId)
    async function fetchHistory() {
      const response = await getHistory(userId, sessionId)
      if (response?.history?.messages.length > 0) setallChats(response?.history?.messages)
      else setallChats([])
    }
    setcurrentSessionId(sessionId)
    setcurrentChannelId(channelId)
    fetchHistory()
  }
  const handleNewChat = () => {
    async function fetchNewSession() {
      const response = await startNewSession(userId);
      setcurrentChannelId(response.channelId);
      setcurrentSessionId(response.sessionId);
      setallSessions(prev => [response, ...prev]);
      setallChats([]);
    }
    fetchNewSession();
  };
  console.log('allsession', allSessions)

  useEffect(() => {
    async function fetchSessions() {
      const response = await getSessions(userId)
      setallSessions(response)
      if(response.length===0){
        setallChats([])
      }
    } 
   fetchSessions()

  }, [currentChannelId, currentSessionId, allSessions.length,allChatHistory,userId])

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

