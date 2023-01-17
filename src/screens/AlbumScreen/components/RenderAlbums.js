import { useEffect, useState } from 'react'
import { Text, View, Pressable, ActivityIndicator } from 'react-native'
import { Icon } from '@rneui/themed';
// styles
import theme from "../../../theme/theme"

const RenderAlbum = ({ item, navigation, album }) => {
    
  const [ isLoading, setIsLoading ] = useState(true)

  useEffect(() => {
    setIsLoading(false)
  }, [])

  return (
    <>
      {
          isLoading
          ?
            <ActivityIndicator 
              size="large" 
              color= {theme.colors.tertiary} 
              style={{ flex: 1, alignSelf: "center" }}
            />        
          :          
        <>
          <View style= {{ marginTop: 15, paddingHorizontal: 10 }}>
            <Pressable
              onPress={ () => { 
                navigation.navigate( 'Escuchar' , {
                  song: item,
                  album: album
                } )
              }}
              style={{ flexDirection: "row", justifyContent: "space-between", marginRight: 25 }}
            >
            <View>
              <Text style= {{ color: theme.colors.secondary, fontWeight: "bold" }}> { item.item.title } </Text>
              <Text style= {{ color: theme.colors.secondary }}> { item.item.artist } </Text>
            </View>
            <View>
              <Icon 
                name="playcircleo" 
                type="antdesign" 
                size={20}  
                color= { theme.colors.secondary }
              />  
            </View>
            </Pressable>
          </View> 
        </>
      }
    </>
  )
}

export default RenderAlbum