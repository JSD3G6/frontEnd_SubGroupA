/* eslint-disable jsx-a11y/no-redundant-roles */
import BackgroundImage from '../assets/bg-1.png';
import LogoAuth from '../assets/logo-auth.png';

function RegisterPage() {
  const backgroundStyle = {
    backgroundImage: `url(${BackgroundImage})`,
    width: '100vw',
    minHeight: '100vh',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  };
  return (
    <div className="flex justify-center items-center" style={backgroundStyle}>
      <div className="w-[900px] h-[780px] rounded-[10px] bg-gray-primary px-[100px] flex flex-col">
        <div className="mx-auto text-center pt-8">
          <div className="mb-1">
            <img src={LogoAuth} alt="logo-auth" />
          </div>
          <h3 className="font-thin text-[40px] text-white">Register</h3>
        </div>

        <form className="h-full flex flex-col justify-around ">
          <div className="flex justify-between gap-4">
            <input type="text" placeholder="First name" className="input-primary flex-1" />
            <input type="text" placeholder="Last name" className="input-primary flex-1" />
          </div>
          <input type="text" placeholder="Email" className="input-primary" />
          <input type="password" placeholder="Password" className="input-primary" />
          <input type="password" placeholder="Confirm Password" className="input-primary" />
          <button type="submit" className="btn-primary self-center">Next</button>
        </form>
      </div>
    </div>

  );
}

export default RegisterPage;
