'use server'
import axios from "axios"
import { revalidatePath } from "next/cache";
const serverUrl = 'http://127.0.0.1:5000'
// const serverUrl = 'https://shovels-ai-techavtar.vercel.app'

export async function addYoutubeChannel(channelUrl, userId) {
    try {
        const result = await axios({
            method: "post",
            url: `${serverUrl}/add_channel`,
            data: JSON.stringify({ channel_url: channelUrl, user_id: userId }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        revalidatePath('/home')
        return result.data.channel_id
    } catch (error) {
        console.log(error)
        throw error
    }
}

export async function deleteYoutubeChannel(channelId) {
    try {
       const result =  await axios({
            method: "post",
            url: `${serverUrl}/delete_channel`,
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
            url: `${serverUrl}/channels`,
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
            url: `${serverUrl}/chatbot`,
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
            url: `${serverUrl}/sessions`,
            data: JSON.stringify({ user_id: userId}),
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
export async function getSession(userId,channelId) {
    try {
        const sessions = await axios({
            method: "post",
            url: `${serverUrl}/session`,
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
            url: `${serverUrl}/history`,
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
            url: `${serverUrl}/start_new_session`,
            data: JSON.stringify({ user_id: userId }),
            headers: {
                'Content-Type': 'application/json'
              }
        })
        revalidatePath("/home")
        return session 
    }
    catch (error) {
        console.log(error)
        throw error
    }
}