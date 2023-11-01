import React from 'react';
import { StyleSheet, Image, Dimensions,Text, View } from 'react-native';

import topo from '../../assets/topo.png';

const width = Dimensions.get('screen').width;

export default function Cesta() {
    return (
        <>
            <Image source={topo} style={estilo.topo} />
            <Text>Detalhes da cesta</Text>

            <View>
                <Text>Ce</Text>
            </View>
        </>
    )
}

const estilo = StyleSheet.create({
    topo: {
        width: '100%',
        height: 578 / 768 * width,
    },
    titulo: {
        width: '100%',
        position: 'absolute',
        textAlign: 'center',
        fontSize: 16,
        lineHeight: 16,
        color: 'white',
        fontWeight: 'bold',
        padding: 16,
    }
})