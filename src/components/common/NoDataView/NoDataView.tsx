import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

type NoDataViewProps = {
    message: string;
};


const NoDataView: React.FC<NoDataViewProps> = ({ message }) => (
    <View style={styles.container}>
        <Image
            source={require('../../../../assets/NoData.gif')}
            style={styles.image}
            resizeMode="contain"
        />
        <Text style={styles.message}>{message}</Text>
    </View>
);

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        paddingVertical: 40,
    },
    image: {
        width: 320,
        height: 320,
        marginBottom: 24,
        opacity: 0.8,
    },
    message: {
        fontSize: 18,
        color: '#888',
        textAlign: 'center',
    },
});

export default NoDataView;