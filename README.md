参考地址：https://segmentfault.com/a/1190000010516935

进度 day11

## 笔记

#### 默认属性，类型检查
```javascript
Header.defaultProps = {
  name: 'Github activity',
}
Header.propTypes = {
  title: PropTypes.string.isRequired,
}
```

#### 模板中的this绑定上下文
```javascript
constructor(props) {
  this.updateInputText = this.updateInputText.bind(this)
}
updateInputText(e) {
  const val = e.target.value
  this.setState({
    inputText: val,
  })
}
render() {
  return (
    <div>
      <input type="text" onChange={this.updateInputText} placeholder="inputtext" />
    </div>
  )
}
```