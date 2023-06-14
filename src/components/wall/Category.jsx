const Category = ({ onSelect }) => {

    return (
            <div className="container-category">
                <label className="name-client-label">Category: </label>
                <button className="btn-breakfast"  onClick={() => onSelect('breakfast')}>Breakfast</button>
                <button className="btn-lunch" onClick={() => onSelect('lunch')}>Lunch - Dinner</button>     
            </div>
    );
};

export default Category;
