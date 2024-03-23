import introJs from "intro.js";
import ModelWrapper from "../ProfileModal";
import 'intro.js/introjs.css';
import { Steps } from 'intro.js-react';
import { useState } from "react";
import './Tour.css'


export const handleTourPart = () => {

  const ele = document.querySelector('.searchSection')
  const createEle = document.createElement('span')

  introJs().setOptions({
    steps: [
      {
        element: document.querySelector('.youtube-btn'),
        intro: "Press this button to add a YouTube channel",
        tooltipClass: 'highlightsection',
        position: 'top'

      },
      // {
      //   element: document.querySelector('.step2'),
      //   intro: 'You can add and delete your desired YouTube Channels here. Go ahead, try to add a channel!(make sure you add the URL for the channel and not a specific video. Channels typically have the format www.youtube.com/@....)',
      //   position: 'bottom',
      // },
      // {
      //   title: 'customModal',
      //   intro: '<div>test</div>'
      // },
      {
        element: document.querySelector('.input-part'),
        intro: "<p class='heading'>Great, your channel has now been added! </p> <p>Skryptly is now trained on the transcript data and can assist you in scriptwriting that mirrors this channel’s style and tone. The linguistic nuances are now part of Skryptly’s repertoire. </p> <p>Now you're all set to create scripts that resonate with your audience by learning from and emulating your favorite creators! </p><p><span class='subheading'>Give it a try by writing your first prompt in the chat bar below.</span></p> <p>You can say things like: </p> <p>“Help me create an intro in the style of {{channel name}} on the topic of...” </p> <p><span class='subheading'>or</span></p> <p>“How do you think {{channel name}} would segway from topic 1 to topic 2 in a video about....”</p> <p><span class='subheading'>For more information on how to get the most out of your prompts, please see a guide on prompt engineering here. </span></p><div class='arrow'></div> ",
        tooltipClass: 'searchSection',

      },
    ],
  }).start();
}

