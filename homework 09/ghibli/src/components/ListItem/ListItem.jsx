import './ListItem.css'

function ListItem({ movie }) {
    return (
        <div>
            <h2>{movie.title}</h2>
            <p><b>Release Rate: </b>{movie.release_date}</p>
            <p><b>Director: </b>{movie.director}</p>
            <p><b>Desctiption: </b> {movie.description}</p>
        </div>
    );
}

export default ListItem;