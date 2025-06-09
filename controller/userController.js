// @desc    Get all users
// @route   GET /api/users
export const getUsers = (req, res) => {
  try {
    return res.status(200).json({
      message: "Users retrieved successfully",
      data: users,
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Create a user
// @route   POST /api/users
export const createUser = (req, res) => {
  const { name, email } = req.body;
  try {
    if (!name || !email) {
      return res.status(400).json({ message: "Name and email are required" });
    }

    if (users.find((user) => user.email === email)) {
      return res.status(400).json({ message: "Email already exists" });
    }

    const newUser = {
      id: users.length + 1,
      name,
      email,
    };

    users.push(newUser);
    return res.status(201).json({
      message: "User created successfully",
      data: newUser,
    });
  } catch (error) {
    next(error);
  }
};

// @desc   Update a user
// @route  PUT /api/users/:id
export const updateUser = (req, res) => {
  try {
    const { id } = req.params;
    const { name } = req.body;
    const editUser = users.find((user) => user.id == id);
    if (!editUser) {
      res.status(400).json({ message: "User not found" });
    }
    editUser.name = name;
    return res.status(200).json({ message: "Edit user successfull" });
  } catch (error) {
    next(error);
  }
};

// @desc     Delete a user(Hard delete)
// @route    DELETE /api/users/:id
export const deleteUser = (req, res) => {
  try {
    const { id } = req.params;
    const userIndex = users.findIndex((user) => user.id == id);
    if (userIndex === -1) {
      res.status(400).json({ message: "User not found" });
    }

    users.splice(userIndex, 1);
    return res.status(200).json({ message: "Delete user successfull" });
  } catch (error) {
    next(error);
  }
};
