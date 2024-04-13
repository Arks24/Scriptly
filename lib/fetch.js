'use server'
import axios from "axios"
import { revalidatePath } from "next/cache";


export async function addYoutubeChannel(channelUrl, userId) {
    try {
        const result = await axios({
            method: "post",
            url: `${process.env.SERVER_URL}/add_channel`,
            data: JSON.stringify({ channel_url: channelUrl, user_id: userId }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        revalidatePath('/home')
        console.log(result.data)
        return result.data
    } catch (error) {
        console.log(error)
        throw error
    }
}

export async function deleteYoutubeChannel(channelId) {
    try {
       const result =  await axios({
            method: "post",
            url: `${process.env.SERVER_URL}/delete_channel`,
            data: JSON.stringify({ channel_id: channelId }),
            headers: {
                'Content-Type': 'application/json'
              }
        })
        revalidatePath('/home')
        return {message: "Channel deleted successfully"}
    } catch (error) {
        console.log(error)
        throw error
    }
}

export async function getChannels(userId) {
    try {
        const channels = await axios({
            method: "post",
            url: `${process.env.SERVER_URL}/channels`,
            data: JSON.stringify({ user_id: userId }),
            headers: {
                'Content-Type': 'application/json'
              }
        })
        const allChannel = channels.data.channels
        revalidatePath("/home")
        return allChannel
    }
    catch (error) {
        console.log(error)
        throw error
    }
}

export async function generateTranscript(query,userId,path, currentSesstionId="661135c908fbd8ad66c1df16", currentChannelId="661135b208fbd8ad66c1df10") {

    try {
        console.log(query, userId,currentChannelId,currentSesstionId)
        const transcript = await axios({
            method: "post",
            url: `${process.env.SERVER_URL}/chatbot`,
            data: JSON.stringify({ channel_id: currentChannelId, user_id: userId, session_id: currentSesstionId, query: query }),
            headers: {
                'Content-Type': 'application/json'
              }
        })
        const transcriptData = transcript.data
        revalidatePath(path)
        return transcriptData
        
    }
    catch (error) {
        console.log(error)
        throw error
    }
}


export async function getSessions(userId) {
    try {
        const sessions = await axios({
            method: "post",
            url: `${process.env.SERVER_URL}/sessions`,
            data: JSON.stringify({ user_id: userId}),
            headers: {
                'Content-Type': 'application/json'
              }
        })
        const allSessions = sessions.data.sessions
        revalidatePath("/home")
        return allSessions.reverse()
    } catch (error) {
        console.log('error')
        throw error
    }
}
export async function deleteSession(sessionId) {
    try {
        const sessions = await axios({
            method: "post",
            url: `${process.env.SERVER_URL}/delete_session`,
            data: JSON.stringify({ session_id: sessionId}),
            headers: {
                'Content-Type': 'application/json'
              }
        })
        
        revalidatePath("/home")
     
    } catch (error) {
        console.log(error)
        throw error
    }
}
export async function deleteAllChats(userId) {
    try {
        const sessions = await axios({
            method: "post",
            url: `${process.env.SERVER_URL}/delete_all_chats`,
            data: JSON.stringify({user_id:userId}),
            headers: {
                'Content-Type': 'application/json'
              }
        })
        
        revalidatePath("/home")
        return sessions.data
     
    } catch (error) {
        console.log(error)
        throw error
    }
}

export async function getSession(userId,channelId) {
    try {
        const sessions = await axios({
            method: "post",
            url: `${process.env.SERVER_URL}/session`,
            data: JSON.stringify({ user_id: userId,channel_id:channelId}),
            headers: {
                'Content-Type': 'application/json'
              }
        })
        const allSessions = sessions.data.sessions
        revalidatePath("/home")
        return allSessions
    } catch (error) {
        console.log(error)
        throw error
    }
}


export async function getHistory(userId, sessionId) {
    try {
        const history = await axios({
            method: "post",
            url: `${process.env.SERVER_URL}/history`,
            data: JSON.stringify({ user_id: userId, session_id: sessionId }),
            headers: {
                'Content-Type': 'application/json'
              }
        })
        revalidatePath("/home")
        return history.data.history 
    } catch (error) {
        console.log(error)
        throw error
    }
}

export default async function startNewSession(userId) {
    try {
        const session = await axios({
            method: "post",
            url: `${process.env.SERVER_URL}/start_new_session`,
            data: JSON.stringify({ user_id: userId }),
            headers: {
                'Content-Type': 'application/json'
              }
        })
        revalidatePath("/home")
        return session.data 
    }
    catch (error) {
        console.log(error)
        throw error
    }
}