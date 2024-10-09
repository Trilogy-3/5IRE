import GetFireBtn from "./components/Button";
import Logo from "./components/Logo";
import NavList from "./components/NavList";
import Social from "./components/Social";



export default function Navbar() {
    return (
        <div className="bg-transparent flex flex-row px-4 justify-between lg:justify-evenly w-full items-center max-h-16 absolute inset-0 z-[999] max-w-[1300px] my-2 mx-auto">
            <Logo />
            <NavList/>
            <div className="lg:flex flex-row gap-5 hidden">
                <Social />
                <GetFireBtn />
            </div>
        </div>
    )
}
