const Person = (props) => {
    let name;
    let header;
    if (props.age >= 18){
        header = "please go vote!";
    } else{
        header = "you must be 18";
    }

    if (props.name.length > 8){
        name = props.name.slice(0, 6);
    } else{
        name = props.name;
    }

    return (
    <div>
    <p>Learn some information about this person.</p>
    <p>Name: {name}</p>
    <p>Age: {props.age}</p>
    <h3>{header}</h3>
    <ul>{props.hobbies.map(h => 
            (
                <li>
                    <p>{h}</p>
                </li>
            )
            )}
            </ul> 
    </div>
    )
}