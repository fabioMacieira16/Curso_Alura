import React from "react";

import logo from '../../assets/logo.png';
import Texto from '../../Componentes/Texto';

export default function Detalhes() {
    return (
        <>
            <Texto style={estilo.nome}>Cesta de Verdura</Texto>
                <View style={estilo.fazenda}>
                    <Image source={logo} style={estilo.imageFazenda} />
                    <Texto style={estilo.nomeFazenda}>Jenny Jack Farm</Texto>
                </View>
                <Texto style={estilo.descricao}>Uma Cesta com produtos selecionados cuidadosamente da fazenda direto para sua cozinha</Texto>
                <Texto style={estilo.preco}>R$ 40,00</Texto>
                <Texto style={estilo.quantidade}>quantidade</Texto>
        </>
    )
}

const estilo = styleSheet.create({
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
    },
})