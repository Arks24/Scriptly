import introJs from "intro.js";
import 'intro.js/introjs.css';
import './Tour.css'
export const handleTourPart = async() => {
 
// Initialize Clerk with your Clerk publishable key

    introJs().setOptions({
      exitOnOverlayClick: false,
      disableInteraction: true,
      steps: [
        {
          element: document.querySelector('.youtube-btn'),
          intro: "<div class='relative'> <p class=' text-lg font-semibold text-center leading-8'>Press this button to add a YouTube channel</p> <div class='arrow-youtube left-24 absolute -bottom-20'><svg fill='#EE51B2' height='130px' width='150px version='1.1' id='Layer_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 512.00 512.00' enable-background='new 0 0 512 512' xml:space='preserve' stroke='#EE51B2' stroke-width='0.00512'><g id='SVGRepo_bgCarrier' stroke-width='0'></g><g id='SVGRepo_tracerCarrier' stroke-linecap='round' stroke-linejoin='round'></g><g id='SVGRepo_iconCarrier'> <polygon points='283.7,298.7 283.7,0 198.3,0 198.3,298.7 70.3,298.7 241,512 411.7,298.7 '></polygon> </g></svg></div></div>",
          tooltipClass: 'highlightsection',
          position: 'top',
          step: 1,
          disableInteraction: true

        },

        {
          title: 'customModal',
          intro: "<div class='w-full relative max-w-3xl bg-transparent transform rounded-xl bg-bgColor'><div class='flex justify-between border-white border-b'><h1 class='text-white inline font-normal text-2xl text-left p-6 my-2'>Youtube Channel <span class='mx-2'><svg class='size-10 inline' viewBox='0 -3 20 20' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' fill='#000000'><g id='SVGRepo_bgCarrier' stroke-width='0'></g><g id='SVGRepo_tracerCarrier' stroke-linecap='round' stroke-linejoin='round'></g><g id='SVGRepo_iconCarrier'> <title>youtube [#168]</title> <desc>Created with Sketch.</desc> <defs> </defs> <g id='Page-1' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'> <g id='Dribbble-Light-Preview' transform='translate(-300.000000, -7442.000000)' fill='#cb2525'> <g id='icons' transform='translate(56.000000, 160.000000)'> <path d='M251.988432,7291.58588 L251.988432,7285.97425 C253.980638,7286.91168 255.523602,7287.8172 257.348463,7288.79353 C255.843351,7289.62824 253.980638,7290.56468 251.988432,7291.58588 M263.090998,7283.18289 C262.747343,7282.73013 262.161634,7282.37809 261.538073,7282.26141 C259.705243,7281.91336 248.270974,7281.91237 246.439141,7282.26141 C245.939097,7282.35515 245.493839,7282.58153 245.111335,7282.93357 C243.49964,7284.42947 244.004664,7292.45151 244.393145,7293.75096 C244.556505,7294.31342 244.767679,7294.71931 245.033639,7294.98558 C245.376298,7295.33761 245.845463,7295.57995 246.384355,7295.68865 C247.893451,7296.0008 255.668037,7296.17532 261.506198,7295.73552 C262.044094,7295.64178 262.520231,7295.39147 262.895762,7295.02447 C264.385932,7293.53455 264.28433,7285.06174 263.090998,7283.18289' id='youtube-[#168]'> </path> </g> </g> </g> </g></svg></span> </h1><button ><p class='text-3xl p-4 px-6 text-white'>X</p></button></div><div class='p-4 px-8 my-2 border-b border-white'><p class='text-[20px] my-4 font-normal text-white '>Enter the URL of the Youtube Channel you want to add below:</p><div class='flex justify-between mt-2 mb-4'><input type='text' class='p-2 px-4 text-lg w-[70%] rounded-full' placeholder='www.youtube.com/@Wendoverproductions' /><button class='bg-logoColor w-[25%] text-white p-2 px-4 text-base font-semibold rounded-lg'>Add Channel</button></div></div><div class='p-4 px-8 my-2'><p class='text-[20px] text-white font-normal my-3 '>Added Channels:</p><div class='flex justify-between items-center mb-5 my-1 w-3/5' ><p class='text-lg font-normal my-1 text-white'>www.youtube.com/@Wendoverproductions</p><button class='size-6' ><svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' stroke='#7a7a7a'><g id='SVGRepo_bgCarrier' stroke-width='0'></g><g id='SVGRepo_tracerCarrier' stroke-linecap='round' stroke-linejoin='round'></g><g id='SVGRepo_iconCarrier'> <path d='M10 11V17' stroke='#a2a0a0' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'></path> <path d='M14 11V17' stroke='#a2a0a0' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'></path> <path d='M4 7H20' stroke='#a2a0a0' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'></path> <path d='M6 7H12H18V18C18 19.6569 16.6569 21 15 21H9C7.34315 21 6 19.6569 6 18V7Z' stroke='#a2a0a0' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'></path> <path d='M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5V7H9V5Z' stroke='#a2a0a0' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'></path> </g></svg></button</div> </div></div><div class='up-arrow absolute -bottom-36 left-1/2'><svg fill='#EE51B2' height='110px' width='50px' version='1.1' id='Layer_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 512.00 512.00' enable-background='new 0 0 512 512' xml:space='preserve' stroke='#EE51B2' stroke-width='0.00512' transform='rotate(180)'><g id='SVGRepo_bgCarrier' stroke-width='0'></g><g id='SVGRepo_tracerCarrier' stroke-linecap='round' stroke-linejoin='round'></g><g id='SVGRepo_iconCarrier'> <polygon points='283.7,298.7 283.7,0 198.3,0 198.3,298.7 70.3,298.7 241,512 411.7,298.7 '></polygon> </g></svg></div><div class='absolute youtube-tutor p-3 -bottom-[17rem] bg-white rounded-xl shadow-lg border'><p class='mb-3'><span>You can add and delete your desired YouTube Channels here.Go ahead, try to add channel! </span></p><p>(make sure you add the URL for the channel and not a specific video. Channels typically have the format www.youtube.com/@....)</p> </div> ",
          tooltipClass: 'customModalStyle',
          position: 'top',
          step: 2
        },
        {
          element: document.querySelector('.input-part'),
          intro: "<div class='relative '><p class='heading'>Great, your channel has now been added! </p> <p>Skryptly is now trained on the transcript data and can assist you in scriptwriting that mirrors this channel’s style and tone. The linguistic nuances are now part of Skryptly’s repertoire. </p> <p>Now you're all set to create scripts that resonate with your audience by learning from and emulating your favorite creators! </p><p><span class='subheading'>Give it a try by writing your first prompt in the chat bar below.</span></p> <p><span>You can say things like:</span> </p> <p>“Help me create an intro in the style of {{channel name}} on the topic of...” </p> <p><span class='subheading'>or</span></p> <p>“How do you think {{channel name}} would segway from topic 1 to topic 2 in a video about....”</p> <p><span class='subheading'>For more information on how to get the most out of your prompts, please see a guide on prompt engineering here. </span></p></div><div class='arrow absolute -bottom-24 left-1/2'><svg fill='#EE51B2' height='130px' width='150px version='1.1' id='Layer_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 512.00 512.00' enable-background='new 0 0 512 512' xml:space='preserve' stroke='#EE51B2' stroke-width='0.00512'><g id='SVGRepo_bgCarrier' stroke-width='0'></g><g id='SVGRepo_tracerCarrier' stroke-linecap='round' stroke-linejoin='round'></g><g id='SVGRepo_iconCarrier'> <polygon points='283.7,298.7 283.7,0 198.3,0 198.3,298.7 70.3,298.7 241,512 411.7,298.7 '></polygon> </g></svg></div> ",
          tooltipClass: 'searchSection',
          step: 3
        },
      ],
      // showButtons: false
    }).start();
    // document.querySelector('.nextTour').addEventListener('click', function () {
    //   introJs().nextStep();
    // })
  }

export const nextButton = () => {
  // document.querySelector('.nextTour').addEventListener('click',function(){
  // })
  introJs().start().nextStep();
}