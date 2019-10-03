const app = new Vue({
  el: "#app",
  data: {
    query: "",
    searchClient: algoliasearch(
      "ZICQHVY7LL",
      "fe0ee5a0700c07bb6bdcc74ea1901bf1"
    ),
    activeTab: 1
  }
});
