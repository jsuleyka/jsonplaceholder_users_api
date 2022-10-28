import '../stylesheets/User.css';
import { useContext } from "react";
import { UserContext } from '../contexts/UserProvider';

const Users = () => {
  const {users} = useContext(UserContext);
  const filterUsers = users.filter(user => user.completed);

  return (
    <div className="user-container">
      <h3>TOTAL DE USUARIOS ENCONTRADOS: {users.length}</h3>
      <h3>**Mostrando 15 primeros usuarios**</h3>
      {
        filterUsers.map((t) => {
          return (
            <p key={t.id}> <br />
              userId =&gt; {t.userId} <br />
              id =&gt; {t.id} <br />
              title =&gt; "{t.title}" <br />
              completed =&gt; {t.completed.toString()} 
            </p>
          )
        }).slice(0, 15)
      }
    </div>
  );
}

export default Users

