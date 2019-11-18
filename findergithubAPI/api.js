class Github {
  constructor() {
    this.client_id = '250343897d88ab95fde7';
    this.client_secret = '3f6e675549248664d45c3d35a4f98350d9213bd7';
  }

  async getUser(user) {
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_id}`);
    const profileData = await profileResponse.json();
    return {
      profile: profileData
    };
  }
}
