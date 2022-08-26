import React from "react";

const Categories = (props) => {
  const categories = props.categories;
  const filterMenu = (e) => {
    props.filterHandler(e.target.innerText);
  };

  const renderCategories = () => {
    return categories.map((category, index) => (
      <button
        key={index}
        type='button'
        className='filter-btn'
        onClick={filterMenu}
      >
        {category}
      </button>
    ));
  };

  return <div className='btn-container'>{renderCategories()}</div>;
};

export default Categories;
