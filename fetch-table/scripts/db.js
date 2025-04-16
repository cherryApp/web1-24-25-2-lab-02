const apiUrl = 'https://nettuts.hu/jms/cherryApp/';

export const getAll = (entity = 'products') => {
    return fetch(`${apiUrl}${entity}`)
        .then( response => response.json() );
};