import PropTypes from 'prop-types';

const ItemListContainer = ({ welcomeMessage }) => {
    return (
        <div className="item-list-container">
            <h1>{welcomeMessage}</h1>
        </div>
    );
};

ItemListContainer.propTypes = {
    welcomeMessage: PropTypes.string.isRequired,
  };

export default ItemListContainer;
