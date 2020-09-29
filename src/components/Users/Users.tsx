import React from "react";
import s from "./UsersContainer.module.css";
import defAva from "../../assets/images/defAva.png";
import {UserType} from "../../redux/users-reducer";
import axios from "axios";

export type UsersPropsType = {
    users: Array<UserType>
    pageSize: number
    totalUsersCount: number
    currentPage: any
    follow: (userID: string) => void
    unfollow: (userID: string) => void
    setUsers: (users: Array<UserType>) => void
    setCurrentPage: (currantPage: number) => void
    setTotalUsersCount: (totalCount: number) => void
    toggleIsFetching: (isFetching: boolean) => void
    isFetching: boolean

}

export function Users(props: UsersPropsType) {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    const onPageChanged = (pageNumber: number) => {
        props.setCurrentPage(pageNumber)
        props.toggleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${props.pageSize}`).then(response => {
            props.toggleIsFetching(false)
            props.setUsers(response.data.items)
        })
    }


    return(
        <div>
            //Пагинация
            {pages.map( p => {
                return <span className={ props.currentPage === p ? s.selectedPage + ' ' + s.normalPage : s.normalPage }
                             onClick={ () => { onPageChanged(p) }}>{p}</span>
            })}

            {
                props.users.map(u => <div key={u.id}>
                    <span>
                        <div className={s.photos}>
                            <img src={u.photos.small !== null ? u.photos.small : defAva} alt={'avatar'}/>
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