import { Link } from "react-router-dom";
import { CartWidget } from "./CartWidget";
import { SearchInput } from "./SearchInput";
import { SessionWidget } from "./SessionWidget";

export function Header(){
    return (
        <header className="flex justify-between px-8 py-3 bg-black sticky top-0 z-10">
            <h1 className="text-5xl text-white"><Link to="/">POV<span className="text-red-600">.</span></Link></h1>
            <nav className="flex items-center">
                <div className="flex items-center gap-x-5">
                    <SessionWidget />
                    <SearchInput />
                    <CartWidget />
                </div>
            </nav>
        </header>
    ); 
};
