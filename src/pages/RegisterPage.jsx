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
      <div className="w-[90%] min-w-[360px] lg:max-w-[921px] h-[780px] rounded-[10px] bg-gray-primary   px-[10%] semi-lg:px-[100px] flex flex-col">

        {/* Profile Image */}
        <div className="mx-auto text-center pt-8">
          <div className="mb-1">
            <img src={LogoAuth} alt="logo-auth" />
          </div>
          <h3 className="font-thin text-[40px] text-white">Register</h3>
        </div>

        <form className="h-full py-4 semi-lg:py-8 flex flex-col justify-around ">

          {/* Mobile : FirstName & LastName */}
          <input type="text" placeholder="First name" className="semi-lg:hidden  input-primary" />
          <input type="text" placeholder="Last name" className="semi-lg:hidden  input-primary" />

          {/* Desktop : FirstName & LastName */}
          <div className="hidden semi-lg:flex justify-between gap-8 ">
            <input type="text" placeholder="First name" className="input-primary flex-1" />
            <input type="text" placeholder="Last name" className="input-primary flex-1" />
          </div>

          {/* Another Input */}
          <input type="text" placeholder="Email" className="input-primary" />
          <input type="password" placeholder="Password" className="input-primary" />
          <input type="password" placeholder="Confirm Password" className="input-primary" />
          <button type="submit" className="btn-primary self-center ">Next</button>
        </form>
      </div>
    </div>

  );
}

export default RegisterPage;
