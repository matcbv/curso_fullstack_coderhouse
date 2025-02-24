export function CategoriesSection(){
    return (
        <section className="border-y-2 border-red-600">
            <div className="flex flex-col md:flex-row justify-evenly max-w-full h-screen">
                <div className="bg-[url('/assets/images/woman.jpg')] bg-cover bg-center flex justify-center w-full h-full">
                    <button type='button' className="categories_btn">Feminino</button>
                </div>
                <div className="bg-[url('/assets/images/man.jpg')] bg-cover bg-center flex justify-center w-full h-full">
                    <button type='button' className="categories_btn">Masculino</button>
                </div>
                <div className="bg-[url('/assets/images/kid.jpg')] bg-cover bg-center flex justify-center w-full h-full">
                    <button type='button' className="categories_btn">Infantil</button>
                </div>
            </div>
        </section>
    );
};
