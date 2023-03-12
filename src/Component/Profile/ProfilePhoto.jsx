import img from './picture.jpg'

const ProfilePicture = () => {
    return(
        <div>
            <img 
            className='img'
            src={img}
            alt='Me'
            />
        </div>
    )
}

export default ProfilePicture;