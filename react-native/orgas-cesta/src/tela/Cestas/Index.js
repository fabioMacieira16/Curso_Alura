import React from 'react';
import { StyleSheet, View } from 'react-native';

export default function Cesta() {
    return (
        <>
            {/* <Topo /> */}
            <View style={estilo.cesta}>
                {/* <Detalhes /> */}
                <p>Detalhes</p>
            </View>
        </>
    )
}

const estilo = StyleSheet.create({
    cesta: {
        paddingVertical: 8,
        paddingHorizontal: 16,
    },
})