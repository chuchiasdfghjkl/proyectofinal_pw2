
import prodsPage from './productosPage';

const pageContext = {
    "/productos.html":prodsPage,
    
}


const getContext = (contextKey) => {
    const _pageContext = pageContext[contextKey] || {};
    return Object.assign({}, _pageContext);
}
export default getContext;