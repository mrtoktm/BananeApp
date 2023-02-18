import { StyleSheet } from "react-native";
import colors from '../../../styles/colors';

export default StyleSheet.create({
    container: {
        backgroundColor: 'darkorange',
        margin: 10,
        padding: 10,
        borderRadius: 10,
        borderWidth: 3,
        borderColor:'#1D8D84',
    },
    inner_container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    user: {
        fontSize: 17,
        fontWeight: 'bold',
    },
    date: {
        fontStyle: 'italic',
    },
    title: {
        marginVertical: 8,
    },
    footer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        
    },
    dislike_container: {
        flexDirection: 'row',
        backgroundColor: '#1D8D84',
        padding: 8,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
    },
    dislike_count_container: {
        backgroundColor: colors.darkorange,
        padding: 4,
        marginRight: 3,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
    },
    dislike_count_text: {
        color: 'black',
        fontWeight: 'bold',
    },
    dislike_text: {
        fontWeight: 'bold',
    },
});