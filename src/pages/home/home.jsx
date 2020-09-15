import React from 'react';
import './imagens.css';
import './imagensMobile.css';
import '../em-comum/estilo.css';

// Importação Componentes e Páginas
import Menu from '../em-comum/Menu';
import Busca from './Busca';
import GrupoImgTweets from './Grupo-img-tweets';
import Footer from '../em-comum/Footer';


// Adequação Reacts
class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {posts: []}
    }

    render() {
        return (
            <div>
                <Menu page="home"/>
                <Busca/>
                <GrupoImgTweets posts={this.state.posts} />
                <Footer/>
            </div>
        );
    }

    componentDidMount(){
        var myHeaders = new Headers();
        myHeaders.append("authorization", "Bearer AAAAAAAAAAAAAAAAAAAAAFlKHgEAAAAApBW4nRyRkiogluzAbXlS4KuHlMU%3DFcR7r8N19LRnMHLVmYlFsod6Be6zUvZD2rxATotl6mLPAh2UEX");
        myHeaders.append("Cookie", "personalization_id=\"v1_aws7UsNs3P8XdQueP0Nxew==\"; guest_id=v1%3A159973978867918205");
        var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
        };
        fetch("https://cors-anywhere.herokuapp.com/https://api.twitter.com/1.1/search/tweets.json?q=natureza&count=10&result_type=recent", requestOptions)
        .then(response => response.json())
        .then(result => {
            console.log(result.statuses);
            if (result.statuses.length <= 0) {
                alert("Nenhum resultado foi encontrado!");
            } else {
                this.setState({posts: result.statuses});
            }
        })
        .catch(error => console.log('error', error));
    }
}

export default Home;