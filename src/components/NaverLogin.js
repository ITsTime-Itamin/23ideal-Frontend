import { useEffect,useLocation } from "react";

/*const NaverLogin=()=>{
  const { naver } = window;
  const location = useLocation();
  const NAVER_CALLBACK_URL = 'http://localhost:3000/Home';
  const NAVER_CLIENT_ID = 'jJf55Mrx98Mt2FRkK9ug';

  const initializeNaverLogin = () => {
      const naverLogin = new naver.LoginWithNaverId({
          clientId: NAVER_CLIENT_ID,
          callbackUrl: NAVER_CALLBACK_URL,
          isPopup: false,
          loginButton: { color: 'white', type: 1, height: '47' },
      });
      naverLogin.init();
  };

  const getNaverToken = () => {
      if (!location.hash) return;
      const token = location.hash.split('=')[1].split('&')[0];
      console.log(token);
  };

  useEffect(() => {
      initializeNaverLogin();
      getNaverToken();
  }, []);
}*/

export default NaverLogin;