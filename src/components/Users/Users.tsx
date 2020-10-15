import React from "react";
import s from "./UsersContainer.module.css";
import defAva from "../../assets/images/defAva.png";
import {UserType} from "../../redux/users-reducer";
import axios from "axios";
import {NavLink} from "react-router-dom";
import {usersAPI} from "../../api/api";

export type UsersPropsType = {
    users: Array<UserType>
    pageSize: number
    totalUsersCount: number
    currentPage: any
    follow: (userID: number) => void
    unfollow: (userID: number) => void
    //setUsers: (users: Array<UserType>) => void
    setCurrentPage: (currantPage: number) => void
    //setTotalUsersCount: (totalCount: number) => void
    //toggleIsFetching: (isFetching: boolean) => void
    //toggleFollowingProgress: (isFetching: boolean, userId: number) => void
    isFetching: boolean
    followingInProgress: Array<number>
    onPageChanged: (pageNumber: number) => void
}

export function Users(props: UsersPropsType) {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    // const onPageChanged = (pageNumber: number) => {
    //     props.setCurrentPage(pageNumber)
    //     props.toggleIsFetching(true)
    //     usersAPI.getUsers(pageNumber, props.pageSize)
    //         .then(data => {
    //         props.toggleIsFetching(false)
    //         props.setUsers(data.items)
    //     })
    // }


    return (
        <div>
            {/*Пагинация*/}
            {pages.map(p => {
                return <span className={props.currentPage === p ? s.selectedPage + ' ' + s.normalPage : s.normalPage}
                             onClick={() => {
                                 props.onPageChanged(p)
                             }}>{p}
                </span>
            })}

            {
                props.users.map(u => <div key={u.id}>
                    <span>
                        <div className={s.photos}>
                            <NavLink to={'/content/' + u.id}>
                                <img src={u.photos.small !== null ? u.photos.small : defAva} alt={'avatar'}/>
                            </NavLink>
                        </div>
                        <div>
                            {
                                u.followed
                                    ? <button disabled={props.followingInProgress
                                        .some(id => id === u.id)} onClick={() => {props.unfollow(u.id)}}>Unfollow</button>

                                    : <button disabled={props.followingInProgress.some(id => id === u.id)}
                                              onClick={() => {props.follow(u.id)}}>Follow</button>
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