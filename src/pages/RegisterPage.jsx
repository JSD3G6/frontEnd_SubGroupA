import BackgroundImage from '../assets/bg-1.png';

function RegisterPage() {
  const backgroundStyle = {
    backgroundImage: `url(${BackgroundImage})`,
    width: '100vw',
    minHeight: '100vh',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  };
  return (
    <div style={backgroundStyle} />

  );
}

export default RegisterPage;
