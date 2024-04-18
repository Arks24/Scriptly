'use client'
import { useClerk } from "@clerk/nextjs";
import { createContext, useState } from "react";


export const SkryptlyContext = createContext({
    currentChannelId: '',
    currentSessionId: '',
    userId: '',
    userEmail: '',
    userName:'',
    userData: {},
    allChatHistory: () => { },
    setcurrentChannelId: () => { },
    setcurrentSessionId: () => { }
})



const ContextProvider = ({ children }) => {

    const [currentChannelId, setcurrentChannelId] = useState('')
    const [currentSessionId, setcurrentSessionId] = useState('')
    const [allChatHistory, setallChatHistory] = useState(false)

    const { user } = useClerk()
    const userData = { ...user }
    console.log(userData)
    const userId = userData.id
    const useremail = {...userData.primaryEmailAddress}
     const userEmail =useremail.emailAddress
     const userName = userData.fullName

    return (
        <SkryptlyContext.Provider value={{ currentChannelId, currentSessionId, setcurrentChannelId, setcurrentSessionId, allChatHistory, setallChatHistory, userId,userEmail,userName,userData }}>
            {children}
        </SkryptlyContext.Provider>
    )
}
export default ContextProvider