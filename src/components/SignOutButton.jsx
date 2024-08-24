import React from 'react'

const SignOutButton = () => {
    const logOut = () => {
        
    }
    return (
        <div>
            <button 
            onClick={logOut}
            className="bg-blue-900 p-2 5 text-white">
                Signout
            </button>
        </div>
    )
}

export default SignOutButton