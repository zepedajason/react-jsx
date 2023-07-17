const Tweet = (props) => {
    return (
        <div id="tweet">
        <p>Username: {props.username}</p>
        <p>Name: {props.name}</p>
        <p>Date: {props.date}</p>
        <p>Tweet: {props.tweetmsg}</p>
        </div>
    )
}

