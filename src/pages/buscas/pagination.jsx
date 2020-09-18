import React from "react"

//Esse código cria os links das abas de paginação da tabela
const Pagination = ({ postsPerPage, totalPosts, paginate, currentPage}) => {

    const pageNumbers = [];
    for(let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++){
        pageNumbers.push(i);
    }
    return(
        /*os links são gerados dinâmicamente de acordo com o número 
        de respostas da api dívido pelo número estabelecido de posts por páginas*/
        <nav>
            <ul id ="paginacao">
                {pageNumbers.map(number =>(
                    <li className={currentPage === number ? 'active ' : ''} key = {number}>
                       <a className = "" onClick={
                           ()=> paginate(number)
                       } href="javascript:;" >
                        {number}
                        </a>
                            
                    </li>
                ))}
            </ul>
        </nav>
    );
}
export default Pagination