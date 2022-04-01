const MainLayout = ({ children }) => {
    return (
        <main className="flex flex-row w-screen h-screen flex-wrap justify-center justify-items-center items-stretch">
            <nav className="flex flex-row justify-items-between px-3 bg-gray-300 w-full h-[60px] flex-initial items-center ">
                <h2 className="text-purple-500 font-bold text-xl">W16</h2>
            </nav>
            <section className="flex flex-column w-8/12 bg-gray-500 h-5/6  justify-items-stretch items-stretch rounded-md ring-1">
                {children}
            </section>
        </main>
    );
};

export default MainLayout;
