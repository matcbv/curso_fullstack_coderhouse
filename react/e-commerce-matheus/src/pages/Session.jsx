import { Header } from "../layouts/Header";
import { Footer } from "../layouts/Footer";

export function Session(){
    return (
        <>
            <Header />
            <main className="h-screen">
                <h1>Faça login</h1>
                <section className="flex justify-evenly">
                    <div className="">
                        <form action="" method="POST" className="text-black p-10 w-full">
                            <div className="flex flex-col">
                                <label htmlFor="email">E-mail</label>
                                <input type="email" id="email" className="border-red-600 border-b" />
                            </div>
                            <div className="flex flex-col">
                                <label htmlFor="password">Senha</label>
                                <input type="password" id="password" className="border-red-600 border-b"  />
                            </div>
                            <input type="submit" value="Entrar" />
                        </form>
                    </div>
                    <div>
                        <span className="block border-r border-b border-black p-4">
                            <img src="/assets/images/welcome.webp" alt="Boas-vindas" />
                        </span>
                    </div>                 
                </section>
            </main>
            <Footer />
        </>
    );
};
