import PropTypes from "prop-types";

const Star = ({ filled, half }) => (
  <span className={`star ${filled ? "full" : half ? "half" : "empty"}`}>★</span>
);

Star.propTypes = {
  filled: PropTypes.bool.isRequired,
  half: PropTypes.bool.isRequired,
};

const StarRating = ({ rating }) => {
  const roundedRating = Math.round(rating * 2) / 2;

  return (
    <div className="star-rating" aria-label={`${rating} out of 5 stars`}>
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          filled={roundedRating >= star}
          half={roundedRating === star - 0.5}
        />
      ))}
    </div>
  );
};

StarRating.propTypes = {
  rating: PropTypes.number.isRequired,
};

export default StarRating;
