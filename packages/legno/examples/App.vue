<template>
  <div id="app">
    <aside>
      <h1>Legno</h1>
      <nav>
        <ul>
          <li 
            v-for="(route, index) in routes" 
            :key="index">
            <router-link :to="route">
              {{ route.name }}
            </router-link>
          </li>
        </ul>
      </nav>
    </aside>
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
import routes from "./routes"
export default {
  name: "app",
  components: {},
  data() {
    return {
      routes,
    }
  },
}
</script>

<style lang="scss">
#app {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;

  & > aside {
    width: 240px;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    ul {
      margin: 0;
      padding: 0;
      overflow: auto;
    }
  }

  & > main {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 240px;
    overflow-y: auto;
    height: 100%;
  }

  .demo-box {
    padding: 10px 40px;
    .explain {
      padding: 10px 0;
    }
    .console {
      padding: 20px 0;
      font-size: 14px;
    }
  }
}
</style>
