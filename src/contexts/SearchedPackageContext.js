import React, {createContext, useState} from "react";

export const SearchedPackageContext = createContext("");

const SearchedPackageProvider = ({children}) => {

    const [npmName, setNpmName] = useState('')

    const handleSearch = (packageName)=> {
        setNpmName(packageName)
    }

    return(
        <SearchedPackageContext.Provider value = {{handleSearch, npmName}}>
            {children}
        </SearchedPackageContext.Provider>
    )
}

export default SearchedPackageProvider;