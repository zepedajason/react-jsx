const App = () => {
    return (
        <div>
            <Person age={18} name="Jason" hobbies={["Exercising", "Hiking", "Watching shows"]} />
            <Person age={17} name="Tom" hobbies={["Fishing", "Eating", "Jogging"]} />
            <Person age={18} name="Logan" hobbies={["Reading", "Swimming", "Playing golf"]} />
        </div>
    )
    
}

ReactDOM.render(<App />, document.getElementById("root"));