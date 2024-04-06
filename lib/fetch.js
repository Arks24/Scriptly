'use server'
import axios from "axios"

export async function addYoutubeChannel(channelUrl, userId) {
    try {
        const result = await axios({
            method: "post",
            url: "http://127.0.0.1:5000/add_channel",
            data: JSON.stringify({ channel_url: channelUrl, user_id: userId }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        return{ message: "Channel added successfully" }
    } catch (error) {
        console.log(error)
        throw error
    }
}

export async function deleteYoutubeChannel(channelId) {
    try {
        await axios({
            method: "post",
            url: "http://127.0.0.1:5000/delete_channel",
            data: JSON.stringify({ channel_id: channelId }),
            headers: {
                'Content-Type': 'application/json'
              }
        })
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
            url: "http://127.0.0.1:5000/channels",
            data: JSON.stringify({ user_id: userId }),
            headers: {
                'Content-Type': 'application/json'
              }
        })
        const allChannel = channels.data.channels
        return allChannel
    }
    catch (error) {
        console.log(error)
        throw error
    }
}

export async function generateTranscript(query, sessionId, channelId, userId) {

    try {
        const transcript = await axios({
            method: "post",
            url: "http://127.0.0.1:5000/chatbot",
            data: JSON.stringify({ channel_id: channelId, user_id: userId, session_Id: sessionId, query: query }),
            headers: {
                'Content-Type': 'application/json'
              }
        })
        return transcript 
    }
    catch (error) {
        console.log(error)
        throw error
    }
}

export async function getHistory(userId, sessionId) {
    try {
        const history = await axios({
            method: "post",
            url: "http://127.0.0.1:5000/history",
            data: JSON.stringify({ user_id: userId, session_id: sessionId }),
            headers: {
                'Content-Type': 'application/json'
              }
        })
        return history 
    } catch (error) {
        console.log(error)
        throw error
    }
}

export default async function startNewSession(userId, sessionId) {
    try {
        const session = await axios({
            method: "post",
            url: "http://127.0.0.1:5000/start_new_session",
            data: JSON.stringify({ user_id: userId, session_id: sessionId }),
            headers: {
                'Content-Type': 'application/json'
              }
        })
        return session 
    }
    catch (error) {
        console.log(error)
        throw error
    }
}