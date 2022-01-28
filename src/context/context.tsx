import { useState, createContext, ReactNode, useContext, Dispatch } from 'react'

type ContextValue = {
    books: string
    setBooks: Dispatch<React.SetStateAction<string>>
}

type ContextProps = {
    children: ReactNode | ReactNode[]
}

const DataContext = createContext<ContextValue | null>(null)

export function ContextProvider({ children }: ContextProps) {
    const [books, setBooks] = useState('')

    return (
        <DataContext.Provider value={{ books, setBooks }}>
            {children}
        </DataContext.Provider>
    )

}

export function useBooks() {
    const context = useContext(DataContext)
    if (!context) {
        throw new Error('You must wrap your app with <ContextProvider /> component')
    }
    return context
}


