export default function Post({ post }) {
    return (
        <div className="col-md-6 mb-4">
            <div className="card shadow-sm">
                <div className="card-body">
                    <h5 className="card-title">{post.user}</h5>
                    <p className="card-text">{post.content}</p>
                    <p className="card-text">
                        <small className="text-muted">
                            {new Date(post.timestamp).toLocaleString()}
                        </small>
                    </p>
                </div>
            </div>
        </div>
    );
}
