import PropTypes from 'prop-types';
function ReviewsRender({ author, content }) {
  return (
    <>
      <h2>{author}</h2>
      <p>{content}</p>
    </>
  );
}
ReviewsRender.propTypes = {
  author: PropTypes.string,
  content: PropTypes.string,
};
export default ReviewsRender;
