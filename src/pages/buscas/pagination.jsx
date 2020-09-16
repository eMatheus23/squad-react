import React from "react"

const Pagination = ({ postsPerPage, totalPosts, paginate}) => {
    const pageNumbers = [];
    for(let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++){
        pageNumbers.push(i);
    }

    /* Esse código é um teste e está quebrando a aplicção, por isso está comentado no momento.
    //tentativa de função pra link ativo

  
    const active = () => {
        const status = document.getElementsByClassName('ativo');
        //alert(status.length)
        for(let i = 1; i < status.length; i++) {  
        
       // let count = function(index) {  
        status[i].addEventListener('click', function(){ 
           
                status.classList.remove('ativo'); // encontrar maneira de retirar clss com js puro
                let atual = status[i].firstChild;
                alert(atual.innerHTML)
                atual.classList.add('ativo');
               

            });
       // }; count(i);

        }

    }*/


    return(
        
        <nav>
            <ul id ="paginacao">
                {pageNumbers.map(number =>(
                    <li key = {number} /*onClick ={active}*/>
                       <a className = "ativo" onClick={
                           ()=> paginate(number)
                       } href="!#" >
                        {number}
                        </a>
                            
                    </li>
                ))}
            </ul>
        </nav>
    );
}
export default Pagination