import { loadUsersByPage } from "../use-cases/load-users-by-page"


const state = {
    currentPage: 0,
    users: [],
}

const loadNextPage = async () => {
   const users = await loadUsersByPage(state.currentPage +1 )
   if( users.length === 0) return

   state.currentPage += 1
   state.users = users;

}

const loadPreviousPage = async () => {
    if( state.currentPage === 1) return
    const users = await loadUsersByPage(state.currentPage-1)
 
    state.currentPage -= 1
    state.users = users;
}

const onUserChanged = () => {
    throw 'No esta implementado' 
}


const reloadPage = async () => {

}


export default {
    loadNextPage,
    loadPreviousPage,
    onUserChanged,
    reloadPage,

    /**
     * 
     * @returns {User[]}
     */
    getUser: () => [...state.users],

    /**
     * 
     * @returns {Number}
     */
    getCurrentPage: () => [state.currentPage]
}

