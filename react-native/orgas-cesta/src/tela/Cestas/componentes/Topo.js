import React from "react";
import Texto from "../../../componentes/Texto";
import topo from "../../../assets/topo.png";

const width = Dimensions.get('screen').width;

export default function Topo() {
    return (
        <>
            <img src={topo} style={estilo.topo} />
            <Texto style={estilo.titulo} >Detalhe da cesta</Texto>
        </>
    )
}

const estilo =  styleSheet.create({
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
})
