export default function Layout(){
    return(
        <div className="p-m">
            <nav>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/chat">Chat</NavLink>
            </nav>
            <main>
                <Outlet></Outlet>
            </main>
        </div>
    )
}