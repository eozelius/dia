import axios from 'axios'

class Api {
  static fetchSources(){
    const url = 'https://newsapi.org/v2/sources?apiKey=59519f47f5724e60b178a63e3b6c649b'
    return axios.get(url)
      .then((res) => {
      	const sources = res.data.sources
      	return sources
      })
      .catch((error) => {
      	console.log(error)
      })

  }
}

export default Api