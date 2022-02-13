const FaceRecognition=({imageURL})=>{
    return (
        <div className='center w-500'>
            <img style={{width:'500px',height:'auto'}} src={imageURL} alt=''></img>
        </div>
    )
}
export default FaceRecognition;