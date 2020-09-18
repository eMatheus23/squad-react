import React from 'react'

const Posts = ({ posts, loading}) => {
    if(loading){
        //Conteúdo a ser mostrado enquanto o loading for true
        return <h2>Carregando...</h2>
    }
    return(
        // estabelecendo estrutura da tabela
        <div id ="tabela">
                    <div className = "cabeca">
                        <p>hashtag</p>
                        <p>Data</p>
                        <p>Hora</p>
                    </div>
            {posts.map( post => (             
                <div key = {post.id}>
                    <div className ="fade"></div>
                    <div className="linhaa">
                        <p>{post.fields.Hashtag}</p>
                        <p>{post.fields.Data}</p>
                        <p>{post.fields.Hora}</p>
                    </div>         
                </div>    
            ))} 
      </div>
    );
}
export default Posts