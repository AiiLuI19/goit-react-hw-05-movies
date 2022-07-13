import PropTypes from 'prop-types';
import s from './ReviewsRender.module.css';
function ReviewsRender({ author, content }) {
  return (
    <div className={s.wrap}>
      <h2 className={s.title}>{author}</h2>
      <p className={s.p}>{content}</p>
    </div>
  );
}
ReviewsRender.propTypes = {
  author: PropTypes.string,
  content: PropTypes.string,
};
export default ReviewsRender;
