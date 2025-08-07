import { useEffect } from "react";
import useAvatarStore from "../store";

const AssetsBox = () => {
  const {
    categories,
    currentCategory,
    assets,
    isLoading,
    fetchCategories,
    setCurrentCategory,
    updateAvatarConfig,
  } = useAvatarStore();

  useEffect(() => {
    fetchCategories();
  }, [fetchCategories]);

  if (isLoading) {
    return (
      <div className="rounded-2xl bg-white drop-shadow-md p-6">
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div className="rounded-2xl bg-white drop-shadow-md p-6 gap-6 flex flex-col">
      {/* Category Tabs */}
      <div className="flex items-center gap-6 pointer-events-auto">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => setCurrentCategory(category)}
            className={`transition-colors duration-200 font-medium 
              ${
                currentCategory?.id === category.id
                  ? "text-indigo-500"
                  : "text-gray-500 hover:text-gray-700"
              }`}
          >
            {category.name}
          </button>
        ))}
      </div>

      {/* Options Grid */}
      {currentCategory && (
        <div className="grid grid-cols-3 gap-4">
          {currentCategory.options.map((option) => (
            <button
              key={option.id}
              onClick={() => updateAvatarConfig(currentCategory.id, option.id)}
              className="flex flex-col items-center gap-2 p-2 hover:bg-gray-100 rounded-lg"
            >
              {option.thumbnail ? (
                <img
                  src={option.thumbnail}
                  alt={option.label}
                  className="w-16 h-16 object-contain"
                />
              ) : (
                option.color && (
                  <div
                    className="w-16 h-16 rounded-full"
                    style={{ backgroundColor: option.color }}
                  />
                )
              )}
              <span className="text-xs text-gray-600">{option.label}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default AssetsBox;