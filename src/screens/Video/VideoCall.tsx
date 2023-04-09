import React, { useState, useRef, useEffect, useContext } from 'react'
import { View, Text, SafeAreaView, StyleSheet } from 'react-native'
import Button from '../../components/shared/Button'
import { useGetVideoTokenMutation } from '../../generated/graphql'
// import {
//   TwilioVideoLocalView,
//   TwilioVideoParticipantView,
//   TwilioVideo,
// } from 'react-native-twilio-video-webrtc'

const VideoCall = () => {
  const [roomName, setRoomName] = useState('')
  const [getVideoToken, { data }] = useGetVideoTokenMutation()
  const [isAudioEnabled, setIsAudioEnabled] = useState(true)
  const [isVideoEnabled, setIsVideoEnabled] = useState(true)
  const [status, setStatus] = useState('disconnected')
  const [participants, setParticipants] = useState(new Map())
  const [videoTracks, setVideoTracks] = useState(new Map())
  const [token, setToken] = useState('')

  const twilioRef = useRef(null)

  const _onGetVideoToken = async () => {
    await getVideoToken({ variables: { userName: 'rashad' } })
    console.log(data)
  }
  useEffect(() => {
    _onGetVideoToken()
  }, [])

  const connectToRoom = async () => {
    try {
      await TwilioVideo.current.connect(token, { roomName })
    } catch (error) {
      console.log(error)
    }
  }

  const _onConnectButtonPress = () => {
    twilioRef.current.connect({ accessToken: token })
    setStatus('connecting')
  }

  const _onEndButtonPress = () => {
    twilioRef.current.disconnect()
  }

  const _onMuteButtonPress = () => {
    twilioRef.current
      .setLocalAudioEnabled(!isAudioEnabled)
      .then((isEnabled) => setIsAudioEnabled(isEnabled))
  }

  const _onFlipButtonPress = () => {
    twilioRef.current.flipCamera()
  }

  const _onRoomDidConnect = ({ roomName, error }) => {
    console.log('onRoomDidConnect: ', roomName)

    setStatus('connected')
  }

  const _onRoomDidDisconnect = ({ roomName, error }) => {
    console.log('[Disconnect]ERROR: ', error)

    setStatus('disconnected')
  }

  const _onRoomDidFailToConnect = (error) => {
    console.log('[FailToConnect]ERROR: ', error)

    setStatus('disconnected')
  }

  const _onParticipantAddedVideoTrack = ({ participant, track }) => {
    console.log('onParticipantAddedVideoTrack: ', participant, track)

    setVideoTracks(
      new Map([
        ...videoTracks,
        [
          track.trackSid,
          { participantSid: participant.sid, videoTrackSid: track.trackSid },
        ],
      ])
    )
  }

  const _onParticipantRemovedVideoTrack = ({ participant, track }) => {
    console.log('onParticipantRemovedVideoTrack: ', participant, track)

    const videoTracksLocal = videoTracks
    videoTracksLocal.delete(track.trackSid)

    setVideoTracks(videoTracksLocal)
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View>
        {/* <TwilioVideo
          ref={twilioRef}
          onRoomDidConnect={_onRoomDidConnect}
          onRoomDidDisconnect={_onRoomDidDisconnect}
          onRoomDidFailToConnect={_onRoomDidFailToConnect}
          onParticipantAddedVideoTrack={_onParticipantAddedVideoTrack}
          onParticipantRemovedVideoTrack={_onParticipantRemovedVideoTrack}
        /> */}
      </View>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  videoWrap: {
    height: '100%',
    width: '100%',
  },
})

export default VideoCall
