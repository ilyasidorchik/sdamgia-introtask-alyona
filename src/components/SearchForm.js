import React, { useCallback, useState } from "react";

const SearchForm = () => {
  const [value, setValue] = useState("");
  const [ref, setRef] = useState("");

  const handleChange = useCallback((e) => {
    setValue(e.target.value);
  }, []);

  const handleClick = useCallback(
    async (e) => {
      e.preventDefault();

      const response = await fetch(
        `https://sdamgia-homework-backend.herokuapp.com/api/search?query=${value}`
      );
      const data = await response.json();
      const { name, title } = await data.subject;
      setRef(`https://${name}-ege.sdamgia.ru/`);
    },
    [value]
  );

  return (
    <form>
      <input
        type="text"
        placeholder="Search here"
        value={value}
        onChange={handleChange}
      />
      <button onClick={handleClick}>Поиск</button>
      <div> {reeef} </div>
    </form>
  );
};

export default SearchForm;
