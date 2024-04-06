import { getChannels } from "@/lib/fetch";
import { Axios } from "axios";
import { createContext, use } from "react";


export const SkryptlyContext = createContext({
    youtubeChannels: [],
})


// const allChat = [
//     {
//         type: "question",
//         text: "This is the new Question regarding Nextjs",
//     },
//     {
//         type: "answer",
//         text: "This is the new Answer regarding Nextjs",
//     },
//     {
//         type: "question",
//         text: "This is the new Question regarding Nextjs",
//     },
//     {
//         type: "answer",
//         text: "This is the new Answer regarding Nextjs",
//     },
//     {
//         type: "question",
//         text: "This is the new Question regarding Nextjs",
//     },
//     {
//         type: "answer",
//         text: "This is the new Answer regarding Nextjs",
//     },
//     {
//         type: "question",
//         text: "This is the new Question regarding Nextjs",
//     },
//     {
//         type: "answer",
//         text: "This is the new Answer regarding Nextjs",
//     },

// ]


const ContextProvider = ({ children }) => {

    const [allChats, setallChats] = useState([])

    return (
        <SkryptlyContext.Provider >
            {children}
        </SkryptlyContext.Provider>
    )
}