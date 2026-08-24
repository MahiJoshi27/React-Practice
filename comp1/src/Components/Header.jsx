function Header(){
    return  (

        // We here use div tag to just add multiple elements else because it allow only 1 header tag to add.
        
        /*<div>
            <h1>Hello World</h1>
            <h2>This is a simple React app</h2>
        </div> */
    

// if we donot want to use div tag then we can use React.Fragment or empty tag <> </> to add multiple elements.
        
        <>
            <h1>Hello World</h1>
            <h2>This is a simple React app</h2>
        </>
    )
}

export default Header;