let serverURL;
let serverPort;

  $.ajax({
    url: `http://192.168.33.10:3000/allProducts`,
    type: 'GET',
    dataType: 'json',
    success: function (products) {
    //   products.map(function(products) {
    //     $('#listedItems').append(`
    //       <li class="list-group-item">${products.name}
    //         <div class="positionBtn">
    //           <button class="btn btn-info" type="button">Edit</button>
    //           <button class="btn btn-danger" type="button">Remove</button>
    //         </div>
    //       </li>
    //     `);
    //   })
    },
    error: function (error) {
      console.log(error);
    }
  });

$('#add').click(function() {
  event.preventDefault();
  let productName = $('#productName').val();
  let productPrice = $('#productPrice').val();
  if (productName && productPrice) {
    console.log(`Item: ${productName}, Price: $${productPrice}`);
    // $.ajax({
    //   url: 'http://192.168.33.10:3000/product',
    //   type: 'POST',
    //   data: { // obeject, specifies data that you are sending
    //     name: productName,
    //     price: productPrice
    //   },
    //   success: function(result) {
    //     console.log(result);
    //   },
    //   error: function (error) {
    //     console.log(error);
    //     console.log('oh no, something went wrong :(');
    //   }
    // })
    $('#listItems').append(`
      <li class="list-group-item">${productName}
      //         <div class="positionBtn">
      //           <button class="btn btn-info" type="button">Edit</button>
      //           <button class="btn btn-danger" type="button">Remove</button>
      //         </div>
      //       </li>
      `)
    } else {
    console.log('please enter a value');
  }
  $('#productName').val('');
  $('#productPrice').val('');
})

$('#contactSubmit').click(function() {
  event.preventDefault();
  let fName = $('#fName').val();
  let lName = $('#lName').val();
  let email = $('#email').val();

  if (fName && lName && email) {
    $.ajax({
      url: 'http://192.168.33.10:3000/contact',
      type: 'POST',
      data: {
        fName: fName,
        lName: lName,
        email: email
      },
      success: function(contactDetails) {
        console.log(contactDetails);
      },
      error: function(error) {
        console.log(error);
        console.log('Something is wrong with contact form');
      }
    })
  }
});

$('#sendFeedback').click(function() {
  event.preventDefault();
  let shopName = $('#shopName').val();
  let suburb = $('#suburb').val();
  let postalCode = $('#postalCode').val();
  let message = $('#message').val();

  if (shopName && suburb && postalCode && message) {
    $.ajax({
      url: 'http://192.168.33.10:3000/contact',
      type: 'POST',
      data: {
        shopName: shopName,
        suburb: suburb,
        postalCode: postalCode,
        message: message
      },
      success: function(feedback) {
        console.log(feedback);
      },
      error: function(error) {
        console.log(error);
        console.log('Something is wrong with feedback form');
      }
    })
  }
});
