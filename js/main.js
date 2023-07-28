// let myModal = document.getElementById('myModal')
// let myInput = document.getElementById('myInput')

// myModal.addEventListener('shown.bs.modal', function () {
//   myInput.focus()
// });

// const form = document.querySelector('#contato');
//     form.addEventListener('submit', (event) =>{
//       event.preventDefault();

//       console.log('teste')

//       const nome = document.getElementById('name').value;
//       const email = document.getElementById('email').value;
//       const subject = document.getElementById('subject').value;
//       const message = document.getElementById('message').value;

//       const data = {
//         "Nome": nome,
//         "Email": email,
//         "Subject": subject,
//         "Message": message
//       };
//       fetch('https://eaiconecta.onrender.com/email/contato', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         body:JSON.stringify(data)
//       })
//       .then(response => {
//         if (response.ok){
//           form.reset();
//           alert('Mensagem enviada com sucesso');
//         } else {
//           throw new Error('Erro ao enviar mensagem');
//           alert('Ocorreu um erro ao enviar a mensagem');
//         }
//       })
//       .catch(error => console.error(error));
//     })






// const form = document.querySelector('#contato');
// const submitButton = document.getElementById('submitBtn'); // Adicionei um ID ao botão

// form.addEventListener('submit', (event) => {
//   event.preventDefault();

//   // Desabilitar o botão durante o envio
//   submitButton.disabled = true;

//   const loadingMessage = document.querySelector('.loading'); // Declaração da variável loadingMessage
//   loadingMessage.style.display = 'block'; // Exibir a mensagem de carregamento

//   const nome = document.getElementById('name').value;
//   const email = document.getElementById('email').value;
//   const subject = document.getElementById('subject').value;
//   const message = document.getElementById('message').value;

//   const data = {
//     "Nome": nome,
//     "Email": email,
//     "Subject": subject,
//     "Message": message
//   };

//   // ... Código de envio do formulário (mantido igual) ...

//   fetch('https://eaiconecta.onrender.com/email/contato', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify(data)
//   })
//   .then(response => {
//     loadingMessage.style.display = 'none';
//     submitButton.disabled = false;

//     if (response.ok) {
//       form.reset();
//       const sentMessage = document.querySelector('.sent-message');
//       sentMessage.style.display = 'block';

//       // Adicionar um timer para esconder a mensagem de sucesso após 5 segundos
//       setTimeout(() => {
//         sentMessage.style.display = 'none';
//       }, 5000); // 5000 milissegundos = 5 segundos
//     } else {
//       throw new Error('Erro ao enviar mensagem');
//     }
//   })
//   .catch(error => {
//     loadingMessage.style.display = 'none';
//     submitButton.disabled = false;
//     const errorMessage = document.querySelector('.error-message');
//     errorMessage.style.display = 'block';
//     const sentMessage = document.querySelector('.sent-message');
//     sentMessage.style.display = 'none';
//     console.error(error);
//   });
// });

const form = document.querySelector('#contato');
const submitButton = document.getElementById('submitBtn');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  submitButton.disabled = true; // Desabilitar o botão durante o envio

  const loadingMessage = document.querySelector('.loading');
  loadingMessage.style.display = 'block';

  const nome = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const subject = document.getElementById('subject').value;
  const message = document.getElementById('message').value;

  const data = {
    "Nome": nome,
    "Email": email,
    "Subject": subject,
    "Message": message
  };

  // ... Código de envio do formulário (mantido igual) ...

  fetch('https://eaiconecta.onrender.com/email/contato', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then(response => {
      loadingMessage.style.display = 'none';
      submitButton.disabled = false; // Habilitar o botão após o envio

      if (response.ok) {
        form.reset();
        const sentMessage = document.querySelector('.sent-message');
        sentMessage.style.display = 'block';

        // Adicionar um timer para esconder a mensagem de sucesso após 3 segundos
        setTimeout(() => {
          sentMessage.style.display = 'none';
        }, 3000); // 1000 milissegundos = 1 segundos
      } else {
        throw new Error('Erro ao enviar mensagem');
      }
    })
    .catch(error => {
      loadingMessage.style.display = 'none';
      submitButton.disabled = false; // Habilitar o botão em caso de erro
      const errorMessage = document.querySelector('.error-message');
      errorMessage.style.display = 'block';
      const sentMessage = document.querySelector('.sent-message');
      sentMessage.style.display = 'none';
      console.error(error);
    });
});


(function() {
  "use strict";

  /**
   * Easy selector helper function
   */
  const select = (el, all = false) => {
    el = el.trim()
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {
      return document.querySelector(el)
    }
  }

  /**
   * Easy event listener function
   */
  const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all)
    if (selectEl) {
      if (all) {
        selectEl.forEach(e => e.addEventListener(type, listener))
      } else {
        selectEl.addEventListener(type, listener)
      }
    }
  }

  /**
   * Easy on scroll event listener 
   */
  const onscroll = (el, listener) => {
    el.addEventListener('scroll', listener)
  }

  /**
   * Navbar links active state on scroll
   */
  let navbarlinks = select('#navbar .scrollto', true)
  const navbarlinksActive = () => {
    let position = window.scrollY + 200
    navbarlinks.forEach(navbarlink => {
      if (!navbarlink.hash) return
      let section = select(navbarlink.hash)
      if (!section) return
      if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
        navbarlink.classList.add('active')
      } else {
        navbarlink.classList.remove('active')
      }
    })
  }
  window.addEventListener('load', navbarlinksActive)
  onscroll(document, navbarlinksActive)

  /**
   * Scrolls to an element with header offset
   */
  const scrollto = (el) => {
    let header = select('#header')
    let offset = header.offsetHeight

    if (!header.classList.contains('header-scrolled')) {
      offset -= 20
    }

    let elementPos = select(el).offsetTop
    window.scrollTo({
      top: elementPos - offset,
      behavior: 'smooth'
    })
  }

  /**
   * Toggle .header-scrolled class to #header when page is scrolled
   */
  let selectHeader = select('#header')
  if (selectHeader) {
    const headerScrolled = () => {
      if (window.scrollY > 100) {
        selectHeader.classList.add('header-scrolled')
      } else {
        selectHeader.classList.remove('header-scrolled')
      }
    }
    window.addEventListener('load', headerScrolled)
    onscroll(document, headerScrolled)
  }

  /**
   * Back to top button
   */
  let backtotop = select('.back-to-top')
  if (backtotop) {
    const toggleBacktotop = () => {
      if (window.scrollY > 100) {
        backtotop.classList.add('active')
      } else {
        backtotop.classList.remove('active')
      }
    }
    window.addEventListener('load', toggleBacktotop)
    onscroll(document, toggleBacktotop)
  }
  /**
   * Scroll with ofset on page load with hash links in the url
   */
  window.addEventListener('load', () => {
    if (window.location.hash) {
      if (select(window.location.hash)) {
        scrollto(window.location.hash)
      }
    }
  });

})()

// Função para verificar a posição do scroll
function checkScrollPosition() {
  var windowHeight = window.innerHeight;
  var scrollY = window.scrollY || document.documentElement.scrollTop;
  var divOffsetTop = document.getElementById('whats').offsetTop;

  if (scrollY + windowHeight >= divOffsetTop + 450) {
    document.getElementById('whats').classList.add('active');
  } else if (scrollY + windowHeight < divOffsetTop + 420) {
    document.getElementById('whats').classList.remove('active');
  }

  document.getElementById('whats').addEventListener('mouseover', function() {
    this.classList.add('active');
  });
  
  document.getElementById('whats').addEventListener('mouseout', function() {
    this.classList.remove('active');
  });
}

// Função para adicionar o evento de scroll
function addScrollEvent() {
  window.addEventListener('scroll', checkScrollPosition);
}

// Adicionar a classe 'active' assim que a página carregar (se necessário)
window.addEventListener('DOMContentLoaded', function() {
  checkScrollPosition();
});

// Adicionar o evento de scroll quando a página carregar completamente
window.addEventListener('load', addScrollEvent);