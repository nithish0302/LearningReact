import { useState } from "react";

const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

export default function App() {
  const [show, setShow] = useState(false);
  const [friends, setFriends] = useState(initialFriends);
  const [selectedFriend, setSelectedFriend] = useState(null);

  function handleShowFriend() {
    setShow((s) => !s);
    setSelectedFriend(null);
  }

  function handleAddFriend(friend) {
    setFriends((prevFriends) => [...prevFriends, friend]);
    setShow(false);
  }

  function handleSelectedFriend(friend) {
    setSelectedFriend((curr) => (curr?.id === friend.id ? null : friend));
    setShow(false);
  }

  function handleSplitBill(value) {
    setFriends((friends) =>
      friends.map((friend) =>
        friend.id === selectedFriend.id
          ? { ...friend, balance: friend.balance + value }
          : friend
      )
    );

    setSelectedFriend(null);
  }

  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList
          friends={friends}
          onSelect={handleSelectedFriend}
          selectedFriend={selectedFriend}
        />
        {show && <FormAddFriend onAddFriend={handleAddFriend} />}
        <Button onClick={handleShowFriend}>
          {!show ? "Add Friend" : "Close"}
        </Button>
      </div>
      {selectedFriend && (
        <FormSplitBill
          selectedFriend={selectedFriend}
          onSplitBill={handleSplitBill}
        />
      )}
    </div>
  );
}

function FriendsList({ friends, onSelect, selectedFriend }) {
  return (
    <ul>
      {friends.map((friend) => (
        <Friend
          friend={friend}
          key={friend.id}
          onSelect={onSelect}
          selectedFriend={selectedFriend}
        />
      ))}
    </ul>
  );
}

function Friend({ friend, onSelect, selectedFriend }) {
  const isSelected = selectedFriend?.id === friend.id;

  return (
    <li className={isSelected ? "selected" : ""}>
      <img src={friend.image} alt="No image found" />
      <h4>{friend.name}</h4>

      {friend.balance < 0 && (
        <p className="red">
          You owe {friend.name} ${Math.abs(friend.balance)}
        </p>
      )}

      {friend.balance > 0 && (
        <p className="green">
          {friend.name} owes You ${friend.balance}
        </p>
      )}

      {friend.balance === 0 && (
        <p className="gray">You and {friend.name} are even</p>
      )}
      <Button onClick={() => onSelect(friend)}>
        {isSelected ? "Close" : "Select"}
      </Button>
    </li>
  );
}

function FormAddFriend({ onAddFriend }) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("https://i.pravatar.cc/48");

  function handleSubmit(e) {
    e.preventDefault();

    if (!name) return;
    const id = crypto.randomUUID();
    const newFriend = {
      id,
      name,
      image: `${image}?u=${id}`,
      balance: 0,
    };
    console.log(newFriend);

    onAddFriend(newFriend);

    setName("");
    setImage("https://i.pravatar.cc/48");
  }

  return (
    <form className="form-add-friend" onSubmit={handleSubmit}>
      <label>Friend name</label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <label>🌆 image</label>
      <input
        type="text"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />
      <Button>Add</Button>
    </form>
  );
}

function Button({ children, onClick }) {
  return (
    <button className="button" onClick={onClick}>
      {children}
    </button>
  );
}

function FormSplitBill({ selectedFriend, onSplitBill }) {
  const [bill, setBill] = useState("");
  const [paidUser, setPaidUser] = useState("");
  const [whoPay, setWhoPay] = useState("user");
  const friendPaid = bill ? bill - paidUser : "";

  function handleSubmit(e) {
    e.preventDefault();
    if (!bill || !paidUser) return;

    onSplitBill(whoPay === "user" ? friendPaid : -paidUser);
  }

  return (
    <form className="form-split-bill" onSubmit={handleSubmit}>
      <h2>Split the bill with {selectedFriend.name}</h2>
      <label>Bill Value</label>
      <input
        type="text"
        value={bill}
        onChange={(e) => setBill(Number(e.target.value))}
      />

      <label>Your expense</label>
      <input
        type="text"
        value={paidUser}
        onChange={(e) =>
          setPaidUser(
            Number(e.target.value) > bill ? paidUser : Number(e.target.value)
          )
        }
      />
      <label>{selectedFriend.name}'s expense</label>
      <input type="text" disabled value={friendPaid} />

      <label>Who pays the bill</label>
      <select value={whoPay} onChange={(e) => setWhoPay(e.target.value)}>
        <option value="You">You</option>
        <option value="Friend">{selectedFriend.name}</option>
      </select>
      <Button>Split Bills</Button>
    </form>
  );
}
