import React from "react";
import { Text } from "react-native";

export default function Texto({ children }) {
    let estilo = estilo.texto;
   
    if(style?.fontWeight === 'bold') estilo = estilo.textoNegrito;

    return <Text style={[ style, estilo ]} > {children } </Text>
}

const estilo = StyleSheet.create({
    texto: {
        fontFamily: 'MontserratRegular',
        fontWeight: 'normal',
    },
    textoNegrito: {
        fontFamily: 'MontserratBold',
        fontWeight: 'normal',
    },
})