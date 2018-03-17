day03
1.当组件中设置了@。。。什么就必须要在methods下面定义
2.编写store的目的，为了使用vuex管理组件间共同管理的状态
3. a.流程：写完store之后，在首页中引入数据，首先引入mapState，接着在mounted中
引入this.$store.dispatch('...', ()=>{}),将三个swiper写入到对象中
然后在action中进行调用。注:cb && cb()
   b.通过$store.dispatch()发送了homepage，接着通过v-for展现数据
4.细节处理不够仔细，mock文件创建却没有引入，mapstate是一个对象，引入时却没有加{}
5.v-for属于遍历循环组件，他一般都是给数组或对象指定别名，除此之外还可以使用索引值来指定别名


day04
1.一个swiper-wrapper里面有多个swiper-slide，所以要在swiper-slide中获取数据，v-for
2.设置点击事件变色
mounted：通知action，发送请求，获取数据，这本身是一个生命周期函数的步骤
methods：用于定义函数，绑定事件
  首先设置@click传一个函数，例如：@click=“test(index)”,之后在methods中定义test(index)，在其中找到dom元素下所有的span
  ，在根据索引得到span，将其定义为一个类，如target。之后进行for循环，将点击的样式变成红色，其他的清除。最后设置style样式
  :style="{color:index===0?'red':''}"
3.真值表
  str ''  false
  num 0 NaN false
  boolean false false
  
  undefiend  false
  null  false
4.如果外层是一个对象，则父元素就不要遍历循环，如果是一个数组，那就要遍历循环。v-for  
