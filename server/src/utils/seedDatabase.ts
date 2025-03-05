import "reflect-metadata";
import bcrypt from "bcryptjs";
import { AppDataSource } from "../data-source";
import { User } from "../entity/User";

const seedDatabase = async () => {
  try {
    await AppDataSource.initialize();
    console.log("Connected to database. Starting seed process...");

    // delete existing users
    await User.delete({});
    console.log("Cleared existing users");

    const users = [
      {
        name: "Admin User",
        email: "admin@example.com",
        password: "Admin123!",
        role: "admin",
        status: "active",
      },
      {
        name: "Regular User",
        email: "user@example.com",
        password: "User123!",
        role: "user",
        status: "active",
      },
      {
        name: "Inactive User",
        email: "inactive@example.com",
        password: "Inactive123!",
        role: "user",
        status: "inactive",
      },
    ];

    for (const userData of users) {
      const user = new User();
      user.name = userData.name;
      user.email = userData.email;
      const salt = await bcrypt.genSalt(10);
      user.password = await bcrypt.hash(userData.password, salt);
      user.role = userData.role;
      user.status = userData.status;
      user.createdAt = new Date();

      await user.save();
      console.log(`Created user: ${userData.name} (${userData.email})`);
    }

    console.log("Database seeding completed");
    process.exit(0);
  } catch (error) {
    console.error("Error seeding database:", error);
    process.exit(1);
  }
};

seedDatabase();
