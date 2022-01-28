import { useState, ChangeEvent, createContext, ReactNode, useContext, Dispatch } from 'react'

export function Context() {
type ContextProps = {
    books: string
    setBooks: Dispatch<React.SetStateAction<string>>
    children?: ReactNode | ReactNode[]
}

    const DataContext = createContext<ContextProps | null>(null)

    function ContextProvider({ children }: ContextProps) {
        const [books, setBooks] = useState('')


        return (
            <DataContext.Provider value={{ books, setBooks }}>
                {children}
            </DataContext.Provider>
        )

        function useFF() {
            const context = useContext(DataContext)
            if (!context) {
                throw new Error('@fdaciuk/react-ff: You must wrap your app with <FFProvider /> component')
            }
            return context
        }

    }
    return {ContextProvider, DataContext}
}