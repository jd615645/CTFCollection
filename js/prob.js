let vm = new Vue({
  el: '#app',
  data() {
    return {
      value: null,
      year: null,
      ctf: null,
      prob: null,
      url: null
    }
  },
  mounted() {
    this.value = window.location.hash.substr(1).split('_')
    this.year = this.value[0]
    this.ctf = this.value[1]
    this.prob = this.value[2]
    this.url = `/problems/${this.year}/${this.ctf}/${this.prob}/`

    this.getDescription(this.url, 'description')
    this.getRef(this.url, 'reference')
    this.getFile(this.url, 'files')
  },
  methods: {
    getDescription(url, type) {
      $.ajax({
        url: url + type + '.txt',
        dataType: 'text',
        type: 'GET',
        async: true,
        statusCode: {
          404: function (response) {
            $('#' + type + '-container').remove()
            console.error(404)
          },
          200: function (response) {
            $('#' + type).text(response)
          }
        },
        error: function (jqXHR, status, errorThrown) {
          console.error('error')
        }
      })
    },
    getFile(url, type) {
      $.ajax({
        url: url + type + '.txt',
        dataType: 'text',
        type: 'GET',
        async: true,
        statusCode: {
          404: function (response) {
            $('#' + type + '-container').remove()
            console.error(type + ' 404')
          },
          200: function (response) {
            if (response == '') {
              $('#' + type + '-container').remove()
            }
            for (var file of response.split('\n')) {
              if (file == '') {
                continue
              }
              $('#' + type).append(
                $('<a>').attr('href', url + 'files/' + file).text(file)
              )
            }
          }
        },
        error: function (jqXHR, status, errorThrown) {
          console.error('error')
        }
      })
    },
    getRef(url, type) {
      $.ajax({
        url: url + type + '.txt',
        dataType: 'text',
        type: 'GET',
        async: true,
        statusCode: {
          404: function (response) {
            $('#' + type + '-container').remove()
            console.error(type + ' 404')
          },
          200: function (response) {
            for (var ref of response.split('\n')) {
              if (ref == '') {
                continue
              }
              $('#' + type).append(
                $('<a>').attr('target', '_blank').attr('href', ref).text(ref)
              )
            }
          }
        },
        error: function (jqXHR, status, errorThrown) {
          console.error('error')
        }
      })
    }
  }
})
