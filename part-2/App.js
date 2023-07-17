const App = () => {
    return (
        <div>
            <Tweet
                username="user_name"
                name="User Name"
                date="July 16, 2023"
                tweetmsg="This is a tweet"  
            />
            <Tweet
                username="user2"
                name="Jim Halpert"
                date="July 16, 2023"
                tweetmsg="I'm tweeting"  
            />
            <Tweet
                username="third_user"
                name="Dwight Schrute"
                date="July 16, 2023"
                tweetmsg="My last tweet"  
            />
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById("root"));