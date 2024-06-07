import AsyncStorage from "@react-native-async-storage/async-storage";

let users = [];

const loadUsers = async () => {
  try {
    const usersString = await AsyncStorage.getItem("users");
    users = usersString ? JSON.parse(usersString) : [];
    console.log("Users Loaded",users)
  } catch (error) {
    console.error("Error loading users:", error);
  }
};

export const register = async (name, email, password) => {
  await loadUsers(); // Load users from AsyncStorage before registering

  try {
    const existingUser = users.find(user => user.email === email);

    if (existingUser) {
      throw new Error("Email already registered");
    }

    const newUser = { name, email, password };
    users.push(newUser);
    console.log("new user",newUser);

    await AsyncStorage.setItem("users", JSON.stringify(users));
    console.log("Users array",users);
    return newUser;
  } catch (error) {
    throw error;
  }
};

export const login = async (email, password) => {
  await loadUsers(); // Load users from AsyncStorage before logging in

  try {
    const user = users.find(user => user.email === email);

    if (!user || user.password !== password) {
      throw new Error("Invalid email or password");
    }
    console.log("User logged in", user)
    return user;
  } catch (error) {
    throw error;
  }
};