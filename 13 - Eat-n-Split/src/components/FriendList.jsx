import Friend from "./Friend"

function FriendList({ friends, onSelectFriend, selectedFriend }) {


    return (
        <ul>
            {friends.map(friend => (
                <Friend key={friend.id} friend={friend} selectedFriend={selectedFriend} onSelectFriend={onSelectFriend} />
            ))}
        </ul>
    )
}

export default FriendList