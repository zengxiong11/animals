## 7、发送短信验证码

### 请求URL：
	http://localhost:3000/sendcode

### 示例：
[http://localhost:3000/sendcode?phone=13716962779](http://localhost:3000/sendcode?phone=13716962779)

### 请求方式：
	GET

### 参数类型: query

	|参数		|是否必选 |类型     |说明
	|phone       |Y       |string   |手机号

### 返回示例：
	* 成功:
		{
			"code": 0,
		}
	* 失败:
		{
			"code": 1, 
			"msg": "短信验证码发送失败"
		}


## 8、手机号验证码登陆

### 请求URL：
	http://localhost:3000/login_sms

### 请求方式：
	POST

### 参数类型: 请求体

	|参数		|是否必选 |类型     |说明
	|phone       |Y       |string   |手机号
	|code        |Y       |string   |验证码

### 返回示例：
    * 登陆成功
      {
        "code": 0,
        "data": {
          "_id": "5a9cd9c6ad5b2d34d42b385d",
          "phone": "13716962779"
        }
      }
    * 登陆失败
      {
        "code": 1,
        "msg": "手机号或验证码不正确"
      }

### 9、根据会话获取用户信息

#### 请求URL：
	http://localhost:3000/userinfo

#### 请求方式：
	GET

#### 返回示例：
	* 获取成功
      {
        "code": 0,
        "data": {
          "_id": "5a9cd9c6ad5b2d34d42b385d",
          "phone": "13716962779"
        }
      }
    * 获取失败
      {
        "code": 1,
        "msg": "请先登陆"
      }


### 10、用户登出

#### 请求URL：
	http://localhost:3000/logout

#### 请求方式：
	GET

#### 返回示例：
    {code: 0}
