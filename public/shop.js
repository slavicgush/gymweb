document.addEventListener('DOMContentLoaded', () =>{
  let shoppingCart = [];
  function addToCart(itemName, itemPrice, itemImageSrc,itemElement) {
      shoppingCart.push({ name: itemName, price: itemPrice, imageSrc: itemImageSrc });
      updateCartUI();
      itemElement.classList.add('added-to-cart');
      //save to localstorage
      localStorage.setItem('shoppingCart', JSON.stringify(shoppingCart));
  }

  function updateCartUI() {
      let listCard = document.querySelector('.listCard');
      listCard.innerHTML = '';
      let total = 0;

      for (let i = 0; i < shoppingCart.length; i++) {
          let item = shoppingCart[i];
          let listItem = document.createElement('li');
          listItem.innerHTML = item.name + ' - Ksh' + item.price + '<button class="remove">Remove</button>';
          listCard.appendChild(listItem);
          total += Math.floor(item.price);
      }

      document.querySelector('.total').textContent = 'Total: Ksh' + total;
      document.querySelector('.quantity').textContent = shoppingCart.length;
  }

  document.querySelectorAll('.price').forEach(function(priceElement) {
  priceElement.addEventListener('click', function() {
    if (!this.classList.contains('added-to-cart')) {
      this.style.backgroundColor = 'aliceblue';
      let itemName = this.parentElement.querySelector('h2').textContent;
      let itemPrice = parseFloat(this.textContent.replace('Ksh', ''));
      let itemImageSrc = this.parentElement.querySelector('p.photo img').getAttribute('src');
      addToCart(itemName, itemPrice, itemImageSrc, this);
    }
  });
});


  document.addEventListener('click', function(event) {
      if (event.target.classList.contains('remove')) {
          let index = event.target.parentElement.index;
          shoppingCart.splice(index, 1);
          updateCartUI();
      }
  });

  document.querySelector('.shopping').addEventListener('click', function() {
      document.querySelector('.body').classList.add('active');
  });

  document.querySelector('.placeorder').addEventListener('click', function() {
    if(shoppingCart.length ===0) return;
      let thankYouModal = document.getElementById('thankYouModal');
      thankYouModal.style.display = 'block';
});
document.querySelector('.close').addEventListener('click', () => {
  let thankYouModal = document.getElementById('thankYouModal');
  thankYouModal.style.display = 'none';
  document.querySelector('.total').textContent = '0';
  document.querySelector('.quantity').textContent = '0';
  let listCard = document.querySelector('.listCard');
      listCard.innerHTML = '';
});

  document.querySelector('.closeShopping').addEventListener('click', function() {
      document.querySelector('.body').classList.remove('active');
  });
});
