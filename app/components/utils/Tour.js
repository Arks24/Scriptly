import introJs from "intro.js";
import ModelWrapper from "../ModelWrapper";
import { useState } from "react";
import './Tour.css'

const showYoutubeModal = () => {

  return <div>test</div>

}
function Test() {
  return (<div>test</div>)
}

export const handleTourPart = () => {
  introJs().setOptions({
    steps: [
      {
        element: document.querySelector('.youtube-btn'),
        intro: "Press this button to add a YouTube channel",
        tooltipClass: 'highlightsection',

      },
      // {
      //   element: document.querySelector('.step2'),
      //   intro: 'You can add and delete your desired YouTube Channels here. Go ahead, try to add a channel!(make sure you add the URL for the channel and not a specific video. Channels typically have the format www.youtube.com/@....)',
      //   position: 'bottom',
      // },
      {
        title: 'customModal',
        intro: Test
      },
      {
        element: document.querySelector('.input-part'),
        intro: "Input step.",
      },
    ],
  }).start();
}
