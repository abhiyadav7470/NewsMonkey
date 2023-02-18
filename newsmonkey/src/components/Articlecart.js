function Articlecart(props){

    const prolist=()=>{
        if(props.productsl){
        var list = props.productsl.map((element)=>{
            return <div className="col-md-4 card text-center cart mx-3 my-3" key={element.title}>
                    <div className="card-header">
                       <span>Author: {element.author}</span>  <span>Source: {element.source.name}</span>
                    </div>
                    <div className="card-body">
                        <div className="cardimg" style={{backgroundImage: "url("+element.urlToImage+")"}}>
                                 </div>
                        <div>
                            <h5 className="card-title">{element.title}</h5>
                            <p className="card-text">{element.content}</p>
                    <a href={element.url} className="btn btn-primary">Read More</a>
                       
                        </div>
                    </div>

                    <div className="card-footer text-muted">
                        { element.publishedAt.split("T")[0].split("-").reverse().join("-")} Time: {element.publishedAt.split("T")[1].slice(0, -1)}
                    </div>
                </div>
    

            
             
        });

        }
        return list;
    }

    
    
    return(
        <>
            {prolist()}
        </>
    )
}

export default Articlecart;