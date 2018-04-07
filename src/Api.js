import axios from 'axios'

export default class Api {
  static fetchSources(){
    const url = 'https://newsapi.org/v2/sources?apiKey=1b14114fcdff42a8b328c0a297d8a27f'
    return axios.get(url)
      .then((res) => {
        const sources = res.data.sources
      	return sources
      })
      .catch((error) => {
      	console.log(error)
        return []
      })
  }



  static fetchArticles(sources = ['abc-news']) {
    let url = 'https://newsapi.org/v2/top-headlines?sources='
    const apiKey = '&apiKey=59519f47f5724e60b178a63e3b6c649b'

    for(let i = 0; i < sources.length; i++){
      url += sources[i]

      if(sources[i + 1] !== undefined) {
        url += ','
      }
    }
    url += apiKey

    return axios.get(url)
      .then((res) => {
        const articles = res.data.articles
        return articles
      })
      .catch((error) => {
        console.log(error)
        return []
      })
  }
}