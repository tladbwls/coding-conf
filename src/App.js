import './CSS/reset.css';
import './CSS/App.scss';
import InputField from './Component/InputField';
import AvatarUploader from './Component/AvatarUploader';
import Header from './Component/Header';
import TicketButton from './Component/TicketButton';
import { useState } from 'react';

function App() {
  const [avatar, setAvatar] = useState(null);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [githubUser, setGithubUser] = useState("");

  const handleSubmit = () => {
    console.log("Avatar", avatar);
    console.log("Name", fullName);
    console.log("Email", email);
    console.log("Github", githubUser);
  };

  return (
    <div className="page-wrapper">
      <header className='header'>
        <Header/>
      </header>
      
      <div className='upload-box'>
        <AvatarUploader onUpload={setAvatar}/>
      </div>

      <form className='form-box'>
        {/* Full Name */}
        <InputField
          label="Full Name"
          value={fullName}
          placeholder="Enter your name"
          onChange={(e) => setFullName(e.target.value)}
        />
        {/* Email Address */}
        <InputField
          label="Email Address"
          value={email}
          placeholder="email@example.com"
          onChange={(e) => setEmail(e.target.value)}
        />
        {/* Github Username*/}
        <InputField
          label="Github Username"
          value={githubUser}
          placeholder="@yourgithub"
          onChange={(e) => setGithubUser(e.target.value)}
        />

        <TicketButton text="Generate My Ticket" onClick={handleSubmit}/>
      </form>

    </div>
  );
}

export default App;
