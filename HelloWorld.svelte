<script>
  import { getGreeting } from "./getGreeting.js";
  import Hi from "./Hi.svelte";
</script>

<p>{getGreeting()}</p>

<Hi />

<style lang="scss">
  p {
    color: red;
  }
</style>
