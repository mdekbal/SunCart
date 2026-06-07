import { Outlet } from "react-router-dom";


export function AppLayout() {
    return (
        <>

            <main className="h-full font-outfit bg-sun-50 text-gray-800 overflow-auto">
                <div id="app" className="w-full h-full flex flex-col">

                    <Outlet />
                </div>
            </main>

        </>
    )
}

