import { useEffect } from "react";
import { Box, FormControl, InputLabel, NativeSelect } from "@mui/material";

function FilterByCategory({ categories, selectedCategoryId, setSelectedCategoryId }) {
  const handleChange = (e) => {
    setSelectedCategoryId(e.target.value);
  };
  useEffect(
    () => console.log("SELECTED CATEGORY", selectedCategoryId, typeof selectedCategoryId),
    [selectedCategoryId]
  );
  return (
    <Box>
      <FormControl fullWidth>
        <InputLabel variant="standard" htmlFor="uncontrolled-native">
          Filter by Category
        </InputLabel>
        {categories[0] && (
          <NativeSelect onChange={handleChange}>
            <option>Show all</option>
            {categories.map((category) => (
              <option key={category._id} value={category._id}>
                {category.name}
              </option>
            ))}
          </NativeSelect>
        )}
      </FormControl>
    </Box>
  );
}

export default FilterByCategory;
