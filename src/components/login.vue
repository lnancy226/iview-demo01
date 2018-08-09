<template>
  <div class="content">

    <div style="width: 50%">
      <i-col span="24" class="demo-tabs-style1" style="background: #e3e8ee;padding:16px;">
        <Tabs type="card">
          <Tab-pane label="用户登录">

            <i-form ref="formInline" :model="formInline" :rules="ruleInline">
              <Form-item prop="user">
                <i-input type="text" v-model="formInline.user" placeholder="Username">
                  <Icon type="ios-person-outline" slot="prepend"></Icon>
                </i-input>
              </Form-item>
              <Form-item prop="password">
                <i-input type="password" v-model="formInline.password" placeholder="Password">
                  <Icon type="ios-locked-outline" slot="prepend"></Icon>
                </i-input>
              </Form-item>
              <Form-item>
                <Button type="primary" @click.native="handleSubmit('formInline')"> 登录 </Button>
              </Form-item>
            </i-form>
          </Tab-pane>
        </Tabs>
      </i-col>
    </div>


  </div>
</template>
<script type="text/ecmascript-6">

  export default{
    data(){
      return {
        formInline: {
          user: '',
          password: ''
        },
        ruleInline: {
          user: [
            {required: true, message: '请填写用户名', trigger: 'blur'}
          ],
          password: [
            {required: true, message: '请填写密码', trigger: 'blur'},
            {type: 'string', min: 6, message: '密码长度不能小于6位', trigger: 'blur'}
          ]
        },
      }
    },
    methods: {
      handleSubmit(name) {
        this.$refs[name].validate((valid) => {
          if (valid) {
            // this.$Message.success('提交成功!');
//            localStorage.setItem('id_token', '666888999111000222333')
            // let arr = ['pickUp', 'acquisition', 'module']
            // this.$router.push({path: 'manage'})

            //  this.$http.post('http://10.0.0.24:8100/login', {
            //   username: 'lnancy',
            //   password: '111111'
            // })
            //   .then(function (res) {
            //     console.log(res, '请求成功');
            //     this.$Message.success('提交成功!');
            //     this.$router.push({path: 'manage'})
            //   })
            //   .catch(function (err) {
            //     console.log(err, '请求失败')
            //   });
            // GET请求【获取用户列表】
//            this.$http({
//              method:'get',
////               baseURL:'/api',
//              url:'/admin/user/list',
////              headers:{'Authorization':'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJjcmVhdGUiOjE1MzM1NDQyNzk2OTAsImV4cCI6MTUzNDE0OTA3OSwidXNlcm5hbWUiOiJ3YW5nY2oifQ.bEOoAqmgT1_x8cXgHato_TwxwSEhaco7OJsvaA8mDG4'},
//            })
//                .then(function (res) {
//                  console.log(res,'请求成功');
//                })
//                .catch(function (err) {
//                    console.log(err,'请求失败');
//                })

            //`POST`请求【登录】
//            let registerData = this.$qs.stringify({
//              username: 'wangcj',
//              password: 'wangcj'
//            });
            this.$http({
              method: "POST",
              url: '/login',
              data: {
                username: 'wangcj',
                password: 'wangcj'
              }
            })
              .then(function (res) {
                console.log(res, '请求成功');
              })
              .catch(function (err) {
                console.log(err, '请求失败');
              })
          } else {
            this.$Message.error('表单验证失败!');
          }
        })
      },
    },
    components: {}
  }
</script>
<style scoped>
  body {
    position: relative;
  }

  body {
    height: 100%;
    background: red;
  }

  .content {
    width: 700px;
    margin: 300px auto;
    text-align: center;
    position: relative;
    left: 150px;

  }

  .demo-tabs-style1 > .ivu-tabs-card > .ivu-tabs-content {
    height: 120px;
    margin-top: -16px;

  }

  .demo-tabs-style1 > .ivu-tabs-card > .ivu-tabs-content > .ivu-tabs-tabpane {
    background: #fff;
    padding: 16px;

  }

  .demo-tabs-style1 > .ivu-tabs.ivu-tabs-card > .ivu-tabs-bar .ivu-tabs-tab {
    border-color: transparent;
  }

  .demo-tabs-style1 > .ivu-tabs-card > .ivu-tabs-bar .ivu-tabs-tab-active {
    border-color: #fff;
  }

  .demo-tabs-style1 {
    box-shadow: 0 9px 30px -6px rgba(0, 0, 0, 0.2), 0 18px 20px -10px rgba(0, 0, 0, 0.4), 0 18px 20px -10px rgba(0, 0, 0, 0.4), 0 10px 20px -10px rgba(0, 0, 0, 0.4);
  }
</style>
