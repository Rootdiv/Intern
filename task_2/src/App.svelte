<script lang="ts">
  import { onMount } from 'svelte';
  import { getSupportedCurrencies } from './api/getCurrencies';
  import { pairConversion } from './api/pairConversion';

  let currencies: string[] = ['RUB', 'USD'];

  onMount(async () => {
    currencies = await getSupportedCurrencies();
  });

  let topVal: number;
  let botVal: number;
  let selected1 = 'RUB';
  let selected2 = 'USD';

  const handleTop = async () => {
    const conversionRate = await pairConversion(selected1, selected2);
    botVal = topVal * conversionRate;
  };

  const handleBot = async () => {
    const conversionRate = await pairConversion(selected2, selected1);
    topVal = botVal * conversionRate;
  };

  $: handleTop;
  $: handleBot;
  $: selected1;
  $: selected2;
  $: topVal;
  $: botVal;
</script>

<main class="wrapper">
  <header>Конвертор валют</header>
  <div class="currency">
    <select class="size" bind:value={selected1}>
      {#each currencies as currency}
        <option value={currency}>{currency}</option>
      {/each}
    </select>
  </div>
  <input class="size" type="number" bind:value={topVal} on:input={handleTop} />
  <div />
  <input class="size" type="number" bind:value={botVal} on:input={handleBot} />
  <div class="currency">
    <select class="size" bind:value={selected2}>
      {#each currencies as currency}
        <option value={currency}>{currency}</option>
      {/each}
    </select>
  </div>
</main>

<style>
  .wrapper {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    font-size: 18px;
    gap: 15px;
  }
  .currency {
    padding: 10px;
    width: 85px;
  }
  .size {
    font-size: 18px;
    width: 100%;
  }
</style>
