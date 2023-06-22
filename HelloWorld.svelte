<script>
  import { getGreeting } from "./getGreeting.js";
  import Hi from "./Hi.svelte";
</script>

<p>{getGreeting()}</p>

<Hi />
