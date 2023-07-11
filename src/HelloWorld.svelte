<script>
  import { getGreeting } from "./getGreeting.js";
  import { isString } from "./isString.js";
  import Hi from "./Hi.svelte";
</script>

<p>{getGreeting()}</p>
<p>{isString(undefined)}</p>

<Hi />

<style lang="scss">
  p {
    color: red;
  }
</style>
