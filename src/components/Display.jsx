

const Display = (props) => {
    const {firstName, lastName, age, email, password, confirm} = props;
    return(
        <div className="border w-50 p-5 rounded shadow">
            <h1> Name: {firstName} {lastName}</h1>
            <h3> Age: {age}</h3>
            <h3> Email: {email}</h3>
            <h3> Password: {password}</h3>
        </div>
    );
};

export default Display