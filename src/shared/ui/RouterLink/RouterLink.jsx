import { BASE_URL } from "@/shared/constants";

const RouterLink = ( {to, children, ...rest} ) => {
    const handleClick = (event) => {
        event.preventDefault();

        const path = `${BASE_URL}${to}`
        window.history.pushState({}, '', path);
        window.dispatchEvent(new PopStateEvent('popstate'));
    }
    return (
        <a href={`${BASE_URL}${to}`} onClick={handleClick} {...rest}>
            {children}
        </a>
    )
}

export default RouterLink