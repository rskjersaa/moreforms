import {useState} from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Form';
import Display from './Display';

const MoreForms = () => {

    const [firstName, setFirstName] = useState("")
    const [lastName, setlastName] = useState("")
    const [age, setAge] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirm, setConfirm] = useState("")

    const initialFormData = {
        firstName: "",
        lastName: "",
        age: "",
        email: "",
        password: "",
        confirm: "",

    };

    const[person, setPerson] = useState(initialFormData);
    // const [firstNameError, setFirstNameError] = useState ("");
    // const [lastNameError, setLastNameError] = useState ("");
    // const [emailError, setEmailError] = useState ("");
    // const[passwordError, setPasswordError] = useState ("");
    // const [confirmError, setConfirmError] = useState ("");
    // const[personList, setPersonList] = useState ([]);
    // const [errors, setErrors] = useState([]);
    


    const onSubmitHandler = (e) => {
        e.preventDefault();
        console.log(initialFormData)
    };
    

        
    
    // const onChangeHandler = (e) => {
    //     setPerson({...person, [e.target.name]:e.target.value});
    
    // };

    return (
        
        <>
        
            <Container>
                <Form onSubmit={onSubmitHandler} className="border w-50 p-5 rounded shadow">
        
                <Form.Group className="mb-3 col-4" controlId="formFirstName" >
                    <Form.Label>First Name</Form.Label>
                    <Form.Control type="text" placeholder="FirstName" value={person.firstName} name="firstName"
                    onChange={(e) => setPerson({...person, firstName:e.target.value})}/>
                    {
                    person.firstName && person.firstName.length  < 3 ? <p className="text-danger">Name must have at least 3 characters</p> : null
                    }
                </Form.Group>
                <Form.Group className="mb-3" controlId="formLastName">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control type="text" placeholder="LastName" value={person.lastName} name="lastName"
                    onChange={(e) => setPerson({...person, lastName:e.target.value})}/>
                    {
                    person.lastName && person.lastName.length  < 3 ? <p className="text-danger">Name must have at least 3 characters</p> : null
                    }
                </Form.Group>
                <Form.Group className="mb-3" controlId="formAge">
                    <Form.Label>Age</Form.Label>
                    <Form.Control type="number" placeholder="Age"
                    onChange={(e) => setPerson({...person, age:e.target.value})} />
                    
                </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email"
                    onChange={(e) => setPerson({...person, email:e.target.value})} />
                    {
                    person.email && person.email.length  < 5 ? <p className="text-danger">Name must have at least 5 characters</p> : null
                    }
                    <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password"
                    onChange={(e) => setPerson({...person, password:e.target.value})} />
                    {
                    person.password && person.password.length  < 8 ? <p className="text-danger">Password must be 8 characters</p> : null
                    }
                </Form.Group>
                <Form.Group className="mb-3" controlId="formConfirm">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control type="password" placeholder="Confirm"
                    onChange={(e) => setPerson({...person, confirm:e.target.value})} />
                    {
                    person.confirm != person.password ? <p className="text-danger">Passwords must match</p> : null
                    }
                </Form.Group>
                
                <Button variant="primary" type="submit">
                    Submit
                </Button>
                </Form>
                <Display firstName={person.firstName} lastName={person.lastName} age={person.age} email={person.email} password={person.password} confirm={person.confirm}/>
            </Container>
        </>
    ) 
}

export default MoreForms