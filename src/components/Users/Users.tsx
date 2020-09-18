import React from "react";
import {v1} from "uuid";
import {UsersListPageType} from "../../redux/users-reducer";
import s from './Users.module.css'
import axios from 'axios'
import defAva from '../../assets/images/defAva.png'

export type UsersPropsType = {
    users: Array<UsersListPageType>
    follow: (userID: string) => void
    unfollow: (userID: string) => void
    setUsers: (users: any) => void
}

export const Users = (props: UsersPropsType) => {

    const showUsers = () => {
        if (props.users.length === 0) {
            axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
                props.setUsers(response.data.items)
            })
        }
    }

    return (
        <div>
            <button onClick={showUsers}>Show users</button>
            {
                props.users.map((u: any) => <div key={u.id}>
                    <span>
                        <div className={s.photos}>
                            <img src={u.photos.small !== null ? u.photos.small : defAva } alt={'avatar'}/>
                        </div>
                        <div>
                            {
                                u.followed
                                    ? <button onClick={() => {
                                        props.unfollow(u.id)
                                    }}>Unfollow</button>
                                    : <button onClick={() => {
                                        props.follow(u.id)
                                    }}>Follow</button>
                            }
                        </div>
                    </span>
                    <span>
                        <span>
                            <div>{u.name}</div>
                            <div>{u.status}</div>
                        </span>
                        <span>
                            <div>{'u.location.country'}</div>
                            <div>{'u.location.city'}</div>
                        </span>
                    </span>
                </div>)
            }
        </div>
    )

}