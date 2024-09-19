 $(document).ready(function() {
    var shoppingCart = [];


function addToCart(itemName, itemPrice, itemImageSrc) {
  shoppingCart.push({ name: itemName, price: itemPrice, imageSrc: itemImageSrc });
  updateCartUI();
}

    function updateCartUI() {
      $('.listCard').empty();
      var total = 0;

      for (var i = 0; i < shoppingCart.length; i++) {
        var item = shoppingCart[i];
        var listItem = $('<li>' + item.name + ' - $' + item.price + '<button class="remove">Remove</button></li>');
        $('.listCard').append(listItem);
        total += Math.floor(item.price);
      }

      $('.total').text('Total: $' + total);

      $('.quantity').text(shoppingCart.length);
    }

$('.price').on('click', function() {
  $(this).css('backgroundColor','aliceblue');
  let itemName = $(this).siblings('h2').text();
  var itemPrice = parseFloat($(this).text().replace('$', '')); 
  var itemImageSrc = $(this).siblings('p.photo').find('img').attr('src');
  addToCart(itemName, itemPrice, itemImageSrc);
  return;
});


    $(document).on('click', '.remove', function() {
      var index = $(this).parent().index();
      shoppingCart.splice(index, 1);
      updateCartUI();
    });

    $('.shopping').click(function() {
      $('.body').addClass('active');
    });

    $('.placeorder').click(function() {
      prompt('Enter Mpesa mobile number');
    });

    $('.closeShopping').click(function() {
      $('.body').removeClass('active');
    });
  });


    
