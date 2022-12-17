import axios from "axios";
import { useState } from "react";
import { slugify } from "../functions";

function EditCategory({ category, setCategories, setEditCategoryButtonClicked }) {
  const [editedCategory, setEditedCategory] = useState(category);

  const handleChange = (e) => {
    setEditedCategory((old) => {
      let newValue = e.target.value;
      return { ...old, [e.target.name]: newValue };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      editedCategory.slug = slugify(editedCategory.name);
      const resp = await axios.put(
        `/categories/${category.slug}`,
        editedCategory
      );
      console.log(resp);

      /* As in Add/Delete Product the following function just to refresh what is shown. Should probably be improved in the future */
      const fetchData = async () => {
        const result = await axios.get("/categories");
        const data = await result.data;
        setCategories(data);        
      };
      fetchData();
      setEditCategoryButtonClicked(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            name="name"
            value={editedCategory.name}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Save changes</button>
      </form>
    </div>
  );
}

export default EditCategory;
