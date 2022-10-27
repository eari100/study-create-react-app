const Welcome = props => <h1>Hello, {props.name}</h1>

// 사용자 정의 컴포넌트
const element = <Welcome name="킹재욱" />



const formatDate = date => date.toLocaleDateString()

const Comment = props => (
    <div className="Comment">
        <div className="UserInfo">
            <img className="Avatar"
                src={props.author.avatarUrl}
                alt={props.author.name}
            />
            <div className="UserInfo-name">
                {props.author.name}
            </div>
        </div>
        <div className="Comment-text">
            {props.text}
        </div>
        <div className="Comment-date">
            {formatDate(props.date)}
        </div>
    </div>
)

export default Comment