var vm = new Vue({
  el: '#cars',
  data: {
    cars: [],
    info: '',
    searchname: '',
    apiUrl: 'http://localhost:3000/api/cars'
  },
  
  watch: {
    // whenever search filed changes, this function will run
    searchname: function (newInput, oldInput) {
      this.info = 'typing...';
      this.getCars();
    }
  },
  created: function () {
    this.getCars();
  },
  methods: {
    getCars: function () {
      this.info = 'Loading...'
      var vm = this
      axios.get(vm.apiUrl+'?name='+this.searchname)
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