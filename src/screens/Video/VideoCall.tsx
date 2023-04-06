import React, { useState, useRef, useEffect, useContext } from 'react'
import { View } from 'react-native'
import Button from '../../components/shared/Button'

import {
  TwilioVideoLocalView,
  TwilioVideoParticipantView,
  TwilioVideo,
} from 'react-native-twilio-video-webrtc'

const VideoCall = () => {
  const [roomName, setRoomName] = useState('')
  const [token, setToken] = useState('')

  const connectToRoom = async () => {
    try {
      await TwilioVideo.current.connect(token, { roomName })
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <View>
 
    </View>
  )
}

export default VideoCall
