class Github {
  constructor() {
    this.client_id = '250343897d88ab95fde7';
    this.client_secret = 'c563a27310464461da1200558d6592e442b55097';
  }

  async getUser(user) {
    const profileResponse = await fetch(
      `https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`
    );
    const profileData = await profileResponse.json();
    return {
      profile: profileData
    };
  }
}
