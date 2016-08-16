<template>
  <div class="body">
    <div class="container">
      <div class="menu">
        <div class="item">
          <h1>Home</h1>
        </div>
        <div class="item right logout" @click="logout()">
          logout
        </div>
      </div>

      <div class="cards" v-for="item in [1,2,3,4]">
        <div v-for="item in list(3)" class="card">
          <img src={{"/static/img/"+((Math.floor(Math.random()*10)%3)+1)+".jpg"}} alt="" />
          <div class="text">
            <h2>Startup Quete</h2>
            {{item.text}}
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      // note: changing this line won't causes changes
      // with hot-reload because the reloaded component
      // preserves its current state and we are modifying
      // its initial state.
      msg: 'Hello World!'
    }
  },
  methods: {
    logout () {
      localStorage.setItem('isAuthen','')
      this.$router.go('/login')
    },
    list (offset) {
      var listitem = []
      for(var i = 1; i <= 4; i++) {
        var text = ""
        switch ((i+offset)%3) {
          case 0:
            text = "Sometimes when you innovate, you make mistakes. It is best to admit them quickly, and get on with improving your other innovations."
            break;
          case 1:
            text = "The most important thing is to enjoy your life - to be happy - it's all that matters."
            break;
          case 2:
            text = "Life isn't about finding yourself. Life is about creating yourself."
            break;
          default:
            text = "The purpose of our lives is to be happy."

        }
        listitem.push({index: i, text:text})
      }
      return listitem
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.menu{
  width: 100%;
  overflow: hidden;
  margin-bottom: 20px;
  border-bottom: 1px solid #999;
  padding-bottom: 5px;
}
.item {
  float: left;
}
.right{
  float: right !important;
}

.logout{
  background: #f17878;
  padding: 10px;
  color: #FFF;
  font-size: 24px;
  font-family: fantasy;
  cursor: pointer;
}
h1 {
  color: #42b983;
  font-family: fantasy;
  margin: 0px;
}

.cards{
  overflow: hidden;
  width: 250px;
  float: left;
}
.card{
  width: 240px;
  margin: 5px;
  background: #FFF;
  min-height: 200px;
  overflow:hidden;
  float: left;
  -webkit-box-shadow: 1px 4px 6px 0px rgba(179,179,179,0.6);
  -moz-box-shadow: 1px 4px 6px 0px rgba(179,179,179,0.6);
  box-shadow: 1px 4px 6px 0px rgba(179,179,179,0.6);
  -webkit-border-radius: 3px;
  -moz-border-radius: 3px;
  border-radius: 3px;
}
.text{
  padding: 10px;
  font-family: sans-serif;
  text-align:center;
  font-weight: 500;
  color: #444;
}
.card img{
  max-width: 100%;
  min-width: 100%;
}
</style>
