import React from "react"

const Pagination = ({ postsPerPage, totalPosts, paginate, currentPage}) => {
    const pageNumbers = [];
    for(let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++){
        pageNumbers.push(i);
    }

    
    //função pra link ativo

    function active(){
        const totalLink = document.getElementsByClassName('link');
     const pai = document.getElementById('paginacao')// o evento só tá funcionand uma vez, tentar event delegation usando listener no elemento pi

        for( let m =1; m < totalLink.length; m ++){
            totalLink[m].addEventListener('click', function(){
                totalLink[m].classList.remove("active")
                this.classList.add("active");
            })
        }

    }

    return(
        
        <nav>
            <ul id ="paginacao">
                {pageNumbers.map(number =>(
                    <li className={currentPage === number ? 'active ' : ''} key = {number} onClick ={() => active()}>
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