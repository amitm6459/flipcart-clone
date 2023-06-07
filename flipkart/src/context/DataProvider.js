import { createContext, useState } from "react";




export const DataConetext = createContext(null)



const DataProvider = ({ children }) => {

    const [account, setAccount] = useState('')

    return (
        <DataConetext.Provider value={{
            account,
            setAccount

        }}>
            {children}
        </DataConetext.Provider>
    )

}
export default DataProvider;




