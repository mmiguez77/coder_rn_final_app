import { StyleSheet, Dimensions } from "react-native"

import theme from "../../theme/theme"

const { width, height } = Dimensions.get('screen');


const styles = StyleSheet.create({
    
    /**** PLAYER_SCREEN ****/

    // top
    playerscreen__container: {
        flex: 1,
        backgroundColor: theme.colors.primary
    },
    playerscreen__topbar_container: {
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        paddingVertical: 7
    },
    playerscreen__topbar_title: {
        color: theme.colors.secondary,
        fontWeight: "bold"
    },
    playerscreen__topbar_icons: {
        color: theme.colors.secondary,
    },

    // imagen
    playerscreen__image_container: {
        marginTop: "2%",
        backgroundColor: theme.colors.primary,
        justifyContent: "center",
        alignItems: "center",
        width: width,
    },
    playerscreen__image_rounded: {
        height: 280,
        width: 280,
        borderRadius: 130,
        overflow: 'hidden',
    },
    playerscreen__image_middle: {
        backgroundColor: theme.colors.primary,
        width: 50,
        height: 50,
        zIndex: 150,
        bottom: "50%",
        borderRadius: 50,
    },  

    // titulo / artista
    playerscreen__artist_container: {
        backgroundColor: theme.colors.primary,
        alignItems: 'center',
        marginTop: "-5%"
    },
    playerscreen__artist_title_text: {
        color: theme.colors.secondary,
        fontSize: 15,
        fontWeight: "bold"
    },
    playerscreen__artist_artist_text: {
        color: theme.colors.secondary,
        fontSize: 13
    },


    // botones player
    playerscreen__controls_container: {
        flex: 1,
        backgroundColor: theme.colors.primary,
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        marginTop: "10%",
        marginBottom: "5%"
    },

    // barra
    playerscreen__bar_container: {
        backgroundColor: theme.colors.primary,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-evenly"
    },
    playerscreen__bar_container_text: {
        backgroundColor: theme.colors.primary,
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 30
    },
    playerscreen__bar_time_text: {
        color: theme.colors.secondary,
        fontWeight: "bold"
    },

    // tapbar
    playerscreen__tapbar_container: {
        flex: 1.5,
        backgroundColor: theme.colors.primary,
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center",
        marginTop: "5%"
    },
});

export default styles