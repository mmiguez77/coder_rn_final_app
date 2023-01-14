import { View, Image, Text } from 'react-native'

// styles
import styles from "../styles";

const ArtistImage = () => {

    return (
      <View style={ styles.playerscreen__image_container }>
          <Image 
            style={ styles.playerscreen__image_rounded } 
            source={ require('../../../assets/img/img2.jpeg') }  
          />
          <View style={ styles.playerscreen__image_middle }></View>
      </View> 
    )
}

export default ArtistImage