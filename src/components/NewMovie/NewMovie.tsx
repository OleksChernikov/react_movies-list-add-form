import { useState } from 'react';
import { TextField } from '../TextField';

type Movie = {
  title: string;
  description: string;
  imgUrl: string;
  imdbUrl: string;
  imdbId: string;
};

type NewMovieProps = {
  onAdd: (newMovie: Movie) => void;
};

export const NewMovie = ({ onAdd }: NewMovieProps) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [imgUrl, setImgUrl] = useState('');
  const [imdbUrl, setImdbUrl] = useState('');
  const [imdbId, setImdbId] = useState('');
  const [count] = useState(0);
  const pattern = new RegExp(
    /(?:(https?|ftp):)?\/\//.source
    + /(?:([^:\n\r]+):([^@\n\r]+)@)?/.source
    + /(?:www\.)?([^/\n\r]+)\//.source
    + /(\/[^?\n\r]+)?/.source
    + /(\?[^#\n\r]*)?/.source
    + /(#[^\n\r]*)?/.source,
  );
  const isValidUrl = (url: string) => pattern.test(url);
  const disablet = ((title.trim() === '' || !imgUrl || !imdbUrl || !imdbId)
    || !isValidUrl(imgUrl)
    || !isValidUrl(imdbUrl)
    || !imdbId);
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (disablet) {
      return;
    }

    const newMovie = {
      title,
      description,
      imgUrl,
      imdbUrl,
      imdbId,
    };

    onAdd(newMovie);

    setTitle('');
    setDescription('');
    setImgUrl('');
    setImdbUrl('');
    setImdbId('');
  };

  return (
    <form className="NewMovie" key={count} onSubmit={handleSubmit}>
      <h2 className="title">Add a movie</h2>

      <TextField
        name="title"
        label="Title"
        value={title}
        onChange={newValue => setTitle(newValue)}
        required
      />

      <TextField
        name="description"
        label="Description"
        value={description}
        onChange={newValue => setDescription(newValue)}
      />

      <TextField
        name="imgUrl"
        label="Image URL"
        value={imgUrl}
        onChange={newValue => setImgUrl(newValue)}
        required
      />

      <TextField
        name="imdbUrl"
        label="Imdb URL"
        value={imdbUrl}
        onChange={newValue => setImdbUrl(newValue)}
        required
      />

      <TextField
        name="imdbId"
        label="Imdb ID"
        value={imdbId}
        onChange={newValue => setImdbId(newValue)}
        required
      />

      <div className="field is-grouped">
        <div className="control">
          <button
            type="submit"
            data-cy="submit-button"
            className="button is-link"
            disabled={disablet}
            onClick={() => handleSubmit}
          >
            Add
          </button>
        </div>
      </div>
    </form>
  );
};
