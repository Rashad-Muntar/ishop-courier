import React, { useState, useRef, useEffect } from 'react'
import {
  View,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  Keyboard,
  Dimensions,
  Alert,
} from 'react-native'
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps'
import MapViewDirections from 'react-native-maps-directions'
import * as Location from 'expo-location'
import { mapStyle } from './MapStyles'
// import { setLocationDetails, setLocationDistance } from '../../../../StateManagement/Store/Actions/locationDetails'
import { carsAround, storeToShop } from '../shared/data'
import { useSelector, useDispatch } from 'react-redux'

interface Props {
  isOnline?: boolean
}
const MapScreen = ({isOnline}: Props) => {
  const dispatch = useDispatch()
  const { width, height } = Dimensions.get('window')
  const loc = useSelector((state) => state.location)
  const [reload, setReload] = useState(false);
  const [location, setLocation] = useState({ latitude: 0, longitude: 0 })
  const [region, setRegion] = useState(null);
  const [errorMsg, setErrorMsg] = useState('')
  const mapRef = useRef(1)

  useEffect(() => {
    setReload(!reload)
  }, [loc])
  
  useEffect(() => {
    ;(async () => {
      let { status } = await Location.requestForegroundPermissionsAsync()
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied')
        return
      }

      let location = await Location.getCurrentPositionAsync({})
          setLocation({
          latitude: location.coords.latitude,
          longitude: location.coords.longitude,
        })
    })()
  }, [])

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <KeyboardAvoidingView behavior="padding">
          <MapView
            ref={mapRef}
            reload={reload}
            followsUserLocation={true}
            style={styles.map}
            provider={PROVIDER_GOOGLE}
            customMapStyle={mapStyle}
            // zoomEnabled={true}
            showsUserLocation={true}
            // toolbarEnabled={true}
            region={{
              latitude: isOnline ? location.latitude : 56.130367,
              longitude: isOnline ? location.longitude : -106.346771,
              latitudeDelta: 0.006,
              longitudeDelta: 0.006,
            }}
          >
            {/* {carsAround.map((car, index) => (
              <Marker
                key={index}
                coordinate={car}
                image={require('../../../../assets/Solids/delivery.png')}
              />
            ))} */}
            {/* <Marker
              anchor={{ x: 0.5, y: 0.5 }}
              coordinate={location}
              image={require('../../../../assets/Solids/location.png')}
            /> */}
            {/* <Marker
              anchor={{ x: 0.5, y: 0.5 }}
              coordinate={storeToShop}
              image={require('../../../../assets/Solids/store2.png')}
            /> */}
            {/* <MapViewDirections
              origin={storeToShop}
              destination={location}
              apikey="AIzaSyDsz1c179pD7OCWT_EmMs5cueUhMVve2gY"
              strokeWidth={4}
              optimizeWaypoints={true}
              strokeColor={Colors.light.primary}
              onReady={(result) => {
                // dispatch(setLocationDistance({distance: result.distance, duration: result.duration}))
                console.log(`Distance: ${result.distance} km`)
                console.log(`Duration: ${result.duration} min.`)

                // mapRef.current.fitToCoordinates(result.coordinates, {
                //   edgePadding: {
                //     right: width / 20,
                //     bottom: height / 20,
                //     left: width / 20,
                //     top: height / 20,
                //   },
                // })
              }}
              // retryOptions={{
              //   attempts: 5,
              //   delay: 1000,
              //   retryOnTimeout: true,
              //   retryOnConnectionLost: true,
              // }}
              onError={(errorMessage) => {
                console.log(errorMessage)
              }}
            /> */}
          </MapView>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: 'grey',
    width: '100%',
  },
  map: {
    width: '100%',
    height: '100%',
  },
})
export default MapScreen
