import React, {useState, useEffect} from 'react';
import "./css/tabela.css";
import "./css/cabecalho.css"
import Posts from './post'
import Pagination from './pagination'
import Cabecalho from './cabecalho'

const App = () => {
    const [posts, setPosts] = useState([]); // Código que irá receber as respostas da requisição
    const [loading, setLoading] = useState([false]); // código para fazer o loading durante a requisição
    const [currentPage, setCurrentPage] = useState(1); // página atual (o 1 é o valor padrão)
    const [postsPerPage, setPostsPerPage] = useState(10); // número de posts por páginas
   
    useEffect(() => {

        //Aqui foi utilizada a codificação estabelecida pela api do airtable para requisição da tabela
        const apiCall =  () => {
        var Airtable = require('airtable');
        var base = new Airtable({apiKey: 'keySN0JAq3DIPdHUT'}).base('appEnlSQDPT6iYdgZ');
        const tabela =  base('Buscas');
        const getInformation =  async () => {
            setLoading(true);
            const informations = await tabela.select().firstPage()
            /*Daqui pra baixo estou trabalhando com o resultado da requisição*/
            setPosts(informations);
            setLoading(false);
        };
        getInformation();
        }; apiCall();
    }, []); 

    //Código com fórmulas para estabelecer a estrutura de páginas da tabela e visualização dos posts 

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
    
    //código abaixo é pra fazer com que os números da paginação chame as respectivas páginas

    const paginate = (pageNumber) => setCurrentPage(pageNumber) 
    
    // Esse pageNumber é o parâmetro que está sendo chamado no componenete de paginação

     
    return(
        <div className="corpo">
          
           <Cabecalho/> 
           <Posts posts={currentPosts} loading ={loading}/>
           <Pagination postsPerPage={postsPerPage} totalPosts={posts.length} paginate={paginate} currentPage={currentPage}/>
        </div>
    )}
    export default App