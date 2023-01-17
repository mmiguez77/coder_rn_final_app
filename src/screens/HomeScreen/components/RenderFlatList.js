import { Text, View, Image, Pressable } from 'react-native'

// styles
import styles from "../styles"

const RenderFlatList = ({ item, navigation }) => {

  img = ''
  if (item.item.name == "Audioslave" ) {
    img = require('../../../assets/img/audio.jpg')
  } else {
    img = require('../../../assets/img/alma.png')
  }

  return (
    <View 
      key={item.index} 
      style={styles.homescreen__image_container}
    >
      <View >
        <Pressable
          onPress={ () => { 
            navigation.navigate( 'Artista' , {
              artistId: item.item.id
            } )
          }}
          style={ styles.homescreen__image_pressable} 
        >
          <Image
            source={ img }
            style={ styles.homescreen__image_rounded }
            resizeMode={ "cover" }
          /> 
        
          <Text style={ styles.homescreen__image_text }> { item.item.name } </Text>
          <Text style={ styles.homescreen__image_gender }> Genero </Text>
        </Pressable>
      </View>
    </View> 
  )
}

export default RenderFlatList