import { View, Image, Text } from 'react-native'

// styles
import styles from "../styles";

const ArtistImage = ({ imgBand }) => {

    img = ''
    if (imgBand == "Audioslave" ) {
      img = require('../../../assets/img/audio.jpg')
    } else {
      img = require('../../../assets/img/alma.png')
    }

    return (
      <View style={ styles.playerscreen__image_container }>
          <Image 
            style={ styles.playerscreen__image_rounded } 
            source={ img }  
          />
          <View style={ styles.playerscreen__image_middle }></View>
      </View> 
    )
}

export default ArtistImage