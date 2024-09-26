import { User } from '../models';

export const getAllUsers = async () => {
    try {
        const users = await User.findAll();
        return users;
    } catch (error) {
        throw new Error('Error fetching users');
    }
};

export const getUserById = async (UserID) => {
    try {
        const user = await User.findByPk(UserID);
        if (!user) {
            throw new Error('User not found');
        }
        return user;
    } catch (error) {
        throw new Error('Error fetching user');
    }
};

export const createUser = async (data) => {
    try {
        const newUser = await User.create(data);
        return newUser;
    } catch (error) {
        throw new Error('Error creating user');
    }
};

export const updateUser = async (UserID, data) => {
    try {
        const updatedUser = await User.update(data, {
            where: { UserID }
        });
        return updatedUser;
    } catch (error) {
        throw new Error('Error updating user');
    }
};

export const deleteUser = async (UserID) => {
    try {
        const result = await User.destroy({ where: { UserID } });
        return result;
    } catch (error) {
        throw new Error('Error deleting user');
    }
};
