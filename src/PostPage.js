import React, { useState } from 'react';

function PostPage({ name }) {
  const [postText, setPostText] = useState('');
  const [comments, setComments] = useState([]);
  const [showComments, setShowComments] = useState(false);

  const handlePostChange = (e) => {
    setPostText(e.target.value);
  };

  const handlePublishClick = () => {
    setComments([{ name, text: postText, likes: 0, liked: false }, ...comments]);
    setPostText('');
    setShowComments(true);
  };

  const handleLikeClick = (index) => {
    const updatedComments = [...comments];
    if (updatedComments[index].liked) {
      updatedComments[index].likes -= 1;
    } else {
      updatedComments[index].likes += 1;
    }
    updatedComments[index].liked = !updatedComments[index].liked;
    setComments(updatedComments);
  };

  return (
    <div className="container">
      <div className="sidebar" style={{ backgroundColor: 'purple', padding: '10px', textAlign: 'center', position: 'fixed', left: 0, top: 0, height: '100%', width: '20%' }}>
        <h2 style={{ color: 'white', fontSize: '24px', marginBottom: '20px' }}>Hola, {name}</h2>
        <p style={{ color: 'white', fontSize: '16px', cursor: 'pointer' }}>
          <a href="/HomePage" style={{ color: 'white', textDecoration: 'none' }}>Salir</a>
        </p>
      </div>
      <div className="main-content" style={{ marginLeft: '20%' }}>
        <h1>Publicaciones</h1>
        <form>
          <div className="form-group">
            <textarea
              className="form-control"
              rows="4"
              placeholder="Escribe tu mensaje aquí"
              value={postText}
              onChange={handlePostChange}
            ></textarea>
          </div>
          <button
            type="button"
            className="btn btn-primary"
            onClick={handlePublishClick}
          >
            Publicar
          </button>
        </form>
        {showComments && (
          <div>
            {comments.map((comment, index) => (
              <div key={index} className="mt-2">
                <strong style={{ color: 'purple' }}>{comment.name}</strong>
                <div className="border border-primary p-2">
                  <p>{comment.text}</p>
                </div>
                <button
                  type="button"
                  className={`btn btn-primary`}
                  onClick={() => handleLikeClick(index)}
                >
                  {comment.liked ? 'No me gusta' : 'Me gusta'}
                </button>
                <span className="ml-2" id="likesCounter">
                  {comment.likes} Me gusta
                </span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default PostPage;






