import './cardLibrary.css';

export const CardLibrary = ({ image, tag, title, description, avatar, name, role }) => {
    return (
        <div className="card-library">
            <div className="card-image">
                <img src={image} alt={title} />
                {tag && <span className="card-tag">{tag}</span>}
            </div>
            <div className="card-content">
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
            <div className="card-footer">
                <img className="avatar" src={avatar} alt={name} />
                <div>
                    <strong>{name}</strong>
                    <div className="role">{role}</div>
                </div>
            </div>
        </div>
    );
};
