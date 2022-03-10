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

      return makeRequest(request)

    } catch (error) {
      console.warn(error);
    }
  }

  async fetchPosts() {
    try {
      const request = new Request(`${this.url}/posts.json`, {
        method: 'get'
      })
      return makeRequest(request)

    } catch (error) {
      console.error(error)
    }
  }

}

async function makeRequest(request) {
  const response = await fetch(request)
  return response.json()
}

export const apiService = new ApiService('https://posts-86845-default-rtdb.firebaseio.com')