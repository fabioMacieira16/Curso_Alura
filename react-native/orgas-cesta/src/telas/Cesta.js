import React from 'react';
import { StyleSheet, Image, Dimensions, Text, View } from 'react-native';

import topo from '../../assets/topo.png';
import logo from '../../assets/logo.png';

const width = Dimensions.get('screen').width;

export default function Cesta() {
    return (
        <>
            <Image source={topo} style={estilo.topo} />
            <Text style={estilo.titulo} >Detalhe da cesta</Text>
            <View style={estilo.cesta}>
                <Text style={estilo.nome}>Cesta de Verdura</Text>
                <View style={estilo.fazenda}>
                    <Image source={logo} style={estilo.imageFazenda} />
                    <Text style={estilo.nomeFazenda}>Jenny Jack Farm</Text>
                </View>
                <Text style={estilo.descricao}>Uma Cesta com produtos selecionados cuidadosamente da fazenda direto para sua cozinha</Text>
                <Text style={estilo.preco}>R$ 40,00</Text>
                <Text style={estilo.quantidade}>quantidade</Text>
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
        lineHeight: 156,
        color: 'white',
        fontWeight: 'bold',
        padding: 16,
    },
    cesta: {
        paddingVertical: 8,
        paddingHorizontal: 16,
    },
    fazenda: {
        flexDirection: 'row',
        paddingVertical: 12,
    },
    imageFazenda: {
        width: 32,
        height: 32,
    },
    nomeFazenda: {
        fontSize: 16,
        lineHeight: 26,
        marginLeft: 12,
    },
    nome: {
        color: '#464646',
        fontSize: 26,
        lineHeight: 42,
        fontWeight: 'bold',
    },
    descricao: {
        color: '#A3A3A3',
        fontSize: 16,
        lineHeight: 26,
    },
    preco: {
        color: '#2A9F85',
        fontWeight: 'bold',
        fontSize: 26,
        lineHeight: 42,
        marginTop: 8,
    },
    quantidade: {
        color: '#A3A3A3',
        fontSize: 16,
        lineHeight: 26,
        marginTop: 24,
    },
})