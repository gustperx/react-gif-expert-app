import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

const GifExpertApp = () => {
  const [categories, setCategories] = useState(["One Punch"]);

  return (
    <div className="bg-blue-50 p-8">
      <h2 className="text-3xl text-cyan-700 font-medium my-4">GifExpertApp</h2>
      <AddCategory setCategories={setCategories} />
      <hr className="my-4" />

      <ol>
        {categories.map((category) => (
          <GifGrid category={category} key={category} />
        ))}
      </ol>
    </div>
  );
};

export { GifExpertApp };
