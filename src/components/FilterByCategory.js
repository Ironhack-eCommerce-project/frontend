import { useEffect } from "react";

function FilterByCategory({ categories, selectedCategoryId, setSelectedCategoryId }) {
  const handleChange = (e) => {
    setSelectedCategoryId(e.target.value);
  };
  useEffect(
    () => console.log("SELECTED CATEGORY", selectedCategoryId, typeof selectedCategoryId),
    [selectedCategoryId]
  );
  return (
    <div>
      <label>
        Filter by Category:
        {categories[0] && (
          <select onChange={handleChange}>
            <option>Show all</option>
            {categories.map((category) => (
              <option key={category._id} value={category._id}>
                {category.name}
              </option>
            ))}
          </select>
        )}
      </label>
    </div>
  );
}

export default FilterByCategory;
