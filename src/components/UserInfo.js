
export class UserInfo {
  constructor(userName, userJob) {
    this._userName = userName;
    this._userJob = userJob;
  }

  getUserInfo() {
    const userInfo = {
      username: this._userName.textContent,
      job: this._userJob.textContent
    };
    return userInfo;
  }

  setUserInfo(inputs) {
    this._userName.textContent = inputs.username;
    this._userJob.textContent = inputs.job;
  }
}
