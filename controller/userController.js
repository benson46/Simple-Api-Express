import User from "../model/userModel.js";

// @desc    Get all users
// @route   GET /api/users
export const getUsers = async (req, res,next) => {
  try {
    const users = await User.find();
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
export const createUser = async (req, res) => {
  try {
    const { name, email } = req.body;
    if (!name || !email) {
      return res.status(400).json({ message: "Name and email are required" });
    }
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "Email already exists" });
    }

    const length = await User.countDocuments()
    const newUser =  await User.create({name,email});
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
export const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const { name } = req.body;
    const editUser = await User.findById(id);
    if (!editUser) {
      res.status(400).json({ message: "User not found" });
    }
    editUser.name = name;
    await editUser.save();
    return res.status(200).json({ message: "Edit user successfull" });
  } catch (error) {
    console.log(error)
    next(error);
  }
};

// @desc     Delete a user(Hard delete)
// @route    DELETE /api/users/:id
export const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedUser= await User.findByIdAndDelete(id);
    
    return res.status(200).json({ message: "Delete user successfull" , deletedUser});
  } catch (error) {
    next(error);
  }
};
