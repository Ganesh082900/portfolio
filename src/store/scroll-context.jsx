import React, { useRef } from "react"

// create our context
export const ScrollContext = React.createContext();

// create context provider component

const ScrollContextProvider = (props) => {
    return (
        <ScrollContext.Provider

            value={{
                homeRef: useRef(),
                aboutRef: useRef(),
                skillsRef: useRef(),
                projectsRef: useRef(),
                contactRef: useRef(),
            }}
        >
            {props.children}
        </ScrollContext.Provider>
    )
}


export default ScrollContextProvider
