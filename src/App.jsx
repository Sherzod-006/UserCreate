import { useState } from "react"

import Header from "./components/Header"
import Footer from "./components/Footer"
import UserCard from "./components/UserCard"

const App = () => {
  const [users, setUsers] = useState([
    {
      id: 1,
      firstName: "John",
      lastName: "Doe",
      email: "john@example.com",
      image: "https://neweralive.na/wp-content/uploads/2024/06/lloyd-sikeba.jpg",
      age: 19,
      gender: "male",
      location: {
        country: "USA",
        city: "New York",
        street: "123 Main St",
        homeNum: "A1"
      },
      occupation: "Software Engineer"
    },
    {
      id: 2,
      firstName: "Jane",
      lastName: "Smith",
      email: "jane@example.com",
      image: "https://via.placeholder.com/150",
      age: 25,
      gender: "female",
      location: {
        country: "USA",
        city: "Los Angeles",
        street: "456 Elm St",
        homeNum: "B2"
      },
      occupation: "Product Manager"
    },
    {
      id: 3,
      firstName: "Bob",
      lastName: "Johnson",
      email: "bob@example.com",
      image: "https://via.placeholder.com/150",
      age: 30,
      gender: "male",
      location: {
        country: "USA",
        city: "Chicago",
        street: "789 Oak St",
        homeNum: "C3"
      },
      occupation: "UX Designer"
    }
  ]);
  return (
    <main className="flex flex-col min-h-screen">
      <Header />
      {users.length === 0 && <h1 className="text-5xl text-center mt-10 font-bold text-gray-300">No Users Found</h1>}
      {users.length > 0 && <UserCard users={users} />}
      <Footer />
    </main>
  );
}

export default App;
