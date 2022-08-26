import React, { useState } from "react";
import Menu from "./Menu";
import Categories from "./Categories";
import items from "./data";

const allCategories = ['all',...new Set(items.map(item => item.category))]

function App() {
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState(allCategories);

  const filterMenuHandler = (category) => {
    if(category.toLowerCase() === 'all') {
      setMenuItems(items);
      return;
    }

    const filteredMenu = items.filter(item => item.category === category.toLowerCase())
    setMenuItems(filteredMenu);
  }

  return (
    <main>
      <section className='menu-section'>
        <div className='title'>
          <h2>our menu</h2>
          <div className='underline'></div>
        </div>
        <Categories categories={categories} filterHandler={filterMenuHandler}/>
        <Menu menu={menuItems} />
      </section>
    </main>
  );
}

export default App;
