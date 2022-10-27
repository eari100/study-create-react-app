const Welcome = props => <h1>Hello, {props.name}</h1>

// 사용자 정의 컴포넌트
const element = <Welcome name="킹재욱" />



const formatDate = date => date.toLocaleDateString()

const Avatar = props => <img className="Avatar" src={props.user.avatarUrl} alt={props.user.name} />

const UserInfo = props => (
    <div className="UserInfo">
        <Avatar user={props.user} />
        <div className="UserInfo-name">
            {props.user.name}
        </div>
    </div>
)

const Comment = props => (
    <div className="Comment">
        <UserInfo user={props.author} />
        <div className="Comment-text">
            {props.text}
        </div>
        <div className="Comment-date">
            {formatDate(props.date)}
        </div>
    </div>
)

export default Comment