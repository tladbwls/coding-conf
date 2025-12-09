import '../CSS/AvatarUploader.scss';
import cloud from '../IMG/Cloud_icon.svg'


function AvatarUploader ({onUpload}) {
  const handleChange = (e) => {
    const file = e.target.files[0];
    onUpload(file);
  }
  return (
    <div className="avatar-uploader">
      <label>Upload Avatar</label>
      <div className="input-box">
        <input
        type="file"
        onChange={handleChange}
        hidden
        />
        <div className='input-box-contents'>
          <div className='img-box'>
            <img src={cloud} alt='cloud-icon' width='30px' height='30px'/>
          </div>
          <span>Drag and drop or cick to upload</span>
        </div>
        
      </div>
      
    </div>
  );
}

export default AvatarUploader;