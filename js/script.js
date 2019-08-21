$(document).ready(function() {
  $.ajax({
    url: 'http://192.168.33.10:3000/allProducts',
    type: 'GET',
    dataType: 'json',
    success: function (products) {
      for (var i = 0; i < products.length; i++) {
        $('#listedItems').append(`
          <li class="list-group-item">${products[i].name}
          <div class="positionBtn">
            <button class="btn btn-info" type="button">Edit</button><button class="btn btn-danger" type="button">Remove</button>
          </div>
        </li>
        `);
      }
    },
    error: function (error) {
      console.log(error);
    }
  });
});
