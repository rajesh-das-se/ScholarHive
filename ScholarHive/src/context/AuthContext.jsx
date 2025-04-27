import { createContext, useContext, useState, useEffect } from "react";
import useAuth from "../hooks/useAuth";


export const AuthContext= createContext();

export const AuthProvider= ({children})=>{
    const {isAuthenticated, user, signIn, signOut}= useAuth();
    return (
        <AuthContext.Provider value={{isAuthenticated, user, signIn, signOut}}>
            {children}
        </AuthContext.Provider>
    )
}