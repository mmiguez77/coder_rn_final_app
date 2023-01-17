import React from 'react'
import { View, Text } from 'react-native'


import styles from '../styles'

const LatestSong = () => {
  return (
    <View style={ styles.playlistscreen__latestsong_container }>
      <View style={ styles.playlistscreen__latestsong_avatar_container }>
        <View>
          <Text>Avatar Imagen</Text>
          <Text>Última Canción Song</Text>
          <Text>24 Canciones</Text>
          <View>
            <Text>Play</Text>
            <Text>Compartir</Text>

          </View>
        </View>
      </View>


    </View>
  )
}

export default LatestSong