import { IUserData } from '../interfaces/IUserData';

export class Userdata implements IUserData {
    constructor(
        public ID: string,
        public DisplayName: string,
        public NickName: string,
        public AvatarUrl: string,
        public JobName: string,
        public StudiedCourses: number,
        public Following: number,
        public Followers: number) {}
}