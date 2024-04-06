'use server'
import { NextResponse } from "next/server"

export default async function addYoutubeChannel(channelUrl, userId) {
    try {
        const user = await fetch({
            url: "http://127.0.0.1:5000/add_channel",
            method: "POST",
            body: JSON.stringify({ channel_url: channelUrl, user_id: userId }),
            headers: {
                "Content-Type": "application/json"
            }
        })
        return NextResponse.json({ message: "Channel added successfully" }, { status: 200 })
    } catch (error) {
        console.log(error)
        throw error
    }
}

export default async function deleteYoutubeChannel(channelUrl, userId) {
    try {
        await fetch({
            method: "POST",
            url: "http://127.0.0.1:5000/delete_channel",
            body: JSON.stringify({ channel_url: channelUrl, user_id: userId }),
            headers: {
                "Content-Type": "application/json"
            }
        })
        return NextResponse.json({ message: "Channel deleted successfully" }, { status: 200 })
    } catch (error) {
        console.log(error)
        throw error
    }
}

export default async function getChannels(userId) {
    try {
        const channels = await fetch({
            url: "http://127.0.0.1:5000/channels",
            method: "POST",
            body: JSON.stringify({ user_id: userId }),
            headers: {
                "Content-Type": "application/json"
            }
        })
        return NextResponse.json({ channels }, { status: 200 })
    }
    catch (error) {
        console.log(error)
        throw error
    }
}

export default async function generateTranscript(query, sessionId, channelId, userId) {

    try {
        const transcript = await fetch({
            method: "POST",
            url: "http://127.0.0.1:5000/chatbot",
            body: JSON.stringify({ channel_id: channelId, user_id: userId, session_Id: sessionId, query: query }),
            headers: {
                "Content-Type": "application/json"
            }
        })
        return NextResponse.json({ transcript }, { status: 200 })
    }
    catch (error) {
        console.log(error)
        throw error
    }
}

export default async function getHistory(userId, sessionId) {
    try {
        const history = await fetch({
            url: "http://127.0.0.1:5000/history",
            method: "POST",
            body: JSON.stringify({ user_id: userId, session_id: sessionId }),
            headers: {
                "Content-Type": "application/json"
            }
        })
        return NextResponse.json({ history }, { status: 200 })
    } catch (error) {
        console.log(error)
        throw error
    }
}

export default async function startNewSession(userId, sessionId) {
    try {
        const session = await fetch({
            url: "http://127.0.0.1:5000/start_new_session",
            method: "POST",
            body: JSON.stringify({ user_id: userId, session_id: sessionId }),
        })
        return NextResponse.json({ session }, { status: 200 })
    }
    catch (error) {
        console.log(error)
        throw error
    }
}