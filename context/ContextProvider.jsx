'use client'
import { useClerk } from "@clerk/nextjs";
import { createContext, useState } from "react";


export const SkryptlyContext = createContext({
    currentChannelId: '',
    currentSessionId: '',
    userId: '',
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
    const userId = userData.id

    return (
        <SkryptlyContext.Provider value={{ currentChannelId, currentSessionId, setcurrentChannelId, setcurrentSessionId, allChatHistory, setallChatHistory, userId }}>
            {children}
        </SkryptlyContext.Provider>
    )
}
export default ContextProvider