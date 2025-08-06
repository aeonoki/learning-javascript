function handleCostKeyDown(event) {
        if (event.key === 'Enter') {
          calculateTotal();
        }
      }

      function calculateTotal() {
        const inputElement = document.querySelector('.js-cost-input');

        let cost = Number(inputElement.value);

        if (cost < 0) {
          const errorMessage = document.querySelector('.error-message');
          errorMessage.innerHTML = 'Error: cost cannot be less than $0';
          return
        }

        if (cost < 40) {
          cost = cost + 10;
        }
        

        document.querySelector('.js-total-cost').innerHTML = `$${cost}`;
      }

      function subscribe() {
        const buttonElement = document.querySelector('.js-subscribe-button');

        if (buttonElement.innerText === 'Subscribe') {
          buttonElement.innerText = 'Subscribed';
          buttonElement.classList.add('is-subscribed');
        } else {
          buttonElement.innerText = 'Subscribe';
          buttonElement.classList.remove('is-subscribed');
        }
      }