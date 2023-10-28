import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#131016',
        padding: 24,
    },
    eventName: {
        color: '#fff',
        fontSize: 24,
        fontWeight: 'bold',
    },
    eventDescription: {
        color: '#6b6b6b',
        fontSize: 18,
    },
    input: {
        height: 50,
        borderRadius: 8,
        flex: 1,
        backgroundColor: '#1f1e25',
        color: '#fff',
        paddingHorizontal: 16,
        fontSize: 16,
    },
    button: {
        height: 50,
        width: 50,
        borderRadius: 0,
        backgroundColor: '#31CF67',
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    form: {
        marginTop: 32,
        flexDirection: 'row',
    },
});
