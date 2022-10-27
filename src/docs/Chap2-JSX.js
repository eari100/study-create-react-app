function formatName(user) {
    return `${user.firstName} ${user.lastName}`
}

const user = {
    firstName: '최',
    lastName: '재욱'
}

const element1 = () => (
    <h1>
        Hello, {formatName(user)}
    </h1>
)

export default element1

const element2 = () => (
    <img src={user.avatarUrl} /> // 태그가 비어있다면 바로 닫아줄 것
)

// 자식을 포함할 수 있음
const element3 = () => (
    <div>
        <h1>Hello!</h1>
        <h2>Good to see you here.</h2>
    </div>
)
