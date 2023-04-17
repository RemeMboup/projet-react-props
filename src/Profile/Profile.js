function Profile(props){
    return(
        <>
        <div className="info_profile">
            <p>FullName:{props.fullname}</p>
            <p>Bio:{props.bio}</p>
            <p>Profession:{props.profession}</p>
            
        </div>
        <div className="photo">
        <img
            style={{borderRadius:20}}
            src="data:image/jpeg;base64,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"
            alt="Lin Lanying"
            width={100}
            height={100}
        />
        </div>
        <div>
        <h1>Mon nom est : </h1>
            <button style={{color:"blue",borderRadius:20}}  onClick={()=>props.handleName(props.fullname)} >Click Me</button>
        
        </div>
        </>
       
    );

}
export default Profile;