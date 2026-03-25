import React from 'react'
import Button from './Button';

function FormAddFriend() {
  return (
    <form className="form-add-friend">
        <label>👩‍🦰 Friend Name</label>
        <input type="text" />

        <label>📷 Image URL</label>
        <input type="text" />

        <Button>Add Friend</Button>
    </form>
  )
}

export default FormAddFriend