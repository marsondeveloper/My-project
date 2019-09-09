import React from 'react';
import s from "./users.module.css";
import userPhoto from '../../assets/images/personal-user-illustration-@2x.png'
import {NavLink} from "react-router-dom"
import Paginator from "../common/Paginator/Paginator";


let Users = ({currentPage, totalUsersCount, pageSize, onPageChanged, users, ...props}) => {

    return <div>

        <Paginator currentPage={currentPage} onPageChanged={onPageChanged}
                    totalUsersCount={totalUsersCount} pageSize={pageSize} />

        {
            users.map(u => <div key={u.id}>
                  <span>
                      <div className={s.userPhoto}>
                          <NavLink to={'/profile/' + u.id}>
                          <img src={u.photos.small != null ? u.photos.small : userPhoto}/>
                          </NavLink>
                      </div>
                      <div>
                          {u.followed
                              ? <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                                  props.unfollow(u.id);
                              }}>Unfollow</button>
                              : <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                                  props.follow(u.id);
                              }}>Follow</button>}
                      </div>
                  </span>
                <span>
                     <span>
                         <div>{u.name}</div>
                         <div>{u.status}</div>
                     </span>
                      <span>
                          <div>{"u.location.country"}</div>
                          <div>{"u.location.city"}</div>
                      </span>
                  </span>
            </div>)
        }
    </div>
};

export default Users;