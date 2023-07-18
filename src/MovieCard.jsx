import React from "react"
// var FontAwesomeIcon = require('react-fontawesome')


// props.bookMark(props.movie)
const MovieCard  = (props) => {
    // const { imdbID, Year, Poster, Title, Type } = 
    
    
    const Year = props.movie.Year
    const Poster = props.movie.Poster
    const Title = props.movie.Title
    const Type = props.movie.Type
    

    const addElementToBookmark = ()=>{
        const imdbID = props.movie.imdbID
        props.bookMark[imdbID] = props.movie
        console.log(props.bookMark)
    }
    // props.movie 
    // const data = props.movie
    // console.log(props.movie)
    return (<div className="movie" onClick={addElementToBookmark}>     
    {/* <button onClick={testFunction} style={{width:'20%', height:'10%'}}>Save</button>  */}
    <div>
        <p>{Year}</p>  
                
    </div>
    <div>
        <img src={Poster !== 'N/A' ? Poster : 'https://via.placeholder.com/400'} alt={Title}/>
    </div>
    <div>
        <span>{Type}</span>
        <h3>{Title}</h3>
      
    </div>
</div>
);
}
export default MovieCard
