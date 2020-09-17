import React from "react";
import {v1} from "uuid";
import {UsersListPageType} from "../../redux/users-reducer";
import s from './Users.module.css'

export type UsersPropsType = {
    users: Array<UsersListPageType>
    follow: (userID: string) => void
    unfollow: (userID: string) => void
    setUsers: (users: any) => void
}

export const Users = (props: UsersPropsType) => {

    if (props.users.length === 0) {
        props.setUsers([
            {
                id: v1(),
                fotoUrl: '',
                followed: false,
                fullName: 'Andrei',
                status: 'I am a boss',
                location: {city: 'Grodno', country: 'Belarus'}
            },
            {
                id: v1(),
                fotoUrl: '',
                followed: true,
                fullName: 'Lera',
                status: 'I am maid',
                location: {city: 'Grodno', country: 'Belarus'}
            },
            {
                id: v1(),
                fotoUrl: '',
                followed: true,
                fullName: 'Musia',
                status: 'I am a cat',
                location: {city: 'Boston', country: 'USA'}
            },
            {
                id: v1(),
                fotoUrl: '',
                followed: false,
                fullName: 'Vasia',
                status: 'Just a guy',
                location: {city: 'Berlin', country: 'Germany'}
            },
            {
                id: v1(),
                fotoUrl: '',
                followed: false,
                fullName: 'Kolia',
                status: 'No info',
                location: {city: 'Belastok', country: 'Poland'}
            },
        ])
    }

    return (
        <div>
            {
                props.users.map(u => <div key={u.id}>
                    <span>
                        <div className={s.userFoto}>
                            <img src={u.fotoUrl} alt={'avatar'}/>
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
    )

}