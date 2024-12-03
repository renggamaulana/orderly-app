type TabProps = {
    categories: string[];
    selectedCategory: string;
    onSelectCategory: (category: string) => void;
  };

const Tab: React.FC<TabProps> = ({ categories, selectedCategory, onSelectCategory }) => {
    return (
        <div className="flex px-5 gap-3 my-10">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => onSelectCategory(category)}
            className={`px-4 py-2 rounded-md font-medium text-white transition-all ${
                selectedCategory === category
                  ? "bg-gradient-to-r from-blue-500 to-purple-500"
                  : "bg-gray-400 bg-opacity-50 hover:bg-opacity-70"
              }`}
          >
            {category}
          </button>
        ))}
      </div>
    );
}


export default Tab;