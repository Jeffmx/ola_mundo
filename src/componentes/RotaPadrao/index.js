import Banner from "componentes/Banner";
import { Outlet } from "react-router-dom";

export default function RotaPadrao(){
    return(
        <main>
            <Banner/>
            <Outlet/>
        </main>
    )
}