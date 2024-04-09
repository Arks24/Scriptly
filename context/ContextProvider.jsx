'use client'
import { generateTranscript, getSession } from "@/lib/fetch";
import { createContext,use,useState } from "react";


export const SkryptlyContext = createContext({
    currentChannelId:'',
    currentSessionId:'',
    setcurrentChannelId:()=>{},
    setcurrentSessionId:()=>{}
})



 const ContextProvider = ({ children }) => {

    const [currentChannelId, setcurrentChannelId] = useState('')
    const [currentSessionId, setcurrentSessionId] = useState('')


    // async function fetchData() {
    //     const response = await getHistory()
    //     console.log(response.data)
    // }

    const userId='user_12345'

    const handleQuery = (query,role) => {
      console.log(query,role)
      setallChats([...allChats, { role: role, content: query }])
      
      const result =generateTranscript(query,userId)
      console.log(result)
      setallChats([...allChats, { role: result.role, content: result.response }])
    }

    // useEffect(() => {
    //     async function fetchSession() {
    //         const response = await getSession(userId, currentChannelId)
    //         setcurrentSessionId(response.session_id)
    //       }
    //       fetchSession()
    // },[])

    return (
        <SkryptlyContext.Provider value={{currentChannelId,currentSessionId,setcurrentChannelId,setcurrentSessionId}}>
            {children}
        </SkryptlyContext.Provider>
    )
}
export default ContextProvider