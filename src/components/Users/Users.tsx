import React from "react";
import s from './Users.module.css'
import axios from 'axios'
import defAva from '../../assets/images/defAva.png'
import {UserType} from "../../redux/users-reducer";

export type UsersPropsType = {
    users: Array<UserType>
    follow: (userID: string) => void
    unfollow: (userID: string) => void
    setUsers: (users: Array<UserType>) => void
}

export class Users extends React.Component<UsersPropsType>{

    constructor(props: UsersPropsType) {
        super(props);
    }

    componentDidMount(){
        debugger
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
            this.props.setUsers(response.data.items)
        })
    }

    render(): React.ReactNode {
        return (
            <div>
                {
                    this.props.users.map(u  => <div key={u.id}>
                    <span>
                        <div className={s.photos}>
                            <img src={u.photos.small !== null ? u.photos.small : defAva } alt={'avatar'}/>
                        </div>
                        <div>
                            {
                                u.followed
                                    ? <button onClick={() => {
                                        this.props.unfollow(u.id)
                                    }}>Unfollow</button>
                                    : <button onClick={() => {
                                        this.props.follow(u.id)
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
}