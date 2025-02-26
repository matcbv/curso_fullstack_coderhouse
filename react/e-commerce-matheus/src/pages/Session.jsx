import { Header } from "../layouts/Header";
import { Footer } from "../layouts/Footer";

export function Session(){
    return (
        <>
            <Header />
            <main>
                <h1>Faça sua conta</h1>
                <div>
                    <form action="" method="POST">
                        <div>
                            <label htmlFor=""></label>
                            <input type="text" />
                        </div>
                        <div>
                            <label htmlFor=""></label>
                            <input type="text" />
                        </div>
                        <div>
                            <label htmlFor=""></label>
                            <input type="text" />
                        </div>
                        <div>
                            <label htmlFor=""></label>
                            <input type="text" />
                        </div>
                    </form>
                </div>
            </main>
            <Footer />
        </>
    );
};
