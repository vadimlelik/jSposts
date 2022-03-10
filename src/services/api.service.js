class ApiService {
  constructor(baseUrl) {
    this.url = baseUrl
  }

  async creatPosts(posts) {

    try {
      const request = new Request(this.url + '/posts.json', {
        method: 'post',
        body: JSON.stringify(posts)
      })

      const response = await fetch(request)
      return await response.json()

    } catch (error) {
      console.warn(error);
    }
  }

}

export const apiService = new ApiService('https://posts-86845-default-rtdb.firebaseio.com')