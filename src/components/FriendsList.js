import React, { Component } from "react";
import newid from "../utils/newid";
import Friend from './Friend'

class FriendsList extends Component {
    constructor(props) {
        super(props);
        this.state = { friend: "", friends: [] };
    }

    componentDidMount() {
        this.setState({ friends: [] })
    }
    handleFriend = (e) => {
        console.log("FRIEND: ", e.target.id)
        this.setState({ friend: e.target.value })
    }
    handleSubmit = e => {
        if (e.key === 'Enter' || e.keyCode === 13) {
            // adding new friend to list
            var friendsTemp = [...this.state.friends, { id: newid(), name: this.state.friend }];
            console.log("friendsTemp:", friendsTemp)
            this.setState({ friends: friendsTemp })
        }
    }

    deleteFriend = (e, friend) => {
        let tempFriends = this.state.friends.filter(fr => fr !== friend)
        this.setState({ friends: tempFriends })
    }
    startFriend = (e, friend) => {
        // let tempFriends = this.state.friends.filter(fr => fr !== friend)
        this.setState({ friends: this.state.friends })
    }
    render() {
        return (
            <div className="main">
                <div className="mainDiv">
                    <fieldset className="form-group">
                        <input
                            type="text"
                            name="name"
                            placeholder="Enter your friend's name"
                            className="form-control"
                            onKeyUp={this.handleSubmit.bind(this)}
                            onChange={this.handleFriend.bind(this)}
                        />
                    </fieldset>
                    {this.state.friends.map(friend =>
                    (<Friend
                        friend={friend}
                        key={friend.id}
                        removeFriend={this.deleteFriend}
                        startFriend={this.startFriend}
                    />))}
                </div>
            </div>
        );
    }
}

export default FriendsList;