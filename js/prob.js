let vm = new Vue({
  el: '#app',
  data() {
    return {
      value: null,
      year: null,
      ctf: null,
      prob: null,
      url: null,
      description: '(empty)',
      files: '',
      solution: '',
      reference: '',
      flag: ''
    }
  },
  mounted() {
    this.value = window.location.hash.substr(1).split('_')
    this.year = this.value[0]
    this.ctf = this.value[1]
    this.prob = this.value[2]
    this.url = `./problems/${this.year}/${this.ctf}/${this.prob}/`

    this.getDescription()
    this.getRef()
    this.getFile()
    this.getFlag()
  },
  methods: {
    getFile() {
      fetch(`${this.url}files.txt`)
        .then((response) => {
          if (response.status === 200) {
            return response.text()
          }
          else if (response.status === 404) {
            this.files = ''
          }
        })
        .then((data) => {
          if (data === '') {
            this.files = ''
          }else {
            this.files = data.split('\n')
          }
        })
        .catch((error) => {
          console.error('request failed', error)
        })
    },
    getDescription() {
      fetch(`${this.url}description.txt`)
        .then((response) => {
          if (response.status === 200) {
            return response.text()
          }
          else if (response.status === 404) {
            this.description = 'see the file'
          }
        })
        .then((text) => {
          if (text !== '') {
            this.description = text
          }else {
            this.description = '(empty)'
          }
        })
        .catch((error) => {
          console.error('request failed', error)
        })
    },
    getRef() {
      fetch(`${this.url}reference.txt`)
        .then((response) => {
          if (response.status === 200) {
            return response.text()
          }
          else if (response.status === 404) {
            this.reference = ''
          }
        })
        .then((text) => {
          if (text !== '') {
            this.reference = text
          }else {
            this.reference = ''
          }
        })
        .catch((error) => {
          console.error('request failed', error)
        })
    },
    getFlag() {
      fetch(`${this.url}flag.txt`)
        .then((response) => {
          if (response.status === 200) {
            return response.text()
          }
          else if (response.status === 404) {
            this.flag = ''
          }
        })
        .then((text) => {
          if (text !== '') {
            this.flag = text
          }else {
            this.flag = ''
          }
        })
        .catch((error) => {
          console.error('request failed', error)
        })
    }
  }
})
