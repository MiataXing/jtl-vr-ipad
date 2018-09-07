import { IUserData } from './IUserData';

export interface IUserData{
    ID: string,
    DisplayName: string,
    NickName: string,
    AvatarUrl: string,
    JobName: string,
    StudiedCourses: number,
    Following: number,
    Followers: number,
}