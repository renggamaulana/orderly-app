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
                className={`relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all rounded group ${
                selectedCategory === category
                    ? "bg-gradient-to-r from-indigo-500 to-indigo-800 text-white"
                    : "bg-white text-black hover:bg-white hover:text-white"
                }`}
            >
                <span
                className={`w-48 h-48 rounded rotate-[-40deg] absolute bottom-0 left-0 -translate-x-full translate-y-full mb-9 ml-9 transition-all ease-out duration-500 ${
                    selectedCategory === category
                    ? "bg-gradient-to-r from-indigo-500 to-indigo-800 translate-x-0 mb-32 ml-0"
                    : "group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0 bg-gradient-to-r from-indigo-500 to-indigo-800"
                }`}
                ></span>
                <span className="relative w-full text-left transition-colors duration-300 ease-in-out">
                {category}
                </span>
            </button>
        ))}
      </div>
    );
}


export default Tab;