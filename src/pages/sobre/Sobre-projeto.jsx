import React from 'react';

// Import ilustração
import ilustração from '../../svg/about-ilustration.svg';
// Adequação Reacts
export default class SobreProjeto extends React.Component {
    render() {
        return (
            <div className='sobre-projeto'>
                <main>
                    <h1 className='sobre-projeto__titulo'>Sobre o Projeto</h1>
                    <p className='sobre-projeto__texto'>                    
                            O HashtagFinder é um site responsivo para visualização de mensagens 
                            e imagens do Twitter, retornando rápida e organizadamente os dez resultados mais recentes.
                            É útil para analistas, produtores de conteúdo e outros tipos de profissionais 
                            que podem conferir a relevância imediata de um conteúdo específico através de
                            palavras e expressões relacionadas.
                            Foi desenvolvida em equipe durante a capacitação em Desenvolvimento Front-End 
                            da Cocreare Academy de maneira incremental durante os módulos HTML, CSS e Javascript.
                            Em seu escopo possui duas páginas acessíveis para qualquer usuário. A primeira, "Home", 
                            consiste um campo para busca da hashtag digitada e uma área para visualização das últimas 
                            10 mensagens e imagens. A segunda, "Sobre", 
                            contém essa área com uma breve explicação do projeto e outra com os profissionais 
                            envolvidos no projeto. Há também uma página restrita para acompanhar as buscas realizadas.                                                            
                    </p>
                </main>                
                <img className='sobre-projeto__imagem'
                src={ilustração} alt="Ilustração" >                                       
                </img>
            </div>
              
        );
    }
}