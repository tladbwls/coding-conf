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
        <span>Drag and drop or cick to upload</span>
      </div>
      
    </div>
  );
}

export default AvatarUploader;