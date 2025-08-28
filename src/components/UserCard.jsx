const UserCard = ({ users }) => {
  return (
    <section>
      {users.map((user) => {
        return (
          <div className="bg-amber-300 w-1/6 h-70 m-5 p-5 rounded-lg shadow-lg flex flex-col space-y-1" key={user.id}>
            <img src={user.image} alt={user.firstName} className="h-32 object-contain rounded-full mx-auto" />
            <h1 className="font-bold text-base text-start">{user.firstName} {user.lastName}, {user.age} years old</h1>
            <p className="text-sm font-bold">Location: <br /> {user.location.city}, {user.location.country}</p>
            <p className="text-sm font-bold">Occupation: <br /> {user.occupation}</p>
          </div>
        );
      })}
    </section>
  )
}

export default UserCard;
