export const CardVideo = ({ image, videoUrl, description, avatar, ytLogo, name, role, buttonColor = "#45453A" }) => {
    return (
        <div className="cardVideo">
            <div className="imageWrapper">
                <img src={image} alt="Thumb do vídeo" className="videoImage" />
                <a href={videoUrl} target="_blank" rel="noopener noreferrer" className="playButton">▶</a>
            </div>
            <div className="videoContent" style={{ backgroundColor: buttonColor }}>
                <div className="youtubeLogo">
                    {ytLogo}
                </div>


                <p className="description">{description}</p>
                <div className="author">
                    <img src={avatar} alt="Avatar" className="avatar" />
                    <div>
                        <p className="name">{name}</p>
                        <p className="role">{role}</p>
                    </div>
                </div>
                <a
                    href={videoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="watchButton"
                >
                    Assistir vídeo →
                </a>
            </div>
        </div>
    );
};
