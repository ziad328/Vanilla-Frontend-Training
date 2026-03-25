import Friend from "./Friend"

function FriendList({ friends }) {


    return (
        <ul>
            {friends.map(friend => (
                <Friend key={friend.id} friend={friend} />
            ))}
        </ul>
    )
}

export default FriendList