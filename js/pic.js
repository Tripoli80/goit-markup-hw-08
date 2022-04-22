
Vue.component('blog-post', { 

      props: ['title'],
  template: '<h3>{{ title }}</h3>'

});
Vue.mixin({
  created: function () {
    console.log("Global mixin has been created");
  }
})
new Vue({
    el: "#app"
});
