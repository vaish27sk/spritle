

const Logout = props => {
    localStorage.removeItem('login');
    props.history.push('/');
    return null;
}

export default Logout;