import React from 'react'
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';
import { useNavigate } from 'react-router-dom';

// generate random ID
function randomID(len) {
  let result = '';
  if (result) return result;
  var chars = '12345qwertyuiopasdfgh67890jklmnbvcxzMNBVCZXASDQWERTYHGFUIOLKJP',
    maxPos = chars.length,
    i;
  len = len || 5;
  for (i = 0; i < len; i++) {
    result += chars.charAt(Math.floor(Math.random() * maxPos));
  }
  return result;
}

// get user url params
export function getUrlParams(
    url = window.location.href
  ) {
    let urlStr = url.split('?')[1];
    return new URLSearchParams(urlStr);
  }

const VideoCall = () => {

    const navigate = useNavigate()
    


    const roomID = getUrlParams().get('roomID') || randomID(5);
    let myMeeting = async (element) => {
   // generate Kit Token
    const appID = 851703005;
    const serverSecret = "a99a9ea135f8ab2e4c0f78f8b795ee55";
    const kitToken =  ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, roomID,  randomID(5),  randomID(5));

  
   // Create instance object from Kit Token.
    const zp = ZegoUIKitPrebuilt.create(kitToken);
    // start the call
    zp.joinRoom({
      container: element,
      sharedLinks: [
        {
          name: 'Personal link',
          url:
           window.location.protocol + '//' + 
           window.location.host + window.location.pathname +
            '?roomID=' +
            roomID,
        },
      ],
      scenario: {
        mode: ZegoUIKitPrebuilt.GroupCall, // To implement 1-on-1 calls, modify the parameter here to [ZegoUIKitPrebuilt.OneONoneCall].
      },
    });

  
};

    const handleStopVideo = () => {
        navigate("/")
        window.location.reload()
    }

    return (<>
    <div
        className="myCallContainer"
        ref={myMeeting}
        style={{ width: '100vw', height: '100vh' }}
    >
    </div>
    <div className='flex items-center justify-end mt-6 mb-6 mr-6'>
    <button onClick={handleStopVideo} className='bg-blue-500 p-3 rounded-lg shadow-lg text-white font-bold 
    focus:outline-none focus:ring-blue-600 focus:ring-offset-2 hover:bg-blue-700 focus:ring-offset-black'>
    Exit & Go Home</button></div>
    </>
    )
}

export default VideoCall