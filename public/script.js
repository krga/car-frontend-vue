var vm = new Vue({
  el: '#cars',
  data: {
    cars: [],
    info: '',
    apiUrl: 'http://localhost:3000/api/cars'
  },
  created: function () {
    this.getCars();
  },
  methods: {
    getCars: function () {
      this.info = 'Loading...'
      var vm = this
      axios.get(vm.apiUrl)
        .then(function (response) {
          vm.cars = response.data.data;
          vm.info = 'Loading finished!'
        })
        .catch(function (error) {
          this.info = 'Error! Could not reach the API. ' + error
        })
    }
  }
  })