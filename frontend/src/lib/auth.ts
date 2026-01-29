const TOKEN_KEY='token';

export const setToken=(token:string)=>{
    localStorage.setItem(TOKEN_KEY,token);
}


export const getToken=():string | null=>{
    return localStorage.getItem(TOKEN_KEY);
}

export const removeToken=():void=>{
    return localStorage.removeItem(TOKEN_KEY);
}


export const isAuthenticated=()=>{
    return !!getToken();
}