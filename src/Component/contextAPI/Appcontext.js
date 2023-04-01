import { createContext, useContext, useState } from "react";


const Appcontext = createContext(null);

export const useAppcontext = () => {
    const context = useContext(Appcontext);
    if (context === undefined) {
        throw new Error("App must be within ");
    }
    return context;
}

const AppcontextProvider = ({ children }) => {
    const [favorites, setFavorites] = useState([]);
    const Addtofavorites = (book) => {
        const oldfav = [...favorites];
        const newfav = oldfav.concat(book);
        setFavorites(newfav);

    }
    const removefrom_fav = (id) => {
        const oldfav = [...favorites];
        const newfav = oldfav.filter((book) => book.id !== id)
        setFavorites(newfav)
    }
    return (<Appcontext.Provider value={{ favorites, Addtofavorites, removefrom_fav }} >
        {children}
    </Appcontext.Provider>
    )
}


export default AppcontextProvider;