let users = require("../model/user.model");

exports.getAllUsers = (req, res) => {
    res.json(users);
};

exports.addUser = (req, res) => {
    let newUser = req.body;
    newUser = {
        id: users.length + 1,
        ...newUser
    }
    users.push(newUser)
    res.json(users)
}

exports.deleteUser = (req, res) => {
    users = users.filter(u => u.id != req.params.id)
    res.json(users)
}

exports.updateUser = (req, res) => {
    const id = req.params.id;
    const updatedData = req.body;
    const index = users.findIndex(user => user.id == id);
    if(index != -1){
        users[index] = { ...users[index], ...updatedData}
        res.json(users);
    } else {
        res.status(404).json({ message: 'User not found' });
    }
}