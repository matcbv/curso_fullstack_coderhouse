import { Header } from "../layouts/Header";
import { Footer } from "../layouts/Footer";

export function Session(){
    return (
        <>
            <Header />
            <main className="h-screen">
                <h1>Faça sua conta</h1>
                <div>
                    <form action="" method="POST" className="text-black">
                        <div>
                            <label htmlFor="name">Nome</label>
                            <input type="text" id="name" />
                        </div>
                        <div>
                            <label htmlFor="lastname">Sobrenome</label>
                            <input type="text" id="lastname" />
                        </div>
                        <div>
                            <label htmlFor="email">E-mail</label>
                            <input type="email" id="email" />
                        </div>
                        <div>
                            <label htmlFor="password">Senha</label>
                            <input type="password" id="password" />
                        </div>
                    </form>
                </div>
            </main>
            <Footer />
        </>
    );
};
