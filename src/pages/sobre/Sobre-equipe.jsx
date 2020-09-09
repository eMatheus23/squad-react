import React from 'react';

//Componentes
import SobreMembro from './Sobre-membro';

//Imagens
import fotoCesar from '../../imagens/fotos-perfis/cesar.jpg';
import fotoElias from '../../imagens/fotos-perfis/elias.jpg';
import fotoErick from '../../imagens/fotos-perfis/erick.jpg';
import fotoGeice from '../../imagens/fotos-perfis/geice.jpg';
import fotoJordana from '../../imagens/fotos-perfis/jordana.jpg';
import fotoJulio from '../../imagens/fotos-perfis/julio.jpg';
import fotoLeonardo from '../../imagens/fotos-perfis/leonardo.png';
import fotoMiguel from '../../imagens/fotos-perfis/miguel.jpg';
import fotoYan from '../../imagens/fotos-perfis/yan.jpg';


export default class SobreEquipe extends React.Component {
    render() {
        return (
        <section className="sobre-equipe">
            <h2 className="sobre-equipe__titulo">Quem somos</h2>

            <div className="sobre-equipe__membros">

                <SobreMembro
                    foto={fotoCesar}
                    nome="César Jorge de Souza Dias Pereira"
                    texto="Trabalhei junto ao Júlio César na parte de buscas realizadas em toda a sua função e visual"
                    git="cesarsouzad"
                    email="cesarsouzad@gmail.com"
                    linkedin="cesar-jorge-souza-dias-pereira-0993036b/"
                />

                <SobreMembro
                    foto={fotoElias}
                    nome="Elias Matheus Melo de Oliveira"
                    texto="Fui responsável pela criação e estilização da sessão de exibição dos resultados do site"
                    git="eMatheus23"
                    email="eliasmatheus@hotmail.com"
                    linkedin="ematheus23/"
                />

                <SobreMembro
                    foto={fotoErick}
                    nome="Erick Mourão"
                    texto="Contribui com o desenvolvimento do HTML, CSS e Java Script da página de login"
                    git="erickmourao"
                    email="erick.mourao@hotmail.com"
                    linkedin="erick-mour%C3%A3o-ba0756a3/"
                />

                <SobreMembro
                    foto={fotoGeice}
                    nome="Geice Gomes"
                    texto="Fui responsável pela criação e estilização da sessão de exibição dos resultados do site"
                    git="Sogmesmo"
                    email="sogmesmo@gmail.com"
                    linkedin="geicegomes/"
                />

                <SobreMembro
                    foto={fotoJordana}
                    nome="Jordana Prates Amorim"
                    texto="Eu e Miguel desenvolvemos a página sobre, essa que você está navegando"
                    git="Jords-amorim"
                    email="jordana_amorim@hotmail.com"
                    linkedin="jordana-prates-amorim-aa84811a9/"
                />

                <SobreMembro
                    foto={fotoJulio}
                    nome="Júlio César Tomáz de Araújo Oliveira"
                    texto="Trabalhei, juntamente com o César. na parte de histórico de buscas realizadas do site"
                    git="juli0o79"
                    email="juli0o79@hotmail.com"
                    linkedin="j%C3%BAlio-c%C3%A9sar-tom%C3%A1z-ara%C3%BAjo-4525a1109/"
                />

                <SobreMembro
                    foto={fotoLeonardo}
                    nome="Leonardo Junio Rosa Nogueira"
                    texto="Trabalhei no desenvolvimento do menu incluido banner, area busca e rodapé"
                    git="lenog07"
                    email="leojunio007@gmail.com"
                    linkedin="leonardo-junio-r-154b871a1/"
                />

                <SobreMembro
                    foto={fotoMiguel}
                    nome="Miguel Gesqui Malagoli"
                    texto="Desenvolvi, com a Jordana, essa página sobre o projeto que você está vendo agora"
                    git="miguel-malagoli"
                    email="miguel.g.malagoli@gmail.com"
                    linkedin="miguel-malagoli/"
                />

                <SobreMembro
                    foto={fotoYan}
                    nome="Yan Felipe de Ameida"
                    texto="Trabalhei na página de login, e contribuí pela responsividade da página"
                    git="Yanfelipe02"
                    email="yan.f.almeida02@gmail.com"
                    linkedin="yan-almeida-a7b27218b/"
                />

            </div>
        </section>
        );
    }
}