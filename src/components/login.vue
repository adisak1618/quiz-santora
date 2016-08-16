<template>
  <div class="container">
    <div class="segment radius">
      <div class="from">
        <div class="field">
          <h1>LOGIN</h1>
        </div>
        <div class="field">
          <input v-model="email" type="text" name="email" value="">
        </div>
        <div class="field">
          <input v-model="password" type="password" name="password" value="">
        </div>
        <div class="field">
          <h2 class="button" @click="isLogin(email, password)">Login</h2>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import crypto from 'crypto'
export default {
  data () {
    return {
      // note: changing this line won't causes changes
      // with hot-reload because the reloaded component
      // preserves its current state and we are modifying
      // its initial state.
      msg: 'Hello World!',
      email: '',
      password: '',
      user: [{
        email: 'test@gmail.com',
        salt: 'ePL4xHMTok2IRBjY/XdqM7+x15eEHyogJq9qwCR4j799MD4R/uQ59g+ZFKNzwjBe2/+V+QTwHAceZsEgyHFOK+HdisWmDX3rPV6SuQGICzAaFGaPPa7HffTQgksRe/sTtQp344c7ENdwaz94+NsoezOADZlcxlSou0Fd2cnGKDs=',
        hash: 'a0caa8bbd97a870b229f6eca8b6e9e6859f7fed5'
      },
      {
        email: 'test@gmail.com',
        salt: 'ePL4xHMTok2IRBjY/XdqM7+x15eEHyogJq9qwCR4j799MD4R/uQ59g+ZFKNzwjBe2/+V+QTwHAceZsEgyHFOK+HdisWmDX3rPV6SuQGICzAaFGaPPa7HffTQgksRe/sTtQp344c7ENdwaz94+NsoezOADZlcxlSou0Fd2cnGKDs=',
        hash: 'a0caa8bbd97a870b229f6eca8b6e9e6859f7fed5'
      }]
    }
  },
  ready () {


    // console.log("islogin"+islogin)

  },
  methods: {
    hashPwdfn (salt, password) {
      var hmac = crypto.createHmac('sha1', salt);
      return hmac.update(password).digest('hex');
    },
    checkPWD (data, pwd) {
      if (!data) {
        return false;
      }


      var salt = data.salt;
      var password = this.hashPwdfn(salt, '1618');
      console.log(password);
      console.log(data.hash);
      if ((password === data.hash)) {
        return true;
      } else {
        return false;
      }

    },
    isLogin (email, password) {
      this.user.every(item => {
        if(item.email === this.email) {
          if (this.checkPWD(item, password)) {

            console.log(this.$router.go('/'))
            localStorage.setItem('isAuthen','true')
          } else {
          }
          return false
        }else {
          return true
        }
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  color: #42b983;
  font-family:sans-serif;
}
.button{
  background: #4ed24e;
  display: inline-block;
  padding: 10px 20px;
  color: #FFF;
  font-family:sans-serif;
  cursor: pointer;
}
</style>
