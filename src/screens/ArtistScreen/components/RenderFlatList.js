import { Text, View, Pressable } from 'react-native'
import { Icon } from '@rneui/themed';
// styles
import theme from "../../../theme/theme"
import styles from '../styles'

const RenderFlatList = ({ item, navigation }) => {

    return (
      <View style= { styles.flatlist_margin_sup }>
        <View>
          <Text style= {{ fontWeight: 'bold' }}> { item.item.name } </Text>
          <Text style= {{ color: theme.colors.secondary }}> { item.item.artist } </Text>
        </View>
        <View>
          <Pressable
            onPress={ () => { 
              navigation.navigate( 'Album' , {
                albumId: item.item.id
              } )
            }}
          >
            <Icon 
              name="playcircleo" 
              type="antdesign" 
              size={20}  
              color= { theme.colors.secondary }
            />  
          </Pressable>
        </View>
      </View> 
    )
  }

export default RenderFlatList