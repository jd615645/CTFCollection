let vm = new Vue({
  el: '#app',
  data() {
    return {
      lists: {}
    }
  },
  mounted() {
    fetch('./index.json')
      .then((response) => {
        return response.text()
      })
      .then((data) => {
        this.lists = JSON.parse(data)
      })
  }
})