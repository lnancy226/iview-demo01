<template>
    <div>
      <v-nav :side-menus='menus'></v-nav>
    <div class="list-content" style="box-shadow: 2px 10px 18px #333333;" >

      <i-menu theme="dark"   :active-name="setActive"  :default-active="onRoutes" @on-select="routeTo">

        <Menu-item name="users">
          <Submenu key="1">
          <template slot="title">
          <Icon type="ios-paper"></Icon>
          内容管理
          </template>
          <Menu-item key="1-1">文章管理</Menu-item>
          <Menu-item key="1-2">评论管理</Menu-item>
          <Menu-item key="1-3">举报管理</Menu-item>
          </Submenu>
        </Menu-item>
        <Menu-item name="setUp">
          <Icon type="chatbubbles"></Icon>
          系统设置
        </Menu-item>
        <Menu-item name="core">
          <Icon type="chatbubbles"></Icon>
          图表统计
        </Menu-item>

      </i-menu>
      </div>
      <div class="table-wrapper">
        <router-view></router-view>

      </div>

      <!--<Row>-->
        <!--<i-col span="8">-->
          <!--<Menu :theme="theme2">-->
            <!--<Submenu key="1">-->
              <!--<template slot="title">-->
                <!--<Icon type="ios-paper"></Icon>-->
                <!--内容管理-->
              <!--</template>-->
              <!--<Menu-item key="1-1">文章管理</Menu-item>-->
              <!--<Menu-item key="1-2">评论管理</Menu-item>-->
              <!--<Menu-item key="1-3">举报管理</Menu-item>-->
            <!--</Submenu>-->
            <!--<Submenu key="2">-->
              <!--<template slot="title">-->
                <!--<Icon type="ios-people"></Icon>-->
                <!--用户管理-->
              <!--</template>-->
              <!--<Menu-item key="2-1">新增用户</Menu-item>-->
              <!--<Menu-item key="2-2">活跃用户</Menu-item>-->
            <!--</Submenu>-->
            <!--<Submenu key="3">-->
              <!--<template slot="title">-->
                <!--<Icon type="stats-bars"></Icon>-->
                <!--统计分析-->
              <!--</template>-->
              <!--<Menu-group title="使用">-->
                <!--<Menu-item key="3-1">新增和启动</Menu-item>-->
                <!--<Menu-item key="3-2">活跃分析</Menu-item>-->
                <!--<Menu-item key="3-3">时段分析</Menu-item>-->
              <!--</Menu-group>-->
              <!--<Menu-group title="留存">-->
                <!--<Menu-item key="3-4">用户留存</Menu-item>-->
                <!--<Menu-item key="3-5">流失用户</Menu-item>-->
              <!--</Menu-group>-->
            <!--</Submenu>-->
          <!--</Menu>-->
        <!--</i-col>-->
      <!--</Row>-->
    </div>
</template>
<script type="text/ecmascript-6">
import navC from '../navChild.vue'
    export default{
        data(){
            return {
              theme2: ' dark',
              menus: [
                {
                  link: 'users',
                  value: '系统影虎',
                }, {
                  link: 'personMenu',
                  value: '人员',
                }
              ],
                columns7: [
              {
                title: '姓名',
                key: 'name',
                render: (h, params) => {
                  return h('div', [
                    h('Icon', {
                      props: {
                        type: 'person'
                      }
                    }),
                    h('strong', params.row.name)
                  ]);
                }
              },
              {
                title: '年龄',
                key: 'type'
              },
              {
                title: '地址',
                key: 'address'
              },
              {
                title: '操作',
                key: 'action',
                width: 150,
                align: 'center',
                render: (h, params) => {
                  return h('div', [
                    h('Button', {
                      props: {
                        type: 'primary',
                        size: 'small'
                      },
                      style: {
                        marginRight: '5px'
                      },
                      on: {
                        click: () => {
                          this.show(params.index)
                        }
                      }
                    }, '查看'),
                    h('Button', {
                      props: {
                        type: 'error',
                        size: 'small'
                      },
                      on: {
                        click: () => {
                          this.remove(params.index)
                        }
                      }
                    }, '删除')
                  ]);
                }
              }
            ],
              data6: []
            }
        },
     computed:{
        onRoutes(){
          return this.$route.path.replace('/','');
        },
        setActive() {
          return this.$route.path.replace('/','');
        }
      },
      methods: {
        routeTo(e) {
          //console.log(e);
          this.$router.push(e);
        },
        show (index) {
          this.$Modal.info({
            title: '用户信息',
            content: `姓名：${this.data6[index].name}<br>年龄：${this.data6[index].age}<br>地址：${this.data6[index].address}`
          })
        },
        remove (index) {
          this.data6.splice(index, 1);
        },
        getpage () {
          var _this = this;
          _this.$http.get("./static/data.json")
            .then(function (rsp) {
              console.log(rsp.data.goods)
              _this.data6=rsp.data.goods
              _this.data6.address=rsp.data.goods[0].foods
            })
            .catch(function (error) {
              console.log(error);
            })
        }
      },
        components: {
          'v-nav':navC
        },
      created(){
        this.getpage();
      }
    }
</script>
<style scoped>
  .list-content{
    position: absolute;
    top:70px;
    left: 0;
    bottom:0;
    background: #1c2438;
    margin-bottom: 10px;
  }
  .table-wrapper{
    position: absolute;
    bottom: 0;
    top: 66px;
    left: -25px;
    min-height: 600px;
    right: 10px;
    margin-bottom: 10px;
    border-radius: 5px;
    background: #fff;
    margin-left: 280px;
    margin-top: 20px;
     /*box-shadow: 0 2px 6px  rgba(0, 0, 0, 0.117647), 1px 0 1px rgba(0, 0, 0, 0.117647), -1px 0 1px rgba(0, 0, 0, 0.117647);*/
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.117647), 1px 0 1px rgba(0, 0, 0, 0.117647), -1px 0 1px rgba(0, 0, 0, 0.117647);
    padding: 10px;

  }
</style>
