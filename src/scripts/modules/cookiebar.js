export class CookieCheck {
  constructor() {
      const cookieName = 'cookiesAccepted';
      const cookieBar = document.querySelector('.cookiebar');

      if (cookieBar && this.getCookie(cookieName) != 'allow') {
          const cookieBarAccept = cookieBar.querySelector('.cookie_accept');
          const cookieBarClose = cookieBar.querySelector('.cookie_close');

          this.setCookies(cookieName, 'deny');
          this.show(cookieBar);

          cookieBarAccept.addEventListener('click', (e) => {
              e.preventDefault();
              this.setCookies(cookieName, 'allow');
              this.remove(cookieBar);
          })

          cookieBarClose.addEventListener('click', (e) => {
              e.preventDefault();
              this.remove(cookieBar);
          })
      } else if (cookieBar && this.getCookie(cookieName) == 'allow') {
          this.remove(cookieBar);
      }
  }

  remove(elm) {
      elm.parentNode.removeChild(elm);
  }

  show(elm) {
      elm.classList.add('visible');
  }

  hasCookie(cookieName) {
      return (document.cookie.indexOf(`${cookieName}=`) != -1) ? true : false;
  }

  setCookies(cookieName, value) {
      var d = new Date;
      d.setTime(d.getTime() + 24 * 60 * 60 * 1000 * 365);
      document.cookie = `${cookieName}=${value};path=/;expires=${d.toGMTString()}`;
  }

  getCookie(cookieName) {
      var value = '; ' + document.cookie;
      var parts = value.split('; ' + cookieName + '=');
      if (parts.length == 2) return parts.pop().split(';').shift();
  };
}