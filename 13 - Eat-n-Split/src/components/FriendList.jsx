import Friend from "./Friend"

function FriendList({ friends, onSelectFriend }) {


    return (
        <ul>
            {friends.map(friend => (
                <Friend key={friend.id} friend={friend} onSelectFriend={onSelectFriend} />
            ))}
        </ul>
    )
}

export default FriendList