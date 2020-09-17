import React, {useState, useEffect} from 'react';
import "./css/tabela.css";
import "./css/cabecalho.css"
import Posts from './post'
import Pagination from './pagination'
import Cabecalho from './cabecalho'



const App = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState([false]);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostsPerPage] = useState(10);
   



    useEffect(() => {
        const apiCall =  () => {
        var Airtable = require('airtable');
        var base = new Airtable({apiKey: 'keySN0JAq3DIPdHUT'}).base('appEnlSQDPT6iYdgZ');
        const tabela =  base('Buscas');
        //console.log('oi' , base)
        const getInformation =  async () => {
            setLoading(true);
            const informations = await tabela.select().firstPage()
            /*Daqui pra baixo estou trabalhando com o resultdo da requisição*/
            //console.log(informations)

            setPosts(informations);
            setLoading(false);
           // console.log({posts})

        };

        getInformation();
        }; apiCall();
    }, []); // fim do use effect

    //Código para buscar página atual
    //console.log(posts)
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