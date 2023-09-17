import Navmenu from "./Navmenu";


const Nav = () => {
    const routes = [
        { id: 1, name: 'Home' },
        { id: 2, name: 'About Us' },
        { id: 3, name: 'Services' },
        { id: 4, name: 'Contact' },
        { id: 5, name: 'Products' }
      ];
      
    return (
        <div>
            {
                routes.map(route=><Navmenu key={route.id} route={route}></Navmenu>)
            }
            
        </div>
    );
};

export default Nav;