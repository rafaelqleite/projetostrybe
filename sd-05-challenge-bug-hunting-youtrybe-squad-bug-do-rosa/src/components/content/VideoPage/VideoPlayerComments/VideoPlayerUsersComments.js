import React, { Fragment } from 'react';
// import profileIcon from './../../../../assets/profile.jpg'

function formatDate(publishedAt) { // colocar o bug aqui de data nao formatada
  const dateObj = new Date(publishedAt);

  const monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December',
  ];

  const month = monthNames[dateObj.getMonth()];
  const day = dateObj.getUTCDate();
  const year = dateObj.getUTCFullYear();

  return (`Published on ${month} ${day}, ${year}`);
}

function ButtonUpAndDown(comment) {
  return (
    <div>
      <button className="thumb-up-btn">
        <i className="material-icons">thumb_up</i>
        <span className="thumbs-count">
          {comment.snippet.topLevelComment.snippet.likeCount}
        </span>
      </button>
      <button className="thumb-up-btn">
        <i className="material-icons">thumb_down</i>
        <span className="thumbs-count">20</span>
      </button>
      <span>REPLY</span>
    </div>
  );
}

function VideoPlayerUsersComments(props) {
  const { videoComments } = props;
  // authorProfileImageUrl
  return (
    <Fragment>
      {
        videoComments.map((comment) => (
          <div className="comment" key={comment.id}>
            <div className="comment-avatar">
              <i className="material-icons account-icon">account_circle</i>
            </div>
            <div className="comment-info">
              <h3>{comment.snippet.topLevelComment.snippet.authorDisplayName}
                <span>
                  {formatDate(comment.snippet.topLevelComment.snippet.publishedAt)}
                </span>
              </h3>
              <p>{comment.snippet.topLevelComment.snippet.textDisplay}</p>
              {ButtonUpAndDown(comment)}
            </div>
          </div>
        ))
      }
    </Fragment>
  );
}

export default VideoPlayerUsersComments;
