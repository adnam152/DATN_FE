
const BlogPage = () => {
    const articles = [
        { title: 'Deumanto Sollicitudin Delo Milancelos', author: 'Jane Smith', date: 'Feb 24, 2022', excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis risus leo, elementum in malesuada an darius ut augue. Cras sit amet lectus et justo feugiat euismod sed non erat. Nulla non felis id metus bibendum iaculis quis sit amet eros. Nam suscipit mollis tellus vel malesuada. Duis danos an molestie, sem in sollicitudin sodales...' },
        { title: 'Deumanto Sollicitudin Delo Milancelos', author: 'Jane Smith', date: 'Feb 24, 2022', excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis risus leo, elementum in malesuada an darius ut augue. Cras sit amet lectus et justo feugiat euismod sed non erat. Nulla non felis id metus bibendum iaculis quis sit amet eros. Nam suscipit mollis tellus vel malesuada. Duis danos an molestie, sem in sollicitudin sodales...' },
        { title: 'Deumanto Sollicitudin Delo Milancelos', author: 'Jane Smith', date: 'Feb 24, 2022', excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis risus leo, elementum in malesuada an darius ut augue. Cras sit amet lectus et justo feugiat euismod sed non erat. Nulla non felis id metus bibendum iaculis quis sit amet eros. Nam suscipit mollis tellus vel malesuada. Duis danos an molestie, sem in sollicitudin sodales...' },
        { title: 'Deumanto Sollicitudin Delo Milancelos', author: 'Jane Smith', date: 'Feb 24, 2022', excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis risus leo, elementum in malesuada an darius ut augue. Cras sit amet lectus et justo feugiat euismod sed non erat. Nulla non felis id metus bibendum iaculis quis sit amet eros. Nam suscipit mollis tellus vel malesuada. Duis danos an molestie, sem in sollicitudin sodales...' }
    ];

    return (
        <div className="min-h-screen bg-white p-6" >
            <div className="container mx-auto flex flex-col lg:flex-row gap-1" >
                {/* Trái */}
                <div className="lg:flex-1 lg:mr-4">
                    {articles.map((article, index) => (
                        <div key={index} className="bg-white p-4 rounded-lg mb-10 flex max-w-[800px]" style={{ boxShadow: "10px 10px 15px rgba(0, 0, 0, 0.08)" }}>
                            <img
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeEMr7m73toMIinBp6rREFeBUeXoLo8ldIcerkb5Ck291saZrh"
                                alt="Thumbnail"
                                className="w-43 h-43 object-cover mr-4 shadow-[0_4px_8px_rgba(0,0,0,0.2)]"
                            />

                            <div>
                                <h2 className="text-l font-semibold mb-2 italic">{article.title}</h2>
                                <div className="flex items-center mb-2">
                                    <p className="text-xs font-bold text-gray-400 mr-2 italic">{article.author},</p>
                                    <p className="text-xs text-gray-600 italic">{article.date}</p>
                                </div>
                                <p className="text-gray-700 text-sm">{article.excerpt}</p>
                                <button className="mt-12 bg-white text-xs italic text-black py-2 px-4 rounded-full border border-black hover:bg-blue-100">
                                    Hiển thị thêm
                                </button>
                            </div>
                        </div>
                    ))}
                    {/* 1 */}
                    <div className="flex items-center justify-start mt-6 space-x-2 ">
                        <button className="bg-blue-500 border border-gray-400 text-white py-1 px-3 rounded hover:bg-gray-100">1</button>
                        <button className="bg-white border border-gray-400 text-gray-500 py-1 px-3 rounded hover:bg-gray-100">2</button>
                        <button className="bg-white border border-gray-400 text-gray-500 py-1 px-3 rounded hover:bg-gray-100">3</button>
                        <i className="fa-solid fa-chevron-right bg-white border border-gray-400 text-gray-500 py-2 px-3 rounded hover:bg-gray-100"></i>
                        <i className="fa-solid fa-angles-right bg-white border border-gray-400 text-gray-500 py-2 px-2 rounded hover:bg-gray-100"></i>
                    </div>
                </div>

                {/* Kẻ */}
                <div className="hidden lg:flex items-center justify-center">
                    <div className="w-px bg-gray-300 h-full mx-12"></div>
                </div>
                {/* Phải */}
                <div className="w-[370px]">
                    <div className="bg-white p-4 rounded-lg" style={{ boxShadow: "10px 10px 15px rgba(0, 0, 0, 0.08)" }}>
                        <h3 className="text-xl font-bold mb-4 border-b-2 border-black pb-2 inline-block">Bài viết nổi bật</h3>
                        {articles.slice(0, 3).map((article, index) => (
                            <div key={index} className="mb-4 flex items-center border-b pb-4">
                                <img
                                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeEMr7m73toMIinBp6rREFeBUeXoLo8ldIcerkb5Ck291saZrh"
                                    alt="Thumbnail"
                                    className="w-12 h-12 object-cover mr-4 shadow-[0_4px_8px_rgba(0,0,0,0.2)]"
                                />
                                <div>
                                    <p className="text-sm font-semibold mb-2 italic">{article.title}</p>
                                    <div className="flex items-center mb-2">
                                        <p className="text-xs font-bold text-gray-400 mr-2 italic">{article.author},</p>
                                        <p className="text-xs text-gray-600 italic">{article.date}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                        <h3 className="text-xl font-bold mb-4 border-b-2 border-black pb-1 inline-block mb-6">Tags</h3>
                        <div className="flex flex-wrap gap-2 mb-6">
                            <span className="bg-gray-100 text-gray-500 px-3 py-1 rounded">Bộ đồ</span>
                            <span className="bg-gray-100 text-gray-500 px-3 py-1 rounded">Váy</span>
                            <span className="bg-gray-100 text-gray-500 px-3 py-1 rounded">Áo</span>
                            <span className="bg-gray-100 text-gray-500 px-3 py-1 rounded">Giày leo núi</span>
                            <span className="bg-gray-100 text-gray-500 px-3 py-1 rounded">Túi xách</span>
                            <span className="bg-gray-100 text-gray-500 px-3 py-1 rounded">Chạy bộ</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogPage;
