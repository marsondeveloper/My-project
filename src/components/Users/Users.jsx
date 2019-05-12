import React from 'react';
import s from './users.module.css';


const Users = (props) => {
    if(props.users.length === 0){
        props.setUsers( [
            {id: 1, photoUrl: 'https://avatars.mds.yandex.net/get-pdb/1352825/a5f8fbd7-515e-49f8-81d6-be55a2daac92/s600', followed: false, fullName: 'Dmitry', status: 'I am a boss', location: {country: 'Belarus', city: 'Minsk'}},
            {id: 2, photoUrl: 'https://avatars.mds.yandex.net/get-pdb/1352825/a5f8fbd7-515e-49f8-81d6-be55a2daac92/s600', followed: true,  fullName: 'Marlen', status: 'I am developer', location: {country: 'Russia', city: 'Alushta'}},
            {id: 3, photoUrl: 'https://avatars.mds.yandex.net/get-pdb/1352825/a5f8fbd7-515e-49f8-81d6-be55a2daac92/s600', followed: false, fullName: 'Aleksandr', status: 'Nirvana forever!', location: {country: 'USA', city: 'Los Angeles'}},

        ])
    }
    return <div>
            {
                props.users.map( u => <div key={u.id}>
                  <span>
                      <div className={s.userPhoto}>
                          <img src={u.photoUrl} />
                      </div>
                      <div>
                          { u.followed ? <button onClick={ () => {props.unfollow(u.id)}}>Unfollow</button> :
                              <button onClick={ () => {props.follow(u.id)}}>Follow</button>}
                      </div>
                  </span>
                  <span>
                     <span>
                         <div>{u.fullName}</div><div>{u.status}</div>
                     </span>
                      <span>
                          <div>{u.location.country}</div>
                          <div>{u.location.city}</div>
                      </span>
                  </span>
                </div>)
            }
        </div>

};



export default Users;
