<template>
  <div id="app">
    <div class="container">
      <Header />
      <AddTodo />
      <Todos />
      <Footer />
    </div>
  </div>
</template>

<script>
// import Header from './components/Header';
import Todos from "./components/Todos";
import AddTodo from './components/AddTodo';
import Header from './components/Header';
import Footer from './components/Footer';

export default {
  name: "App",
  components: {
    Todos,
    AddTodo,
    Header,
    Footer,
  },
};
</script>

<style>
body {
  margin: 0;
  background: rgb(240, 235, 224);
  box-sizing: border-box;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.container {
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  background: #fff;
  width: max(45%, 450px);
  margin-top: 50px;
  min-height: 400px;
  border-radius: 6px;
  box-shadow: 2px 3px 10px 0 rgba(0, 0, 0, 0.4);
}

</style>
